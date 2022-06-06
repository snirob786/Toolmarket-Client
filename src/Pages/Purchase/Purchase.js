import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useToolDetails from "../../hooks/useToolDetails";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Loader from "../../Shared/Loader/Loader";
import { useForm } from "react-hook-form";
import useIsAccessToken from "../../hooks/useIsAccessToken";
import useCurrentUser from "../../hooks/useCurrentUser";
import { toast, ToastContainer } from "react-toastify";
import OrderNow from "./OrderNow";
import BillingInfo from "./BillingInfo";

const Purchase = () => {
  const { id } = useParams();
  let [tool, isLoading, refetch] = useToolDetails(id);
  const { register, handleSubmit } = useForm();
  const [latestToolQuantity, setLatestToolQuantity] = useState(0);
  const [currentUser] = useCurrentUser();
  const {
    userId,
    userName,
    userEmail,
    phoneNumber,
    degree,
    subject,
    institute,
    city,
    district,
  } = currentUser;

  useIsAccessToken();

  if (isLoading) {
    return <Loader></Loader>;
  }
  const { _id, name, image, shortDesc, price, minQuan, availableQuan } = tool;

  return (
    <div className="w-4/5 mx-auto py-10 border border-slate-200 rounded px-5 my-3">
      <SectionTitle title="Purchase Your Product"></SectionTitle>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure className="p-3 w-2/5 mx-auto">
              <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <strong>Name:</strong>
                {name}
              </h2>
              <p>
                <strong>Description: </strong>
                {shortDesc}
              </p>
              <p className="text-xl">
                <strong>Price: </strong>
                {price}
              </p>
              <p>
                <strong>Minimum Quantity: </strong>
                {minQuan}
              </p>
              <p>
                <strong>Available Quantity: </strong>
                {availableQuan}
              </p>
            </div>
          </div>
        </div>
        <div>
          <OrderNow tool={tool} refetch={refetch} toolId={id}></OrderNow>
          <BillingInfo></BillingInfo>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Purchase;
