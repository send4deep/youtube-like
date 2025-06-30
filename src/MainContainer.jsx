import React from "react";
import Sidebar from "./Sidebar";
import BodyContainer from "./BodyContainer";

const MainContainer = () => {
  return (
    <div className="flex">
      <Sidebar />
      <BodyContainer />
    </div>
  );
};

export default MainContainer;
