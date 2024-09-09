import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaEnvelope } from 'react-icons/fa'; // Import an icon for the message

const NavBar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Check login state from localStorage on component mount
  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    if (storedLoginState === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginToggle = () => {
    const newLoginState = !isLoggedIn;
    setIsLoggedIn(newLoginState);

    // Store the login state in localStorage
    localStorage.setItem('isLoggedIn', newLoginState.toString());

    if (newLoginState) {
      navigate('/');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollingUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`flex justify-between bg-white bg-opacity-5 fixed top-0 w-full transition-transform duration-1000 ${scrollingUp ? 'translate-y-0' : '-translate-y-full'} backdrop-blur-md`}>
      <div className='logo w-20 ml-12'>
        <img src={Logo} alt="logo" />
      </div>
      <div className='ml-20 flex justify-center list-none gap-10 items-center'>
        <li className='text-xl'><Link to="/">Dashboard</Link></li>
        <li className='text-xl'><Link to="/guide">Guide</Link></li>
        <li className='text-xl'><Link to="/vulnerability">Vulnerability</Link></li>
        <li className='text-xl'><Link to="/settings">Settings</Link></li>
      </div>
      <div className='w-80 flex justify-center list-none gap-10 items-center'>
        {isLoggedIn ? (
          <>
            <div className='relative'>
              <Link to={'/message'}><FaEnvelope className='text-black text-2xl' /></Link>
            </div>
            <div className='w-1 bg-black h-6'></div>
            <li className='text-lg text-white rounded-xl font-medium bg-blue-500 hover:bg-blue-400 px-6 py-1 flex justify-center items-center'>
              <Link to="/login" onClick={handleLoginToggle}>Logout</Link>
            </li>
          </>
        ) : (
          <li className='text-lg text-white rounded-xl font-medium bg-blue-500 hover:bg-blue-400 px-6 py-1 flex justify-center items-center'>
            <Link to="/login" onClick={handleLoginToggle}>Login</Link>
          </li>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
