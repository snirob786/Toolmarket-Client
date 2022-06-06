import React from "react";
import { toast } from "react-toastify";

const DeleteOrder = ({ selectedItem, setReload }) => {
  const deleteTool = () => {
    fetch(
      `https://shrouded-anchorage-66957.herokuapp.com/order/${selectedItem._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        toast.success(`${selectedItem.productName} is deleted successfully.`);
        setReload(true);
      });
  };
  return (
    <>
      <input type="checkbox" id="deleteTool" className="modal-toggle" />
      <label htmlFor="deleteTool" className=" w-full modal cursor-pointer">
        <label className="modal-box relative" htmlFor="deleteTool">
          <h3 className="text-lg font-bold">
            Do you want to delete this order?
          </h3>
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
          <p className="py-1">
            <strong>Payment Status: </strong>
            {selectedItem.paymentStatus}
          </p>
          <p className="py-1">
            <strong>Shipment Status: </strong>
            {selectedItem.shipmentStatus}
          </p>
          <div className="mt-3 flex justify-end gap-3 modal-action">
            <label
              htmlFor="deleteTool   "
              className="btn btn-sm bg-red-500 border-0"
              onClick={deleteTool}
            >
              Delete
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default DeleteOrder;
