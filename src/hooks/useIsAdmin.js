import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loader from "../Shared/Loader/Loader";

const useIsAdmin = () => {
  const [user, isLoading] = useAuthState(auth);
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const uid = user.uid;
    if (uid) {
      fetch(`https://shrouded-anchorage-66957.herokuapp.com/admin/${uid}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          setAdmin(result);
          setAdminLoading(false);
        });
    }
  }, [user]);

  if (isLoading) {
    return <Loader></Loader>;
  }
  return [admin, adminLoading];
};

export default useIsAdmin;
