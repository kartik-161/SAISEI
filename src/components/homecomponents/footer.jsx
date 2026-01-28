import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
import { Link } from 'react-router-dom';
import Footercustomlogo from './footercustomlogo';
import Footercustomstroke from './footercustomstroke';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const listRef = useRef();
    // const textRef = useRef();
    const underlineRef = useRef(null);
    useEffect(() => {

        gsap.fromTo('.line', {
            x: '-120%'
        },
            {
                x: '0%',
                duration: 3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.footer-btm',
                    start: 'top bottom',

                }

            })

        document.fonts.ready.then(() => {

            const list = new SplitText(listRef.current, { type: 'lines', linesClass: 'split-parent' });
            gsap.from(list.lines, {
                duration: 1.5,
                yPercent: 100,
                ease: "power4",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: listRef.current,
                    start: 'top bottom',
                }
            });
        });
        const texts = gsap.utils.toArray('.bottom-text')
        texts.forEach((item) => {
            document.fonts.ready.then(() => {
                const split = new SplitText(item, { type: 'chars', linesClass: 'split-parent' });
                //mouse is over the text
                item.addEventListener('mouseenter', () => {
                    gsap.to(split.chars, {
                        duration: 1,
                        color: '#A29685',
                        ease: "power1",
                        stagger: 0.05,
                        // scrollTrigger: {
                        //     trigger: textRef.current,
                        //     start: 'top bottom',
                        // }
                    });
                });
                item.addEventListener("mouseleave", () => {
                    gsap.to(split.chars, {
                        color: "#fbf0da", // original color
                        stagger: 0.02,
                        duration: 0.5,
                        ease: "power1",
                    });
                });
            });

        })


        document.fonts.ready.then(() => {
            document.querySelectorAll('.head').forEach(heading => {
                const head = new SplitText(heading, { type: 'lines', linesClass: 'split-parent' });
                gsap.from(head.lines, {
                    duration: 1.5,
                    yPercent: 100,
                    ease: "power4",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: heading,
                        start: 'top bottom',
                    }
                });
            });

            document.querySelectorAll('.text').forEach(text => {
                const split = new SplitText(text, { type: 'lines', linesClass: "split-parent" });
                gsap.from(split.lines, {
                    duration: 1.5,
                    yPercent: 100,
                    ease: 'power4',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: text,
                        start: 'top bottom'
                    }
                });
            });
        });


        // const handleover = () => {
        //     gsap.to(underlineRef.current, {
        //         width: '100%',
        //         duration: 1.5,
        //         ease: 'power4',
        //     });
        // }
        // const handleleave = () => {
        //     gsap.to(underlineRef.current, {
        //         width: '0%',
        //         duration: 1.5,
        //         ease: 'power4',
        //     });
        // }
        // textRef.current.addEventListener('mouseenter', handleover);
        // textRef.current.addEventListener('mouseleave', handleleave);
        // return () => {
        //     textRef.current.removeEventListener('mouseenter', handleover);
        //     textRef.current.removeEventListener('mouseleave', handleleave);
        // }
    }, []);



    return (
        <section className='h-[130vh] bg-[#1e1005] w-full flex flex-col items-center pt-20 text-[#fbf0da] relative'>
            <div className="wrapper h-[100vh] w-[90vw] flex flex-col  pt-20 justify-center footer relative">
                <div className="left col-start-1 col-end-5 row-start-1">
                    <div className="left-wrapper "> 
                        <ul ref={listRef} className='uppercase scroll text-4xl flex flex-col gap-5 mouse-pointer'>
                            <Link   to='/'> <li>(1)&nbsp; home</li> </Link>
                            <Link  to='/about'>    <li>(2)&nbsp; about </li> </Link>
                            <Link  to='/project'>   <li>(3)&nbsp; project</li> </Link>
                            <Link  to='/sustainability'>  <li>(4)&nbsp; sustainability</li> </Link>
                            <Link  to='/service'>  <li>(5)&nbsp; service</li> </Link>
                            <Link  to='/journal'>   <li>(6)&nbsp; journal</li> </Link>
                            <Link  to='/contact'> <li>(7)&nbsp; contact</li> </Link>

                        </ul>       
                    </div>
                </div>
                <div className="right col-start-6 col-end-11 row-start-1 ">
                    <div className="right-upper  ">
                        <Footercustomlogo className='bg-red-900' />

                    </div>
                    <div className="right-lower-left  uppercase flex flex-col gap-10 mt-15 text">
                        <div className='lower-top'>
                            <h3 className='scroll  heading'>Email</h3>
                            <p className='aeonikmed text'>contact@demo</p>
                        </div>
                        <div className="lower-middle">
                            <h3 className='scroll heading '>phone</h3>
                            <p className='aeonikmed text'>+91 4324-3822-39</p>
                        </div>
                        <div className="lower-bottom">
                            <h3 className='scroll heading'>social</h3>
                            <ul className='aeonikmed text'>
                                <li>instagram</li>
                                <li>facebook</li>
                                <li>linked-in</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lower-wrapper absolute top-1/2 right-50">

                        <div className="right-lower-right flex flex-col gap-10  ">
                            <div className="lower-top head">
                                <h3 className='scroll uppercase heading '>office</h3>
                                <p></p>
                            </div>
                            <div className="lower-middle">
                                <h4 className='aeonikmed text' >Monday to Friday: <br />
                                    9:00 AM - 6:00 PM</h4>
                            </div>
                            <div className="lower-bottom">
                                <p className='aeonikmed text'>139.8134° E <br />
                                    35.7104° N</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="stroke col-start-6 col-end-11 row-start-1">
                    <Footercustomstroke />
                </div>
            </div>
            <hr className='border-0.5 bg-white w-full mx-auto absolute bottom-30 line' />
            <div className="footer-btm  h-[10vh] w-full absolute bottom-0 flex items-center justify-around gap-30">

                <div className="right  relative">
                    <p  className='aeonikmed text bottom-text'>© 25 SAISEI. All rights reserved.</p>
                    <span ref={underlineRef} className='w-full h-0.5 bg-white '></span>
                </div>

                <div className="middle ">
                    <p  className='aeonikmed text bottom-text'>Terms of Service</p>
                    <span ref={underlineRef} className='w-full h-0.5 bg-white '></span>
                </div>

                <div className="left  relative">
                    <p  className='aeonikmed text bottom-text'>Privacy Policy</p>
                    <span ref={underlineRef} className='w-full h-0.5 bg-white '></span>
                </div>
            </div>

        </section>
    )
}

export default Footer