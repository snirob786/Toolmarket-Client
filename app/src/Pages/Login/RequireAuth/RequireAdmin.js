import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import useIsAdmin from "../../../hooks/useIsAdmin";
import Header from "../../../Shared/Header/Header";
import Loader from "../../../Shared/Loader/Loader";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useIsAdmin();
  const location = useLocation();

  if (loading || adminLoading) {
    return <Loader></Loader>;
  }

  if (admin === false) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;
