import React from "react";

const VideoCard = ({ videoInfo }) => {
  const { title, channelTitle, thumbnails } = videoInfo.snippet;
  const { viewCount } = videoInfo.statistics;
  console.log(videoInfo);

  return (
    <div className="w-72 mb-6">
      <img src={thumbnails.standard.url} alt={title} className="rounded-2xl" />
      <h2 className="mb-2 font-bold">{title}</h2>
      <h3 className="text-gray-500 text-sm">{channelTitle}</h3>
      <h3 className="text-gray-500 text-sm">
        {viewCount > 1000 ? `${viewCount / 1000}K` : viewCount} Views
      </h3>
    </div>
  );
};

export default VideoCard;
