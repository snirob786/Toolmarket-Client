import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";
import Loader from "../Shared/Loader/Loader";

const useMyOrders = () => {
  const [user, isLoading] = useAuthState(auth);
  const uid = user.uid;
  const [myOrders, setMyOrders] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    fetch(`https://shrouded-anchorage-66957.herokuapp.com/myorders/${uid}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setMyOrders(result);
        setReload(false);
      });
  }, [user, reload]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return [myOrders, reload, setReload];
};

export default useMyOrders;
