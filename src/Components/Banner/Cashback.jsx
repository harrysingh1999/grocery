import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SummerSale from '../../Images/Summersale.jpg';
import Pulses from '../../Images/Pulses_banner.jpg';
import Rice from '../../Images/Rice_banner.jpg';
import spices from '../../Images/spices.svg';

const Cashback = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const images = [spices, Pulses, Rice];

  return (
    <div className="banner relative max-w-screen overflow-hidden mt-4">
      <Slider ref={setSlider} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-auto flex justify-center items-center px-7">
            <img src={image} alt={`Banner Image ${index + 1}`} className="object-cover h-84 w-784" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cashback;
