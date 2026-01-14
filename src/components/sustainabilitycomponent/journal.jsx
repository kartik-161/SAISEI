import React from 'react'
import { journalData } from '../../../constants'

const Journal = () => {
    return (
        <>
            <section className='h-[200vh]  px-10 py-60'>
                <div className='wrap journal-all '>

                    {/* Left Heading */}
                    <div className="left col-start-1 col-end-3 flex flex-col gap-5 items-start    h-[167vh]">
                        
                            <h2 className='text-7xl scroll sticky top-20'>OUR JOURNAL</h2>
                            <button className='scroll h-10 w-40 bg-[#9c7443]   uppercase rounded-full items-center py-2 border-none text-white  sticky top-60'> see more  </button>
                        
                    </div>

                    {/* Right Side (Images Grid) */}
                    <div className='journal-right col-start-4 col-end-11 h-[175vh]'>
                        {journalData.map(({ number, img, title, date, tag }, index) => (
                            <div key={index} className='card  border-black border-1 h-[79vh]'>
                                <img
                                    src={img}
                                    alt={title}
                                    className='w-full h-[60vh] object-cover  '
                                />
                                <div className='flex flex-col justify-center items-center'>

                                    <div className=' flex flex-col  justify-start px-4 py-4'>
                                        <div className='bg-[#585254] w-[150px] rounded-full flex justify-center '>
                                            <span className=' text-white side text-xs' >{tag}</span>
                                        </div>
                                        <h3 className='mt-2 text-xl  aeonikmed'>{title}</h3>
                                    </div>
                                    <hr className=' mt-2 z-10 w-[95%] ' />
                                    <div className='flex gap-[19vw] justify-between px-4 mt-4'>
                                        <p className='text-gray-500 text-sm side'>{date}</p>
                                        <span>READ MORE</span>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section >
        </>
    )
}

export default Journal
