import React, { useEffect } from 'react'
import JumbotronComponent from './JumbotronComponent'
import FeaturedNewsSection from './FeaturedNewsSection'
import LatestNews from './LatestNews'
import OurMission from './OurMission'
import OurVision from './OurVision'
import Testimonies from './Testimonies'
import Training from './Training'
import JoinUs from './JoinUs'
import Awards from './Awards'

// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

const MainHome = () => {
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])

  return (
    <div>
      <JumbotronComponent data-aos='fade-up' />
      <Awards />
      <OurMission data-aos='fade-up' />
      <OurVision data-aos='fade-up' />
      <FeaturedNewsSection />
      <LatestNews data-aos='fade-up' />
      <Testimonies data-aos='fade-up' />
      <Training data-aos='fade-up' />
      <JoinUs data-aos='fade-up' />
    </div>
  )
}

export default MainHome
