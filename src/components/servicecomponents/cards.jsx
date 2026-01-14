import React from 'react'
import { cardsText } from '../../../constants'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';
import { useEffect, useRef } from 'react'

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
const Cards = () => {
    const mainRef = useRef(null)
    // const imgRef = useRef(null);
    useEffect(() => {
        const content = gsap.context(() => {
            const cards = gsap.utils.toArray(".cards");

            cards.forEach((card, i) => {
                const isLast = i === cards.length - 1;

                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    end: isLast ? '+=100%' : '+=100%',
                    pin: !isLast,
                    pinSpacing: isLast ? true : false,
                    anticipatePin: 1
                });
            });
            cards.forEach((card, i) => {
                if (i === 0 || i === cards.length - 1) return;
                gsap.fromTo(
                    cards[i - 1],
                    {
                        scale: 1, filter: 'brightness(1)'
                    }, {
                    scale: 0.92,
                    filter: 'brightness(0.7)',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,   // when this panel reaches top and pins
                        start: "top top",
                        end: "+=30%",
                        scrub: true
                    }
                }
                )

            });

            // card inside animation 

            const paras = gsap.utils.toArray('p')
            paras.forEach((item) => {
                const para = new SplitText(item, { type: 'lines', linesClass: 'split-parent' })
                // gsap.set(para.lines, { y: '-100%' });
                gsap.fromTo(para.lines, {
                    y: '-100%'
                }, {
                    y: '0%',
                    ease: 'power1.inOut',
                    duration: 1,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top bottom',
                        end: 'bottom 20%',

                    }
                })
            })

            const numbers = gsap.utils.toArray('span')
            numbers.forEach((item) => {
                const number = new SplitText(item, { type: 'lines', linesClass: 'split-parent' })
                gsap.fromTo(number.lines, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        // end: 'bottom 20%',
                    }
                });
            });

            const images = gsap.utils.toArray('.img');
            images.forEach((item) => {
                gsap.fromTo(item, {
                    x: '-100%'
                }, {
                    x: '0%',
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%'
                    }
                })
            })
            const descs = gsap.utils.toArray('.ldesc');
            descs.forEach((item) => {
                const desc = new SplitText(item, { type: 'lines', linesClass: 'split-parent' })
                gsap.fromTo(desc.lines, {
                    y: '-100%',
                }, {
                    y: '0%',
                    duration: 0.7,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top bottom'
                    }
                })
            })
            const lines = gsap.utils.toArray('.listline');
            lines.forEach((item) => {
                gsap.fromTo(item, {
                    x: '-300%'
                }, {
                    x: '0%',
                    duration: 0.5,
                    stagger: 0.03,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top bottom',
                    }
                })
            })
            const constants = gsap.utils.toArray('.constant')
            constants.forEach((item) => {
                const constant = new SplitText(item, { type: 'lines', linesClass: 'split-parent' })
                gsap.fromTo(constant.lines, {
                    y: '-100%'
                }, {
                    y: '0%',
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%'
                    }
                })
            })
        })
        return () => content.revert();
    }, [])

    return (
        <>
            <section ref={mainRef} className=' bg-[#1E1005]'>
                {cardsText.map(({ number, title, desc, img, listDesc1, listDesc2, listDesc3, listDesc4 }) => (
                    <div className='cards h-[100vh]  bg-[#1E1005] relative z-0'>
                        <div className="heading px-10 py-10 border-white border-y">
                            <h1 className='base-beige scroll text-7xl'>{title}</h1>
                        </div>
                        <div className="service-cards px-10 py-10">
                            <div className="left flex flex-col gap-[40vh] justify-center items-center">
                                <h2 className='base-beige aeonikmed font-bold -tracking-wider constant overflow-hidden'>ABOUT</h2>
                                <span className='base-beige scroll text-[200px] '>{number}</span>
                            </div>
                            <div className="middle col-start-4 col-end-8 flex flex-col gap-[25vh]">
                                <div className='middle-top'>
                                    <p className='base-beige side text-2xl split-parent'>
                                        {desc}
                                    </p>
                                </div>
                                <div className="middle-bottom aeonikmed base-beige ">
                                    <h2 className='font-bold uppercase constant overflow-hidden'>What's Included</h2>
                                    <div className='flex flex-col gap-2 mt-5   overflow-hidden'>
                                        <h3 className='ldesc'>{listDesc1}</h3>
                                        <hr className='listline' />
                                        <h3 className='ldesc'>{listDesc2}</h3>
                                        <hr className='listline' />
                                        <h3 className='ldesc' >{listDesc3}</h3>
                                        <hr className='listline' />
                                        <h3 className='ldesc' >{listDesc4}</h3>
                                        <hr className='listline' />
                                    </div>
                                </div>
                            </div>
                            <div className="right col-start-9 col-end-11  overflow-hidden">
                                <img src={img} className='img'
                                    //  ref={imgRef}
                                    alt="" />
                            </div>
                        </div>

                    </div>
                ))}


            </section>
        </>
    )
}

export default Cards