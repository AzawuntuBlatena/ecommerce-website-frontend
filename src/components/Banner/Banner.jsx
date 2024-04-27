import React from 'react'
import Button from '../Shared/Button'

const Banner = ({data}) => {
  return (
    <div className='min-h-[450px] flex items-center justify-center py-6'>
        <div className='container'>
            <div style={{backgroundColor:data.bgColor}} className='grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-white rounded-3xl'>
                
                {/* first col */}
                <div className='p-6 sm:p-8'>
                    <p className='text-sm'>{data.discount}</p>
                    <h1 className='upper-case text-4xl lg:text-7xl font-bold'>
                        {" "}
                        {data.title}</h1>
                    <p className='text-sm'>{data.date}</p>
                </div>
                {/* second col */}
                <div className='h-full flex items-center justify-center'>
                    <img 
                    src={data.image}
                    alt=''
                    className='scale-125 w-[300px] md:w-[390px] drop-shadow-2xl object-cover'/>
                </div>
                {/* third col */}
                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                    <p className='font-bold text-xl'>{data.title2}</p>
                    <p className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
                    <p className='text-sm tracking-wide leading-5'>{data.title4}</p>
                    <div>
                    <button style={{color: data.bgColor}} className='bg-white px-4 py-2 rounded-full'>
                        Shop Now
                    </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner