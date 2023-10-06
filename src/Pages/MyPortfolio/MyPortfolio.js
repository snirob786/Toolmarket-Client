import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const MyPortfolio = () => {
  return (
    <div>
      <SectionTitle title="My Portfolio"></SectionTitle>
      <div className="w-4/5 mx-auto py-10">
        <div className="card w-3/5 mx-auto bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <strong>Name:</strong> Saifur Rahman Nirob
            </h2>
            <p>
              <strong>Email Address:</strong> snirob786@gmail.com
            </p>
            <p className="mb-5">
              <strong>Phone Number: </strong>+8801714621004
            </p>
            <SectionTitle
              title="Educational Details"
              isAlignment="left"
            ></SectionTitle>
            <p>
              <strong>Institute Name: </strong>Institute of Science, Trade and
              technology, Dhaka
            </p>
            <p>
              <strong>Degree: </strong>Bachelor of Science
            </p>
            <p className="mb-5">
              <strong>Subject: </strong>Computer Science and Engineering
            </p>
            <SectionTitle title="My Projects" isAlignment="left"></SectionTitle>
            <div className="flex gap-5">
              <button className="btn btn-xs btn-accent">
                <a href="https://lunar-box-212307.firebaseapp.com/">
                  Book Warehouse
                </a>
              </button>
              <button className="btn btn-xs btn-accent">
                <a href="https://snirob-travlog.netlify.app/about">Travlog</a>
              </button>
              <button className="btn btn-xs btn-accent">
                <a href="https://compumart-review.netlify.app/">Compucorp</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
