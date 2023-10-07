import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Tool from "./Tool";

const Tools = ({ tools, page }) => {
  return (
    <div className="w-4/5 mx-auto py-10">
      {page && <SectionTitle title="Tools"></SectionTitle>}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
