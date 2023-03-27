import React, { useState } from 'react'
import './rooms.css'
import roomBg from '../../assets/rooms-bg.png'
import arrowPrev from '../../assets/arrow-prev.svg'

const Rooms = () => {
    const SliderData = [
        {
          image:
            'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        }
      ];

    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  return (
    <>
        <section className='bg-white'>
            <div className="rooms-area container mx-auto">
                <div className="rooms-header d-flex justify-content-between align-items-start pb-4">
                
                <div className="rooms-text">
                    <h1 className='fw-bold text-dark mb-15'>Rooms</h1>
                    <div className=''>
                        Made for sophisticarted relaxation
                    </div>
                </div>
                <div className="room-nav">
                    <img src={arrowPrev} className='arrow-icons left-arrow' onClick={prevSlide} alt="" />
                    <img src={arrowPrev} className='arrow-icons right-arrow' onClick={nextSlide} alt="" />
                </div>
                
                </div>
                <div className="room-bg">
                    <img src={roomBg} alt="" />
                </div>


                <div className='new-slider d-flex'>
                {SliderData.map((slide, index) => {
                        return (
                            <div className='slider' key={index}>
                                    <div className='image-container'>
                                    <img src={slide.image} alt='travel image' className='image' />
                                
                                    </div>
                            </div>
                        );
                    })}
                </div>


                {/* <div className='slider'>
                    {SliderData.map((slide, index) => {
                        return (
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === current && (
                                    <img src={slide.image} alt='travel image' className='image' />
                                )}
                            </div>
                        );
                    })}
                </div> */}
            </div>
        </section>
    </>
  )
}

export default Rooms