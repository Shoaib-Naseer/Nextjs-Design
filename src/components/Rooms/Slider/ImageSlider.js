import React from 'react';
import './image-slider.css';

const ImageSlider = ({ item, index }) => {
  const { image, description } = item;
  return (
    <>
      <div className="slider-outer bg-gray" key={index}>
        <div className="slider-image mx-auto">
          <img
            src={image}
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              maxWidth: '100%',
            }}
            alt=""
          />
        </div>

        <div className="slider-text text-dark mx-auto">
          <h3 className="fw-bold py-2">{item.title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
