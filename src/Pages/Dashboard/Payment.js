import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useCurrentUser from "../../hooks/useCurrentUser";
import Loader from "../../Shared/Loader/Loader";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState([]);
  const [isLoadingNew, setIsLoadingNew] = useState(true);
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [shipmentStatus, setShipmentStatus] = useState("");
  const [currentUser] = useCurrentUser();
  const stripePromise = loadStripe(
    "pk_test_51KLooKKr0u2PJAqoFyd9Mjb9ZQKIyAaxiqel1AsmLazzAvihInkBMUFeimMYyi2fDkjUV7uYIq9jXzmuMFymrOOz00lYRVv4U0"
  );
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/order/${orderId}`)
      .then((res) => res.json())
      .then((result) => {
        setOrder(result);
        setProductId(result.productId);
        setPaymentStatus(result.paymentStatus);
        setShipmentStatus(result.shipmentStatus);
        setIsLoadingNew(false);
      });
  }, [orderId]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/tool/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setProduct(result);
      });
  }, [productId]);

  if (isLoadingNew) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="card w-3/4 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <h1 className="text-4xl font-bold mb-5">
            Hello {currentUser.userName},
          </h1>
          <h2 className="card-title">Payment for {product.name}</h2>
          <p className="py-1 mt-2">
            <strong>Order Amount: </strong>
            {order.productAmount}
          </p>
          <p className="py-1">
            <strong>Total Price: </strong>
            {order.paymentAmount}
          </p>
          <p className="py-1">
            <strong>Payment Status: </strong>
            {order.paymentStatus}
          </p>
          <p className="py-1">
            <strong>Shipment Status: </strong>
            {order.shipmentStatus}
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-3/4 shadow-2xl bg-base-100 mx-auto mt-10">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              order={order}
              paymentStatus={paymentStatus}
              setPaymentStatus={setPaymentStatus}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
