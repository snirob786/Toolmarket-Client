import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const SubscribeUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.subscriptionEmail) {
      toast.success(`${data.subscriptionEmail} has successuflly subscribed.`);
    }
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="w-4/5 mx-auto mb-10">
        <SectionTitle title="Subscribe Now"></SectionTitle>
        <div className="w-4/5 mx-auto">
          <div className="card-body px-0 w-3/4 mx-auto">
            <div className="w-full flex">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input w-full mt-3 border border-gray-300 rounded-r-none"
                  {...register("subscriptionEmail")}
                />

                <input
                  type="submit"
                  className="w-1/5 btn btn-primary font-bold text-lg uppercase mt-3 py-2 rounded-l-none"
                  value="Subscribe Now"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeUs;
