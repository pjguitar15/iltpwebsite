import React from "react"
import JumbotronComponent from "./JumbotronComponent"
import FeaturedNewsSection from "./FeaturedNewsSection"
import LatestNews from "./LatestNews"
import OurMission from "./OurMission"
import OurVision from "./OurVision"
import Testimonies from "./Testimonies"
import Training from "./Training"
import JoinUs from "./JoinUs"
import Awards from "./Awards"

// animate on scroll
import "aos/dist/aos.css"

const MainHome = () => {
  return (
    <div>
      <JumbotronComponent />
      <FeaturedNewsSection />
      <Awards />
      <LatestNews />
      <Testimonies />
      <OurMission />
      <OurVision />
      <Training />
      <JoinUs />
    </div>
  )
}

export default MainHome
