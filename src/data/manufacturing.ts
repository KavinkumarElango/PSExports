import type { LoomTechnologyDetail } from '../types';

/**
 * Manufacturing Technical Information for PS Exports
 * 
 * Technically grounded explanation of Air-Jet and Water-Jet weaving mechanisms,
 * roll packaging, quality inspection routines, and custom order parameters.
 * Strictly adheres to verified capabilities without fabricated statistics.
 */

export const LOOM_TECHNOLOGIES: LoomTechnologyDetail[] = [
  {
    id: "air-jet-weaving",
    name: "Air-Jet Loom Technology",
    medium: "High-Velocity Compressed Air Pulse",
    buyerBenefit: "Exceptional weft insertion consistency and high structural integrity for spun yarns and natural fibres.",
    technicalPrinciple: 
      "Air-jet weaving operates by propelling the weft yarn across the open shed using a precisely timed sequence of primary and relay nozzle air pulses. Because there are no mechanical projectiles or heavy rapier heads entering the shed, friction against delicate warp threads is minimized.",
    suitableYarnsAndFabrics: [
      "100% Cotton, Combed & Carded yarns",
      "Cotton-Polyester and Polyester-Viscose blends",
      "Spun rayon and fine count shirting yarns",
      "High-density sheeting and plain/twill greige fabrics"
    ],
    operationalCharacteristics: [
      "Profile reed guides each air burst for stable weft trajectory",
      "Independent electronic tension regulation across full beam width",
      "Clean, oil-free weft insertion preventing fabric staining",
      "Calibrated selvage formation (tuck-in or leno selvage)"
    ],
    packagingNote: "Supplied in roll form with uniform diameter, wound directly from loom batching motions to prevent crease lines."
  },
  {
    id: "water-jet-weaving",
    name: "Water-Jet Loom Technology",
    medium: "Pressurized Micro-Water Stream",
    buyerBenefit: "Optimal yarn protection and tight packing density for synthetic continuous filament fabrics.",
    technicalPrinciple: 
      "Water-jet weaving utilizes a focused, high-pressure micro-stream of water as the carrying medium for hydrophobic filament yarns. The water jet carries synthetic yarns across broad widths at high speeds while dampening static electrical charges inherent in synthetic filaments.",
    suitableYarnsAndFabrics: [
      "Polyester filament (FDY, DTY, micro-denier)",
      "Polyamide / Nylon continuous filaments",
      "Taffeta, pongee, and micro-ripstop constructions",
      "Technical lining textiles and hydrophobic shell fabrics"
    ],
    operationalCharacteristics: [
      "Zero static charge interference during high-velocity shed movements",
      "Gentle handling of low-twist and sensitive synthetic filaments",
      "Integrated vacuum suction de-watering systems",
      "Continuous tension sensors across the fabric take-up zone"
    ],
    packagingNote: "Export rolls are de-watered, dried, tension-wound on moisture-resistant cores, and sealed in heavy-gauge polythene."
  }
];

export const MANUFACTURING_PILLARS = [
  {
    title: "Dual-Loom Versatility",
    description: "Combining air-jet looms for spun & natural fibre blends with water-jet looms for synthetic filaments allows PS Exports to service diverse woven fabric specifications under one manufacturing roof."
  },
  {
    title: "Continuous Roll Format",
    description: "All woven textiles are wound directly onto rigid cardboard or polymer cores to standard commercial diameters, eliminating handling folds and ensuring smooth downstream feeding into printing, dyeing, or cutting lines."
  },
  {
    title: "Pallipalayam Weaving Cluster",
    description: "Situated in the Erode textile belt of Tamil Nadu, our facility benefits from access to specialized yarn spinners, skilled warp-preparation artisans, and established logistics links to major Indian export seaports."
  },
  {
    title: "Buyer-Specified Beam Setups",
    description: "Rather than offering only rigid off-the-shelf fabrics, our loom parameters, pick densities, and reed counts can be configured to match international buyer technical sheets."
  }
];

export const QUALITY_STANDARDS_OVERVIEW = [
  {
    step: "01. Yarn Beam Preparation",
    detail: "Warp yarns undergo calibrated direct warping and sizing to maintain uniform elongation and breaking strength across every end on the loom."
  },
  {
    step: "02. On-Loom Electronic Monitoring",
    detail: "Optical and piezoelectric weft sensors instantly detect broken picks or tension dips, stopping loom motion to avoid extended mispicks."
  },
  {
    step: "03. Roll Inspection & Grading",
    detail: "Continuous rolls pass over illuminated inspection perches where cloth width, pick density, selvage alignment, and physical surface uniformity are checked."
  },
  {
    step: "04. Export Protection Packaging",
    detail: "Rolls are wrapped with protective moisture barriers, end-capped, labelled with batch roll numbers and yardages, and packed for international transit."
  }
];
