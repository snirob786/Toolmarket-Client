import React, { useState } from "react";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import DeleteProduct from "../../Shared/ProductList/DeleteProduct";
import ProductList from "../../Shared/ProductList/ProductList";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ManageProducts = () => {
  const [selectedItem, setSelectedItem] = useState([]);
  const {
    data: allProducts,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch(`${process.env.REACT_APP_BACKEND_URL}/tools`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    <Loader></Loader>;
  }

  console.log(allProducts);
  return (
    <div>
      <SectionTitle title="Manage Products" isAlignment="left"></SectionTitle>
      <ProductList
        products={allProducts}
        isLoading={isLoading}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      ></ProductList>
      <DeleteProduct
        selectedItem={selectedItem}
        refetch={refetch}
      ></DeleteProduct>
    </div>
  );
};

export default ManageProducts;
