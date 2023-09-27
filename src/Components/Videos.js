import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoDescription from "./VideoDescription";
const Videos = () => {
  const [videos, setVideos] = useState(null);

  const fetchVideos = async () => {
    const result = await axios.get(process.env.REACT_APP_API_KEY + "getAllVideos");
    setVideos(result.data.data);
    console.log(result.data.data);
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 p-4">
      {videos?.map(({ ...video }, index) => (
        <VideoDescription key={index} {...video} />
      ))}
    </div>
  );
};

export default Videos;
