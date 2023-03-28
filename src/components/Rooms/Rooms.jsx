import React, { useRef, useState } from 'react';
import './rooms.css';
import roomBg from '../../assets/rooms-bg.png';
import arrowPrev from '../../assets/arrow-prev.svg';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImageSlider from './Slider/ImageSlider';

const Rooms = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 20, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 20, // optional, default to 1.
    },
  };

  const additionalTransfrom = 0;

  const settings = {
    arrows: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive,
    additionalTransfrom,
  };

  const carouselRef = useRef(null);

  const items = [
    {
      title: 'Room Feature 1',
      description:
        'Lorem ipsum dolor sit amet coii adipiscing elit mus, convallis morbi',
      image:
        'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Room Feature 1',
      description:
        'Lorem ipsum dolor sit amet coii adipiscing elit mus, convallis morbi',

      image:
        'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
    },
    {
      title: 'Room Feature 1',
      description:
        'Lorem ipsum dolor sit amet coii adipiscing elit mus, convallis morbi',

      image:
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Room Feature 1',
      description:
        'Lorem ipsum dolor sit amet coii adipiscing elit mus, convallis morbi',

      image:
        'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
    },
    {
      title: 'Room Feature 1',
      description:
        'Lorem ipsum dolor sit amet coii adipiscing elit mus, convallis morbi',

      image:
        'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <>
      <section className="bg-card-light">
        <div className="rooms-area container mx-auto">
          <div className="rooms-header d-flex justify-content-between align-items-start pb-4">
            <div className="rooms-text">
              <h1 className="fw-bold text-dark mb-15">Rooms</h1>
              <div className="">Made for sophisticarted relaxation</div>
            </div>
            <div className="room-nav pe-2">
              <img
                src={arrowPrev}
                className="arrow-icons left-arrow"
                onClick={handlePrevClick}
                alt=""
              />
              <img
                src={arrowPrev}
                className="arrow-icons right-arrow"
                onClick={handleNextClick}
                alt=""
              />
            </div>
          </div>
          <div className="room-bg">
            <img src={roomBg} alt="" />
          </div>

          <div className="slider-container">
            {/* Slider takes array of object as input */}
            <MultiCarousel {...settings} ref={carouselRef}>
              {items.map((item, index) => (
                <ImageSlider item={item} index={index} />
              ))}
            </MultiCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;
