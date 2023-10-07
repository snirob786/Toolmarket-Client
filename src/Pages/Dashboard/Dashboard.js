import React from "react";
import { Link, Outlet } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Dashboard = () => {
  const [currentUser] = useCurrentUser();
  const { role } = currentUser;
  return (
    <div className="w-3/4 mx-auto">
      <SectionTitle title="Dashboard"></SectionTitle>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  justify-start">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {role !== "admin" && (
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
            )}
            {role !== "admin" && (
              <li>
                <Link to="/dashboard/addreview">Add Review</Link>
              </li>
            )}
            {role === "admin" && (
              <li>
                <Link to="/dashboard">All Orders</Link>
              </li>
            )}
            <li>
              <Link to="/dashboard/myprofile">Profile</Link>
            </li>
            {role === "admin" && (
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
            )}
            {role === "admin" && (
              <li>
                <Link to="/dashboard/manageproducts">Manage Products</Link>
              </li>
            )}
            {role === "admin" && (
              <li>
                <Link to="/dashboard/addproduct">Add Product</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
