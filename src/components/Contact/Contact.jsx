import React from 'react';
import './contact.css';
import NextIcon from '../../assets/next-icon.svg';
import Icons from '../Icons/Icons';

const Contact = () => {
  return (
    <section className="promotion-section bg-card-light">
      <div className="container mx-auto mt-5 py-5">
        <div className="promotion-text-container">
          <div className="contact-above py-4">
            <h1 className="fw-bold text-dark mb-15 text-uppercase">
              - Lets take our Relationship to the next level
            </h1>
          </div>

          <div className="contact-below row g-0">
            <div className="col-4">
              <p>Never miss out the updates</p>
              <div className="input-container d-flex justify-content-between my-3">
                <input type="email" placeholder="Email Address" />
                <span>
                  {' '}
                  <button className="fw-bold">
                    Read More{' '}
                    <span>
                      <img src={NextIcon} alt="" />
                    </span>
                  </button>{' '}
                </span>
              </div>
            </div>

            <div className="col-4">
              <div className="social-media-container mx-auto">
              <p>Social Media</p>
              <Icons />
              </div>
            </div>

            <div className="col-4">
              <p>Need help?</p>
              <button className='my-3 btn'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
