import React from "react";
import Card from "./Card";

const collections = [
  {
    image: "/images/Collections/col1.png",
    title: "Night Sky",
    ntf: "120NFT",
    priceRange: "Price Range:0.12BTC - 0.18BTC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    author: "Léa Jacquot",
    authorImage: "/images/Avatar/img2.png",
  },
  {
    image: "/images/Collections/col2.png",
    title: "Future",
    ntf: "120NFT",
    priceRange: "Price Range:0.12BTC - 0.18BTC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    author: "Julien",
    authorImage: "/images/Avatar/img4.png",
  },
  {
    image: "/images/Collections/col3.png",
    title: "Mother Nature",
    ntf: "120NFT",
    priceRange: "Price Range:0.12BTC - 0.18BTC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    author: "Maria",
    authorImage: "/images/Avatar/img5.png",
  },
];

function Collections() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4  mx-8">Collections</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection, index) => (
          <Card
            key={index}
            image={collection.image}
            title={collection.title}
            ntf={collection.ntf}
            priceRange={collection.priceRange}
            description={collection.description}
            author={collection.author}
            authorImage={collection.authorImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Collections;
