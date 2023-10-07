import React from "react";

const SectionTitle = ({ title, isAlignment }) => {
  let classess;
  if (isAlignment) {
    classess = `text-2xl text-gray-800 text-${isAlignment} font-medium uppercase mb-3`;
  } else {
    classess = "text-4xl text-gray-800 text-center font-medium uppercase mb-3";
  }
  return (
    <div>
      <h1 className={classess}>{title}</h1>
    </div>
  );
};

export default SectionTitle;
