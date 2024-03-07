import React, { useState, useEffect } from "react";
import style from "./hero.module.scss";
import rightArrowIcon from "../../assets/icon-arrow-right.svg";
import leftArrowIcon from "../../assets/icon-arrow-left.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderArray = [
    "http://localhost:3000/Assets/Images/Slideshow/affald-skov-1.jpg",
    "http://localhost:3000/Assets/Images/Slideshow/affald-strand-2.jpg",
    "http://localhost:3000/Assets/Images/Slideshow/malerspande.jpg",
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
          <img
            className={style.heroImage}
            src={sliderArray[currentSlide]}
            alt="Hero Slide"
          />
          <button className={style.arrowLeft} onClick={handlePreviousSlide}>
            <img src={leftArrowIcon} />
          </button>
          <button className={style.arrowRight} onClick={handleNextSlide}>
            <img src={rightArrowIcon} />
          </button>
          <div className={style.heroBoks}>
            <h2>Find og andmeld genbrugsstationer</h2>
            <div className={style.buttonContainer}>
              <Link to="/genbrugsstationer">
                <Button
                  padding="12px"
                  textAlign="center"
                  fontSize="14px"
                  height="50px"
                  width="140px"
                  name="Find station"
                />
              </Link>

              <Link to="/login">
                <Button
                  height="50px"
                  width="140px"
                  padding="12px"
                  textAlign="center"
                  fontSize="14px"
                  name="Log ind"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
