import React from "react";
import Nftcards from "./Nftcards";
import "../index.css";

const nftcols = [
  {
    image: "/images/NFTs/nft1.png",
    title: "Night Sky",
    nft: "0.12 BTC",
  },
  {
    image: "/images/NFTs/nft2.png",
    title: "Future",
    nft: "0.12 BTC",
  },
  {
    image: "/images/NFTs/nft3.png",
    title: "Mother Nature",
    nft: "0.12 BTC",
  },
  {
    image: "/images/NFTs/nft4.png",
    title: "Mother Nature",
    nft: "0.14 BTC",
  },
  {
    image: "/images/NFTs/nft5.png",
    title: "Mother Nature",
    nft: "0.12 BTC",
  },
  {
    image: "/images/NFTs/nft6.png",
    title: "Mother Nature",
    nft: "0.18 BTC",
  },
];

function NftCol() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 mx-8">NFTs</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {nftcols.map((nftcol, index) => (
          <Nftcards
            key={index}
            image={nftcol.image}
            title={nftcol.title}
            nft={nftcol.nft}
            priceRange={nftcol.priceRange}
            description={nftcol.description}
            author={nftcol.author}
            authorImage={nftcol.authorImage}
          />
        ))}
      </div>
    </div>
  );
}

export default NftCol;
