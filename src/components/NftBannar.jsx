import React from "react";
import "../index.css"; 

const NftBanner = () => {
  return (
    <div className="container mx-8 p-4">
      <div className="flex flex-col md:flex-row bg-white items-center md:items-start justify-between p-4 rounded-lg ">
        <div className="text-left mb-4 md:mb-0 md:mr-8">
          <div className="mb-4 md:mb-16">
            <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full">
              Trending Now
            </span>
          </div>
          <p className="text-gray text-lg md:text-24px">Collection</p>
          <h2 className="font-inter text-2xl md:text-64px mb-6 mt-4 font-extrabold leading-custom">
            Night Sky
          </h2>
          <p className="text-price mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center">
            <img
              src="images/Avatar/img2.png"
              alt="Author"
              className="w-12 h-12 rounded-full mr-2"
            />
            <div>
              <p className="text-price text-12px text-sm">Author</p>
              <p className="text-lg">Léa Jacquot</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="images/img1.png"
            alt="Night Sky"
            className="w-437px h-411px rounded-[52px]"
          />
        </div>
      </div>
    </div>
  );
};

export default NftBanner;
