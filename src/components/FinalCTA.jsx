import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const FinalCTA = () => {
  const benefits = [
    'Free 30-minute consultation',
    'Custom automation strategy',
    'ROI calculation included',
    'No obligations or commitments',
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Limited Availability</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Stop Managing Tasks,
            <br />
            <span className="text-primary">Start Scaling Your Business</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join hundreds of service businesses that have automated their way to growth.
            Let's discuss how we can transform your operations.
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 py-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-white">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group text-lg px-12 h-16 shadow-2xl shadow-primary/30">
              Start Your Automation Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Signal */}
          <p className="text-sm text-white/70 mt-8">
            ⚡ Typical setup time: 2-4 weeks • 🔒 SOC 2 Compliant • ⭐ 4.9/5 Average Rating
          </p>
        </div>

        {/* Visual Element - Image Placeholder */}
        <div className="mt-16 image-placeholder h-64 bg-gradient-to-br from-card to-card/50 rounded-2xl border-2 border-primary/20 shadow-2xl shadow-primary/10 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="text-primary text-sm font-semibold">Dashboard Preview</div>
            <div className="text-white/60 text-xs">Automation Analytics & Insights</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA

