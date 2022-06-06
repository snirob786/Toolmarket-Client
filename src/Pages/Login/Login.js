import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [loggedUser, loggedLoading, loggedError] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [token] = useToken(gUser || user);
  let errorMessage;

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  if (error) {
    if (error.code === "auth/user-not-found") {
      errorMessage = "You are not registered yet. Please create an account";
    }
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl justify-center">Login</h2>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col"
            >
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
              {loading || gloading ? (
                <button className="btn loading w-full mt-3 btn-accent">
                  loading
                </button>
              ) : (
                <input
                  type="submit"
                  className="w-full btn btn-accent text-white uppercase font-light mt-3 py-2 rounded"
                />
              )}
            </form>
            {errorMessage && (
              <p className="text-red-500 pt-2 font-medium max-w-full ">
                {errorMessage}
              </p>
            )}
          </div>
          <div>
            <p className="text-md text-center">
              New to Doctors Portal?
              <Link className="text-secondary ml-1" to="/register">
                Create new account
              </Link>
            </p>
          </div>
          <div className="social-login">
            <button
              className="w-full btn bg-base-100 text-accent border border-gray-300 hover:text-white"
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

export default Login;
