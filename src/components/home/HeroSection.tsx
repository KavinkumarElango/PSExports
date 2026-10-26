import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Factory, Layers } from 'lucide-react';
import { Button } from '../ui/Button';
import { WovenPattern } from '../ui/WovenPattern';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-ivory border-b border-linen overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Woven Pattern: Ultra-subtle (0.09 opacity) with left mask keeping text background calm */}
      <WovenPattern variant="linen" density="medium" opacity={0.09} mask="left-calm" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Editorial Text Content (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Eyebrow Label: High contrast, clearly readable */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 bg-forest/8 border border-forest/20">
              <span className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-forest">
                TEXTILE MANUFACTURING · PALLIPALAYAM, INDIA
              </span>
            </div>

            {/* Main Headline: Deep Forest Green (#183C35) */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold tracking-tight text-forest leading-[1.14]">
              Textile Expertise, Woven Through Generations.
            </h1>

            {/* High-Contrast Body Copy: Dark Charcoal (#292D2A) with generous 1.68 line height */}
            <p className="text-base sm:text-[17px] lg:text-[18px] font-sans text-charcoal leading-[1.68] max-w-2xl font-normal">
              With over five decades of textile-industry experience, PS Exports brings together
              manufacturing knowledge and modern weaving technology to serve fabric buyers with care
              and precision.
            </p>

            {/* Manufacturing Highlights / Feature Row */}
            <div className="pt-1 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs sm:text-[13px] font-sans text-charcoal font-medium">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-terracotta shrink-0" />
                <span>50+ Years Manufacturing Heritage</span>
              </div>
              <div className="flex items-center space-x-2">
                <Factory className="w-4 h-4 text-forest shrink-0" />
                <span>Air-Jet & Water-Jet Looms</span>
              </div>
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-forest shrink-0" />
                <span>Supplied in Continuous Rolls</span>
              </div>
            </div>

            {/* Actions: Primary CTA & Secondary CTA with distinct contrast */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                to="/products"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4 ml-2" />}
              >
                EXPLORE OUR FABRICS
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                icon={<MessageSquare className="w-4 h-4 ml-2" />}
              >
                TALK TO OUR TEAM
              </Button>
            </div>
          </div>

          {/* Visual Element: Authentic Editorial Textile Photo (Cols 8-12) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Refined single border enclosure without competing bulky corner frames */}
              <div className="relative bg-ivory border border-linen/90 p-2 sm:p-2.5 shadow-sm">
                <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-linen/20">
                  <img
                    src="/images/hero_textile_rolls.jpg"
                    alt="Industrial continuous rolls of woven greige fabric produced by PS Exports"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-[1.02]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Caption / Specification Label */}
                <div className="pt-3 pb-1 px-1.5 flex items-center justify-between text-xs font-sans text-charcoal">
                  <span className="uppercase tracking-wider font-semibold text-[11px] text-terracotta">
                    Roll Batch Format
                  </span>
                  <span className="font-medium text-charcoal">
                    Continuous Export Packing
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
