import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ivory-light border-b border-linen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Experience Metric (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-wider text-terracotta font-semibold">
              <span className="w-2 h-2 bg-forest rounded-full" />
              <span>MANUFACTURING HERITAGE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest leading-[1.18]">
              Experience That Runs Deeper Than the Weave.
            </h2>

            {/* Prominent 50+ Years Stat Callout */}
            <div className="p-6 bg-ivory border-l-4 border-terracotta border border-linen space-y-2.5 shadow-2xs">
              <div className="flex items-baseline space-x-3">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-forest">
                  50+
                </span>
                <span className="font-sans text-xs uppercase tracking-wider text-terracotta font-semibold">
                  Years of Industry Experience
                </span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-charcoal leading-[1.65]">
                Accumulated across generations in Pallipalayam, Erode — navigating the transition
                from regional weaving traditions to modern shuttleless loom technology.
              </p>
            </div>

            <div className="pt-2">
              <Button
                to="/about"
                variant="outline"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5 ml-1.5" />}
              >
                Read Our Story
              </Button>
            </div>
          </div>

          {/* Right Column: Context, Capabilities & Buyer Commitment (Cols 6-12) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-charcoal space-y-5 font-sans text-base leading-[1.68]">
              <p className="text-base sm:text-lg font-serif italic text-forest border-l-2 border-terracotta/70 pl-4 py-1 leading-[1.65]">
                "Weaving is fundamentally an exercise in discipline: maintaining exact warp tension,
                consistent pick density, and uniform yarn alignment over thousands of continuous meters."
              </p>

              <p>
                Located in <strong className="text-forest font-semibold">Pallipalayam, Erode</strong> — the historic heart of South India's
                textile corridor along the Cauvery River basin — PS Exports operates with deep roots
                in fabric production. Erode has long been renowned for its woven goods, spinning integration,
                and textile trade networks.
              </p>

              <p>
                Rather than treating fabric as an anonymous commodity, we approach each customer
                relationship as a technical collaboration. Whether you require standard greige plain
                cloth for downstream processing or custom-engineered constructions for industrial applications,
                our production adapts to your yarn and width specifications.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 bg-ivory border border-linen space-y-2 shadow-2xs">
                <div className="text-xs font-mono text-terracotta uppercase font-semibold">01 / TECHNOLOGY</div>
                <h4 className="font-serif font-semibold text-forest text-base">Dual Loom Facility</h4>
                <p className="text-xs sm:text-[13px] text-charcoal leading-[1.6]">
                  Air-jet and water-jet weaving configurations tailored to spun and filament yarns.
                </p>
              </div>

              <div className="p-5 bg-ivory border border-linen space-y-2 shadow-2xs">
                <div className="text-xs font-mono text-terracotta uppercase font-semibold">02 / FORMAT</div>
                <h4 className="font-serif font-semibold text-forest text-base">Textile Rolls</h4>
                <p className="text-xs sm:text-[13px] text-charcoal leading-[1.6]">
                  Supplied in continuous roll batches on export cores, wrapped for international sea freight.
                </p>
              </div>

              <div className="p-5 bg-ivory border border-linen space-y-2 shadow-2xs">
                <div className="text-xs font-mono text-terracotta uppercase font-semibold">03 / COLLABORATION</div>
                <h4 className="font-serif font-semibold text-forest text-base">Direct Dialogue</h4>
                <p className="text-xs sm:text-[13px] text-charcoal leading-[1.6]">
                  Direct communication for buyer technical parameters, GSM variations, and sample trials.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
