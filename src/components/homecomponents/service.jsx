import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef } from "react";

const Service = () => {

    const firstRef = useRef();
    const subheadingRef = useRef();
    // const imgRef = useRef()
    // at the top with other refs
    const imgWrapRef = useRef();
    const imgRef = useRef();

    useEffect(() => {
        const imgEl = imgRef.current;
        const wrapEl = imgWrapRef.current;
        if (!imgEl || !wrapEl) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                imgEl,
                { xPercent: -100, opacity: 1 },
                {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power1.out",
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: wrapEl,
                        start: "top bottom",
                        end: "top 50%",
                        // scrub: true, // enable if you want scroll-tied progress
                    },
                }
            );
        });


        // const head = new SplitText('.heading', { type: 'lines', linesClass: 'split-parent' })
        // gsap.fromTo(imgRef.current, {
        //     x: '-100%',
        //     opacity: 0

        // }, {
        //     x: '0% ',
        //     opacity: 1,
        //     duration: 0.75,
        //     delay: 0.5,
        //     scrollTrigger: {
        //         trigger: imgRef.current,
        //         start: 'top bottom',
        //         ease: "power1.out",
        //     }
        // })
        document.fonts.ready.then(() => {
            const first = new SplitText(firstRef.current, { type: 'lines', linesClass: 'split-parent' })
            gsap.from(first.lines, {
                duration: 1,
                yPercent: 50,
                ease: "power4",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: firstRef.current,
                    start: "top bottom",       // start when top of element hits 80% of viewport
                    // toggleActions: "play none none none", 
                },
            });
        });
        document.fonts.ready.then(() => {
            document.querySelectorAll('.heading').forEach(heading => {
                const split = new SplitText(heading, { type: 'lines', linesClass: 'split-parent' })
                gsap.from(split.lines, {
                    duration: 1.5,
                    yPercent: 100,
                    ease: "power4",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: heading,
                        start: "top bottom",
                    }
                });
            });
        });
        document.fonts.ready.then(() => {
            const sub = new SplitText(subheadingRef.current, { type: 'lines', linesClass: 'split-text' })
            gsap.from(sub.lines, {
                duration: 2,
                yPercent: 100,
                ease: "power4",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: subheadingRef.current,
                    start: "top bottom",       // start when top of element hits 80% of viewport
                    // toggleActions: "play none none none", 
                },
            })
        });
        // gsap.from('.heading', {
        //     duration: 2,
        //     yPercent: 50,
        //     ease: "power4",
        //     stagger: 0.1,
        //     scrollTrigger: {
        //         trigger: '.heading',
        //         start: "top bottom",       // start when top of element hits 80% of viewport
        //         // toggleActions: "play none none none", 
        //     },
        // })

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section className='h-[120vh] w-full bg-[#fbf0db] flex  items-center  overflow-hidden'>
                <div className="wrapper service h-[75vh] w-full  ">
                    <div className="top flex gap-2 items-center justify-center text-[#1e1005] h-[250px]">
                        <div className="top-left col-start-1  row-start-1 flex flex-col justify-center  items-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 120 1 "   // adjust if needed to match your SVG dimensions
                                className="w-20 h-32 text-black"
                                fill="currentColor"
                            >
                                <path d="M25.328 4.72009C25.328 5.10409 25.008 5.36009 24.816 5.55209C24.56 5.80809 23.344 6.76809 23.088 6.96009C23.152 8.62409 23.088 31.3441 23.152 35.8881C23.216 40.0481 23.344 46.7041 23.344 50.8001C23.344 52.7841 23.28 54.1281 22 55.4081C19.888 57.6481 17.2 58.0961 16.112 58.2241C15.856 55.4721 14.192 53.4881 12.592 53.0401L12.656 52.7201C14.256 52.7841 17.072 52.9761 17.776 52.9761C19.888 52.9761 19.888 51.6961 19.888 50.7361C19.888 50.4801 19.952 39.9841 19.952 39.6641C20.016 36.5921 20.016 34.3521 20.016 33.5841H9.648C9.2 44.5281 6.19201 52.2721 1.136 57.5841L0.880005 57.3281C6.44801 48.6881 6.44801 36.4001 6.44801 25.2001C6.44801 23.5361 6.38401 9.5841 6.19201 6.51209C6.12801 5.48809 5.68001 2.80009 5.48801 1.90409L9.84 4.20809H19.504L20.464 2.73609C20.72 2.28809 21.04 1.84009 21.552 1.84009C22.064 1.84009 22.512 2.22409 22.64 2.35209L24.624 3.76009C24.944 3.95209 25.328 4.40009 25.328 4.72009ZM20.016 18.2241V5.74409H9.84V18.2241H20.016ZM20.016 32.0481V19.7601H9.84C9.84 28.4641 9.776 30.6401 9.712 32.0481H20.016ZM61.424 52.6561C59.312 53.8721 58.224 54.4481 56.56 56.8801C50.672 54.1921 47.664 50.9921 45.616 48.3041C42.736 51.3761 39.28 54.0641 35.248 55.4081L35.184 55.2161C36.848 54.0001 40.112 51.5681 44.08 46.0001C40.88 40.7521 39.28 34.7361 38.832 28.5921H34.224C34.224 31.7921 34.224 45.8721 34.288 48.6881C34.288 51.4401 34.352 52.8481 34.416 54.3841C34.416 54.7681 34.544 56.5601 34.544 56.8801C34.544 58.8001 32.24 58.9921 31.728 58.9921C30.384 58.9921 30.384 58.3521 30.384 57.7761C30.384 57.3921 30.96 40.7521 31.024 37.5521C31.152 32.3041 31.152 24.1121 31.152 22.5121C31.152 17.5201 31.152 6.00009 30.448 1.84009L34.608 4.01609H49.136L49.712 3.12009C50.096 2.54409 50.48 2.28809 50.8 2.28809C51.12 2.28809 51.632 2.60809 51.888 2.73609L54.192 4.14409C54.704 4.46409 55.088 4.78409 55.088 5.16809C55.088 5.74409 54.576 6.12809 53.104 7.34409C53.04 8.6881 52.912 14.7041 52.656 15.9201C51.952 19.5041 49.712 21.8081 46 22.5121C45.488 20.7201 44.08 18.8001 41.52 17.5201L41.648 17.2001C42.544 17.3921 43.504 17.6481 45.936 17.6481C48.496 17.6481 49.712 17.6481 49.712 9.84009C49.712 7.98409 49.648 7.53609 49.456 5.55209H34.224V27.0561H50.416L51.632 25.6481C52.08 25.1361 52.464 24.8161 52.912 24.8161C53.296 24.8161 53.488 24.9441 54 25.3281L56.624 27.3121C56.944 27.5681 57.2 27.9521 57.2 28.3361C57.2 28.7841 56.88 29.1041 56.624 29.2961C55.984 29.7441 55.408 30.0001 54.64 30.3841C53.424 36.2721 51.44 40.8801 47.728 45.8721C50.352 48.3041 54.704 51.0561 61.424 52.4001V52.6561ZM50.8 28.5921H39.6C40.368 34.7361 42.608 40.1121 45.616 43.6961C48.368 39.0881 50.48 33.9681 50.8 28.5921Z" />
                                <path d="M122.672 29.4241C120.624 29.7441 118.832 31.3441 117.744 33.0721C111.344 30.0641 107.952 26.9281 105.2 23.9201C102.064 27.5681 96.304 33.0081 84.912 35.3121L84.848 34.8641C94.128 32.0481 100.144 25.1361 103.152 21.4881C100.592 18.0321 99.312 15.1521 98.416 12.7841H97.584C95.152 17.1361 93.104 18.9921 92.272 19.6961L91.888 19.5041C94.96 13.8721 98.352 4.08009 98.608 0.496094L103.6 2.67209C103.92 2.86409 104.24 3.24809 104.24 3.63209C104.24 4.46409 103.088 4.84809 101.488 5.42409C100.912 6.32009 98.8 10.4161 98.352 11.2481H113.648L115.568 8.56009C116.144 7.79209 116.4 7.72809 116.528 7.72809C116.912 7.72809 117.488 8.17609 117.744 8.43209L120.688 11.1201C121.072 11.5041 121.328 11.6961 121.328 12.0801C121.328 12.7201 120.752 12.7841 120.368 12.7841H110.512L112.688 14.5121C113.2 14.9601 113.328 15.0881 113.328 15.4081C113.328 16.0481 112.688 16.1121 112.432 16.1121C112.24 16.1761 110.96 16.2401 110.64 16.3041C109.936 17.4561 109.04 18.9921 106.608 22.1921C111.152 26.0321 116.784 28.2081 122.672 29.0401V29.4241ZM108.208 12.7841H99.312C100.336 15.0241 101.744 17.4561 104.304 20.0801C105.904 17.9041 107.76 15.0241 108.208 12.7841ZM91.376 6.83209C91.376 7.85609 89.264 7.98409 87.28 8.11209C86.576 8.6881 86.256 9.00809 83.248 11.9521C83.12 12.0801 82.608 12.5281 80.816 14.1921C82.928 16.0481 82.928 17.9681 82.928 18.2241C82.928 19.9521 81.84 20.3361 81.2 20.3361C80.048 20.3361 79.344 19.5681 78.896 18.6081C76.72 14.0001 73.2 12.0801 71.664 11.2481L71.856 10.8001C75.12 11.7601 78.704 12.7841 80.304 13.8081C82.416 8.88009 82.608 8.36809 82.992 6.96009H76.592C74.288 6.96009 70.768 7.21609 68.336 7.66409L66.864 4.91209C71.6 5.29609 76.272 5.42409 77.488 5.42409H83.056L85.616 3.69609C86.448 3.12009 86.576 3.05609 86.896 3.05609C87.216 3.05609 87.28 3.12009 87.984 3.63209L90.608 5.68009C91.12 6.06409 91.376 6.44809 91.376 6.83209ZM117.552 39.5361C117.552 40.1761 116.208 40.6881 114.864 41.2641C113.776 52.9761 111.792 58.0961 105.072 58.9281C104.432 55.6641 101.744 54.1921 100.336 53.4241L100.464 53.1041C101.488 53.1681 106.864 53.9361 107.184 53.9361C110.896 53.9361 111.536 43.3761 111.664 39.7921H101.552C98.864 48.2401 95.408 54.8321 82.352 58.7361L82.224 58.3521C89.84 54.8961 95.6 48.7521 98.16 39.7921H94.448C92.208 39.7921 88.624 40.0481 86.192 40.5601L84.72 37.7441C89.52 38.1921 94.128 38.2561 95.344 38.2561H98.544C99.312 34.8001 99.376 32.1761 99.376 30.1281L104.432 31.7281C104.944 31.8561 105.328 31.9841 105.328 32.4961C105.328 33.2641 105.072 33.3921 102.896 34.4161C102.576 35.8881 102.384 36.7201 102 38.2561H111.024L112.624 36.4641C113.136 35.8881 113.2 35.7601 113.456 35.7601C113.712 35.7601 114.096 36.0801 114.288 36.2721L117.104 38.8321C117.424 39.1521 117.552 39.3441 117.552 39.5361ZM94.832 24.3681C94.832 25.1361 94 25.1361 93.68 25.2001H90.992C89.712 26.8001 85.808 30.1921 84.592 31.0241L84.4 30.7681C85.744 28.8481 88.048 24.6881 88.496 22.7041H81.072V52.4641C81.072 56.9441 77.616 58.3521 75.504 58.3521C74.864 56.0481 72.88 54.2561 70.64 53.2961V52.9121C71.856 53.1041 73.648 53.2961 75.44 53.2961C76.08 53.2961 77.744 53.2961 78 52.9121C78.192 52.7201 78.192 52.5281 78.192 50.9921V29.4241C73.712 40.1761 70.128 44.9121 62.96 50.4161L62.576 49.9681C70.384 41.3281 75.184 30.9601 77.36 22.7041H73.584C72.304 22.7041 68.4 22.8321 65.328 23.4081L63.856 20.6561C67.12 20.9121 71.152 21.1681 74.48 21.1681H88.56L89.648 19.9521C89.712 19.8241 90.224 19.3121 90.544 19.3121C90.864 19.3121 90.864 19.4401 91.632 20.2081L94.192 22.9601C94.448 23.2801 94.832 23.6641 94.832 24.3681Z" />
                            </svg>
                            <div ref={firstRef} className=" ">
                                <h3 className='uppercase scroll text-[25px]'  >(FU KU MU)</h3>
                                <h4 className='uppercase scroll text-[20px] pl-7 '>Service</h4>
                            </div>
                        </div>
                        <div className="top-right col-start-1 row-start-1 text-[230px] overflow-hidden  h-[250px] ">
                            <h1 className='uppercase scroll  heading leading-[1.5]'  >precision</h1>
                        </div>
                    </div>
                    <div className="middle flex gap-10 items-center justify-center text-[#1e1005] h-[250px] overflow-hidden">

                        <div className="middle-left uppercase scroll col-start-1 overflow-hidden row-start-2 text-[230px]">
                            <h1 className="heading">in </h1>
                        </div>

                        <div ref={imgWrapRef} className="middle-center col-start-1 row-start-2 mb-9 overflow-hidden w-[542px] h-[175px]">
                            <img src="/imghome/15th.png" ref={imgRef} className="w-[542px] h-[175px]" alt="" />
                        </div>
                        {/* <div ref={imgRef} className="middle-center col-start-1 row-start-2 mb-9 overflow-hidden">
                            <img src="/img/15th.png" className='w-[542px] h-[175px] ' alt="" />
                        </div> */}

                        <div className="middle-right overflow-hidden uppercase scroll text-[230px] ">
                            <h1 className="heading">every </h1>
                        </div>
                    </div>
                    <div className="bottom col-start-1 row-start-3 flex gap-10 items-center justify-center text-[#1e1005] h-[170px]  ">
                        <div className="bottom-left overflow-hidden uppercase scroll col-start-1 row-start-3 text-[230px] heading">
                            design
                        </div>
                        <div className="bottom-right relative mb-30 ">
                            <div className="text  items-left">
                                <p ref={subheadingRef} className='text-[16px] leading-[1.1] aeonik-thin' >Each Saisei project blends custom <br />
                                    solutions with sustainable innovation, <br />
                                    ensuring our designs meet your exact <br />
                                    needs while respecting the planet.</p>
                            </div>
                            <div className="btn absolute top-[120px] ">
                                <button className='scroll h-10 w-40 bg-[#9c7443] uppercase rounded-full items-center py-2 border-none text-white '>our service</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service