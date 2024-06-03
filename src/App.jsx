import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Main";
import CreateWallet from "./pages/CreateWallet";
import Collectionpage from "./pages/CollectionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Wallet" element={<CreateWallet />} />
        <Route path="/Collection" element={<Collectionpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
