import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../components/homecomponents/navbar'
import Hero from '../components/homecomponents/hero'
import Tradition from '../components/homecomponents/tradition'
import Heading from '../components/homecomponents/heading'
import Carousel from '../components/homecomponents/carousel'
import Architecture from '../components/homecomponents/architecture'
import Service from '../components/homecomponents/service'
import Image from '../components/homecomponents/image'
import Connect from '../components/homecomponents/connect'
import Footer from '../components/homecomponents/footer'

const Homepage = () => {
    return (
        <>
        <main className='bg-[#FBF0DA]'>
          <Navbar />
          <Hero />
          <Tradition />
          <Heading />
          <Carousel />
          <Architecture />
          <Service />
          <Image />
          <Connect />
          <Footer />
        </main>
        </>
    )
}

export default Homepage