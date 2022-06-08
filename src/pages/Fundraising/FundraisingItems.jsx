import React from 'react'
import { Container } from 'react-bootstrap'
import keychain from '../../assets/keychain.jpg'
import FundraisingItem from './FundraisingItem'
import { v4 as uuidv4 } from 'uuid'
import AmethystBeadsBracelet from '../../assets/fundraising-items/Amethyst Beads Bracelet.jpg'
import AssortedStoneNuggetsBracelet from '../../assets/fundraising-items/Assorted Stone Nuggets Bracelet.jpg'
import AventurineBeadsBracelet from '../../assets/fundraising-items/Aventurine Beads Bracelet.jpg'
import AventurineClawHematiteNecklace from '../../assets/fundraising-items/Aventurine Claw Hematite Necklace.jpg'
import AventurineNuggetBracelet from '../../assets/fundraising-items/Aventurine Nugget Bracelet.jpg'
import AventurineStoneNecklace from '../../assets/fundraising-items/Aventurine Stone Necklace.jpg'
import BestfriendLeatherBracelet from '../../assets/fundraising-items/Bestfriend Leather Bracelet.jpg'
import BlueOpenHeartHematiteNecklace from '../../assets/fundraising-items/Blue Open Heart Hematite Necklace.jpg'
import CarnelianNuggetBracelet from '../../assets/fundraising-items/Carnelian Nugget Bracelet.jpg'
import CarnelianStoneNecklace from '../../assets/fundraising-items/Carnelian Stone Necklace.jpg'
import CatHematiteNecklace from '../../assets/fundraising-items/Cat Hematite Necklace.jpg'
import CrossLeatherBracelet from '../../assets/fundraising-items/Cross Leather Bracelet.jpg'
import CrossTorquoiseLeatherBracelet from '../../assets/fundraising-items/Cross Torquoise Leather Bracelet.jpg'
import EagleHeadHematiteNecklace from '../../assets/fundraising-items/Eagle Head Hematite Necklace.jpg'
import ElephantHematiteNecklace from '../../assets/fundraising-items/Elephant Hematite Necklace.jpg'
import FaithLeatherBracelet from '../../assets/fundraising-items/Faith Leather Bracelet.jpg'
import FeatherHematiteNecklace from '../../assets/fundraising-items/Feather Hematite Necklace.jpg'
import GoldCrossHematiteNecklace from '../../assets/fundraising-items/Gold Cross Hematite Necklace.jpg'
import HematiteHornNecklace from '../../assets/fundraising-items/Hematite Horn Necklace.jpg'
import HookLeatherBracelet from '../../assets/fundraising-items/Hook Leather Bracelet.jpg'
import IndianHeadHematiteNecklace from '../../assets/fundraising-items/Indian Head Hematite Necklace.jpg'
import JasperStoneNecklace from '../../assets/fundraising-items/Jasper Stone Necklace.jpg'
import LapizLazuliNuggetBracelet from '../../assets/fundraising-items/Lapiz Lazuli Nugget Bracelet.jpg'
import LeoZodiacSignBracelet from '../../assets/fundraising-items/Leo Zodiac Sign Bracelet.jpg'

const FundraisingItems = () => {
  //   Hematite Necklaces $30
  // Nugget Bracelet $30
  // Leather Bracelet $25
  // Stone Beads Bracelet $25
  const fundraisingItems = [
    {
      id: uuidv4(),
      name: 'Amethyst Beads Bracelet',
      img: AmethystBeadsBracelet,
    },
    {
      id: uuidv4(),
      name: 'Assorted Stone Nuggets Bracelet',
      img: AssortedStoneNuggetsBracelet,
    },
    {
      id: uuidv4(),
      name: 'Aventurine Beads Bracelet',
      img: AventurineBeadsBracelet,
    },
    {
      id: uuidv4(),
      name: 'Aventurine Claw Hematite Necklace',
      img: AventurineClawHematiteNecklace,
    },
    {
      id: uuidv4(),
      name: 'Aventurine Nugget Bracelet',
      img: AventurineNuggetBracelet,
    },
    {
      id: uuidv4(),
      name: 'Aventurine Stone Necklace',
      img: AventurineStoneNecklace,
    },
    {
      id: uuidv4(),
      name: 'Bestfriend Leather Bracelet',
      img: BestfriendLeatherBracelet,
    },
    {
      id: uuidv4(),
      name: 'Blue Open Heart Hematite Necklace',
      img: BlueOpenHeartHematiteNecklace,
    },
    {
      id: uuidv4(),
      name: 'Carnelian Nugget Bracelet',
      img: CarnelianNuggetBracelet,
    },
    {
      id: uuidv4(),
      name: 'Carnelian Stone Necklace',
      img: CarnelianStoneNecklace,
    },
    { id: uuidv4(), name: 'Cat Hematite Necklace', img: CatHematiteNecklace },
    { id: uuidv4(), name: 'Cross Leather Bracelet', img: CrossLeatherBracelet },
    {
      id: uuidv4(),
      name: 'Cross Torquoise Leather Bracelet',
      img: CrossTorquoiseLeatherBracelet,
    },
    {
      id: uuidv4(),
      name: 'Eagle Head Hematite Necklace',
      img: EagleHeadHematiteNecklace,
    },
    {
      id: uuidv4(),
      name: 'Elephant Hematite Necklace',
      img: ElephantHematiteNecklace,
    },
    { id: uuidv4(), name: 'Faith Leather Bracelet', img: FaithLeatherBracelet },
    {
      id: uuidv4(),
      name: 'Feather Hematite Necklace',
      img: FeatherHematiteNecklace,
    },
    {
      id: uuidv4(),
      name: 'Gold Cross Hematite Necklace',
      img: GoldCrossHematiteNecklace,
    },
    { id: uuidv4(), name: 'Hematite Horn Necklace', img: HematiteHornNecklace },
    { id: uuidv4(), name: 'Hook Leather Bracelet', img: HookLeatherBracelet },
    {
      id: uuidv4(),
      name: 'Indian Head Hematite Necklace',
      img: IndianHeadHematiteNecklace,
    },
    { id: uuidv4(), name: 'Jasper Stone Necklace', img: JasperStoneNecklace },
    {
      id: uuidv4(),
      name: 'Lapiz Lazuli Nugget Bracelet',
      img: LapizLazuliNuggetBracelet,
    },
    {
      id: uuidv4(),
      name: 'Leo Zodiac Sign Bracelet',
      img: LeoZodiacSignBracelet,
    },
    { id: uuidv4(), name: 'Love Leather Bracelet' },
    { id: uuidv4(), name: 'Onyx Nugget Bracelet' },
    { id: uuidv4(), name: 'Pearl Claw Hematite Necklace' },
    { id: uuidv4(), name: 'Rose Quarts Horn Hematite Necklace' },
    { id: uuidv4(), name: 'Rose Quartz Claw Hematite Necklace' },
    { id: uuidv4(), name: 'Rose Quartz Nugget Bracelet' },
    { id: uuidv4(), name: 'Rose Quartz Stone Necklace' },
    { id: uuidv4(), name: 'Sea Trutle Hematite Necklace 2' },
    { id: uuidv4(), name: 'Sea Turtle Hematite Necklace' },
    { id: uuidv4(), name: 'Silver Cross Necklace' },
    { id: uuidv4(), name: 'Tiger Eye Beads Bracelet' },
    { id: uuidv4(), name: 'Tiger Eye Nugget Bracelet' },
    { id: uuidv4(), name: 'Tiger Eye Stone Necklace' },
    { id: uuidv4(), name: 'Torquoise Nugget Bracelet' },
    { id: uuidv4(), name: 'Torquoise Stone Necklace' },
    { id: uuidv4(), name: 'Twin Dolphin Hematite Necklace' },
    { id: uuidv4(), name: 'Yin and Yang Hematite Necklace' },
  ]
  return (
    <div className='py-5'>
      <Container>
        <h4>Our Fundraising Items</h4>
        <div className='row'>
          {fundraisingItems.map((item, index) => (
            <FundraisingItem key={index} item={item} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default FundraisingItems
