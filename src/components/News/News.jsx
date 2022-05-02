import React from 'react'
import FeaturedNews from '../HomeSections/FeaturedNews'
import LatestNews from '../HomeSections/LatestNews'

// animate on scroll
import 'aos/dist/aos.css'

const News = () => {
  return (
    <div>
      <div
        data-aos='fade-down'
        data-aos-duration='2000'
        className='bg-success '
        style={{ padding: '150px 0' }}
      >
        <h1 className='text-white display-1 text-center py-3 col-lg-4 mx-auto my-0'>
          News
        </h1>
      </div>
      <FeaturedNews />
      <LatestNews />
    </div>
  )
}

export default News
