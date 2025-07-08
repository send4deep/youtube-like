import React, { useContext, useEffect } from "react";
import { closeNav } from "./utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeNav());
  }, []);

  const videoId = searchParams.get("v");
  return (
    <div className="w-max m-auto">
      <iframe
        width="960"
        height="715"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
