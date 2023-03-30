import React from 'react'
import './activities.css';
import ActivityBlock from './ActivityBlock/ActivityBlock';

const Activities = () => {
 
  const activityData = [
    {
      title: 'NearBy Activities 1',
      img: '',
      desc: 'Lorem ipsum dolor sit amet coii adipiscing elit mus, convallis morbium dolor sit',
    },
    {
      title: 'NearBy Activities 2',
      img: '',
      desc: 'Lorem ipsum dolor sit amet coii adipiscing elit mus, convallis morbium dolor sit',
    },
    {
      title: 'NearBy Activities 3',
      img: '',
      desc: 'Lorem ipsum dolor sit amet coii adipiscing elit mus, convallis morbium dolor sit',
    },
    {
      title: 'NearBy Activities 4',
      img: '',
      desc: 'Lorem ipsum dolor sit amet coii adipiscing elit mus, convallis morbium dolor sit',
    },
  ];
  
  return (
    <section className='activities-section'>
      <div className="container mx-auto">
      <h1 className="fw-bold text-dark mt-5 mb-3 text-center">Activities Nearby</h1>
      <div className="row mt-2 g-4    ">
        {activityData.map((activity,index)=>(
          <div className="col-6" key={index}>
            <ActivityBlock activity={activity} />
        </div>
        ))}
        
      </div>
      </div>
    </section>
  )
}

export default Activities