import React, { useEffect } from 'react';
import { COMPANY_CONFIG } from '../../config/company';

interface SeoMetaProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'Organization' | 'Product' | 'WebPage';
}

export const SeoMeta: React.FC<SeoMetaProps> = ({
  title,
  description,
  canonicalPath = '',
}) => {
  const fullTitle = `${title} | ${COMPANY_CONFIG.name} — Textile Manufacturer & Exporter`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph
    const updateOg = (property: string, content: string) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', content);
    };

    updateOg('og:title', fullTitle);
    updateOg('og:description', description);
    updateOg('og:type', 'website');
    updateOg('og:site_name', COMPANY_CONFIG.name);
    if (canonicalPath) {
      updateOg('og:url', `https://giriexports.com${canonicalPath}`);
    }

    // JSON-LD Structured Data for B2B Textile Manufacturer
    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": "Manufacturer",
      "name": COMPANY_CONFIG.name,
      "alternateName": "PS Exports India",
      "description": "Textile woven-fabric manufacturer and exporter in Pallipalayam, Erode, Tamil Nadu, India. Specializing in woven fabrics in continuous textile rolls via air-jet and water-jet looms.",
      "url": "https://giriexports.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": COMPANY_CONFIG.location.town,
        "addressRegion": COMPANY_CONFIG.location.state,
        "addressCountry": COMPANY_CONFIG.location.country,
        "description": "Pallipalayam - Erode Textile Manufacturing Corridor"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": COMPANY_CONFIG.location.coordinatesPlaceholder.lat,
        "longitude": COMPANY_CONFIG.location.coordinatesPlaceholder.lng
      },
      "knowsAbout": [
        "Woven fabric manufacturing",
        "Air-jet loom weaving",
        "Water-jet loom weaving",
        "Textile rolls export",
        "Greige and loom-state textiles"
      ]
    };

    let scriptTag = document.querySelector('#seo-structured-data') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(jsonLdData);
  }, [fullTitle, description, canonicalPath]);

  return null;
};
