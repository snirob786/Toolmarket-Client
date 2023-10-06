import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const uId = user?.user?.uid;
    const name = user?.user?.displayName;
    const email = user?.user?.email || user?._tokenResponse?.email;
    const phoneNumber = user?.user?.phoneNumber;
    const photoURL = user?.user?.photoURL;
    const currentUser = {
      userId: uId,
      userName: name,
      userEmail: email,
      phoneNumber: phoneNumber,
      userImageUrl: photoURL,
    };
    if (uId) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${uId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          setToken(data.token);
          localStorage.setItem("accessToken", data.token);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
