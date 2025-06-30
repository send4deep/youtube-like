import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "./utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videosList, setVideosList] = useState(null);
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const json = await response.json();
    setVideosList(json.items);
  };
  return !videosList ? (
    videosList
  ) : (
    <div className="flex flex-wrap mt-8 justify-between">
      {videosList.map((item) => (
        <VideoCard videoInfo={item} key={item.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
