import React from 'react';
import { VERIFIED_STRENGTHS } from '../../data/about';

export const WhyPSExportsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ivory border-b border-linen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-sans uppercase tracking-wider text-terracotta font-semibold block">
            VERIFIABLE FOUNDATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest leading-[1.18]">
            A Manufacturing Partner You Can Talk To.
          </h2>
          <p className="text-base font-sans text-charcoal leading-[1.68]">
            International fabric sourcing requires technical precision, commercial transparency,
            and dependable manufacturing partners. Here are the verifiable foundations of PS Exports.
          </p>
        </div>

        {/* Refined Editorial Composition - Asymmetric Strengths Breakdown */}
        <div className="border-t border-b border-linen divide-y divide-linen">
          {VERIFIED_STRENGTHS.map((item, index) => (
            <div
              key={index}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline transition-colors hover:bg-linen/15 px-3 sm:px-6"
            >
              {/* Stat / Identification Column (Cols 1-3) */}
              <div className="md:col-span-3 flex items-baseline space-x-3">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-forest">
                  {item.number}
                </span>
                <span className="font-sans text-xs uppercase tracking-wider text-terracotta font-semibold">
                  {item.unit}
                </span>
              </div>

              {/* Title Column (Cols 4-7) */}
              <div className="md:col-span-4">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-forest">
                  {item.title}
                </h3>
              </div>

              {/* Description Column (Cols 8-12) */}
              <div className="md:col-span-5">
                <p className="text-xs sm:text-sm font-sans text-charcoal leading-[1.68]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Advantage Editorial Note */}
        <div className="mt-12 p-6 sm:p-8 bg-ivory-light border border-linen grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-2xs">
          <div className="md:col-span-8 space-y-2">
            <span className="text-xs font-sans uppercase tracking-wider text-terracotta font-semibold block">
              PALLIPALAYAM · ERODE TEXTILE ECOSYSTEM
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-semibold text-forest">
              Tamil Nadu's Integrated Textile Heartland
            </h4>
            <p className="text-xs sm:text-sm font-sans text-charcoal leading-[1.68] max-w-2xl">
              Operating within the Erode powerloom and shuttleless weaving hub gives us direct access
              to premium ring-spun cotton and filament spinning mills across Namakkal, Tirupur, and
              Coimbatore, as well as expedited container routes to Tuticorin and Chennai ports.
            </p>
          </div>

          <div className="md:col-span-4 md:text-right">
            <span className="inline-block px-3.5 py-1.5 bg-forest/8 border border-forest/25 text-forest text-xs font-mono font-semibold">
              GPS: 11.35° N, 77.72° E
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export const WhyGiriSection = WhyPSExportsSection;
