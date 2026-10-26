import React, { useState } from 'react';
import { ArrowRight, Wind, Droplets, ShieldCheck, Check } from 'lucide-react';
import { LOOM_TECHNOLOGIES, QUALITY_STANDARDS_OVERVIEW } from '../data/manufacturing';
import { SeoMeta } from '../components/ui/SeoMeta';
import { LoomIllustration } from '../components/ui/LoomIllustration';
import { Button } from '../components/ui/Button';
import { WovenPattern } from '../components/ui/WovenPattern';

export const ManufacturingPage: React.FC = () => {
  const [selectedLoom, setSelectedLoom] = useState<'air-jet' | 'water-jet'>('air-jet');

  return (
    <>
      <SeoMeta
        title="Manufacturing & Loom Capabilities — Air-Jet & Water-Jet Weaving"
        description="Technical overview of PS Exports' weaving facility in Pallipalayam, Tamil Nadu. High-speed air-jet looms for natural and blended spun yarns, water-jet looms for synthetic filaments."
        canonicalPath="/manufacturing"
      />

      {/* Hero Header */}
      <section className="relative bg-ivory border-b border-linen pt-12 pb-16 overflow-hidden">
        <WovenPattern variant="linen" density="medium" opacity={0.25} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold block">
              MANUFACTURING INFRASTRUCTURE · PALLIPALAYAM
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-forest">
              Air-Jet & Water-Jet Loom Technology.
            </h1>
            <p className="text-base font-sans text-charcoal/80 leading-relaxed">
              We operate shuttleless air-jet and water-jet looms in Pallipalayam, Erode. By pairing
              each weaving technology with appropriate yarn properties, we achieve high structural
              uniformity, controlled fabric width, and continuous roll presentation for global buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Loom Technology Deep-Dive */}
      <section className="py-16 bg-ivory-light border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-linen mb-10 gap-4">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-semibold block mb-1">
                WEAVING MECHANISM SELECTION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-forest">
                Comparative Loom Engineering
              </h2>
            </div>

            <div className="flex border border-linen p-1 bg-ivory">
              <button
                type="button"
                onClick={() => setSelectedLoom('air-jet')}
                className={`py-2 px-4 text-xs font-sans uppercase tracking-wider font-medium flex items-center space-x-2 transition-all cursor-pointer ${
                  selectedLoom === 'air-jet'
                    ? 'bg-forest text-ivory shadow-xs'
                    : 'text-charcoal/70 hover:text-forest'
                }`}
              >
                <Wind className="w-3.5 h-3.5" />
                <span>Air-Jet Weaving</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedLoom('water-jet')}
                className={`py-2 px-4 text-xs font-sans uppercase tracking-wider font-medium flex items-center space-x-2 transition-all cursor-pointer ${
                  selectedLoom === 'water-jet'
                    ? 'bg-forest text-ivory shadow-xs'
                    : 'text-charcoal/70 hover:text-forest'
                }`}
              >
                <Droplets className="w-3.5 h-3.5" />
                <span>Water-Jet Weaving</span>
              </button>
            </div>
          </div>

          {/* Interactive Technical Schematic and Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
            <div className="lg:col-span-7">
              <LoomIllustration type={selectedLoom} />
            </div>

            <div className="lg:col-span-5 space-y-6">
              {LOOM_TECHNOLOGIES.filter(l => l.id === `${selectedLoom}-weaving`).map((loom) => (
                <div key={loom.id} className="p-6 bg-ivory border border-linen space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-terracotta tracking-widest font-semibold block mb-1">
                      CARRIER VELOCITY & SHED DYNAMICS
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-forest">
                      {loom.name}
                    </h3>
                  </div>

                  <p className="text-xs font-sans text-charcoal/85 leading-relaxed">
                    {loom.buyerBenefit}
                  </p>

                  <div className="pt-2 border-t border-linen/60 space-y-2">
                    <span className="text-[11px] font-sans uppercase tracking-wider font-semibold text-forest block">
                      Operational Characteristics
                    </span>
                    <div className="space-y-1.5">
                      {loom.operationalCharacteristics.map((char, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-charcoal/80">
                          <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                          <span>{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-linen/60">
                    <span className="text-[11px] font-sans uppercase tracking-wider font-semibold text-forest block mb-1">
                      Packaging Output Note
                    </span>
                    <p className="text-xs text-charcoal/70 leading-relaxed italic">
                      {loom.packagingNote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Manufacturing Visual */}
          <div className="p-4 sm:p-6 bg-ivory border border-linen">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6">
                <div className="relative aspect-[16/10] overflow-hidden bg-linen/20 border border-linen/60">
                  <img
                    src="/images/manufacturing_weaving_loom.jpg"
                    alt="Close-up of warp threads entering the metallic reed on a weaving loom"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="md:col-span-6 space-y-4">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold block">
                  TECHNICAL CRAFTSMANSHIP
                </span>
                <h3 className="font-serif text-2xl font-semibold text-forest">
                  Precision Warp Preparation & Tension Control
                </h3>
                <p className="text-xs font-sans text-charcoal/80 leading-relaxed">
                  The strength and uniformity of woven fabric is determined long before weft insertion begins.
                  In Pallipalayam, our sizing and warping procedures ensure each warp end carries equal tensile
                  resistance. This prevents end-breakages and maintains uniform fabric width from the start of the roll
                  to the core.
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs text-forest font-semibold">
                  <ShieldCheck className="w-4 h-4 text-terracotta" />
                  <span>Calibrated electronic let-off & continuous batching take-up</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quality Inspection Steps */}
      <section className="py-16 bg-ivory border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold block">
              PROCESS VERIFICATION
            </span>
            <h2 className="font-serif text-3xl font-semibold text-forest">
              From Yarn Beam to Continuous Export Roll
            </h2>
            <p className="text-xs font-sans text-charcoal/70 leading-relaxed">
              Every continuous meter of fabric produced at PS Exports passes through four rigorous stages
              of physical and optical quality monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_STANDARDS_OVERVIEW.map((item, idx) => (
              <div key={idx} className="p-6 bg-ivory-light border border-linen space-y-3">
                <span className="text-xs font-mono font-semibold text-terracotta block">
                  {item.step}
                </span>
                <p className="text-xs font-sans text-charcoal/80 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Manufacturing CTA */}
      <section className="py-16 bg-forest text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="font-serif text-3xl font-bold">
            Discuss Your Custom Beam or Weave Feasibility
          </h3>
          <p className="text-sm font-sans text-linen/90 max-w-xl mx-auto leading-relaxed">
            Have a technical data sheet with required pick counts, yarn tenacities, or finish requirements?
            Our manufacturing team can evaluate loom configuration and lead times.
          </p>
          <div className="pt-2">
            <Button
              to="/contact?product=Technical%20Loom%20Feasibility"
              variant="terracotta"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 ml-1.5" />}
            >
              Discuss Technical Specs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
