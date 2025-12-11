import React from 'react'
import { Button } from '../components/ui/button'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-xl text-white/80 max-w-3xl mb-12">
          Ready to automate your business? Get in touch with our team.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/80">hello@coreautomation.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/80">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-white/80">San Francisco, CA</span>
              </div>
            </div>
            
            <Button size="lg" className="w-full">
              Book a Free Consultation
            </Button>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8">
            <p className="text-white/70 text-center">Contact form coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

