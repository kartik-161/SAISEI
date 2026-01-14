import React from 'react'

const Gallerygrid = ({ items }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 px-20 py-20 h-fit">
            {items.map((item) => (
                            <div key={item.index} className='card  border-black border-1 h-[79vh]'>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className='w-full h-[60vh] object-cover  '
                                />
                                <div className='flex flex-col justify-center items-center'>

                                    <div className=' flex flex-col  justify-start px-4 py-4'>
                                        <div className='bg-[#585254] w-[150px] rounded-full flex justify-center '>
                                            <span className=' text-white side text-xs' >{item.tag}</span>
                                        </div>
                                        <h3 className='mt-2 text-xl  aeonikmed'>{item.title}</h3>
                                    </div>
                                    <hr className=' mt-2 z-10 w-[95%] ' />
                                    <div className='flex gap-[17vw] justify-between px-4 mt-4'>
                                        <p className='text-gray-500 text-sm side'>{item.date}</p>
                                        <span>READ MORE</span>
                                    </div>
                                </div>

                            </div>
                        ))}
            </div>
        </>
    )
}

export default Gallerygrid


