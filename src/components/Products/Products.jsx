import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

import image1 from '../../assets copy/product/p-1.jpg'
import image2 from '../../assets copy/product/p-2.jpg'
import image3 from '../../assets copy/product/p-3.jpg'
import image4 from '../../assets copy/product/p-4.jpg'
import image5 from '../../assets copy/product/p-5.jpg'
import image6 from '../../assets copy/product/p-7.jpg'
import image7 from '../../assets copy/product/p-9.jpg'




const productsData=[
    {id:1,
    img:image1,
    title:"Boat Headphone",
    price:"120",
    aosDelay:"0"},

    {id:2,
    img:image2,
    title:"Rocky Mountain",
    price:"420",
    aosDelay:"200"},

    {id:3,
    img:image3,
    title:"Googles",
    price:"320",
    aosDelay:"400"},

    {id:4,
    img:image4,
    title:"Printed",
    price:"220",
    aosDelay:"600"},

    // {id:5,
    // img:image5,
    // title:"Printed",
    // price:"220",
    // aosDelay:"600"},
    
    // {id:6,
    // img:image7,
    // title:"Printed",
    // price:"220",
    // aosDelay:"600"},

    // {id:7,
    // img:image9,
    // title:"Printed",
    // price:"220",
    // aosDelay:"600"},
]

const productsData2=[
    {id:1,
    img:image1,
    title:"Boat Headphone",
    price:"120",
    aosDelay:"0"},

    {id:2,
    img:image2,
    title:"Rocky Mountain",
    price:"420",
    aosDelay:"200"},

    {id:3,
    img:image3,
    title:"Googles",
    price:"320",
    aosDelay:"400"},

    {id:4,
    img:image4,
    title:"Printed",
    price:"220",
    aosDelay:"600"},

    // {id:5,
    // img:image5,
    // title:"Printed",
    // price:"220",
    // aosDelay:"600"},
    
    // {id:6,
    // img:image7,
    // title:"Printed",
    // price:"220",
    // aosDelay:"600"},

    // {id:7,
    // img:image9,
    // title:"Printed",
    // price:"220",
    // aosDelay:"600"},
]


const Products = () => {
  return (
    <div className='mx-10 sm:mx-0'>
        <div className='container'>
            {/* heading */}
            <Heading title="Our Products" subtitle="Explore Our Products" />
            {/* Body */}
            <ProductCard data={productsData}/>
            <ProductCard data ={productsData2}/>
        </div>
    </div>
  )
}

export default Products