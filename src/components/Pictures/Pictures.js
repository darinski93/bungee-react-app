import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { categoryImages } from "./CategoryImages";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'




export const Pictures = () => {

  const [photo, setPhoto] = useState(0)
  const { category } = useParams();


  const images = categoryImages[category] || [];

  const nextSlide = () => {
    setPhoto(photo === images.length - 1 ? 0 : photo + 1)
  }

  const prevSlide = () => {
    setPhoto(photo === 0 ? images.length - 1 : photo - 1)
  }

  return (
    <div className="pictures-page">

      <Link to="/gallery" className="back-button">
        <CgClose />
      </Link>

      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      <div className="slider">
        {images.map((slide, index) => {
          return (
            <div
              className={`slide ${index === photo ? "active" : ""}`}
              key={index}
            >

              {index === photo && (
                <img src={slide} alt={`${index}`} className="image" />
              )}
            </div>
          )
        })}
      </div>
    </div>

  );
};
