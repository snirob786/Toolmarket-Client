import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useCurrentUser from "../../hooks/useCurrentUser";

const BillingInfo = () => {
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userDistrict, setUserDistrict] = useState("");
  const { register, handleSubmit } = useForm();
  const [currentUser] = useCurrentUser();
  const { userId, phoneNumber, city, district } = currentUser;

  useEffect(() => {
    setUserPhoneNumber(phoneNumber);
    setUserCity(city);
    setUserDistrict(district);
  }, [currentUser]);

  const onSubmit = async (data) => {
    const userDetails = {
      phoneNumber: data.phoneNumber || phoneNumber,
      city: data.city || city,
      district: data.district || district,
    };

    if (userId) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("Your billing information updated successfully.");
          }
        });
    }
  };

  return (
    <div>
      <div className="w-full pl-5">
        <h3 className="text-xl font-semibold">Your Billing Information</h3>
        <div className="w-full flex justify-center items-center">
          <div className="w-full card bg-base-100 shadow-xl">
            <div className="card-body px-0 w-3/4 mx-auto">
              <div className="w-full flex">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full flex flex-col"
                >
                  {currentUser && (
                    <>
                      <label className="block mt-3">
                        <span className="block text-sm font-medium text-slate-700">
                          Phone Number
                        </span>
                        <input
                          type="phone"
                          className="input w-full mt-3 border border-gray-300"
                          {...register("phoneNumber", {
                            required: true,
                          })}
                          value={userPhoneNumber}
                          placeholder="Your Phone Number"
                          onChange={(e) => setUserPhoneNumber(e.target.value)}
                        />
                      </label>

                      <label className="block mt-3">
                        <span className="block text-sm font-medium text-slate-700">
                          City
                        </span>
                        <input
                          type="text"
                          className="input w-full mt-3 border border-gray-300"
                          {...register("city", {
                            required: true,
                          })}
                          value={userCity}
                          placeholder="Your City"
                          onChange={(e) => setUserCity(e.target.value)}
                        />
                      </label>

                      <label className="block mt-3">
                        <span className="block text-sm font-medium text-slate-700">
                          District
                        </span>
                        <input
                          id="dis"
                          type="text"
                          className="input w-full mt-1 border border-gray-300"
                          value={userDistrict}
                          {...register("district", {
                            required: true,
                          })}
                          placeholder="Your District"
                          onChange={(e) => setUserDistrict(e.target.value)}
                        />
                      </label>
                    </>
                  )}

                  <input
                    type="submit"
                    className="w-full btn btn-success text-white font-bold text-lg uppercase mt-3 py-2 rounded"
                    value="Update Your Information"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BillingInfo;
