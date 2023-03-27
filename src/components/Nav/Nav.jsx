import { useState } from 'react';
import './nav.css'
const Nav=()=>{
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

  const navItems = ['HOME', 'SERVICES', 'ROOMS','NEARBY','ABOUT','CONTACT'];

    return(
        <nav className='container mx-auto'>
            <div className="nav-area">
                <ul className="nav-items d-flex justify-content-between align-items-center  mx-auto ">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className={index === activeIndex ? 'active' : ''}
                            onClick={() => handleClick(index)}
                        >
                         {item}
                        </li>
                     ))}
                 </ul>
            </div>
        </nav>
    )
}

export default Nav