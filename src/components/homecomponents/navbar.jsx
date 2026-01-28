import React from 'react'
import CustomLogo from './customlogo'
import gsap from 'gsap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [hide, setHide] = useState(false);
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo('.logoNav', { y: '100%' }, { y: '0%', duration: 2, ease: 'power3.out' })
    gsap.fromTo('.rightText', { y: '200%' }, { y: '0%', duration: 2, ease: 'power3.out' })
    gsap.fromTo('.line', { x: '-120%' }, { x: '0%', duration: 3, ease: 'power3.out' })


    let lastScroll = 0; // local variable — no need for useState

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // 🧭 Hide / show navbar
      if (currentScroll > lastScroll && currentScroll > 50) {
        setHide(true);
      } else {
        setHide(false);
      }
      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    gsap.to('.navbar', {
      y: hide ? "-200%" : "0%",
      duration: 0.3,
      ease: "power3.inOut",
    })
  }, [hide])

  // useEffect(() => {
  //   if(open){
  //     document.body.style.overflow  = 'hidden';
  //   }else{  
  //     document.body.style.overflow = '';
  //   }
  // }, [open])


  return (
    <>
      <section
        className={`navbar fixed top-0 left-0 z-[99] w-full bg-transparent  mix-blend-difference ${hide ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="navbar-grid px-10 ">
          <div className="  col-start-1 h-20  cursor-pointer  overflow-hidden">
            <Link to='/'><CustomLogo className='w-15 h-full logoNav' /></Link>

          </div>

          <div className='  col-start-9 text-white flex justify-center   overflow-hidden '>
            <div className='flex jsutify-center '>

              <p className='  side  font-bold rightText  h-full flex justify-center items-center '>
                EST - 2022
              </p>
            </div>
          </div>
          {/* <div className="right col-start-10 flex justify-end items-center">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-10 h-10 text-white z-[99] cursor-pointer transition-transform duration-300 ease-in-out ${open ? 'rotate-180 ' : ''}`}
              onClick={() => setOpen(!open)}>
              <line x1="3" x2="21" y1="9" y2="9"></line>
              <line x1="3" x2="21" y1="15" y2="15"></line>
            </svg>
          </div> */}

        </div>
        <hr className='text-white w-full line' />

        {/* {open && (
          <div className='  z-[100] bg-black  h-[100vh] w-[100vw]'>
            <div className='flex flex-col justify-center items-center h-full'>
            
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/project'>Project</Link>
                </li>
                <li>
                  <Link to='/sustainability'>Sustainability</Link>
                </li>
                <li>
                  <Link to='/service'>Service</Link>
                </li>
                <li>
                  <Link to='/journal'>Journal</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        )} */}
      </section>
    </>
  );
};

export default Navbar;