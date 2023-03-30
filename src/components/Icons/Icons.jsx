import React from 'react'
import Twitter from '../../assets/icons/twitter/vector.svg'

import Instagram from '../../assets/icons/insta/vector.svg'

import Tiktok from '../../assets/icons/tiktok/vector.svg'

import Medium from '../../assets/icons/medium/vector.svg'

import './icons.css'
const Icons = () => {
  return (
    <>
        <div className="icons-container d-flex justify-content-between my-3">
                
                <img src={Twitter} alt="icons"  />
                <img src={Instagram} alt="icons"  />
                <img src={Tiktok} alt="icons"  />
                <img src={Medium} alt="icons"  />

            

            </div>
    </>
  )
}

export default Icons