import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function ShowVideo() {
  const { videoId } = useParams();
  console.log(videoId);
  const [videoDetails, setVideoDetails] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const fetchVideo = async () => {
    const result = await axios.post(process.env.REACT_APP_API_KEY + "getVideo", {
      id: videoId,
    });
    setVideoDetails(result.data.data);
    setVideoURL(result.data.data.VideoURL);
    console.log(videoDetails);
  };

  useEffect(() => {
    fetchVideo();
  }, []);
  useEffect(() => {
    console.log(videoDetails);
  }, [videoDetails]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
    <ReactPlayer
        url={videoDetails?.VideoURL}
        width="600px"
        height="400px"
        controls
    />
    <p className="text-lg">Title : {videoDetails?.Title}</p>
    <p className="text-sm">Description : {videoDetails?.Description}</p>
</div>
  );
}

export default ShowVideo;
