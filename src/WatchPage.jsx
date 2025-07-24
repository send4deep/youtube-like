import React, { useContext, useEffect } from "react";
import { closeNav } from "./utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeNav());
  }, []);

  const videoId = searchParams.get("v");
  return (
    <div className="w-11/12 m-auto flex flex-wrap">
      <iframe
        height="512"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-8/12"
      ></iframe>
      <LiveChat />
      <CommentsList />
    </div>
  );
};

export default WatchPage;
