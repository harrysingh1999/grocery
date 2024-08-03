import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Bread from '../../Images/Bread.jpg';
import Colddrinks from '../../Images/Colddrinks.jpg';
import Fruitsvegetables from '../../Images/Fruitsvegetables.jpg';
import welcomeSpice from '../../Images/welcomeSpice.svg';
import DalPulse from '../../Images/Dal&Pulses.svg';
import choice from '../../Images/choice.svg';

const Bannerone = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  const images = [welcomeSpice, DalPulse, choice];

  return (
    <div className="banner relative mt-7 w-full max-w-screen overflow-hidden px-6">
    <Slider ref={slider} {...settings}>
      {images.map((image, index) => (
        <div key={index} className="w-full h-full">
          <img
            src={image}
            alt={`Banner Image ${index + 1}`}
            className="w-full h-[130px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[400px] object-cover"
          />
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default Bannerone;
