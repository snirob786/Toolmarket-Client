import { tr } from "date-fns/locale";
import React from "react";
import { toast } from "react-toastify";

const ShipmentRequest = ({
  selectedItem,
  setReload,
  shipmentRequestHandler,
  setShipmentRequest
}) => {
  const shipmentRequest = () => {
    if (selectedItem) {
      const shipment = {
        shipmentStatus: "shipped",
      };
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/shipping/${selectedItem._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(shipment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setReload(true);
          setShipmentRequest(false)
          toast.success(
            `Congrats! Your have successfully shipped the Order : ${selectedItem._id}.`
          );
        });
    }
  };
  return (
    <>
      <input type="checkbox" id="shipmentRequest" className="modal-toggle" />
      <label htmlFor="shipmentRequest" className=" w-full modal cursor-pointer">
        <label className="modal-box relative" htmlFor="shipmentRequest">
          <h3 className="text-lg font-bold">Do you want to ship this order?</h3>
          <p className="py-1">
            <strong>Product Name: </strong>
            {selectedItem.productName}
          </p>
          <p className="py-1">
            <strong>Product Amount: </strong>
            {selectedItem.productAmount}
          </p>
          <p className="py-1">
            <strong>Total Price: </strong>
            {selectedItem.paymentAmount}
          </p>
          <p className="py-1 bg-green-300">
            <strong>Payment Status: </strong>
            {selectedItem.paymentStatus}
          </p>
          <p className="py-1 pl-2">
            <strong>Shipment Status: </strong>
            {selectedItem.shipmentStatus}
          </p>
          <div className="mt-3 flex justify-end gap-3 modal-action">
            <label
              htmlFor="shipmentRequest   "
              className="btn btn-sm bg-green-500 border-0 text-accent hover:text-white hover:font-thin" onClick={shipmentRequest}
            >
              Confirm
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default ShipmentRequest;
