import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Popup from "./Popup"; // Import the Popup component

const Nftcards = ({ image, title, nft }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleBuyClick = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className="bg-white rounded-lg mx-2 shadow-md p-4">
        <div className="relative group">
          <img
            src={image}
            alt={title}
            className="rounded-3xl mb-4 w-full h-227px"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => handleBuyClick(image)}
              className="bg-white w-248px text-black py-3 px-5 rounded-full shadow-lg"
            >
              Buy
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="bg-label px-2 w-130px text-center py-1 rounded-full">
            {nft}
          </span>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup} image={selectedImage} />
    </div>
  );
};

export default Nftcards;
