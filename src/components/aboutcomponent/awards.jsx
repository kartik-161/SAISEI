import React, { useEffect, useRef } from 'react'
import { awardList } from '../../../constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Awards = () => {
    const firstRef = useRef(null);
    useEffect(() => {
        gsap.utils.toArray('.about-award-show').forEach((item) => {
            const head = item.querySelectorAll('.heading');
            const line = item.querySelectorAll('.line-scale');
            gsap.fromTo(head, {
                y: '-100%'
            }, {
                y: '0%',
                duration: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: item,
                    start: 'bottom bottom',
                    // ease:'power1.inOut',
                    // scrub: 1.5,
                    // toggleActions: 'play none none none',
                }
            })
            gsap.fromTo(line, {
                x: '-100%',
                scale: 0
               
            }, {
                x: '0',
                scale: 13  ,             
                 stagger: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom',
                   
                }

            })
        })


    }, [])

    return (
        <>
            <section className='h-[170vh] my-10  flex flex-col justify-center wrapper items-center'>
                <div className="about-award top px-20 py-20 ">
                    <div className="left col-start-1 col-end-3 row-start-1 flex flex-col split-parent ">
                        <h2 className='scroll text-7xl heading'> AWARDS</h2>
                    </div>
                    <div className="leftb col-start-1 col-end-3 row-start-10 flex  items-end split-parent">
                        <h3 className='font-bold heading'>INDUSTRY RECOGNITION</h3>
                    </div>

                    {awardList.map(({ awardName, title, year, number }) => (

                        <div key={awardName} className="about-award-show  col-start-5 col-end-11 mt-15   overflow-hidden  h-[80px] side">
                            <div className="about-award-number">
                                <div className="num col-start-1  split-parent">
                                    <span className='scroll heading'>{number}</span>
                                </div>
                                <div className="left col-start-2 col-end-5 row-start-1 split-parent ">
                                    <h1 className=' font-bold heading'> {awardName}</h1>
                                </div>
                            </div>
                            <div className="middle col-start-4 col-end-7 split-parent">
                                <p className='heading '>{title}</p>
                            </div>
                            <div className="right col-start-7 col-end-9  flex justify-end split-parent ">
                                <p className='heading'>{year}</p>
                            </div>
                            <hr className='line-scale ' />
                        </div>

                    ))}
                </div>

            </section>

        </>
    )
}

export default Awards