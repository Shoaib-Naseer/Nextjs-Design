import React from 'react'
import FooterLogo from '../../assets/logos/footer-logo.svg'
import Icons from '../Icons/Icons'
import './footer.css'
const Footer = () => {
  return (
    <section className='footer-section'>
      <div className="container mx-auto row py-5">
        <div className="col-6 footer-content py-4">
          <img src={FooterLogo} alt="Footer Logo" />
          <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit mus, convallis morbi hac turpis ante vestibulum nec
          </p>
          <div className='w-20'>
            <Icons />
          </div>
         <div className="footer-copyright d-flex">
         <div>
             &#169; 2023 COMPANY
          </div>
          <div>ALL RIGHTS RESERVED</div>
        </div>
         </div>
        <div className="col-6 footer-nav ">
          <div className="footer-nav-content">
          <p className='fw-bold text-uppercase'>Sitemap</p>
          <div className="d-flex ">
            <div className='item'>
              <ul>
                <li>Home</li>
            <li>Contact</li>
            <li>Location</li>
            </ul>
            </div>


             <div className='item'>
              <ul>
                <li>Rooms</li>
            <li>Nearby Activities</li>
            <li>Contact Us</li>
            </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer