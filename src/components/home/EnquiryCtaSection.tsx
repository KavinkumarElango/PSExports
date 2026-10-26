import React from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { WovenPattern } from '../ui/WovenPattern';

export const EnquiryCtaSection: React.FC = () => {
  return (
    <section className="relative bg-forest text-ivory py-20 lg:py-28 overflow-hidden">
      {/* Subtle Woven Pattern Accent: Very soft on dark forest */}
      <WovenPattern variant="forest" density="broad" opacity={0.06} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 bg-ivory/12 border border-ivory/25">
            <span className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-ivory">
              DIRECT MANUFACTURER ENQUIRIES
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ivory leading-[1.18]">
            Let's Talk About Your Next Fabric Requirement.
          </h2>

          <p className="text-base sm:text-lg font-sans text-linen-light leading-[1.68] max-w-2xl mx-auto font-normal">
            Share your specifications, required quantity and intended application. Our team can
            discuss the next steps with you.
          </p>

          {/* Action CTAs with High Contrast */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="terracotta"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 ml-2" />}
            >
              REQUEST A QUOTE
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="border-2 border-ivory text-ivory hover:bg-ivory hover:text-forest shadow-2xs"
              icon={<Mail className="w-4 h-4 ml-2" />}
            >
              CONTACT OUR TEAM
            </Button>
          </div>

          {/* Location & Supply Snapshot with High Contrast */}
          <div className="pt-8 border-t border-forest-light/40 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs sm:text-[13px] font-sans text-linen-light font-medium">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-terracotta shrink-0" />
              <span>Pallipalayam, Erode, Tamil Nadu, India</span>
            </div>
            <div>
              <span>Air-Jet & Water-Jet Weaving</span>
            </div>
            <div>
              <span>Supplied in Continuous Industrial Rolls</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
