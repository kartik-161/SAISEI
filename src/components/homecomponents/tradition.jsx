import React, { useEffect, useRef } from 'react'
import FancyButton from './Fancybutton'
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/all'
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Tradition = () => {
    const paraRef = useRef();
    const leftdownRef = useRef();
    const svgRef = useRef();
    const containerRef = useRef();
    const imageRef = useRef();
    const rightimageRef = useRef();

    useEffect(() => {
        const paths = svgRef.current.querySelectorAll("path");
         document.fonts.ready.then(() => {
        const split = new SplitText(paraRef.current, { type: "lines", linesClass: "split-parent" });
        gsap.from(split.lines, {
            duration: 1.5,
            yPercent: 100,
            ease: "power4",
            stagger: 0.1,
            scrollTrigger: {
                trigger: paraRef.current,
                start: 'top bottom',
            }
        });
    });
    
         document.fonts.ready.then(() => {
        const left = new SplitText(leftdownRef.current, { type: "lines", linesClass: "split-parent" });
        gsap.from(left.lines, {
            duration: 1.5,
            yPercent: 100,
            ease: "power4",
            stagger: 0.1,
            scrollTrigger: {
                trigger: leftdownRef.current,
                start: 'top bottom',

            }
        });
    });
        gsap.fromTo(svgRef,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "power2.out" }
        );
        paths.forEach((path) => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
        });
        gsap.fromTo(
            paths,
            { y: -30, strokeDashoffset: (i) => paths[i].getTotalLength(), opacity: 0 }, // start: above + hidden
            {
                y: 0,
                strokeDashoffset: 0, // draws path
                opacity: 1,
                duration: 1.5,
                // stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: svgRef.current,
                    start: "top bottom",
                    end: "top 30%",
                    //   toggleActions: "play none none reverse", 
                },
            }
        );
        gsap.fromTo(
            imageRef.current,
            { x: "-100%", opacity: 0 }, // start fully hidden left + invisible
            {
                x: "0%",                   // final centered position
                opacity: 1,
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "top 50%",
                    //   toggleActions: "play none none reverse",
                },
            }
        );
        gsap.fromTo(
            rightimageRef.current,
            { x: "-100%", opacity: 0 }, // start fully hidden left + invisible
            {
                x: "0%",                   // final centered position
                opacity: 1,
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: rightimageRef.current,
                    start: "bottom bottom",
                    end: "top 50%",
                    //   toggleActions: "play none none reverse",
                },
            }
        );

    }, [])

    return (
        <>
            <section className='h-[125vh] w-full bg-[#fbf0db] flex justify-center items-center relative'>
                <div className="center overflow-hidden" ref={containerRef}>
                    <img src="/imghome/2nd.png" ref={imageRef} alt="Centered Img" className='h-220 w-180' />
                </div>
                <div className="left-upper absolute scroll top-35 side left-10 flex flex-col justify-center  items-center ">
                    <svg
                        ref={svgRef}
                        xmlns="http://www.w3.org/2000/svg"
                        width={100}
                        height={100}
                        viewBox="0 0 130 25"
                        fill={"black"}
                    // stroke={'#06d6a0'}
                    // strokeWidth={3}
                    // className={className}
                    >
                        <path d="M56.56 10.264C56.56 10.84 56.048 10.968 55.6 10.968H34.16C31.856 10.968 28.336 11.224 25.904 11.672L24.368 8.92001C29.168 9.30401 33.84 9.43201 35.056 9.43201H48.688L50.864 6.74401C51.056 6.48801 51.504 5.97601 51.824 5.97601C52.144 5.97601 52.912 6.48801 53.04 6.61601L55.92 9.30401C56.304 9.68801 56.56 9.88001 56.56 10.264ZM61.04 26.392C61.04 27.096 60.336 27.096 60.08 27.096H40.368C38.512 32.024 31.792 46.168 29.424 50.264C30.768 50.136 37.232 49.432 38.704 49.24C40.432 48.984 48.944 47.832 50.864 47.576C47.664 40.792 46.256 39.384 44.72 38.104L45.232 37.656C56.88 45.336 58.288 51.8 58.288 53.656C58.288 55.256 57.008 56.728 55.792 56.728C54.512 56.728 53.872 55.128 52.912 52.568C52.08 50.456 51.632 49.432 51.248 48.472C34.544 52.952 30.448 54.104 24.816 54.872C24.624 55.96 24.432 57.112 23.408 57.112C22.832 57.112 22.704 56.792 22.448 56.152L19.632 50.584C20.72 50.776 21.36 50.904 22.448 50.904C23.728 50.904 24.688 50.84 27.76 50.456C29.936 45.464 34.288 33.432 35.568 27.096H27.76C26.48 27.096 22.576 27.224 19.504 27.864L18.032 25.048C21.296 25.368 25.328 25.56 28.656 25.56H53.168L55.152 23.064C55.28 22.936 55.792 22.296 56.176 22.296C56.496 22.296 57.136 22.744 57.392 22.936L60.4 25.432C60.656 25.624 61.04 25.944 61.04 26.392ZM21.168 5.33601C21.168 6.10401 19.312 6.36001 18.608 6.42401C15.472 13.08 13.616 16.152 11.76 18.904L13.616 19.736C14.256 20.056 14.384 20.312 14.384 20.568C14.384 21.208 13.744 21.592 12.912 22.104C12.912 34.136 12.912 39.896 12.976 54.296C12.976 54.744 13.104 56.856 13.104 57.304C13.104 59.032 11.44 59.8 10.352 59.8C9.39197 59.8 8.75197 59.224 8.75197 57.944C8.75197 57.624 8.81597 56.024 8.87997 55.704C9.19997 49.112 9.26397 45.272 9.51997 21.976C5.67997 27.032 2.60797 29.592 0.559974 31.384L0.0479736 31.128C5.93597 23.832 10.416 15.512 14.128 6.87201C15.28 4.12001 15.344 3.54401 15.408 0.536011L20.336 4.05601C20.848 4.44001 21.168 4.63201 21.168 5.33601Z" />
                        
                        <path d="M89.52 30.936C89.52 32.344 88.624 33.496 87.344 33.496C85.936 33.496 85.808 32.856 84.784 28.632C83.824 28.824 82.48 29.144 79.28 29.656V42.328C79.28 43.736 79.6 56.856 79.6 57.176C79.6 58.968 77.936 59.672 76.976 59.672C75.824 59.672 75.824 58.968 75.824 58.52C75.824 58.2 76.144 54.744 76.144 54.04C76.272 48.664 76.272 47.64 76.208 30.104C74.8 30.296 68.592 31.064 67.376 31.384C66.48 32.92 66.352 33.112 65.968 33.112C65.52 33.112 65.264 32.728 65.008 31.96L63.408 26.968C65.456 27.672 68.464 27.736 72.688 27.8C75.248 24.536 81.2 15.832 82.48 13.016C82.992 11.8 82.992 11.416 82.992 10.776L87.92 13.848C88.432 14.168 88.432 14.168 88.432 14.616C88.432 15 88.24 15.256 87.92 15.32C86.448 15.768 86.128 15.832 85.36 15.896C81.584 20.888 76.08 26.2 74.352 27.8C80.624 27.8 81.328 27.8 84.464 27.608C83.632 24.856 83.12 24.024 82.544 23.192V22.936C89.52 26.776 89.52 30.744 89.52 30.936ZM74.032 38.808C74.032 39.512 73.904 39.576 72.24 40.024C70.512 44.888 66.8 52.632 63.344 55.448L63.152 55.256C66.672 47.96 68.4 41.176 68.4 38.104C68.4 37.08 68.336 36.376 68.272 35.736L73.584 37.848C73.776 37.976 74.032 38.36 74.032 38.808ZM121.776 13.208C121.776 13.848 121.072 13.848 120.816 13.848H105.2C103.28 17.176 101.488 20.312 97.584 25.048C104.56 24.92 108.72 24.728 112.944 24.28C112.432 23.64 109.68 20.824 109.04 20.184V19.864C111.408 20.76 114.544 22.04 116.592 23.448C117.232 23.896 120.304 26.072 120.304 28.248C120.304 30.104 119.216 30.808 118.128 30.808C116.528 30.808 115.888 29.464 115.44 28.44C114.8 26.968 114.16 26.008 113.52 25.176C110.896 25.88 97.456 28.248 94.448 28.888C93.936 30.424 93.808 30.744 93.104 30.744C92.656 30.744 92.272 30.552 91.952 29.656L89.904 24.472C92.272 25.24 94.128 25.24 96.752 25.112C98.672 21.656 100.208 16.728 100.848 13.848H98.864C97.584 13.848 93.68 14.04 90.608 14.616L89.136 11.864C92.4 12.12 96.432 12.312 99.76 12.312H102.128C102.128 6.29601 102.128 5.33601 101.04 2.13601L106.864 3.80001C107.504 3.99201 107.696 4.18401 107.696 4.50401C107.696 5.01601 107.632 5.08001 105.52 6.74401V12.312H114.672L116.336 10.072C116.912 9.30401 117.104 9.17601 117.424 9.17601C117.68 9.17601 117.808 9.30401 118.576 9.94401L121.136 12.248C121.52 12.568 121.776 12.76 121.776 13.208ZM122.608 54.616C122.608 55.704 121.712 56.152 121.392 56.344C119.536 57.432 114.736 57.688 112.432 57.688C106.864 57.688 105.968 56.728 105.904 53.464C105.776 50.136 105.84 35.16 105.584 32.216C105.52 31.192 105.264 30.36 104.752 29.016L110.64 30.872C110.896 30.936 111.408 31.192 111.408 31.576C111.408 31.896 111.216 32.088 111.024 32.28C110.768 32.536 109.36 33.688 109.104 33.88C109.104 37.464 108.976 41.048 108.976 44.632C108.976 46.424 109.04 49.944 109.104 51.608C109.104 52.824 109.168 54.168 112.304 54.168C117.872 54.168 117.872 54.04 119.792 45.72H120.112C120.24 46.808 120.944 51.8 121.2 52.568C121.328 53.016 121.584 53.208 122.032 53.592C122.352 53.848 122.608 54.168 122.608 54.616ZM81.776 4.50401C81.776 4.95201 81.456 5.14401 81.136 5.27201C80.56 5.52801 79.408 5.91201 78.96 6.04001C78.064 7.00001 77.488 7.76801 75.824 9.94401C74.288 11.928 73.264 12.952 72.496 13.784C74.544 15.064 76.208 16.536 76.208 18.456C76.208 19.992 75.376 20.504 74.224 20.504C73.136 20.504 73.008 20.248 71.472 17.88C69.168 14.168 68.4 13.336 66.096 11.224V11.032C67.12 11.352 69.808 12.248 71.856 13.4C75.312 5.33601 75.952 3.80001 75.568 0.984009L81.2 3.73601C81.584 3.92801 81.776 4.12001 81.776 4.50401ZM103.088 31.96C103.088 32.28 102.832 32.6 102.576 32.728C101.744 33.24 101.68 33.24 101.296 33.624C99.376 46.296 94.896 54.872 82.992 57.816V57.432C91.12 54.04 97.456 43.864 97.456 32.728C97.456 30.936 97.328 30.424 97.2 29.592L102.32 31.128C103.024 31.32 103.088 31.832 103.088 31.96ZM89.648 43.992C89.648 45.656 88.496 46.488 87.536 46.488C85.872 46.488 85.616 44.824 85.488 44.12C84.976 41.496 84.016 39.064 82.352 36.952L82.544 36.632C85.872 38.552 89.648 40.664 89.648 43.992Z" />
                    
                    </svg>
                    <p className='flex flex-col items-center leading-[0.7] gap-0' >
                        <span className='text-3xl'>(DEN TOU)</span>  <br />
                        TRADITION
                    </p>

                </div>
                <div className="left-lower scroll uppercase absolute bottom-41 left-10 text-8xl">
                    <p ref={leftdownRef}>every <br /> line <br /> tells a <br /> story</p>
                </div>
                <div className="right-lower absolute bottom-46 overflow-hidden right-10">
                    <img src="/imghome/4th.png" ref={rightimageRef} className='h-50 w-85' alt="" />
                </div>
                <div
                    className="right-upper h-80 w-55  text-[16px] aeonik-thin absolute right-40  top-45 flex flex-col gap-10 leading-[1.3] font-light">
                    <p ref={paraRef}>In every project at Saisei, the <br /> essence of 伝統 (tradition) is <br /> evident. By integrating the <br />
                        disciplined aesthetics and <br />
                        thoughtful methodologies of <br /> our ancestors, we ensure that <br /> each structure is not only <br />
                        environmentally attuned but <br /> also rich in cultural <br /> significance. Our designs <br />
                        reflect a deep respect for the <br /> past, while embracing the <br /> innovations of the future.</p>
                    <button className='scroll h-20 w-35 bg-[#9c7443]  rounded-full items-center py-2 border-none text-white'>ABOUT US</button>
                </div>

            </section>
            <hr className='border-0.5 bg-black w-full mx-auto' />
        </>
    )
}

export default Tradition