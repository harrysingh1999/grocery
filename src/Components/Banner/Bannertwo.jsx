import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icy from '../../Images/Icy.jpg';
import Sale from '../../Images/Sale.jpg';
import Dryfruits from '../../Images/Dryfruits.jpg';
import Purepulses from '../../Images/Purepulses.jpg';
import spice from '../../Images/spice.svg';
import variousSpices from '../../Images/variousSpices.svg';
import quality from '../../Images/quality.svg';
import { MdHeight } from 'react-icons/md';

const Bannertwo = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const settings1 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    className: 'slider1',
  };

  const settings2 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    className: 'slider2',
  };

  const images1 = [spice, Sale];
  const images2 = [variousSpices, quality];

  return (
    <div className="banner relative flex mt-6 max-w-screen overflow-hidden">
      {/* First Slider */}
      <div className="w-[30%] sm:-w-[28%] px-6">
        <Slider ref={setSlider1} {...settings1}>
          {images1.map((image, index) => (
            <div key={index} className="w-full h-full flex justify-center items-center ps-2">
              <img
                src={image}
                alt={`Banner Image ${index + 1}`}
                className="object-cover rounded-lg w-full h-24 sm:h-36 md:h-52 lg:h-64"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Second Slider */}
      <div className="w-[70%] sm:-w-[70%] md:pr-5">
        <Slider ref={setSlider2} {...settings2}>
          {images2.map((image, index) => (
            <div key={index} className="w-full h-full flex justify-center items-center pe-4">
              <img
                src={image}
                alt={`Banner Image ${index + 1}`}
                className="object-cover rounded-lg w-full h-24 sm:h-36 md:h-52 lg:h-64"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Bannertwo;
