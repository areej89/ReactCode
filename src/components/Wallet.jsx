import React from "react";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-16">
      <h1 className="text-xl font-semibold mb-8">
        Choose the wallet to connect
      </h1>
      <div className="flex space-x-4">
        <input className="w-24 h-24 bg-white rounded-md shadow-md text-center cursor-pointer" />
        <input className="w-24 h-24 bg-white rounded-md shadow-md text-center cursor-pointer" />
        <input className="w-24 h-24 bg-white rounded-md shadow-md text-center cursor-pointer" />
      </div>
    </div>
  );
};

export default Wallet;
