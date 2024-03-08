import React, { useState, useEffect } from "react";
import style from "./hero.module.scss";
import rightArrowIcon from "../../assets/icon-arrow-right.svg";
import leftArrowIcon from "../../assets/icon-arrow-left.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderArray = [
    "http://localhost:3000/Assets/Images/Slideshow/affald-skov-1.jpg",
    "http://localhost:3000/Assets/Images/Slideshow/affald-strand-2.jpg",
    "http://localhost:3000/Assets/Images/Slideshow/malerspande.jpg",
  ];

  const notifyWarning = () => {
    toast.warn("Page under maintenance", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
     
    });
  };

  const handleNextSlide = () => {
    setCurrentSlide((nextSlide) => {
      if (nextSlide === sliderArray.length - 1) {
        return 0;
      } else {
        return nextSlide + 1;
      }
    });
  };
  
  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === 0) {
        return sliderArray.length - 1;
      } else {
        return prevSlide - 1;
      }
    });
  };
  //https://codesandbox.io/p/sandbox/change-image-on-setinterval-q3m16?file=%2Fsrc%2Findex.js

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
              <Link onClick={notifyWarning} to="/">
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
        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </div>
    </>
  );
};
