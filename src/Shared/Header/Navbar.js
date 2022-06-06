import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loader from "../Loader/Loader";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [imgurl, setImgurl] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName);
      setImgurl(user.photoURL);
    }
  }, [user]);

  if (loading) {
    return <Loader></Loader>;
  }

  const signout = () => {
    signOut(auth);
    navigate("/");
  };

  const navbarContainer = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/portfolio">My Portfolio</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {user && (
        <li>
          {user && (
            <div className="flex gap-1">
              {imgurl && (
                <img src={imgurl} alt="" className="rounded-full w-8" />
              )}
              <p className="font-medium">{name}</p>
            </div>
          )}
          {user && (
            <ul className="p-2 w-full">
              <li>
                <button className="btn btn-ghost bg-red-500" onClick={signout}>
                  Sign out
                </button>
              </li>
            </ul>
          )}
        </li>
      )}
      {!user && (
        <li>
          {!user && <Link to="/login">Login</Link>}
          {!user && (
            <ul className="p-2">
              <li>
                <Link to="register">Register</Link>
              </li>
            </ul>
          )}
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 justify-between w-3/4 mx-auto">
      <div className="navbar-start w-full">
        <div className="dropdown w-2/3">
          <label tabIndex="0" className="btn btn-ghost lg:hidden w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarContainer}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          Tool Market
        </Link>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary btn-sm drawer-button lg:hidden"
        >
          Open Sidebar
        </label>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navbarContainer}</ul>
      </div>
    </div>
  );
};

export default Navbar;
