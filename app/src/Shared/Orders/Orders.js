import React, { useState } from "react";
import useIsAdmin from "../../hooks/useIsAdmin";
import DeleteOrder from "./DeleteOrder";
import OrderDetails from "./OrderDetails";
import ShipmentRequest from "./ShipmentRequest";

const Orders = ({ orders, reload, setReload }) => {
  const [admin, adminLoading] = useIsAdmin();
  const [selectedItem, setSelectedItem] = useState([]);
  const [shipmentRequest, setShipmentRequest] = useState(false);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Amount</th>
              <th>Total Price</th>
              <th>Payment Status</th>
              <th>Shipment Status</th>
              <th></th>
              {admin !== "admin" && <th></th>}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <>
                <OrderDetails
                  key={index + 1 * 2}
                  index={index + 1}
                  order={order}
                  setSelectedItem={setSelectedItem}
                  setShipmentRequest={setShipmentRequest}
                ></OrderDetails>
                <DeleteOrder
                  key={index}
                  order={order}
                  selectedItem={selectedItem}
                  setReload={setReload}
                ></DeleteOrder>
                <ShipmentRequest
                  key={index + 1 * 5}
                  index={index + 1}
                  order={order}
                  selectedItem={selectedItem}
                  setReload={setReload}
                  setShipmentRequest={setShipmentRequest}
                  shipmentRequestHandler={shipmentRequest}
                ></ShipmentRequest>
              </>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Amount</th>
              <th>Total Price</th>
              <th>Payment Status</th>
              <th>Shipment Status</th>
              <th></th>
              {admin !== "admin" && <th></th>}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Orders;
