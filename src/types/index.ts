/**
 * Core Type Definitions for PS Exports
 */

export interface ProductSpecification {
  fabricType: string;
  fibreComposition: string;
  construction: string;
  gsmRange: string;
  widthRange: string;
  finishingOptions: string[];
  colourAvailability: string;
  moqPlaceholder: string;
  sampleAvailability: string;
  rollPackaging: string;
}

export interface ProductItem {
  id: string;
  code: string;
  name: string;
  category: string;
  isConfirmedOffering: boolean;
  tagline: string;
  shortDescription: string;
  detailedOverview: string;
  specifications: ProductSpecification;
  intendedApplications: string[];
  loomTechnology: "Air-Jet Weaving" | "Water-Jet Weaving" | "Air-Jet or Water-Jet";
  patternType: "plain" | "twill" | "satin" | "dobby" | "canvas";
  image?: string;
  imageAlt?: string;
  isIllustrativeSample?: boolean;
}

export interface QuoteFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  country: string;
  productRequirement: string;
  message: string;
  // Optional B2B fields
  phoneNumber?: string;
  requiredQuantity?: string;
  quantityUnit?: "meters" | "yards" | "rolls" | "metric_tonnes";
  fabricSpecifications?: string;
  sampleRequest?: boolean;
  targetDeliveryDate?: string;
  // Anti-spam honeypot
  honeyPot?: string;
}

export interface FormSubmissionState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
  referenceId?: string;
}

export interface LoomTechnologyDetail {
  id: string;
  name: string;
  medium: string;
  buyerBenefit: string;
  technicalPrinciple: string;
  suitableYarnsAndFabrics: string[];
  operationalCharacteristics: string[];
  packagingNote: string;
}
