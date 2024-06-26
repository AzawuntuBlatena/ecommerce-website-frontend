import React from 'react'

import brand1 from '../../assets copy/brand/br-1.png'
import brand2 from '../../assets copy/brand/br-2.png'
import brand3 from '../../assets copy/brand/br-3.png'
import brand4 from '../../assets copy/brand/br-4.png'
import brand5 from '../../assets copy/brand/br-5.png'



const Partners = () => {
  return (
    <div data-aos = 'zoom-out' className='mt-24 hidden md:block mx-auto rounded-sm dark:bg-white/10 bg-gray-200 '>
        <div className='container'>
            <div className='grid grid-cols-5 gap-3 opacity-50 place-items-center py-10'>
                <img src={brand1} alt="brand1" className='w-[75px] dark:invert' />
                <img src={brand2} alt="brand2" className='w-[75px] dark:invert' />
                <img src={brand3} alt="brand3" className='w-[75px] dark:invert' />
                <img src={brand4} alt="brand4" className='w-[75px] dark:invert' />
                <img src={brand5} alt="brand5" className='w-[75px] dark:invert' />

            </div>
        </div>
    </div>
  )
}

export default Partners