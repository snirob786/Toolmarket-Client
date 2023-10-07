import React, { useEffect, useState } from "react";
import useCurrentUser from "../../hooks/useCurrentUser";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const MyProfile = () => {
  const [userFullName, setUserFullName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userDegree, setUserDegree] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [userInstitute, setUserInstitute] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userDistrict, setUserDistrict] = useState("");
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setUserFullName(userName);
    setUserPhoneNumber(phoneNumber);
    setUserDegree(degree);
    setUserSubject(subject);
    setUserInstitute(institute);
    setUserCity(city);
    setUserDistrict(district);
  }, [currentUser]);

  const onSubmit = async (data) => {
    const userDetails = {
      userName: data.name || userName,
      phoneNumber: data.phoneNumber || phoneNumber,
      degree: data.degree || degree,
      subject: data.subject || subject,
      institute: data.institute || institute,
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
          if (data.modifiedCount > 0) {
            toast.success("Your data updated successfully.");
          }
        });
    }
  };

  return (
    <div className="w-full pl-10">
      <SectionTitle title="Your Profile" isAlignment="left"></SectionTitle>
      <div className="w-full flex justify-center items-center">
        <div className="w-full lg:w-3/4 mr-auto card bg-base-100 shadow-xl">
          <div className="card-body px-0 w-3/4 mx-auto">
            <div className="w-full flex">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="input w-full mt-3 border border-gray-300"
                  value={userFullName}
                  {...register("name")}
                  onChange={(e) => setUserFullName(e.target.value)}
                />
                {errors.name?.type === "required" && (
                  <label className="label">
                    <span className="text-red-500">{errors.name.message}</span>
                  </label>
                )}

                <input
                  type="email"
                  value={userEmail}
                  className="input w-full mt-3 border border-gray-300"
                  {...register("email")}
                  disabled
                />
                <input
                  type="phone"
                  value={userPhoneNumber}
                  className="input w-full mt-3 border border-gray-300"
                  {...register("phoneNumber")}
                  onChange={(e) => setUserPhoneNumber(e.target.value)}
                />

                <h4 className="text-md mt-5">Education Details</h4>
                <input
                  type="text"
                  placeholder="Institute Name"
                  className="input w-full border border-gray-300"
                  value={userInstitute}
                  {...register("institute")}
                  onChange={(e) => setUserInstitute(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={userDegree}
                  className="input w-full mt-3 border border-gray-300"
                  {...register("degree")}
                  onChange={(e) => setUserDegree(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Subject"
                  value={userSubject}
                  className="input w-full mt-3 border border-gray-300"
                  {...register("subject")}
                  onChange={(e) => setUserSubject(e.target.value)}
                />
                <h4 className="text-md mt-5">Address Details</h4>
                <input
                  type="text"
                  placeholder="City"
                  className="input w-full border border-gray-300"
                  value={userCity}
                  {...register("city")}
                  onChange={(e) => setUserCity(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="District"
                  value={userDistrict}
                  className="input w-full mt-3 border border-gray-300"
                  {...register("district")}
                  onChange={(e) => setUserDistrict(e.target.value)}
                />

                <input
                  type="submit"
                  className="w-full btn btn-success text-white font-bold text-lg uppercase mt-3 py-2 rounded"
                  value="Save"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyProfile;
