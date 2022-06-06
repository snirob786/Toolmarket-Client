import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const User = ({ user, index }) => {
  const { userId, userImageUrl, userName, userEmail, phoneNumber, role } = user;
  const [isClicked, setIsClicked] = useState(false);
  const makeAdmin = () => {
    fetch(
      `https://shrouded-anchorage-66957.herokuapp.com/user/admin/${userId}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setIsClicked(true);
        toast.success(`${userName} become an admin`);
      });
  };
  return (
    <tr>
      <th>{index}</th>
      <td>
        <img className="w-2/6 border rounded" src={userImageUrl} alt="" />
      </td>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>{phoneNumber}</td>
      <td>
        {role !== "admin" && !isClicked && (
          <button className="btn btn-xs" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
        <ToastContainer></ToastContainer>
      </td>
    </tr>
  );
};

export default User;
