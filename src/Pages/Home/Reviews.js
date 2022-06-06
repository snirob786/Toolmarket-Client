import React from "react";
import { useQuery } from "react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Reviews = () => {
  const { data, isLoading } = useQuery("reviews", () =>
    fetch("https://shrouded-anchorage-66957.herokuapp.com/reviews").then(
      (res) => res.json()
    )
  );

  let reviews;

  if (data) {
    reviews = data;
  }
  return (
    <div className="bg-gray-100 py-20">
      <div className="w-4/5 mx-auto py-10">
        <SectionTitle title="Reviews"></SectionTitle>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {reviews?.map((review) => (
            <div key={review._id}>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{review.name}</h2>
                  <p className="italicr">"{review.review} "</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
