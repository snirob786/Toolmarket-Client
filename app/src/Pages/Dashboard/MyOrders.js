import React, { useEffect, useState } from "react";
import useAllOrders from "../../hooks/useAllOrders";
import useIsAdmin from "../../hooks/useIsAdmin";
import useMyOrders from "../../hooks/useMyOrders";
import Loader from "../../Shared/Loader/Loader";
import Orders from "../../Shared/Orders/Orders";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const MyOrders = () => {
  const [myOrders, reload, setReload] = useMyOrders();
  const [allOrders, allReload, setAllReload, loading] = useAllOrders();
  const [admin, adminLoading] = useIsAdmin();

  if (adminLoading || loading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      {admin ? (
        <>
          <SectionTitle title="All Orders" isAlignment="left"></SectionTitle>
          <Orders
            orders={allOrders}
            reload={allReload}
            setReload={setAllReload}
          ></Orders>
        </>
      ) : (
        <>
          <SectionTitle title="My Orders" isAlignment="left"></SectionTitle>
          <Orders
            orders={myOrders}
            reload={reload}
            setReload={setReload}
          ></Orders>
        </>
      )}
    </div>
  );
};

export default MyOrders;
