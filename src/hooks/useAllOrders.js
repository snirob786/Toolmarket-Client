import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";
import Loader from "../Shared/Loader/Loader";

const useAllOrders = () => {
  const [user, isLoading] = useAuthState(auth);
  const uid = user.uid;
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allReload, setAllReload] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/allorders/${uid}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setAllOrders(result);
        setLoading(false);
        setAllReload(false);
      });
  }, [user, allReload]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return [allOrders, allReload, setAllReload, loading];
};

export default useAllOrders;
