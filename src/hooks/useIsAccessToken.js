import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useIsAccessToken = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (!accessToken) {
      signOut(auth);
      navigate("/login", { replace: true });
    }
  }, [accessToken]);
};

export default useIsAccessToken;
