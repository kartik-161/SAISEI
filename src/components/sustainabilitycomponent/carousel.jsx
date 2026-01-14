import React from 'react'
import { carouselList } from '../../../constants'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';
import { useEffect, useRef } from 'react'

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
    const mainRef = useRef(null)
    useEffect(() => {
        const content = gsap.context(() => {
            const cards = gsap.utils.toArray(".cards")
            const loop = document.querySelectorAll('p').forEach((item) => {
                const items = new SplitText(item, { type: 'lines', linesClass: 'split-parent' })
                gsap.fromTo(items.lines, {
                    y: '-50%',
                }, {
                    y: '0%',
                    duration: 1,
                    stagger: 0.05,
                    // ease: 'power1.in',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top bottom'
                    }
                })
            })
            //         const paragraph = gsap.utils.toArray('p');
            //         const para = new SplitText(paragraph, { type: 'lines', linesClass: 'split-parent' })
            // const heading = gsap.utils.toArray('h2');
            // const sideText = gsap.utils.toArray('span');

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
                });
            });
        })
        return () => content.revert();
    }, [])

    return (
        <>
            <section ref={mainRef} className=' bg-[#1E1005]'>
                {carouselList.map(({ number, title, desc, bgImg, rightText }) => (
                    <div className='cards h-[100vh]  bg-[#1E1005] relative  '>
                        <img src={bgImg} className=' absolute inset-0  object-cover brightness-50' alt="" />

                        <div className='sustainability-carousel  px-20 py-20'>
                            <div className="left col-start-1 row-start-1 col-end-3 base-beige flex flex-col gap-[40vh]">
                                <div className="left-top  z-99">
                                    <span className='scroll text-2xl' >
                                        {number}
                                    </span>
                                </div>
                                <div className="left-bottom  flex flex-col gap-5 z-50">
                                    <h2 className='aeonikmed font-bold'>{title}</h2>
                                    <p className='side '>{desc}</p>
                                </div>
                            </div>
                            <div className="right col-start-9   flex  justify-center items-center z-40">
                                <span className='scroll base-beige uppercase'>{rightText}</span>
                            </div>
                        </div>

                    </div>
                ))}


            </section>
        </>
    )
}

export default Carousel