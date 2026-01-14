import React from 'react'
import CustomLogo from './customlogo'
import CustomLogoStroke from './customlogostroke'



const Hero = () => {
  return (
    <>
      <section className='h-[100vh] w-full relative'>
        <img src="/imgservice/1st.png" className='absolute h-full w-full object-cover brightness-40 ' alt="" />
        <div className="service-hero ">
          <div className="logo  col-start-2 row-start-2 flex flex-col  justify-center items-center">
            <CustomLogo className='' />
            <div className=" z-999 text-[#FBF0DA] flex flex-col  justify-center items-center">
              <h3 className='uppercase scroll text-5xl'  >(FU KU MU)</h3>
              <h4 className='uppercase scroll text-[20px] '>Service</h4>
            </div>
          </div>
          <div className='col-start-2 row-start-2 flex flex-col  justify-center items-center mb-20'>
          <CustomLogoStroke className='z-[199] ' />
          </div>
          <div className="bleft col-start-1 col-end-2 row-start-3 z-999 flex justify-start items-end  text-[#FBF0DA] scroll  py-10 pl-10">
            <h2>
              SCROLL
            </h2>
          </div>
          <div className="rbottom col-start-3 row-start-3 flex justify-end items-center z-999 text-[#FBF0DA] aeonikmed pr-10 pt-15">
            At Saisei, 服務 (service) is the <br />
            foundation of everything we do. <br />
            Our approach goes beyond  <br />
            fulfilling client needs—it’s about <br />
            delivering thoughtful, innovative <br />
            solutions that are perfectly aligned <br />
            with your vision and the <br />
            environment
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero