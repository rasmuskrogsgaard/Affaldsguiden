import React, { useState, useEffect } from "react";
import style from "./hero.module.scss";
import rightArrowIcon from "../../assets/icon-arrow-right.svg";
import leftArrowIcon from "../../assets/icon-arrow-left.svg";
export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderArray = [
    "http://localhost:4000/Assets/Images/Slideshow/affald-skov-1.jpg",
    "http://localhost:4000/Assets/Images/Slideshow/affald-strand-2.jpg",
    "http://localhost:4000/Assets/Images/Slideshow/malerspande.jpg",
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === sliderArray.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderArray.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className={style.heroContainer}>
        <div className={style.heroImageContainer}>
          <img className={style.heroImage} src={sliderArray[currentSlide]} alt="Hero Slide" />
          <button className={style.arrowLeft} onClick={handlePreviousSlide}>
            <img src={leftArrowIcon} />
          </button>
          <button className={style.arrowRight} onClick={handleNextSlide}>
            <img src={rightArrowIcon} />
          </button>
        </div>
      </div>
    </>
  );
};
