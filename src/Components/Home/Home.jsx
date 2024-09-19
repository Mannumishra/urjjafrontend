import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import About from '../About/About'
import DealStart from '../DealStart/DealStart'
import Feauture from '../Feature/Feauture'
import HowToUse from '../HowTOUSe/HowToUse'
import Product from '../Product/Product'
import Category from '../Category/Category'
import Newsletter from '../Newsletter/Newsletter'
import Testimonial from '../Testimonial/Testimonial'
import Blog from '../Blog/Blog'
import Shop from '../Shop/Shop'

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Shop />
      {/* <DealStart /> */}
      <Feauture />
      
      <Category />
      {/* <HowToUse /> */}
      {/* <Product /> */}
      {/* <Testimonial /> */}
      <Blog />
      <Newsletter />
    </>
  )
}

export default Home