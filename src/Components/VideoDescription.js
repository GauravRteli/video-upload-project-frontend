import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const VideoDescription = ({
  _id,
  Description,
  ThumbnailURL,
  Title,
  VideoURL,
}) => {
  if (!ThumbnailURL) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-w-fit justify-start bg-white p-2 rounded-lg shadow-lg">
      {/* Thumbnail */}
      <div className="flex-shrink-0">
        <img src={ThumbnailURL} alt={Title} className="w-20 h-20 rounded-md" />
      </div>
      {/* Video Details */}
      <div className="ml-4 justify-self-end">
        <div className="flex items-center justify-between">
          <Link to={`/showvideo/${_id}`}><h2 className="text-lg underline transition-colors duration-300 hover:text-blue-500 font-semibold pr-6">{Title}</h2></Link>
          <BsBoxArrowInUpRight className="transition-colors duration-300 hover:text-blue-500"/>
        </div>
        <p className="text-gray-600">{Description}</p>
      </div>
    </div>
  );
};

export default VideoDescription;
