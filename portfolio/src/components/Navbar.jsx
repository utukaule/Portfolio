import logo from '../assets/logo2.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useState } from 'react';
import { Link } from 'react-scroll';

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (

        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-gray-600">
            <div>
                <img src={logo} alt="Logo Image" style={{ width: "50px" }} className="bg-[#0a192f]" />
            </div>
            {/* menu */}

            <ul className='hidden md:flex '>
                
            <li className=''>
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>

                    <li className=''>
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>

                    <li className=''>
                        <Link to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>

                    <li className=''>
                        <Link to='work' smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>

                    <li className=''>
                        <Link to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {/* <FaBars /> */}
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <div>
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                   
                    <li className='py-6 text-4xl '>
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>

                    <li className='py-6 text-4xl '>
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>

                    <li className='py-6 text-4xl '>
                        <Link to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>

                    <li className='py-6 text-4xl '>
                        <Link to='work' smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>

                    <li className='py-6 text-4xl '>
                        <Link to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>

                </ul>
            </div>

            {/* Social menu */}
            <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/utkarsh-kaule-100885222/' target="_blank"> LinkedIn<FaLinkedin size={30} /></a>

                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/utukaule' target="_blank"> Github<FaGithub size={30} /></a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e53d53]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='file:///C:/Users/utkarsh/OneDrive/Desktop/Utkarsh%20Kaule%20Resume.pdf' target="_blank"> Resume<BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>
        </div>

    )
}