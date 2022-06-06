import { faL } from "@fortawesome/free-solid-svg-icons";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../Shared/Loader/Loader";

const CheckoutForm = ({ order, paymentStatus, setPaymentStatus }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { _id: orderId, paymentAmount } = order;

  useEffect(() => {
    fetch(
      "https://shrouded-anchorage-66957.herokuapp.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price: paymentAmount }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [paymentAmount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setSuccess("");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: order.buyerName,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats! Your payment is completed.");

      const payment = {
        transactionId: paymentIntent.id,
      };

      fetch(
        `https://shrouded-anchorage-66957.herokuapp.com/order/${order._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          toast.success("Congrats! Your payment is completed.");
          setPaymentStatus("paid");
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-5 btn-success"
          type="submit"
          disabled={
            !stripe || !clientSecret || success || paymentStatus === "paid"
          }
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {paymentStatus === "paid" && (
        <div>
          <p className="text-green-500">
            Congrats, your payment have already completed the payment.
          </p>
          <p className="">
            Your transactionId is:{" "}
            <span className="text-blue-500">{order.transactionId}</span>
          </p>
          <Link to="/dashboard" className="btn btn-sm mt-3 btn-success">
            Check Your Orders
          </Link>
        </div>
      )}
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p className="">
            Your transactionId is:{" "}
            <span className="text-blue-500">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
