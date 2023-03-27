import leftLogo from '../../assets/logos/left-logo.svg'
import logo from '../../assets/logos/main-logo.svg'
import TopMenu from '../Menu/TopMenu'

import './header.css'
const Header=()=>{
    return(
        <>
            <header className='header-area d-flex justify-content-between align-items-center container mx-auto'>
                <div className='left-logo'>
                    <img src={leftLogo} alt="Side logo" />
                </div>
                <div className='main-logo'>
                    <img src={logo} alt="Main Logo" style={{width:'276px',height:'67px'}} />
                </div>
                <div className='breadcrumb '>
                    <ul className='d-flex flex-wrap font-gray text-xm'>
                        <li>Aneyro</li>
                        <li>Hotel Le Clas Saint -Louis Quebec</li> 
                    </ul>
                </div>

                <TopMenu />
            </header>
            
        </>
    )

}
export default Header