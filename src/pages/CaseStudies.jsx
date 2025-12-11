import React from 'react'
import { Button } from '../components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const CaseStudies = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold text-white mb-6">Case Studies</h1>
        <p className="text-xl text-white/80 max-w-3xl mb-12">
          Real results from real businesses that transformed their operations with automation.
        </p>
        
        <div className="bg-card border border-border rounded-xl p-12 text-center">
          <p className="text-white/70 mb-4">Case studies content coming soon...</p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies

