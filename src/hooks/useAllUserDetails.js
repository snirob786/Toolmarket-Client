import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loader from "../Shared/Loader/Loader";

const useAllUserDetails = () => {
  const [users, setUsers] = useState([]);
  const [user, isLoading] = useAuthState(auth);
  const uid = user.uid;
  useEffect(() => {
    fetch(`https://shrouded-anchorage-66957.herokuapp.com/users/${uid}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setUsers(result);
      });
  }, [user]);
  if (isLoading) {
    return <Loader></Loader>;
  }
  return [users];
};

export default useAllUserDetails;
