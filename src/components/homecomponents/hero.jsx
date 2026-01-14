import React, { useEffect, useRef } from 'react'
import gsap from 'gsap/all'
import { SplitText } from 'gsap/all'
import CustomLogo from './customlogo'
import Sidetext from './sidetext'
import CustomLogoStroke from './customlogostroke'


gsap.registerPlugin(SplitText);

const Hero = () => {
  useEffect(() => {


  }, [])

  // const paraRef = useRef(null)
  const paraRef = useRef(null);

  useEffect(() => {
    if (!paraRef.current) return;

    // create SplitText instance

    const split = new SplitText(paraRef.current, { type: "lines" });
    // animate lines
    gsap.from(split.lines, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "expo.out",
      duration: 1,
    });

    // cleanup on unmount
    return () => split.revert();
  }, []);

  return (
    <main className=' relative h-screen w-full  px-20'>
      <img src='/imghome/1st.png' className='absolute inset-0 w-full h-full object-cover brightness-50' alt="background image" />
      <div className="relative z-10 flex items-end justify-right h-full">
        <CustomLogo className="w-310 h-106  absolute" />
        <CustomLogoStroke className='relative w-310 h-106 z-10 ' />
      </div>
      <div className='absolute top-145 right-40 w-[280px] z-10 flex flex-col justify-center  p-4'>
        <Sidetext className='w-25 h-25' />
        <p ref={paraRef} className='text-white  font-aeonik-medium side leading-[1.3] text-md  '>
          Meaning to "rebirth" or "regeneration," reflecting a commitment to sustainable and regenerative design practices, aiming to redefine urban environments.
        </p>
        <span className='scroll text-[#fbf0db] mt-15'>SCROLL</span>
      </div>
    </main>
  )
}

export default Hero