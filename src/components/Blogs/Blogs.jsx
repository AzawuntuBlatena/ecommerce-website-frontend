import React, { useState } from 'react'
import Heading from '../Shared/Heading'

// import images

import image1 from '../../assets copy/blogs/blog-1.jpg'
import image2 from '../../assets copy/blogs/blog-2.jpg'
import image3 from '../../assets copy/blogs/blog-3.jpg'



const BlogData = [
    {
        id:1,
        title: "How to choose perfect smartwatch",
        subtitle: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Harum in nemo autem sapiente beatae? Voluptatum repellendus corporis 
        nostrum aliquid dolorum fugiat, culpa architecto laborum odit odio 
        quasi harum, ratione error!`,
        published: "jan 20, 2024 by mamasita",
        img: image1,
    },

    {
        id:2,
        title: "How to choose perfect gaget",
        subtitle: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Harum in nemo autem sapiente beatae? Voluptatum repellendus corporis 
        nostrum aliquid dolorum fugiat, culpa architecto laborum odit odio 
        quasi harum, ratione error!`,
        published: "jan 20, 2024 by andom",
        img: image2,
    },

    {
        id:3,
        title: "How to choose perfect VR headset",
        subtitle: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Harum in nemo autem sapiente beatae? Voluptatum repellendus corporis 
        nostrum aliquid dolorum fugiat, culpa architecto laborum odit odio 
        quasi harum, ratione error!`,
        published: "jan 20, 2024 by azabla",
        img: image3,
    },
]

const Blogs = () => {

    const [expand, setExpand] = useState(false)

  return (
    
    <div className='my-12'>
         <div className='container'>
            {/* heading */}
            <Heading title="Our Blogs" subtitle="Explore Our Blogs" />
            {/* Body */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                {
                   BlogData.map((data,index) => (
                    
                    <div key={data.id} className='bg-white darck:bg-gray-900 rounded-t-2xl'>
                        {/* image section */}
                       <div className='overflow-hidden mb-2 rounded-2xl '>
                            <img src={data.img} alt=""
                            className='w-full h-[250px] object-cover rounded-2xl hover:scale-105 duration-500 ' />
                       </div>
                       
                       {/* content section */}
                       <div className='space-y-2'>
                        <p className='text-gray-500 text-sm'>{data.published}</p>
                        <p className='font-bold line-clamp-1'>{data.title}</p>
                        <p className ={`${expand?"block":"line-clamp-2"} text-gray-600 text-sm  dark:text-gray-400 `}> {data.subtitle}</p>
                        <div className='flex justify-center '>
                        <button 
                        onClick={ ()=> setExpand(!expand) }
                        className="text-blue-500 hover:text-blue-900">
                        {expand? "Seeless" : "SeeMore"}
                        </button>
                        </div>
                       </div>
                      
                    </div>
                    
                   ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blogs