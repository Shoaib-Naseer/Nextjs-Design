import React from 'react';
import './activity-block.css';
import NextIcon from '../../../assets/next-icon.svg';
import Lamp from '../../../assets/lamp.png';
import Quotation from '../../../assets/quotes.png';

const ActivityBlock = ({ activity }) => {
  const { title, img, desc } = activity;
  

  return (
    <>
      <div className="activity-block bg-card-light p-4">
        <div className="d-flex align-items-center justify-space-between">
          <div className="activity-text d-flex align-items-start justify-content-between">
            <img src={Quotation} alt="" />
            <div className="activity-box-heading">
              <h2 className="fw-bold">{title}</h2>
            </div>
          </div>
          <div className="activity-image">
            <img src={Lamp} alt="" />
          </div>
        </div>
        <div className="p-absolute">
          <p>{desc} </p>
          <button>
            Read More{' '}
            <span>
              <img src={NextIcon} alt="" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ActivityBlock;
