import React, { useState } from 'react'
import Filterbutton from './filterbutton'
import Gallerygrid from './gallerygrid'
import {  journalPost } from '../../../constants';
journalPost





const Main = () => {
    const [activeCategory, setactiveCategory] = useState('All')
    const tag = ["All", ...new Set(journalPost.map((p) => p.tag))];

    const filterbutton = activeCategory === 'All' ? journalPost : journalPost.filter((p)=> p.tag === activeCategory)
    return (
        <>
            <section className='h-[150vh]   '>
                <div className="head w-[550px]  px-20 pt-30 pb-10 ">
                    <h2 className='scroll text-7xl'>
                        OUR JOURNAL
                    </h2>
                </div>
                <hr className='pb-15' />
                <div className='' >

                    <Filterbutton
                        tag={tag}
                        activeCategory={activeCategory}
                        onFilterChange = {setactiveCategory} />

                    <Gallerygrid items={filterbutton} />
                </div>

            </section>

        </>
    )
}
export default Main