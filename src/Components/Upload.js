import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ThreeCircles } from "react-loader-spinner";

function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const notify = (isSuccess) => {
    if (isSuccess) {
      toast.success("This is a success message!", {
        position: "top-right", // Toast position
        autoClose: 3000, // Auto-close duration in milliseconds
      });
    } else {
      toast.error("failed to upload File !", {
        position: "top-right", // Toast position
        autoClose: 3000, // Auto-close duration in milliseconds
      });
    }
  };
  const notifyForHumanError = () => {
    toast.warning("Enter all the Details !", {
      position: "top-right", // Toast position
      autoClose: 3000, // Auto-close duration in milliseconds
    });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log("called");
    if (thumbnail && video && description && title) {
      const formData = new FormData();
      formData.append("image", thumbnail);
      formData.append("video", video);
      formData.append("description", description);
      formData.append("title", title);

      try {
        setLoading(true);
        const response = await axios.post(
          process.env.REACT_APP_API_KEY + "upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
              "credentials": 'include'
            },
          }
        );
        

        if (response.status === 200) {
          console.log(response);
          console.log("Files uploaded successfully");
          notify(true);
          setDescription("");
          setTitle("");
          setVideo(null);
          setThumbnail(null);
        } else {
          console.error("File upload failed");
          notify(false);
        }
      } catch (error) {
        console.error("Error uploading files:", error);
        notify(false);
      }
    } else {
      notifyForHumanError();
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-100 py-6 flex flex-col sm:flex-row justify-center sm:py-4">
      <div className="sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg rounded-lg sm:p-10 p-6">
          <div className="flex items-center space-x-5">
            <div className="h-14 w-14 bg-indigo-100 rounded-full flex-shrink-0 flex items-center justify-center text-indigo-500 text-2xl font-mono">
              i
            </div>
            <div className="block font-semibold text-xl text-gray-700">
              <h2 className="leading-relaxed">Upload Page</h2>
            </div>
          </div>
          <form className="mt-8" onSubmit={handleUpload}>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-6">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-gray-600 uppercase"
                >
                  Title (50 characters max):
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  maxLength="50"
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-gray-300"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-6">
                <label
                  htmlFor="thumbnail"
                  className="block text-sm font-semibold text-gray-600 uppercase"
                >
                  Upload Thumbnail (JPG/PNG):
                </label>
                <input
                  id="thumbnail"
                  type="file"
                  accept=".jpg,.png"
                  onChange={handleThumbnailChange}
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-gray-300"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-600 uppercase"
                >
                  Description (200 characters max):
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  maxLength="200"
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg resize-none focus:outline-none focus:bg-gray-300"
                ></textarea>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-6">
                <label
                  htmlFor="video"
                  className="block text-sm font-semibold text-gray-600 uppercase"
                >
                  Upload Video (MPG/AVI/MP4):
                </label>
                <input
                  id="video"
                  type="file"
                  accept=".mpg,.avi,.mp4"
                  onChange={handleVideoChange}
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-gray-300"
                />
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full flex text-center justify-center p-4 items-center text-center bg-indigo-500 text-white rounded-full uppercase font-semibold hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-700"
                disabled={loading}
              >
                {loading ? (
                  <ThreeCircles
                    height="35"
                    width="35"
                    color="white"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                  />
                ) : (
                  "Upload"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
