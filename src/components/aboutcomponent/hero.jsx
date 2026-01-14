import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import React, { useEffect } from 'react'
import Customlogo from './customlogo'
import Customlogostroke from './customlogostroke'




const Hero = () => {
  // useEffect(() => {
  //   const para = new SplitText('.rbottom',{type:'lines', linesClass:'split-parent'})
  //   gsap.fromTo(para.lines,{
  //     y:'-100%'
  //   },{
  //     y:'0%'
  //   })
  // }, [])
  useEffect(() => {
    const head = new SplitText('.head',{type:'lines', linesClass:'split-parent'})
    gsap.fromTo(head,{y:'100%'},{y: '0%'})
    gsap.fromTo('.sub',{y:'200%'},{y:'0%'})

  }, [])
  

  return (
    <>
      <section className='h-[100vh] w-full relative'>
        <img src="/imgservice/1st.png" className='absolute h-full w-full object-cover brightness-40 ' alt="" />
        <div className="service-hero ">
          <div className="logo  col-start-2 row-start-2 flex flex-col  justify-center items-center   gap-5">
            <div>
              <div className='absolute'>
                <Customlogo />
              </div>
              <div className='relative top-0'>
                <Customlogostroke />
              </div>
            </div>

            <p className='flex flex-col items-center leading-[0.7]  text-[#FBF0DA] z-99 scroll ' >
              <span className='text-7xl head'>(DEN TOU)</span>  <br />
              <span className='sub'> TRADITION </span>
            </p>
          </div>
          <div className="bleft col-start-1 col-end-2 row-start-3 z-999 flex justify-start items-end  text-[#FBF0DA] scroll   pl-10 ">
            <h2>
              SCROLL
            </h2>
          </div>
          <div className="rbottom col-start-3 row-start-3 flex justify-end items-center z-999 text-[#FBF0DA] aeonikmed pr-10 pt-25 ">
            Since inception, Saisei has taken <br />
            on the challenge of designing <br />
            spaces that not only stand the test <br />
            of time but evolve with it— <br />
            enriching the lives of those who <br />
            experience them.
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero