import React from "react";
import useAllUserDetails from "../../hooks/useAllUserDetails";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import User from "../../Shared/User/User";

const AllUser = () => {
  const [users] = useAllUserDetails();
  return (
    <div>
      <SectionTitle title="All Users" isAlignment="left"></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <User key={user._id} index={index + 1} user={user}></User>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
