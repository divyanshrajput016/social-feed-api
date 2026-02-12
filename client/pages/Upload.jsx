import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
    

const Upload = () => {
  let navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    await axios.post("http://localhost:3000/post-img",formData);
    console.log("Post Uploded");
    navigate("/posts")
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-md border border-gray-200">
        
        <h1 className="text-3xl font-semibold text-center mb-8 tracking-tight">
          Upload Image
        </h1>

        <form className="flex flex-col gap-6" onSubmit={(e) => {
          handleSubmit(e);
        }}>

          {/* File Upload */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Select Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              className="block w-full text-sm text-gray-600
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-xl file:border-0
                         file:text-sm file:font-medium
                         file:bg-black file:text-white
                         hover:file:bg-gray-800
                         cursor-pointer"
            />
          </div>

          {/* Caption */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Caption
            </label>

            <input
              type="text"
              name="caption"
              placeholder="Write something..."
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-black
                         transition duration-200" 
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white py-3 rounded-xl
                       hover:scale-105 active:scale-95
                       transition-all duration-200 font-medium"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Upload
