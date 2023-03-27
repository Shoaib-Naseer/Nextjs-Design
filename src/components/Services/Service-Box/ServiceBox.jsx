import React from 'react'

import './service-box.css'
const ServiceBox = ({headline,icon}) => {
  return (
    <>
    <div className="col-3">
    <div className="services-box ">
        <img src={icon}  alt="Keys Icon" className='svg-img' />
        <p className=''>{headline?headline:'Security'}</p>
    </div>
    </div>
    </>
  )
}

export default ServiceBox