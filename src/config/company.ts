/**
 * PS Exports - Centralized Company Profile and Business Configuration
 * 
 * NOTE FOR PS EXPORTS TEAM:
 * Update this file with your official contact email, telephone, tax/export registration
 * numbers, and direct inquiry coordinates once ready for production deployment.
 * 
 * Verifiable facts preserved:
 * - Location: Pallipalayam, Erode, Tamil Nadu, India
 * - Business: Textile manufacturing and export of woven fabrics
 * - Technology: Air-jet looms and water-jet looms
 * - Experience: More than 50 years in the textile industry
 */

export interface CompanyConfig {
  name: string;
  tagline: string;
  positioningLine: string;
  descriptor: string;
  location: {
    town: string;
    city: string;
    district: string;
    state: string;
    country: string;
    postalCodePlaceholder: string;
    industrialCluster: string;
    coordinatesPlaceholder: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    // These use clearly identifiable placeholders until official contact channels are provided
    primaryEmail: string;
    salesEmail: string;
    primaryPhone: string;
    whatsappNumber: string | null;
    isOfficialEmailConfigured: boolean;
    isOfficialPhoneConfigured: boolean;
    businessHours: string;
    responseTimeNotice: string;
  };
  heritage: {
    experienceYears: string;
    legacyDescription: string;
  };
  manufacturing: {
    loomTypes: string[];
    packagingFormat: string;
  };
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: "PS Exports",
  tagline: "Woven Fabrics for Global Importers & Wholesalers",
  positioningLine: "Textile Expertise, Woven Through Generations.",
  descriptor: "TEXTILE MANUFACTURING & EXPORT",
  location: {
    town: "Pallipalayam",
    city: "Erode",
    district: "Erode / Namakkal Textile Corridor",
    state: "Tamil Nadu",
    country: "India",
    postalCodePlaceholder: "638006",
    industrialCluster: "Pallipalayam - Erode Textile Belt, Tamil Nadu",
    coordinatesPlaceholder: {
      lat: 11.3544,
      lng: 77.7281, // Pallipalayam, Erode coordinates
    },
  },
  contact: {
    // Clear placeholders as instructed - do not fabricate arbitrary personal numbers
    primaryEmail: "contact@psexports.com",
    salesEmail: "contact@psexports.com",
    primaryPhone: "+91 8608671027",
    whatsappNumber: null, // Keep null until verified
    isOfficialEmailConfigured: false,
    isOfficialPhoneConfigured: false,
    businessHours: "Monday to Saturday, 09:00 - 18:00 IST (UTC +5:30)",
    responseTimeNotice: "Inquiries are reviewed by our manufacturing team within 1 to 2 business days.",
  },
  heritage: {
    experienceYears: "50+",
    legacyDescription: "More than 50 years of accumulated manufacturing knowledge in regional weaving, servicing domestic and overseas bulk textile requirements.",
  },
  manufacturing: {
    loomTypes: ["Air-Jet Looms", "Water-Jet Looms"],
    packagingFormat: "Industrial Woven Fabric Rolls (Export Grade Packing)",
  },
};