import React from 'react'

const SocialProof = () => {
  const logos = [
    { id: 1, name: 'HVAC Company' },
    { id: 2, name: 'Law Firm' },
    { id: 3, name: 'Dental Clinic' },
    { id: 4, name: 'Consulting Firm' },
    { id: 5, name: 'Real Estate' },
    { id: 6, name: 'Healthcare' },
  ]

  return (
    <section className="py-20 bg-card/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Trusted Partners
          </h2>
          <p className="text-2xl font-bold text-white">
            Trusted Automation Partner for Service Industry Leaders
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="image-placeholder h-24 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <span className="text-xs font-semibold text-white/60 group-hover:text-primary transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">ISO 27001</div>
            <div className="text-sm text-white/70">Security Certified</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">SOC 2</div>
            <div className="text-sm text-white/70">Compliance Ready</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">GDPR</div>
            <div className="text-sm text-white/70">Data Protected</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof

