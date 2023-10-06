import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Tools from "../../Shared/Tools/Tools";
import Banner from "./Banner";
import Loader from "../../Shared/Loader/Loader";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import Contact from "./Contact";
import SubscribeUs from "./SubscribeUs";

const Home = () => {
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
      <Banner></Banner>
      <div className="py-20">
        <Tools tools={data.slice(0, 6)} page="home"></Tools>
      </div>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Contact></Contact>
      <SubscribeUs></SubscribeUs>
    </div>
  );
};

export default Home;
