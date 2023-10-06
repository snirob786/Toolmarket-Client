import React from "react";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Tools from "../../Shared/Tools/Tools";

const Products = () => {
  const { data, isLoading } = useQuery("tools", () =>
    fetch(`${process.env.REACT_APP_BACKEND_URL}/tools`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <SectionTitle title="All Products"></SectionTitle>
      <Tools tools={data}></Tools>
    </div>
  );
};

export default Products;
