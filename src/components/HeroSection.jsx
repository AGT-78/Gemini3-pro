import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Trusted by 100+ Service Businesses
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">
          Automate Your Business.
          <br />
          <span className="text-primary">Scale Effortlessly.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          We design and implement custom SaaS and{" "}
          <span className="text-primary">n8n-powered automation</span> for
          service businesses, freeing up your most valuable resource:{" "}
          <span className="text-primary">Time</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className="
              h-10 px-4 text-sm
              bg-primary/35 hover:bg-primary/45
              border border-primary/60
              text-white/95
              shadow-none
            "
          >
            {" "}
            Book a Free Consultation
          </Button>

          <Button
            variant="outline"
            className="
              h-10 px-4 text-sm
              text-white/95
              shadow-none
            "
          >
            View Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
