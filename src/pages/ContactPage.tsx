import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, FileText } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SeoMeta } from '../components/ui/SeoMeta';
import { QuoteForm } from '../components/contact/QuoteForm';
import { WovenPattern } from '../components/ui/WovenPattern';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';
  const initialSpecs = searchParams.get('specs') || '';

  return (
    <>
      <SeoMeta
        title="Contact Us & Request a Fabric Quotation — Direct Export Inquiries"
        description="Contact PS Exports directly for woven fabric bulk quotes, export roll specifications, and sample cuttings. Located in Pallipalayam, Erode, Tamil Nadu, India."
        canonicalPath="/contact"
      />

      {/* Hero Header */}
      <section className="relative bg-ivory border-b border-linen pt-12 pb-16 overflow-hidden">
        <WovenPattern variant="linen" density="medium" opacity={0.25} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold block">
              B2B COMMERCIAL & TECHNICAL INQUIRIES
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-forest">
              Request a Fabric Quote or Discuss Specifications.
            </h1>
            <p className="text-base font-sans text-charcoal/80 leading-relaxed">
              We work directly with international textile importers, wholesalers, converters, and
              industrial buyers. Complete the specification form below to initiate a technical review
              with our weaving masters in Pallipalayam.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-16 bg-ivory-light border-b border-linen" id="details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Interactive Enquiry Form (Cols 1-7) */}
            <div className="lg:col-span-7">
              <QuoteForm
                initialProduct={initialProduct}
                initialSpecs={initialSpecs}
              />
            </div>

            {/* Right Column: Verified Coordinates, Business Hours, Guidelines (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Mill & Office Location Box */}
              <div className="p-6 sm:p-8 bg-ivory border border-linen space-y-5">
                <div className="flex items-center space-x-2 text-forest border-b border-linen pb-3">
                  <MapPin className="w-5 h-5 text-terracotta shrink-0" />
                  <h3 className="font-serif text-xl font-semibold">
                    Loom Facility & Location
                  </h3>
                </div>

                <div className="space-y-3 text-xs font-sans text-charcoal/80 leading-relaxed">
                  <div>
                    <span className="font-semibold text-forest block">Company Name:</span>
                    <span>{COMPANY_CONFIG.name}</span>
                  </div>

                  <div>
                    <span className="font-semibold text-forest block">Manufacturing Location:</span>
                    <span>{COMPANY_CONFIG.location.town}, {COMPANY_CONFIG.location.city}</span>
                    <span className="block">{COMPANY_CONFIG.location.state}, {COMPANY_CONFIG.location.country}</span>
                    <span className="text-[11px] text-charcoal/60 block mt-0.5">
                      Postal Code: {COMPANY_CONFIG.location.postalCodePlaceholder}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-forest block">Industrial Region:</span>
                    <span>{COMPANY_CONFIG.location.industrialCluster}</span>
                  </div>
                </div>

                {/* Notice regarding contact information setup */}
                <div className="pt-3 border-t border-linen text-xs space-y-2">
                  <span className="text-[11px] font-sans uppercase tracking-wider font-semibold text-terracotta block">
                    Direct Communication Channels
                  </span>

                  <div className="p-3 bg-linen/20 border border-linen/60 text-xs space-y-1.5 text-charcoal/80">
                    <p className="flex items-center space-x-2">
                      <Mail className="w-3.5 h-3.5 text-terracotta shrink-0" />
                      <span>{COMPANY_CONFIG.contact.primaryEmail}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-terracotta shrink-0" />
                      <span>{COMPANY_CONFIG.contact.primaryPhone}</span>
                    </p>
                    <p className="text-[10px] text-charcoal/60 pt-1 italic">
                      Official email & telephone numbers can be configured in <code>src/config/company.ts</code> prior to final DNS launch.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-linen flex items-start space-x-2 text-xs text-charcoal/70">
                  <Clock className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-forest block">Operating Hours:</span>
                    <span>{COMPANY_CONFIG.contact.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Checklist for Buyers */}
              <div className="p-6 bg-forest text-ivory space-y-4">
                <div className="flex items-center space-x-2 border-b border-forest-light/40 pb-3">
                  <FileText className="w-5 h-5 text-terracotta" />
                  <h4 className="font-serif text-lg font-semibold text-ivory">
                    What to Include in Your Specification
                  </h4>
                </div>

                <ul className="space-y-2 text-xs text-linen/90 leading-relaxed font-sans">
                  <li className="flex items-start space-x-2">
                    <span className="text-terracotta font-bold">•</span>
                    <span><strong>Fibre & Yarn:</strong> Cotton, polyester, poly-viscose, or synthetic filament.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-terracotta font-bold">•</span>
                    <span><strong>Target Weight:</strong> Required GSM or warp x weft yarn counts.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-terracotta font-bold">•</span>
                    <span><strong>Width & Finish:</strong> Loom-state greige, RFD, or heat-stabilized.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-terracotta font-bold">•</span>
                    <span><strong>Volume:</strong> Estimated batch meters or regular monthly container lots.</span>
                  </li>
                </ul>

                <p className="text-[11px] text-linen/70 pt-2 border-t border-forest-light/30 italic">
                  {COMPANY_CONFIG.contact.responseTimeNotice}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};
