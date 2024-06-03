import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import Popup from "./Popup";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setName] = useState("Create Wallet");

  useEffect(() => {
    if (location.pathname === "/Wallet") {
      setName("Create Wallet");
    } else if (location.pathname === "/") {
      setName("Account");
    }
  }, [location.pathname]);

  //Popup Query
  const handleConnectWalletClick = () => {
    if (name === "Account") {
      setIsPopupOpen(true);
    } else {
      navigate("/Wallet");
    }

    /*    if(location.pathname==="/Wallet")
      { 
          navigate('/'); 
       

        }
        else if(location.pathname==="/"){
          
          navigate('/Wallet'); 
       
        }*/

    //setName('Account') ;
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between bg-transparent">
        <div className="text-2xl font-inter text-custom font-extrabold leading-custom text-custom-gray text-left">
          MARKETPLACE
        </div>
        <div className="flex justify-end">
          <button
            className="border border-black px-4 py-2 rounded-full text-black"
            onClick={handleConnectWalletClick}
          >
            {name}
          </button>
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};
export default Header;
