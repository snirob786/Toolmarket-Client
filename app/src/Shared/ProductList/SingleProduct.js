import React from "react";

const SingleProduct = ({ product, index, setSelectedItem }) => {
  const handleSelected = () => {
    setSelectedItem(product);
  };
  return (
    <tr>
      <th>{index}</th>
      <th>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={product.image} alt="" />
          </div>
        </div>
      </th>
      <td>{product.name}</td>
      <td>{product.availableQuan}</td>
      <td>{product.price}</td>
      <td>
        <label
          htmlFor="deleteProduct"
          className="btn btn-xs modal-button bg-red-500"
          onClick={handleSelected}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default SingleProduct;
