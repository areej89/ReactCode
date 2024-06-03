import React, { useState } from "react";
import Header from "../components/Header";
import Wallet from "../components/Wallet";

function CreateWallet() {
  return (
    <>
      <div className="min-h-screen bg-Background-color">
        <Header />
        <Wallet />
      </div>
    </>
  );
}
export default CreateWallet;
