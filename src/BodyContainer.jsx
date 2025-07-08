import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { openNav } from "./utils/appSlice";
import { useDispatch } from "react-redux";

const BodyContainer = () => {
  const dispatch = useDispatch();
  dispatch(openNav());
  return (
    <div className="w-6/7">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default BodyContainer;
