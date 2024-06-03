import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      title: "With the stars",
      description: "Night sky collection",
      author: "Léa Jacquot",
      imgSrc: "/images/img1.png",
      authorImg: "/images/Avatar/img2.png",
      imgAlt: "Stars",
      trending: true,
    },
    {
      title: "Under the moon",
      description: "Moonlight collection",
      author: "John Doe",
      imgSrc: "/images/Collections/col1.png",
      authorImg: "/images/Avatar/img4.png",
      imgAlt: "Stars",
      trending: true,
    },
    {
      title: "Beyond the clouds",
      description: "Skyline collection",
      author: "Jane Smith",
      imgSrc: "/images/Collections/col2.png",
      authorImg: "/images/Avatar/img5.png",
      imgAlt: "Stars",
      trending: true,
    },
    {
      title: "Across the universe",
      description: "Cosmos collection",
      author: "Emily Johnson",
      imgSrc: "/images/Collections/col3.png",
      authorImg: "/images/Avatar/img2.png",
      imgAlt: "Stars",
      trending: true,
    },
    {
      title: "With the stars",
      description: "New Collection",
      author: "Allu Jacquot",
      imgSrc: "/images/img1.png",
      authorImg: "/images/Avatar/img4.png",
      imgAlt: "Stars",
      trending: true,
    },
  ];

  return (
    <div className="container p-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row bg-Background-color items-center justify-between p-4 rounded-[30px] ">
              <div className="text-left mx-8">
                {slide.trending && (
                  <div className="mb-4 md:mb-16">
                    <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full">
                      Trending Now
                    </span>
                  </div>
                )}
                <p className="text-gray text-lg md:text-24px">
                  {slide.description}
                </p>
                <h2 className="font-inter text-2xl md:text-64px mb-6 mt-4 font-extrabold leading-custom">
                  {slide.title}
                </h2>
                <div className="flex items-center mt-4">
                  <img
                    src={slide.authorImg}
                    alt="Author"
                    className="w-68px h-68px rounded-full mr-2"
                  />
                  <div>
                    <p className="text-gray-500 text-12px text-sm">Author</p>
                    <p className="text-24px">{slide.author}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="mb-2 md:mb-0 md:mr-4 bg-black w-full md:w-248px h-12 md:h-67px text-white px-4 py-2 rounded-full">
                    Buy
                  </button>
                  <button className="border w-full md:w-248px h-12 md:h-67px border-gray-500 text-gray-800 px-4 py-2 rounded-full">
                    See collection
                  </button>
                </div>
              </div>
              <div className="mx-8 hidden md:block">
                <img
                  src={slide.imgSrc}
                  alt={slide.imgAlt}
                  className="w-437px h-411px rounded-[52px]"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
