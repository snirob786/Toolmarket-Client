import {
  faEarthAsia,
  faScrewdriverWrench,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const BusinessSummary = () => {
  return (
    <div className="py-20">
      <SectionTitle title="business summary"></SectionTitle>
      <div className="w-4/5 mx-auto py-10">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <FontAwesomeIcon
                icon={faUsers}
                size="3x"
                className="text-secondary"
              />
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-xl">10000+</h2>
                <p className="font-medium">Customers</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <FontAwesomeIcon
                icon={faEarthAsia}
                size="3x"
                className="text-secondary"
              />
              <div className="card-body items-center text-center">
                <h2 className="card-titl font-bold text-xl">100+</h2>
                <p className="font-medium">Countries</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                size="3x"
                className="text-secondary"
              />
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-xl">300+</h2>
                <p className="font-medium">Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
