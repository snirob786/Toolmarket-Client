import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, image, minQuan, availableQuan, shortDesc, price } = tool;
  const navigate = useNavigate();
  const navigateToToolDetail = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
          style={{ width: 250, height: 150 }}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{shortDesc.slice(0, 250)}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigateToToolDetail(_id)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
