

import React from 'react'
import Navbar from './components/Navbar Section/Navbar.jsx'
import Hero from './components/Hero Section/Hero.jsx'
import Category from './components/Category Section/Category.jsx'
import Category2 from './components/Category Section/Category2.jsx'
import Services from './components/Services/Services.jsx'
import Banner from './components/Banner/Banner.jsx'
import Headphone from './assets copy/hero/headphone.png'
import Products from './components/Products/Products.jsx'
import Smartwatch from './assets copy/category/smartwatch2-removebg-preview.png'
import Blogs from './components/Blogs/Blogs.jsx'
import Partners from './components/Partners/Partners.jsx'
import Footer from './components/Footer/Footer.jsx'


const BannerData ={
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 jan to 20 jan",
  image: Headphone,
  title2: "Air Solo Bas",
  title3: "Winter Sell",
  title4: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Iusto repudiandae`,
  bgColor: "#f42c37"
}

const BannerData2 ={
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 jan to 20 jan",
  image: Smartwatch,
  title2: "Air Solo Bas",
  title3: "Winter Sell",
  title4: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Iusto repudiandae`,
  bgColor: "#2dcc6f"
}

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white  duration-200'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data = {BannerData}/>
      <Products/>
      <Banner data = {BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>

    </div>
  )
}

export default App
