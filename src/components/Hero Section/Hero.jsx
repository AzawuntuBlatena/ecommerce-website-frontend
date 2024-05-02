import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets copy/hero/headphone.png";
import image2 from "../../assets copy/category/vr.png";
import image3 from "../../assets copy/category/macbook.png";
import Button from "../Shared/Button";

const HeroSlides = [
  {
    id: 1,
    img: image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: image3,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Laptop",
  },
];

const Hero = ({handlePopUp}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplayspeed: 4000,
    cssEase: "Ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="container">
      <div
        className="overflow-hidden rounded-3xl min-h-[445px] sm:min-h-[500px]
        flex justify-center items-center hero-bg-color"
      >
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroSlides.map((data, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div
                    className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 
                            sm:pt-0 text-center sm:text-left order-2 sm:order-1 "
                  >
                    <h1 
                    data-aos='zoom-out' 
                    data-aos-duration = '500'
                    data-aos-once = 'true'
                    className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 
                    data-aos='zoom-out' 
                    data-aos-duration = '500'
                    data-aos-once = 'true'
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1
                    data-aos='zoom-out' 
                    data-aos-duration = '500'
                    data-aos-once = 'true'
                    className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px]
                                 md:text-[100] xl:text-[150] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                    data-aos='fade-up'
                    data-aos-duration = '500'
                    data-aos-offset = '0'
                    data-aos-delay = '300'>
                      <Button
                        text="Shop By Cattagory"
                        bgColor="bg-primary"
                        textColor="text-white"
                        handler = {handlePopUp}
                      />
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div 
                    data-aos='zoom-in'
                    data-aos-once = 'true'>
                      <img
                        src={data.img}
                        alt={data.title}
                        className="w-[300px] h-[300px] sm:h-[450px] sm:scale-105 
                                lg:scale-110 object-contain mx-auto drop-shadow-[8px_4px_6px_rgb(0,0,0,.4)] relative z-10 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
