import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const Register = () => {
  const [name, setName] = useState("");
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateErrror] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [token] = useToken(gUser || user);

  const onSubmit = async (data) => {
    setName(data.name);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    // navigate(from, { replace: true });
  };

  let signupError;
  if (error) {
    signupError = <p className="text-red-500">{error.message}</p>;
  }

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card lg:w-1/4 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl justify-center">Sign Up</h2>
          <div className="w-full flex">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col"
            >
              <input
                type="text"
                placeholder="Name"
                className="input w-full mt-3 border border-gray-300"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              {errors.name?.type === "required" && (
                <label className="label">
                  <span className="text-red-500">{errors.name.message}</span>
                </label>
              )}
              <input
                type="email"
                placeholder="Email"
                className="input w-full mt-3 border border-gray-300"
                {...register("email", { required: true })}
              />
              <input
                type="password"
                placeholder="Password"
                className="input w-full mt-3 border border-gray-300"
                {...register("password")}
              />

              {errors.email && (
                <p className="text-red-500">This field is required</p>
              )}
              {signupError}

              {loading ? (
                <button className="btn loading w-full mt-3 btn-accent">
                  loading
                </button>
              ) : (
                <input
                  type="submit"
                  className="w-full btn btn-accent text-white uppercase font-light mt-3 py-2 rounded"
                  value="Sign Up"
                />
              )}
            </form>
          </div>
          <div>
            <p className="text-md text-center">
              Already an user?
              <Link className="text-secondary ml-1" to="/login">
                Login
              </Link>
            </p>
          </div>
          <div className="social-login">
            <button
              className={`w-full btn bg-base-100 text-accent border border-gray-300 hover:text-white ${
                gLoading && "loading"
              }`}
              onClick={() => signInWithGoogle()}
            >
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
