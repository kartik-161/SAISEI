import React, { useEffect, useState } from 'react'
import { processList } from '../../../constants'
import gsap from 'gsap/all';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, SplitText)

const Process = () => {
    const [openIndex, setopenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setopenIndex(openIndex === index ? null : index);
    }
    useEffect(() => {
        gsap.utils.toArray('.wrap').forEach((item) => {
            const team = item.querySelectorAll('.line');
            gsap.fromTo(team, {
                x: '-100%'
            }, {
                x: '0%',
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom'
                }
            })
        })
    }, [])

    // const [close, setclose] = useState('Close')
    const para = new SplitText('.para', { type: 'lines', linesClass: 'split-parent' })
    gsap.from(para.lines, {
        yPercent: '-100'
    }
        //   ,{
        //     yPercent:'0',
        //     duration:1,
        //     scrollTrigger:{
        //         trigger:'.para',
        //         start:'top bottom',
        //         // stagger:0.4
        //     }
        //   }
    )


    gsap.fromTo('.lines', {
        x: '-200%',
    }, {
        x: '0%',
        duration: 1,
        scrollTrigger: {
            trigger: '.service-faq',
            start: 'top bottom',
            stagger: 0.9
        }
    })
    const array = ['.key', '.what', '.list']
    array.forEach((element) => {
        const keys = new SplitText(element, { type: 'lines', linesClass: 'split-parent' })
        gsap.fromTo(keys.lines, {
            yPercent: '-100'
        }, {
            yPercent: '0',
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
            }
        })
    });

    return (
        <>
            <section className='h-[130vh]'>
                <div className="wrap py-20">
                    <div className="service-process-heading base-brown ">
                        <div className="left  px-20 py-20 flex gap-[73vw] items-center">
                            <h2 className=' text-6xl scroll'>OUR <br /> PROCESS </h2>
                            <span className='scroll text-2xl'>(5)</span>
                        </div>
                        {/* <div className="right  flex justify-end  items-end px-20 ">
                        </div> */}
                    </div>
                    <div className='flex flex-col px-20 justify-center '>
                        {processList.map(({ title, number, para, item1, item2, item3 }, index) => (
                            <div className='overflow-hidden'>

                                <div className=' scroll h-[13vh]  items-center hover:bg-[#D2C6B0]  transition-all duration-300 ease-linear flex gap-[58vw]' key={index} onClick={() => toggleFAQ(index)}>
                                    <div className='flex items-center  gap-10 w-[500px]   '>
                                        <span className=''>{number}</span>
                                        <h3 className=' text-3xl font-thin' >{title}</h3>
                                    </div>
                                    <div className=' w-[200px] flex justify-end'>

                                        <span className=' '>MORE INFO</span>
                                    </div>
                                </div>
                                <hr className='line' />
                                {/* open box */}
                                <div className={`service-faq overflow-hidden  bg-[#D2C6B0] transition-all duration-700 ease-initial  ${openIndex === index ? "max-h-[275px] opacity-100" : 'max-h-0 opacity-0'}`} >
                                    <div className='col-start-1   flex justify-end  py-20 aeonikmed '>
                                        <p className='what'>What we do</p>
                                    </div>
                                    <div className=' col-start-2 col-end-6  py-20  side text-[27px] text-left leading-[1.3] flex justify-center'>
                                        <div className=' w-[450px] '>
                                            <p className='para'>{para}</p>
                                        </div>
                                    </div>
                                    <div className=' col-start-6 col-end-7  py-20 aeonikmed '>
                                        <p className='key overflow-hidden'>Key Activities</p>
                                    </div>
                                    <div className=' col-start-8 col-end-11  py-20 side text-xl   overflow-hidden'>
                                        <ul className='list-disc '>
                                            <li className='  p-2  list'>{item1}</li>
                                            <hr className='lines' />
                                            <li className='  p-2 list'>{item2}</li>
                                            <hr className='lines' />
                                            <li className='  p-2 list'>{item3}</li>
                                            <hr className='lines' />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Process