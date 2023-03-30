import React from 'react'
import About1 from '../../assets/about-1.png'
import About2 from '../../assets/about-2.png'
import './about.css'


const AboutHotel = () => {
  return (
    <section className='about-section bg-light'>
        <div className="container mx-auto row">
            <div className="col-4 about-img">
              <img src={About1} alt="" />
            </div>

            <div className="col-4 d-flex flex-column row justify-content-center text-center">
            <h1 className="fw-bold text-dark mb-15  text-center">About Hotel</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mus, convallis morbi hac turpis ante vestibulum nec</p>
            </div>

            <div className="col-4 about-img text-right" >
                <img src={About2} alt="" />
            </div>
        </div>
    </section>
  )
}

export default AboutHotel