import React from "react";

const Popup = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div
        className="bg-white w-80 h-411px shadow-lg relative transform transition-transform duration-300 ease-in-out rounded-l-2xl"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <button
          className="absolute top-2 right-2 text-black text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-blue rounded-full w-10 h-10 mr-2"></div>
              <span className="text-gray-700 font-medium">STV60...4Z7WD</span>
            </div>
            <div className="text-black text-xl">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="text-left">
            <p className="text-gray-500 text-12px text-sm">In your wallet</p>
            <h2 className="font-inter text-xl md:text-24px mb-6  leading-custom">
              0.129 BTC
            </h2>
            <h3 className="text-lg font-semibold mt-10">Your NFTs</h3>
          </div>
          <div className="text-center">
            {image ? (
              <img
                src={image}
                alt="NFT"
                className="w-full h-80px mt-4 rounded-3xl"
              />
            ) : (
              <p className="text-gray-600 mb-6 mt-10">
                You don't own any NFTs yet
              </p>
            )}
            <button
              className="bg-black text-white px-6 py-2 mt-2 rounded-full"
              onClick={onClose}
            >
              Start shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
