import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useIsAdmin from "../../hooks/useIsAdmin";
import DeleteOrder from "./DeleteOrder";

const OrderDetails = ({
  order,
  index,
  setSelectedItem,
  setShipmentRequest,
}) => {
  const [admin, adminLoading] = useIsAdmin();
  const navigate = useNavigate();
  const location = useLocation();
  const paynow = () => {
    const url = `/dashboard/payment/${order._id}`;
    navigate(url, { replace: true });
  };
  const shipnow = () => {
    setShipmentRequest(true);
    setSelectedItem(order);
  };

  const handleSelected = () => {
    setSelectedItem(order);
  };

  return (
    <tr>
      <th>{index}</th>
      <td>{order.productName}</td>
      <td>{order.productAmount}</td>
      <td>{order.paymentAmount}</td>
      <td>{order.paymentStatus}</td>
      <td>{order.shipmentStatus}</td>
      <td>
        {(!admin && order.paymentStatus === "unpaid" && !adminLoading) ?
          <button className="btn btn-xs" onClick={paynow}>
            Pay Now
          </button> : null
        }

        {
          (admin && order.paymentStatus === "unpaid" && !adminLoading) ?
            <label
              htmlFor="deleteTool"
              className="btn btn-xs modal-button bg-red-500"
              onClick={handleSelected}
            >
              Cancel
            </label> : null
        }

        {
          (admin === true &&
            order.paymentStatus === "paid" &&
            order.shipmentStatus === "pending") ?
            <label
              htmlFor="shipmentRequest"
              className="btn btn-xs modal-button bg-accent"
              onClick={shipnow}
            >
              Ship Now
            </label> : null
        }
        {
          (admin === false && order.paymentStatus === "unpaid") ?
            <label
              htmlFor="deleteTool"
              className="btn btn-xs modal-button bg-red-500"
              onClick={handleSelected}
            >
              Cancel
            </label> : null
        }
      </td>
    </tr>
  );
};

export default OrderDetails;
<h2>Order details</h2>;
