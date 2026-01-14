import React from 'react'
import Navbar from '../components/homecomponents/navbar'
import Hero from '../components/sustainabilitycomponent/hero'
import Heading from '../components/sustainabilitycomponent/heading'
import Carousel from '../components/sustainabilitycomponent/carousel'
import Journal from '../components/sustainabilitycomponent/journal'
import Bgimg from '../components/sustainabilitycomponent/bgImg'
import Connect from '../components/homecomponents/connect'
import Footer from '../components/homecomponents/footer'




const Sustainability = () => {
    return (
        <>
        <main className='bg-[#FBF0DA]'>
        <Navbar/>
        <Hero/>
        <Heading/>
        <Carousel/>
        <Journal/>
        <Bgimg/>
        <Connect/>
        <Footer/>
        </main>
        </>
    )
}

export default Sustainability