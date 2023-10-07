import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <div className="py-20">
      <div className="w-4/5 mx-auto mb-10">
        <SectionTitle title="Contact"></SectionTitle>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full">
            <div className="card h-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Please Come To Visit Us</h2>
                <h4>
                  <strong>Office Location:</strong> <br />
                  5/6, block-e, lalmatia, <br /> Dhaka - 1207
                </h4>
                <p>
                  <strong>Contact Number: </strong>01715026297
                </p>
                <p>
                  <strong>Email Address: </strong>snirob786@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://i.ibb.co/grXpxxp/2022-05-30-17-12-58.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
