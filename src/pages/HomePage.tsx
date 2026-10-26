import React from 'react';
import { SeoMeta } from '../components/ui/SeoMeta';
import { HeroSection } from '../components/home/HeroSection';
import { ExperienceSection } from '../components/home/ExperienceSection';
import { ProductsPreviewSection } from '../components/home/ProductsPreviewSection';
import { ManufacturingSection } from '../components/home/ManufacturingSection';
import { WhyPSExportsSection } from '../components/home/WhyGiriSection';
import { EnquiryCtaSection } from '../components/home/EnquiryCtaSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <SeoMeta
        title="Woven Fabric Manufacturer & Exporter in Pallipalayam, Erode"
        description="PS Exports is an Indian textile manufacturer and exporter in Pallipalayam, Erode, Tamil Nadu with over 50 years of industry experience. Air-jet and water-jet woven fabrics supplied in continuous rolls."
        canonicalPath="/"
      />

      {/* Section 2: Hero */}
      <HeroSection />

      {/* Section 3: Experience and introduction */}
      <ExperienceSection />

      {/* Section 4: Products */}
      <ProductsPreviewSection />

      {/* Section 5: Manufacturing */}
      <ManufacturingSection />

      {/* Section 6: Why PS Exports */}
      <WhyPSExportsSection />

      {/* Section 7: Buyer enquiry call to action */}
      <EnquiryCtaSection />
    </>
  );
};
