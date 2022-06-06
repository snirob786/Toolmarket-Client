import React from "react";
import { toast } from "react-toastify";

const DeleteProduct = ({ selectedItem, refetch }) => {
  const deleteProduct = () => {
    fetch(
      `https://shrouded-anchorage-66957.herokuapp.com/tool/${selectedItem._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        toast.success(`${selectedItem.name} is deleted successfully.`);
        refetch();
      });
  };
  return (
    <>
      <input type="checkbox" id="deleteProduct" className="modal-toggle" />
      <label htmlFor="deleteProduct" className=" w-full modal cursor-pointer">
        <label className="modal-box relative" htmlFor="deleteProduct">
          <h3 className="text-lg font-bold">
            Do you want to delete this Product?
          </h3>
          <p className="py-1">
            <strong>Product Name: </strong>
            {selectedItem.name}
          </p>
          <p className="py-1">
            <strong>Minimum Order Amount: </strong>
            {selectedItem.minQuan}
          </p>
          <p className="py-1">
            <strong>Price: </strong>
            {selectedItem.price}
          </p>
          <p className="py-1">
            <strong>Available Amount: </strong>
            {selectedItem.availableQuan}
          </p>
          <div className="mt-3 flex justify-end gap-3 modal-action">
            <label
              htmlFor="deleteProduct"
              className="btn btn-sm bg-red-500 border-0"
              onClick={deleteProduct}
            >
              Delete
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default DeleteProduct;
