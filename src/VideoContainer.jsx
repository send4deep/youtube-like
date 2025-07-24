import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API, YOUTUBE_QUERY_API } from "./utils/constants";
import { addVideos } from "./utils/videoSlice";
import { useSelector, useDispatch } from "react-redux";

const VideoContainer = () => {
  const videosList = useSelector((store) => store.videos.videos);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const json = await response.json();
    dispatch(addVideos(json.items));
  };
  return !videosList ? null : (
    <div className="flex flex-wrap mt-8 justify-between">
      {Object.keys(videosList).map((item) => {
        return (
          <VideoCard videoInfo={videosList[item]} key={videosList[item].id} />
        );
      })}
    </div>
  );
};

export default VideoContainer;
