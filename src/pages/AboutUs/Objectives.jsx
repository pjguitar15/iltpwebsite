import React from 'react'
// objectives cards
import acknowledgeCard from '../../assets/objectives-imgs/acknowledge.png'
import cultivateCard from '../../assets/objectives-imgs/cultivate.png'
import enhanceCard from '../../assets/objectives-imgs/enhance.png'
import experienceCard from '../../assets/objectives-imgs/experience.png'
import promoteCard from '../../assets/objectives-imgs/promote.png'

// Objectives Card
import ObjectivesCard from '../../components/ObjectivesCard'
import 'aos/dist/aos.css'
const Objectives = () => {
  const cardNames = [
    {
      card: promoteCard,
      title: 'PROMOTE',
      text: 'Promote universal values beyond race and religion',
    },
    {
      card: experienceCard,
      title: 'EXPERIENCE',
      text: 'Experience cultural diversity and respect differences',
    },
    {
      card: acknowledgeCard,
      title: 'ACKNOWLEDGE',
      text: 'Acknowledge constitutional principles of American society',
    },
    {
      card: cultivateCard,
      title: 'CULTIVATE',
      text: 'Cultivate love and compassion through volunteer services',
    },
    {
      card: enhanceCard,
      title: 'ENHANCE',
      text: 'Enhance leadership abilities through educational seminars',
    },
  ]
  const textCenterOnImg = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const bottomBorder = {
    borderBottom: 'solid white 5px',
  }
  return (
    <div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        style={{ marginTop: '80px' }}
        className='text-center mx-auto col-md-6 py-3'
      >
        <h3 className='m-0' style={{ fontWeight: '500' }}>
          Our Objectives
        </h3>
      </div>
      <div className='row text-center my-5 py-4'>
        {/* remove hover-anime in css */}
        <div className='row mx-auto'>
          {/* map here */}
          {cardNames.map((item, index) => (
            // textCenterOnImg, bottomBorder,
            <ObjectivesCard
              key={index}
              item={item}
              textCenterOnImg={textCenterOnImg}
              bottomBorder={bottomBorder}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Objectives
