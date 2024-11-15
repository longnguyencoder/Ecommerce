import React from 'react'
import MainCrosel from '../components/HomeCarosel/MainCrosel'
import HomeSectionCrosel from '../components/HomeSectionCrosel/HomeSectionCrosel'
import { mens_kurta } from '../data/mens_kuta'

const HomePages = () => {
  return (
    <div>
      <MainCrosel/>

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCrosel data={mens_kurta}sectionName={"Men's Kurta"}/>
        <HomeSectionCrosel data={mens_kurta}sectionName={"Men's Shoes"}/>
        <HomeSectionCrosel data={mens_kurta}sectionName={"Men's Shirt"}/>
        <HomeSectionCrosel data={mens_kurta}sectionName={"Women's Saree"}/>
        <HomeSectionCrosel data={mens_kurta}sectionName={"Women's Dress"}/>
      </div>
    </div>
  )
}

export default HomePages
