import React from 'react'
import Navbar from '../components/homecomponents/navbar'
import Hero from '../components/aboutcomponent/hero'
import Purpose from '../components/aboutcomponent/purpose'
import Team from '../components/aboutcomponent/team'
import Stand from '../components/aboutcomponent/stand'
import Awards from '../components/aboutcomponent/awards'
import Chousensha from '../components/aboutcomponent/chousensha'
import Connect from '../components/homecomponents/connect'
import Footer from '../components/homecomponents/footer'



const Aboutpage = () => {
  return (
    <>
      <main className='bg-[#FBF0DA]'>
        <Navbar/>

        <Hero />
        <Purpose />
        <Team/>
        <Stand/>
        <Awards/>
        <Chousensha/>
        <Connect/>
        <Footer/>
      </main>
    </>
  )
}

export default Aboutpage