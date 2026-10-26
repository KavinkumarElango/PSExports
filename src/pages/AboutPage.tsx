import React from 'react';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { HERITAGE_MILESTONES, REGIONAL_CONTEXT } from '../data/about';
import { SeoMeta } from '../components/ui/SeoMeta';
import { Button } from '../components/ui/Button';
import { WovenPattern } from '../components/ui/WovenPattern';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SeoMeta
        title="About Our 50+ Year Textile Heritage in Pallipalayam, Erode"
        description="Learn about PS Exports' five decades of textile weaving heritage in Pallipalayam, Tamil Nadu. Manufacturing woven fabrics on modern air-jet and water-jet looms."
        canonicalPath="/about"
      />

      {/* Hero Header */}
      <section className="relative bg-ivory border-b border-linen pt-12 pb-16 overflow-hidden">
        <WovenPattern variant="linen" density="medium" opacity={0.25} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold block">
              HERITAGE & REGIONAL ROOTS
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-forest">
              Textile Expertise, Woven Through Generations.
            </h1>
            <p className="text-base font-sans text-charcoal/80 leading-relaxed">
              With over 50 years of accumulated textile-industry experience, PS Exports represents
              the deep weaving traditions of Pallipalayam, Erode — backed by modern shuttleless
              air-jet and water-jet looms for the global textile trade.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Regional Ecosystem */}
      <section className="py-16 bg-ivory-light border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Story / Context (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-6 font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold block">
                OUR BACKGROUND
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-forest">
                Five Decades in South India's Textile Heartland
              </h2>

              <p>
                Pallipalayam and Erode in Tamil Nadu have long held a unique position on India's
                industrial textile map. Positioned along the fertile banks of the Cauvery River,
                the region emerged as an epicenter of spinning, dyeing, and powerloom weaving.
              </p>

              <p>
                For more than five decades, our leadership and technical teams have worked within
                this dynamic ecosystem. Over those years, we observed how international buyer
                demands became increasingly focused on tighter tolerances, wider widths, clean
                selvedges, and continuous defect-free rolls.
              </p>

              <p>
                To answer those demands, PS Exports evolved into advanced shuttleless weaving,
                investing in high-velocity air-jet and water-jet loom technologies. This evolution
                allowed us to bridge regional yarn craftsmanship with the exact physical metrics
                demanded by global converters and wholesalers.
              </p>

              <div className="p-6 bg-ivory border-l-4 border-forest border border-linen space-y-2 mt-4">
                <span className="font-serif text-lg font-semibold text-forest block">
                  Our Commercial Philosophy
                </span>
                <p className="text-xs text-charcoal/80 leading-relaxed">
                  We believe in straightforward, technically honest partnerships. We do not invent
                  unsupported claims or exaggerated metrics. When you contact PS Exports, you speak
                  directly with people who understand yarn counts, pick densities, warp beam capacity,
                  and roll dynamics.
                </p>
              </div>
            </div>

            {/* Regional Infobox (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 bg-ivory border border-linen space-y-6">
                <div className="flex items-center space-x-2 text-forest border-b border-linen pb-3">
                  <MapPin className="w-5 h-5 text-terracotta shrink-0" />
                  <h3 className="font-serif text-xl font-semibold">
                    The Pallipalayam Advantage
                  </h3>
                </div>

                <div className="space-y-4 text-xs font-sans text-charcoal/80 leading-relaxed">
                  <p>
                    {REGIONAL_CONTEXT.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-linen">
                    <div className="flex justify-between py-1 border-b border-linen/50">
                      <span className="font-medium text-forest">Town / Location:</span>
                      <span>Pallipalayam, Erode</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-linen/50">
                      <span className="font-medium text-forest">State / Country:</span>
                      <span>Tamil Nadu, India</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-linen/50">
                      <span className="font-medium text-forest">Specialization:</span>
                      <span>Woven Fabrics in Rolls</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-medium text-forest">Technology:</span>
                      <span>Air-Jet & Water-Jet Looms</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Experience Callout */}
              <div className="p-6 bg-forest text-ivory space-y-2">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-terracotta" />
                  <span className="text-xs uppercase tracking-widest text-linen font-medium font-sans">
                    Experience Standard
                  </span>
                </div>
                <div className="font-serif text-3xl font-bold">
                  50+ Years in Industry
                </div>
                <p className="text-xs text-linen/80 leading-relaxed">
                  Continuous manufacturing knowledge passed down and refined through technological upgrades.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="py-16 bg-ivory border-b border-linen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold">
              CHRONOLOGY
            </span>
            <h2 className="font-serif text-3xl font-semibold text-forest">
              Milestones of Growth & Evolution
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-1/2 before:w-[1px] before:bg-linen">
            {HERITAGE_MILESTONES.map((milestone, idx) => (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                {/* Marker */}
                <div className="absolute left-3.5 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ivory border-2 border-terracotta z-10" />

                <div className="ml-10 sm:ml-0 sm:w-[45%] p-6 bg-ivory-light border border-linen space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-semibold block">
                    {milestone.period}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-forest">
                    {milestone.title}
                  </h4>
                  <p className="text-xs font-sans text-charcoal/80 leading-relaxed">
                    {milestone.narrative}
                  </p>
                </div>

                <div className="hidden sm:block sm:w-[45%]" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About CTA */}
      <section className="py-16 bg-forest text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="font-serif text-3xl font-bold">
            Connect With Our Pallipalayam Team
          </h3>
          <p className="text-sm font-sans text-linen/90 max-w-xl mx-auto leading-relaxed">
            Interested in discussing regular container fabric supplies or customized roll specifications?
            We welcome direct technical inquiries from international textile buyers.
          </p>
          <div className="pt-2">
            <Button
              to="/contact"
              variant="terracotta"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 ml-1.5" />}
            >
              Get in Touch Directly
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
