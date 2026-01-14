
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Heading = () => {
    const imgRef = useRef();
    const imgRef2 = useRef();
    const imgRef3 = useRef();
    const imgRef4 = useRef();
    const imgRef5 = useRef();
    const headingRef = useRef();
    const svgRef = useRef();

    useEffect(() => {
        document.fonts.ready.then(() => {
            const split = new SplitText(headingRef.current, { type: "chars" });
            gsap.fromTo(
                split.chars,
                { y: 50, opacity: 0 },  // start 50px down and invisible
                {
                    y: 0,                 // move to original position
                    opacity: 1,           // fade in
                    stagger: 0.05,        // one after another
                    ease: "expo.out",     // smooth easing
                    duration: 1,
                    scrollTrigger: {
                        trigger: '.heading-wrapper',
                        start: 'center bottom',
                    }
                });
        });
        // gsap.to(svgRef.current,{
        // y:20,
        //     scrollTrigger:{
        //         trigger:'.wrapper',
        //         start: 'bottom bottom',
        //         end:'bottom top',
        //         scrub: 1.5,
        //     }
        // })
        gsap.to(imgRef.current, {
            y: -500,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "center bottom",
                end: "bottom top",
                scrub: 1.5,
            },
        });
        gsap.to(imgRef2.current, {
            y: -500,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            },
        });
        gsap.to(imgRef3.current, {
            y: -500,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".heading-wrapper",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            },
        });
        gsap.to(imgRef4.current, {
            y: -500,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".heading-wrapper",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            },
        });
        gsap.to(imgRef5.current, {
            y: -500,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".heading-wrapper",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            },
        });
    }, []);
    return (
        <>
            <section className='h-[200vh] w-full bg-[#fbf0db] pt-[100px] '>
                <div className=" wrapper relative  h-[95vh] w-full flex justify-center  ">
                    <div className="middle-img">
                        <img src="/imgservice/3rd.png" alt="middle-img" className='h-[700px] w-[650px] mt-[10px]' />
                    </div>
                    <div className="left-img">
                        <img src="/imgservice/2nd.png" ref={imgRef} className='absolute top-[80vh] left-10 h-[200px] w-[350px]' alt="left-img" />
                    </div>
                    <div className="right-img">
                        <img src="/imgservice/4th.png" ref={imgRef2} className='absolute top-[75vh] right-10 h-[300px] w-[200px]' alt="right-img" />
                    </div>
                </div>
                <div className="heading-wrapper h-[96vh] w-full  relative ">
                    <img src="/imgservice/5th.png" ref={imgRef3} className="h-[300px] left-img w-[200px] absolute top-[50vh] left-10 z-99" alt="left" />
                    <img src="/imgservice/7th.png" ref={imgRef4} className="h-[175px] center-img w-[175px] absolute right-[43%] bottom-1/8 z-99" alt="center" />
                    <img src="/imgservice/6th.png" ref={imgRef5} className="h-[125px] right-img w-[225px] absolute right-10 bottom-[30vh] z-99" alt="right" />
                    <h1 className="scroll absolute left-80 top-[25%] leading-[0.9] text-center text-[230px] text-[#1e1005] uppercase" ref={headingRef}>simplicity  <br /> in motion</h1>
                   
                </div>
            </section>
        </>
    )
}

export default Heading