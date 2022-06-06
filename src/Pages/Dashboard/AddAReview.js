import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import useCurrentUser from "../../hooks/useCurrentUser";
import { useForm } from "react-hook-form";
import useToken from "../../hooks/useToken";
import { toast, ToastContainer } from "react-toastify";
const AddAReview = () => {
  const [currentUser] = useCurrentUser();
  const { userId, userName } = currentUser;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const review = {
      name: userName,
      review: data.review,
      rating: data.rating,
    };
    if (data.review) {
      fetch(`https://shrouded-anchorage-66957.herokuapp.com/review`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Your review added successfully.");
          }
        });
    }
  };
  return (
    <div className="w-full pl-10">
      <SectionTitle title="Add Review" isAlignment="left"></SectionTitle>
      <div className="w-full flex justify-center items-center">
        <div className="w-3/4 mr-auto card bg-base-100 shadow-xl">
          <div className="card-body px-0 w-3/4 mx-auto">
            <div className="w-full flex">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col"
              >
                <input
                  type="textarea"
                  placeholder="Review"
                  className="input w-full mt-3 border border-gray-300"
                  {...register("review")}
                />

                <input
                  type="number"
                  placeholder="Rating"
                  min="1"
                  max="5"
                  className="input w-full mt-3 border border-gray-300"
                  value="5"
                  {...register("rating")}
                />

                <input
                  type="submit"
                  className="w-full btn btn-success text-white font-bold text-lg uppercase mt-3 py-2 rounded"
                  value="Add Review"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAReview;
