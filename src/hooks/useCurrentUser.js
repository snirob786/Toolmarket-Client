import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loader from "../Shared/Loader/Loader";

const useCurrentUser = () => {
  const [user, isLoading] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState([]);
  const uid = user.uid;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${uid}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          navigate(from, { replace: true });
        }
        return res.json();
      })
      .then((result) => {
        setCurrentUser(result);
      });
  }, [user]);

  if (isLoading) {
    return <Loader></Loader>;
  }
  return [currentUser];
};

export default useCurrentUser;
