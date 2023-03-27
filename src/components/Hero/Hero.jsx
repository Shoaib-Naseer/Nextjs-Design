import './hero.css'
import facebookIcon from '../../assets/logos/icons/fb-icon.svg'
import instagramIcon from '../../assets/logos/icons/insta-icon.svg'
import linkedInIcon from '../../assets/logos/icons/linkedin-icon.svg'
const Hero=()=>{
    return(
        <>
            <main className='hero-section d-flex  align-center'>
                <div className='hero-text-container d-flex flex-column justify-content-around mx-auto text-light '>
                    
                    <div className='pt-2'> 
                        <div className='d-flex justify-content-between pb-4 '>
                            <div>SINCE</div>
                            <div>OLD QUEBEC</div>
                            <div>1990</div>
                        </div>
                    <div className="text-xl text-center text-uppercase lh-1">
                        The <span className='fw-bold'>Perfect Escape</span><br /> for Couples
                    </div>
                    </div>
                    <div className='text-lg text-center pb-6'>
                    The Most <span className="fw-bold">Romantic Hotel</span> of Charm and <br /> Character
                    </div>
                    
                </div>

                {/* Sidebar icons in Hero  */}
                <div className="sidebar-icons d-flex flex-column gap-10">
                    <div className="first-icon">
                        <img src={linkedInIcon} alt="" />
                    </div>
                    <div className="second-icon">
                        <img src={facebookIcon} alt="" />
                    </div>
                    <div className="third-icon">
                        <img src={instagramIcon} alt="" />
                    </div>
                </div>
            </main>
        </>
    )

}
export default Hero