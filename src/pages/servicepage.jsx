import React from 'react'
import Navbar from '../components/homecomponents/navbar'
import Hero from '../components/servicecomponents/hero'
import Heading from '../components/servicecomponents/heading'
import Cards from '../components/servicecomponents/cards'
import Process from '../components/servicecomponents/process'
import Bgimg from '../components/servicecomponents/bgimg'
import Connect from '../components/homecomponents/connect'
import Footer from '../components/homecomponents/footer'



const Servicepage = () => {
  return (
    <>
      <main className='bg-[#FBF0DA]' >
        <Navbar/>
        <Hero />
        <Heading />
        <Cards />
        <Process />
        <Bgimg/>
        <Connect/>
        <Footer/>
      </main>
    </>
  )
}

export default Servicepage