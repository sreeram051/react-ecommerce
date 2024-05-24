import React from 'react'
import Hero from '../components/Hero/Hero'
import Popluar from '../components/Popluar/Popluar'
import Tshirts from '../components/Tshirts/Tshirts'
// import NewLetter from '../components/NewLetter/NewLetter'


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popluar/>
     <Tshirts/>
     {/* <NewLetter/> */}
    </div>
  )
}

export default Shop