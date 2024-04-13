import React from "react";

const BodyContainer = ({ children }) => {
  return (
    <div className=" m-2 rounded-lg p-4 shadow-md h-full overflow-hidden overflow-y-auto">
      {children}
    </div>
  );
};

export default BodyContainer;
