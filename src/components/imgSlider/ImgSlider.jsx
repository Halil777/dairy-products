import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./slide.css";

export default function ImgSlider() {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
  };
  return (
    <div className="ImgSliderContainer">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <img src="https://unsplash.it/400/300/?image=511" />
        </div>
        <div className="item">
          <img src="https://unsplash.it/400/300/?image=514" />
        </div>
        <div className="item">
          <img src="https://unsplash.it/400/300/?image=513" />
        </div>
      </OwlCarousel>
      ;
    </div>
  );
}
