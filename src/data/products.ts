import type { ProductItem } from '../types';

/**
 * Woven Fabric Product Catalogue for PS Exports
 * 
 * NOTE FOR BUYERS & PS EXPORTS TEAM:
 * PS Exports supplies woven fabrics in industrial continuous rolls manufactured via
 * high-speed Air-jet and Water-jet looms. All technical specifications below represent
 * confirmed manufacturing capabilities or sample construction parameters subject to
 * buyer specification approval. No fictitious prices or delivery guarantees are listed.
 */

export const WOVEN_PRODUCTS: ProductItem[] = [
  {
    id: "woven-plain-greige",
    code: "PSE-WVN-01",
    name: "Plain Weave Greige & Loom-State Fabric",
    category: "Plain Weave",
    isConfirmedOffering: true,
    tagline: "High-density balanced 1/1 weave engineered on modern air-jet looms.",
    shortDescription: "Uniform, clean-surface plain weave fabric supplied in continuous rolls for converting, dyeing, printing, or industrial lamination.",
    detailedOverview: "Manufactured on precision air-jet looms, our plain weave greige fabric features uniform warp tension and minimal weft insertion irregularities. Supplied directly in textile rolls according to buyer roll-length requirements.",
    image: "/images/products/plain_weave_greige.jpg",
    imageAlt: "Close-up macro detail of balanced 1/1 plain weave greige fabric showing interlacing unbleached yarns",
    isIllustrativeSample: true,
    specifications: {
      fabricType: "Woven Greige / Loom-State Fabric",
      fibreComposition: "Cotton, Polyester, or Poly-Cotton Blends [Specific blend confirmed per buyer order]",
      construction: "1/1 Plain Weave [Warp x Weft counts tailored to buyer requirement]",
      gsmRange: "80 GSM to 260 GSM [Customisable to order]",
      widthRange: "44 inches to 72 inches (112 cm to 183 cm) [Standard loom widths]",
      finishingOptions: [
        "Loom-state / Greige (Unfinished)",
        "Singeing & Desizing [Upon buyer request]",
        "Scoured & Bleached [Pre-treatment available on confirmed bulk order]"
      ],
      colourAvailability: "Natural loom-state greige / ready-for-dyeing (RFD)",
      moqPlaceholder: "Subject to yarn procurement and beam length [Contact team for order-specific MOQ]",
      sampleAvailability: "Quality swatch and roll test cut available upon verified requirement",
      rollPackaging: "Continuous length rolls on rigid cardboard cores, poly-wrapped with waterproof outer layer"
    },
    intendedApplications: [
      "Garment interlinings and pocketing",
      "Home textile base fabric & sheeting",
      "Industrial base cloth and substrate laminates",
      "Printing and piece-dyeing conversion"
    ],
    loomTechnology: "Air-Jet Weaving",
    patternType: "plain"
  },
  {
    id: "woven-twill-sheeting",
    code: "PSE-WVN-02",
    name: "Twill Weave Fabrics (2/1 & 3/1 Constructions)",
    category: "Twill Weave",
    isConfirmedOffering: true,
    tagline: "Durable diagonal weave structures with high mechanical strength.",
    shortDescription: "Tightly packed twill woven textiles suited for workwear, uniform bases, pocketings, and durable household textile applications.",
    detailedOverview: "Our twill weaves offer diagonal rib textures that deliver elevated tear resistance and tactile fullness. Produced with controlled yarn insertion for consistent surface drape and uniform fabric hand feel.",
    image: "/images/products/twill_drill_weave.jpg",
    imageAlt: "Close-up macro detail of durable 2/1 twill drill weave fabric showing distinct diagonal ridges",
    isIllustrativeSample: true,
    specifications: {
      fabricType: "Woven Twill Fabric (Greige / Semi-finished)",
      fibreComposition: "100% Cotton, Poly-Viscose, or Cotton-Poly Blends [Buyer specification]",
      construction: "2/1 Twill, 2/2 Twill, or 3/1 Heavy Drill Weave",
      gsmRange: "140 GSM to 320 GSM [Configurable per beam configuration]",
      widthRange: "48 inches to 68 inches (122 cm to 172 cm)",
      finishingOptions: [
        "Loom-state greige",
        "Heat-set [For synthetic blends]",
        "Sanforized / Pre-shrunk [Available on contract processing]"
      ],
      colourAvailability: "Natural greige / Ecru / Semi-bleached",
      moqPlaceholder: "Calculated based on loom warp setup [Discuss with sales representative]",
      sampleAvailability: "Sample cuttings provided for hand-feel and construction verification",
      rollPackaging: "Export rolls wound under calibrated electronic tension to prevent distortion"
    },
    intendedApplications: [
      "Industrial workwear and protective apparel",
      "Heavy duty pocketing and linings",
      "Upholstery and slipcover foundations",
      "Institutional bedding and hospital textiles"
    ],
    loomTechnology: "Air-Jet Weaving",
    patternType: "twill"
  },
  {
    id: "synthetic-filament-waterjet",
    code: "PSE-WVN-03",
    name: "Hydro-Weft Filament & Microfibre Woven Fabrics",
    category: "Synthetic & Filament",
    isConfirmedOffering: true,
    tagline: "High-speed water-jet woven polyester and nylon filament constructions.",
    shortDescription: "Smooth, high-density hydrophobic woven textiles produced on precision water-jet looms for linings, umbrellas, rainwear, and technical shells.",
    detailedOverview: "Water-jet loom technology utilizes a fine high-pressure water stream to propel synthetic weft filaments at high speed. This method is suited for continuous filament yarns (polyester, polyamide/nylon), producing fabrics with high pick consistency and minimal friction damage.",
    image: "/images/products/synthetic_filament_weave.jpg",
    imageAlt: "Close-up macro detail of smooth continuous filament water-jet woven polyester taffeta micro-weave",
    isIllustrativeSample: true,
    specifications: {
      fabricType: "Continuous Filament Woven Fabric (Taffeta / Pongee / Micro-twill)",
      fibreComposition: "100% Polyester Filament, Nylon, or Recycled PET [Confirmed per specification]",
      construction: "Plain taffeta, high-density micro-weave, or ripstop reinforcement",
      gsmRange: "50 GSM to 180 GSM [Lightweight to medium-density filament]",
      widthRange: "58 inches to 70 inches (147 cm to 178 cm)",
      finishingOptions: [
        "Water-jet de-watered & dried rolls",
        "Calendered / Cire finish [Upon request]",
        "Water-repellent coating substrate [Base fabric]"
      ],
      colourAvailability: "Loom-state raw white / Optical white / Piece-dyed base",
      moqPlaceholder: "Determined by filament denier and roll batch size [Contact team]",
      sampleAvailability: "Fabric swatch card available upon specification request",
      rollPackaging: "Moisture-sealed polythene tubing, edge-guarded roll ends, exported in sturdy containers"
    },
    intendedApplications: [
      "Outerwear shell & windbreaker fabric",
      "Jacket and luggage lining",
      "Curtain backing & shower curtain textiles",
      "High-density umbrella and canopy fabrics"
    ],
    loomTechnology: "Water-Jet Weaving",
    patternType: "canvas"
  },
  {
    id: "dobby-structured-woven",
    code: "PSE-WVN-04",
    name: "Dobby & Geometric Structured Woven Fabrics",
    category: "Dobby & Textured",
    isConfirmedOffering: true,
    tagline: "Engineered small-repeat geometric patterns woven with structural precision.",
    shortDescription: "Subtle dobby structures including bird-eye, diamond weaves, herringbone, and textured stripes woven for premium apparel and home linens.",
    detailedOverview: "Utilizing programmed electronic dobby mechanisms combined with air-jet weft insertion, we produce structural patterns integrated directly into the fabric's matrix. This eliminates printed surface imitation and yields authentic woven dimension.",
    image: "/images/products/dobby_structured_weave.jpg",
    imageAlt: "Close-up macro detail of geometric structured dobby weave fabric featuring small-repeat relief pattern",
    isIllustrativeSample: true,
    specifications: {
      fabricType: "Structured Dobby Woven Fabric",
      fibreComposition: "Cotton, Linen-look Rayon, Modal blends, or Synthetic blends",
      construction: "Engineered dobby weave (Mini-waffle, herringbone, pin-dot, fine basket)",
      gsmRange: "110 GSM to 240 GSM",
      widthRange: "44 inches to 65 inches (112 cm to 165 cm)",
      finishingOptions: [
        "Greige / Loom state",
        "Soft wash pre-finish [Contract basis]",
        "Mercerised base [For cotton constructions]"
      ],
      colourAvailability: "Natural loom greige / Semi-scoured",
      moqPlaceholder: "Specific to dobby harness configuration [Enquire for details]",
      sampleAvailability: "Structural sample swatches available for pattern evaluation",
      rollPackaging: "Precision tension-wound rolls packed on export grade cores"
    },
    intendedApplications: [
      "Casual shirting and resort apparel",
      "Decorative household napery & table linens",
      "Hotel & hospitality furnishing fabrics",
      "Woven acoustic panel surface coverings"
    ],
    loomTechnology: "Air-Jet Weaving",
    patternType: "dobby"
  },
  {
    id: "industrial-custom-woven",
    code: "PSE-WVN-05",
    name: "Custom Industrial & Substrate Woven Fabrics",
    category: "Industrial & Custom",
    isConfirmedOffering: true,
    tagline: "Bespoke warp and weft constructions built to buyer technical parameters.",
    shortDescription: "Engineered roll fabrics manufactured according to buyer-supplied pick counts, yarn tenacities, and specific commercial requirements.",
    detailedOverview: "Leveraging five decades of weaving heritage in Pallipalayam, PS Exports works alongside technical textile converters and international importers to establish custom beam set-ups for specialized industrial applications.",
    image: "/images/products/industrial_substrate_weave.jpg",
    imageAlt: "Close-up macro detail of heavy-duty industrial technical substrate canvas weave matrix for coating reinforcement",
    isIllustrativeSample: true,
    specifications: {
      fabricType: "Custom Technical Woven Substrate",
      fibreComposition: "As required by buyer technical specification [Natural or synthetic]",
      construction: "Tailored (Plain, Twill, Oxford, or Basket Weaves)",
      gsmRange: "Configurable within loom tension parameters [Buyer specified]",
      widthRange: "Custom cut and selvage tuck options within loom limits",
      finishingOptions: [
        "Raw industrial greige",
        "Heat stabilized",
        "Ready-for-lamination / coating"
      ],
      colourAvailability: "Greige natural / Raw synthetic",
      moqPlaceholder: "Defined by minimal warping beam capacity [Custom inquiry required]",
      sampleAvailability: "Pilot trial length or strike-off sample upon formal requirement",
      rollPackaging: "Heavy-duty continuous rolls with identification barcodes and batch markers"
    },
    intendedApplications: [
      "Rubber and polymer coating reinforcement",
      "Geotextile and agricultural shade foundations",
      "Abrasive backing cloth and filtration matrix",
      "Conveyor belt carcass reinforcement"
    ],
    loomTechnology: "Air-Jet or Water-Jet",
    patternType: "canvas"
  }
];

export const PRODUCT_CATEGORIES = [
  "All Fabrics",
  "Plain Weave",
  "Twill Weave",
  "Synthetic & Filament",
  "Dobby & Textured",
  "Industrial & Custom"
];
