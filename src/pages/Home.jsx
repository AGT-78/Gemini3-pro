import React from 'react'
import HeroSection from '../components/HeroSection'
import SocialProof from '../components/SocialProof'
import ValuePropositions from '../components/ValuePropositions'
import FinalCTA from '../components/FinalCTA'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SocialProof />
      <ValuePropositions />
      <FinalCTA />
    </div>
  )
}

export default Home

