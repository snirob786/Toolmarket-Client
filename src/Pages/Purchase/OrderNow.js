import React, { useEffect, useState } from "react";
import Loader from "../../Shared/Loader/Loader";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const OrderNow = ({ tool, toolId, refetch }) => {
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userDistrict, setUserDistrict] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [isLoadData, setIsLoadData] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [user, isUserLoading] = useAuthState(auth);
  const uid = user.uid;
  const { register, handleSubmit } = useForm();
  const [orderDetails, setOrderDetails] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (update) {
      fetch("https://shrouded-anchorage-66957.herokuapp.com/tools", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            refetch();
            setUpdate(false);
          }
        });
    }
  }, [orderDetails, update]);

  if (isUserLoading) {
    return <Loader></Loader>;
  }
  const { _id, name, image, shortDesc, price, minQuan, availableQuan } = tool;

  const orderPlace = (data) => {
    const oderDetails = {
      productId: _id,
      productName: name,
      buyerId: uid,
      buyerName: user?.displayName,
      productAmount: data.quantity,
      paymentAmount: price * data.quantity,
      paymentStatus: "unpaid",
      shipmentStatus: "pending",
    };
    setOrderDetails(oderDetails);

    fetch("https://shrouded-anchorage-66957.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(oderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUpdate(true);
          toast.success(`Your order is placed.`);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(orderPlace)} className="p-5">
        <label htmlFor="quantity" className="text-lg font-normal">
          Order Amount
        </label>
        <div className="flex mt-1">
          <input
            id="quantity"
            type="number"
            placeholder="Order Quantity"
            min={minQuan}
            max={availableQuan}
            value={orderQuantity}
            className="w-full border-y border-l px-3 rounded-l"
            {...register("quantity", {
              required: true,
            })}
            onChange={(e) => setOrderQuantity(e.target.value)}
          />

          <input
            className="btn btn-success ms-2 rounded-r rounded-l-none"
            type="submit"
            value="Order Now"
          />
        </div>
      </form>
    </div>
  );
};

export default OrderNow;
