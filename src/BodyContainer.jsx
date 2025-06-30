import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const BodyContainer = () => {
  return (
    <div className="w-6/7">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default BodyContainer;
