import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const FinalCTA = () => {
  const benefits = [
    "Free 30-minute consultation",
    "Custom automation strategy",
    "ROI calculation included",
    "No obligations or commitments",
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT: Text Content */}
          <div className="space-y-8">
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Stop Managing Tasks,
              <br />
              <span className="text-primary">Start Scaling Your Business</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-white/80 max-w-xl">
              Join hundreds of service businesses that have automated their way
              to growth. Let’s discuss how we can transform your operations.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-white">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Button className="group px-8 h-12 text-base">
                Start Your Automation Journey
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Trust line */}
            <p className="text-sm text-white/60">
              ⚡ Typical setup time: 2–4 weeks • 🔒 SOC 2 Compliant • ⭐ 4.9/5
              Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
