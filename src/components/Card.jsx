import React from "react";
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";

const Card = ({
  image,
  title,
  ntf,
  priceRange,
  description,
  authorImage,
  author,
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Collection");
  };

  return (
    <div className="bg-white rounded-lg  mx-2 shadow-md p-4">
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="rounded-3xl mb-4 w-full h-227px"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleNavigate}
            className="bg-white text-black py-3 px-5 rounded-full shadow-lg"
          >
            Go to collection →
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-green-800 bg-green-100 px-2 py-1 rounded-full">
          {ntf}
        </span>
      </div>
      <span className="text-gray-500 text-gray  rounded-full text-12px">
        {priceRange}
      </span>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex items-center mt-4">
        <img
          src={authorImage}
          alt={author}
          className="rounded-full w-8 h-8 mr-2"
        />
        <div>
          <p className="text-gray-500 text-gray text-12px md:text-base text-sm">
            Artist
          </p>
          <p className="text-lg font-semibold ">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
