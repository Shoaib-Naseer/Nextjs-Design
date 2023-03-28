import './services.css'
import Icon from '../../assets/key.svg'

import ServiceBox from './Service-Box/ServiceBox'
const Services = () => {
    const serviceTitles=[{title:'Security1'},{title:'Security2'},{title:'Security3'},{title:'Security4'},{title:'Security5'},{title:'Security6'},{title:'Security7'},{title:'Security8'}]
  return (
    <section className='services-section'>
        <div className='services-area container mx-auto'>
            <div className="services-header d-flex justify-content-between pb-4">
                <h1 className='fw-bold w-40 text-dark'>Services</h1>
                <div className='w-60 text-md'>Lorem ipsum dolor sit amet coii adipiscing elit mus, convallis morbium dolor sit amet coii adipiscing elit mus, convallis morbi</div>
            </div>

            <div className="services-boxes row g-3">
                {serviceTitles.map((val,index)=>(
                    <ServiceBox key={index} headline={val.title} icon={Icon}/>
                ))}
                {/* <ServiceBox headline={'Sec'}/> */}
                
                
            </div>


        </div>
    </section>
  )
}

export default Services