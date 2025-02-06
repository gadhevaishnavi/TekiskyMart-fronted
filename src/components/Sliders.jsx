import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/Sliders.css"; // Importing external CSS

// Slide data array
const slides = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg",
  },
  {
    id: 3,
    image:
      "https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000&format=pjpg&exif=0&iptc=0",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/smartphone-device-with-minimalist-monochrome-background_23-2150763310.jpg?semt=ais_hybrid",
  },
];

const Sliders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
