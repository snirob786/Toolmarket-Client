import React from "react";
import Loader from "../Loader/Loader";
import SingleProduct from "./SingleProduct";

const ProductList = ({
  products,
  isLoading,
  selectedItem,
  setSelectedItem,
}) => {
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Available Amount</th>
              <th>Price</th>
              <th>Payment Status</th>
              <th>Shipment Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <SingleProduct
                key={product._id}
                index={index + 1}
                product={product}
                setSelectedItem={setSelectedItem}
              ></SingleProduct>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Available Amount</th>
              <th>Price</th>
              <th>Payment Status</th>
              <th>Shipment Status</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
