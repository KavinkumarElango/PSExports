import React, { useState } from 'react';
import { ArrowRight, Wind, Droplets } from 'lucide-react';
import { LOOM_TECHNOLOGIES } from '../../data/manufacturing';
import { LoomIllustration } from '../ui/LoomIllustration';
import { Button } from '../ui/Button';

export const ManufacturingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'air-jet' | 'water-jet'>('air-jet');

  const activeTech = LOOM_TECHNOLOGIES.find(t => t.id === `${activeTab}-weaving`) || LOOM_TECHNOLOGIES[0];

  return (
    <section className="py-20 lg:py-28 bg-ivory-light border-b border-linen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-sans uppercase tracking-wider text-terracotta font-semibold block">
            WEAVING INFRASTRUCTURE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest leading-[1.18]">
            Modern Weaving. Generations of Know-How.
          </h2>
          <p className="text-base font-sans text-charcoal leading-[1.68]">
            By operating both air-jet and water-jet shuttleless loom technologies, PS Exports
            bridges traditional warp preparation expertise with modern, high-speed weft insertion.
            Each loom type serves distinct yarn behaviours with calibrated precision.
          </p>
        </div>

        {/* Split Layout: Technology Selector + Technical Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          
          {/* Left Column: Technology Tabs & Detail (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Loom Toggle Buttons */}
            <div className="flex border border-linen p-1 bg-ivory shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveTab('air-jet')}
                className={`flex-1 py-2.5 px-3 text-xs font-sans uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                  activeTab === 'air-jet'
                    ? 'bg-forest text-ivory shadow-xs'
                    : 'text-charcoal hover:text-forest hover:bg-linen/25'
                }`}
              >
                <Wind className="w-4 h-4" />
                <span>Air-Jet Looms</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('water-jet')}
                className={`flex-1 py-2.5 px-3 text-xs font-sans uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                  activeTab === 'water-jet'
                    ? 'bg-forest text-ivory shadow-xs'
                    : 'text-charcoal hover:text-forest hover:bg-linen/25'
                }`}
              >
                <Droplets className="w-4 h-4" />
                <span>Water-Jet Looms</span>
              </button>
            </div>

            {/* Active Technology Breakdown */}
            <div className="p-6 bg-ivory border border-linen space-y-4 shadow-2xs">
              <div>
                <span className="text-xs font-mono uppercase text-terracotta tracking-wider font-semibold block mb-1">
                  INSERTION MEDIUM: {activeTech.medium.toUpperCase()}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-forest">
                  {activeTech.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm font-sans text-charcoal leading-[1.65]">
                {activeTech.technicalPrinciple}
              </p>

              <div className="pt-2 border-t border-linen/70 space-y-2.5">
                <span className="text-xs font-sans uppercase tracking-wider font-semibold text-forest block">
                  Best Suited For:
                </span>
                <div className="space-y-1.5">
                  {activeTech.suitableYarnsAndFabrics.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs sm:text-[13px] text-charcoal font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                to="/manufacturing"
                variant="outline"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5 ml-1.5" />}
              >
                Explore Full Manufacturing Capabilities
              </Button>
            </div>
          </div>

          {/* Right Column: Technical Schematic Illustration (Cols 6-12) */}
          <div className="lg:col-span-7">
            <LoomIllustration type={activeTab} />
          </div>

        </div>

        {/* Supporting Visual: Real Production Macro Loom Photograph */}
        <div className="relative border border-linen bg-ivory p-3.5 sm:p-5 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <div className="relative aspect-[16/9] overflow-hidden bg-linen/20 border border-linen">
                <img
                  src="/images/manufacturing_weaving_loom.jpg"
                  alt="Precision loom reeds and parallel warp threads under tension feeding newly woven fabric"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-5 space-y-3 p-2">
              <span className="text-xs font-sans uppercase tracking-wider text-terracotta font-semibold block">
                LOOM FLOOR CRAFTSMANSHIP
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-semibold text-forest leading-snug">
                Calibrated Warp Tension & Clean Selvedges
              </h4>
              <p className="text-xs sm:text-sm font-sans text-charcoal leading-[1.65]">
                Our operators monitor beam alignment and stop-motion indicators continuously.
                Fabric is inspected directly on the loom batching motion prior to full roll perching,
                ensuring consistent pick density across every metre.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
