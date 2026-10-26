import React from 'react';

interface LoomDiagramProps {
  type: 'air-jet' | 'water-jet';
  className?: string;
}

export const LoomIllustration: React.FC<LoomDiagramProps> = ({ type, className = '' }) => {
  const isAir = type === 'air-jet';

  return (
    <div className={`relative bg-ivory-light border border-linen p-6 rounded-none ${className}`}>
      <div className="flex items-center justify-between pb-4 border-b border-linen mb-6">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-terracotta block">
            {isAir ? 'PNEUMATIC INSERTION' : 'HYDRODYNAMIC INSERTION'}
          </span>
          <h4 className="font-serif text-lg font-semibold text-forest">
            {isAir ? 'Air-Jet Weaving Principle' : 'Water-Jet Weaving Principle'}
          </h4>
        </div>
        <div className="text-right">
          <span className="inline-block px-2 py-0.5 text-[11px] font-sans font-medium uppercase tracking-wider bg-linen/40 text-charcoal rounded-none">
            {isAir ? 'Spun & Natural Blends' : 'Synthetic Filaments'}
          </span>
        </div>
      </div>

      {/* Technical Schematic SVG */}
      <div className="relative aspect-[16/9] w-full flex items-center justify-center bg-ivory border border-linen/60 overflow-hidden">
        <svg
          viewBox="0 0 640 360"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background grid markings */}
          <defs>
            <pattern id={`tech-grid-${type}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(217, 203, 175, 0.25)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="640" height="360" fill={`url(#tech-grid-${type})`} />

          {/* Warp Beam (Left) */}
          <g transform="translate(60, 180)">
            <circle cx="0" cy="0" r="42" fill="#EBE3D3" stroke="#292D2A" strokeWidth="2" />
            <circle cx="0" cy="0" r="14" fill="#183C35" />
            <text x="0" y="60" textAnchor="middle" className="text-[11px] font-mono fill-charcoal font-medium">
              Warp Beam
            </text>
          </g>

          {/* Warp Threads Forming Shed */}
          {/* Top Shed Line */}
          <path
            d="M 60 145 L 210 100 L 320 180"
            fill="none"
            stroke="#292D2A"
            strokeWidth="2"
            strokeDasharray="4 2"
          />
          {/* Bottom Shed Line */}
          <path
            d="M 60 215 L 210 260 L 320 180"
            fill="none"
            stroke="#292D2A"
            strokeWidth="2"
            strokeDasharray="4 2"
          />

          {/* Heald Shafts / Harnesses */}
          <g transform="translate(205, 75)">
            <rect x="0" y="0" width="10" height="210" fill="#FAF7F0" stroke="#183C35" strokeWidth="1.5" />
            <circle cx="5" cy="40" r="3" fill="#B86F52" />
            <circle cx="5" cy="170" r="3" fill="#B86F52" />
            <text x="5" y="-10" textAnchor="middle" className="text-[10px] font-mono fill-charcoal">
              Harness
            </text>
          </g>

          {/* Reed / Beating Zone */}
          <g transform="translate(305, 120)">
            <rect x="0" y="0" width="12" height="120" fill="#FAF7F0" stroke="#183C35" strokeWidth="1.5" />
            <line x1="6" y1="0" x2="6" y2="120" stroke="#292D2A" strokeWidth="1" strokeDasharray="2 2" />
            <text x="6" y="140" textAnchor="middle" className="text-[10px] font-mono fill-charcoal">
              Profile Reed
            </text>
          </g>

          {/* Insertion Vector (Air pulse or Water jet stream) */}
          {isAir ? (
            /* Air Jet Nozzle + Air Burst */
            <g transform="translate(260, 180)">
              {/* Main Nozzle */}
              <polygon points="0,-12 35,-6 35,6 0,12" fill="#183C35" />
              {/* Air pulse trail */}
              <path
                d="M 38 0 C 80 -10, 140 10, 200 0"
                fill="none"
                stroke="#B86F52"
                strokeWidth="2.5"
                strokeDasharray="6 3"
              />
              <circle cx="200" cy="0" r="4" fill="#B86F52" />
              <text x="40" y="-18" className="text-[10px] font-mono fill-terracotta font-semibold">
                High-Speed Air Pulse & Weft Yarn
              </text>
            </g>
          ) : (
            /* Water Jet Nozzle + Water Stream */
            <g transform="translate(260, 180)">
              {/* High pressure water nozzle */}
              <polygon points="0,-10 38,-4 38,4 0,10" fill="#183C35" />
              {/* Hydro stream */}
              <path
                d="M 40 0 L 210 0"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                opacity="0.8"
              />
              {/* Water droplet accents */}
              <circle cx="100" cy="0" r="2.5" fill="#3B82F6" />
              <circle cx="160" cy="0" r="2.5" fill="#3B82F6" />
              <circle cx="210" cy="0" r="4" fill="#3B82F6" />
              <text x="40" y="-18" className="text-[10px] font-mono fill-forest font-semibold">
                Pressurized Water Stream & Filament Weft
              </text>
            </g>
          )}

          {/* Formed Woven Cloth (Rightward progression) */}
          <line x1="320" y1="180" x2="490" y2="180" stroke="#183C35" strokeWidth="4" />
          <path
            d="M 330 174 L 490 174 M 330 186 L 490 186"
            stroke="#B86F52"
            strokeWidth="1"
            strokeDasharray="3 3"
          />

          {/* Cloth Take-Up & Industrial Fabric Roll (Far Right) */}
          <g transform="translate(540, 180)">
            <circle cx="0" cy="0" r="46" fill="#D9CBAF" stroke="#183C35" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="34" fill="#F5F0E6" stroke="#292D2A" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="12" fill="#183C35" />
            <text x="0" y="65" textAnchor="middle" className="text-[11px] font-mono fill-charcoal font-medium">
              Continuous Textile Roll
            </text>
          </g>
        </svg>
      </div>

      {/* Explanatory Caption */}
      <div className="mt-4 pt-4 border-t border-linen grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal">
        <div>
          <span className="font-semibold text-forest block mb-1 text-xs sm:text-[13px]">Carrier Mechanism</span>
          <p className="leading-[1.6]">
            {isAir
              ? 'Tandem primary nozzle and relay nozzles along profile reed gently guide spun yarn across shed without physical contact.'
              : 'Pressurized micro-nozzle projects synthetic filament with zero static friction, followed by integrated suction de-watering.'}
          </p>
        </div>
        <div>
          <span className="font-semibold text-forest block mb-1 text-xs sm:text-[13px]">Roll Take-Up Guarantee</span>
          <p className="leading-[1.6]">
            Wound directly onto standard industrial export cores under electronic tension, maintaining uniform yarn density across the full roll.
          </p>
        </div>
      </div>
    </div>
  );
};
