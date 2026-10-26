import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ArrowUpRight, ShieldCheck, Factory } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { WovenPattern } from '../ui/WovenPattern';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-forest-dark text-ivory border-t border-forest-light/40 overflow-hidden">
      {/* Subtle woven background pattern */}
      <WovenPattern variant="forest" density="broad" opacity={0.05} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-forest-light/35">
          
          {/* Brand & Manufacturing Heritage (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-ivory">
                {COMPANY_CONFIG.name.toUpperCase()}
              </span>
              <span className="block text-[11px] font-sans uppercase tracking-[0.16em] text-linen font-medium mt-1">
                {COMPANY_CONFIG.descriptor}
              </span>
            </div>

            <p className="text-sm font-sans text-linen-light leading-[1.65] max-w-sm">
              Textile woven-fabric manufacturer and exporter based in Pallipalayam, Erode, Tamil Nadu.
              Operating high-speed air-jet and water-jet looms to produce premium continuous fabric rolls
              for international fabric importers and wholesalers.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-linen-light font-medium">
              <ShieldCheck className="w-4 h-4 text-terracotta shrink-0" />
              <span>Over 50 Years of Textile Industry Experience</span>
            </div>
          </div>

          {/* Navigation Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-wider font-semibold text-terracotta-light">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-linen-light">
              <li>
                <Link to="/" className="hover:text-ivory transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-ivory transition-colors">
                  Woven Fabrics
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="hover:text-ivory transition-colors">
                  Manufacturing & Looms
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-ivory transition-colors">
                  About Our Heritage
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ivory transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Fabric Categories (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-wider font-semibold text-terracotta-light">
              Fabric Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-linen-light">
              <li>
                <Link to="/products" className="hover:text-ivory transition-colors flex items-center justify-between group">
                  <span>Plain Weave Greige</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-ivory transition-colors flex items-center justify-between group">
                  <span>Twill & Drill Weaves</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-ivory transition-colors flex items-center justify-between group">
                  <span>Synthetic Water-Jet Filaments</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-ivory transition-colors flex items-center justify-between group">
                  <span>Dobby Structured Weaves</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-ivory transition-colors flex items-center justify-between group">
                  <span>Continuous Export Rolls</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Commercial Inquiries (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-wider font-semibold text-terracotta-light">
              Location & Contact
            </h4>
            
            <div className="space-y-3 text-xs font-sans text-linen-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <span className="text-ivory font-medium block">
                    {COMPANY_CONFIG.location.town}, {COMPANY_CONFIG.location.city}
                  </span>
                  <span>{COMPANY_CONFIG.location.state}, {COMPANY_CONFIG.location.country}</span>
                  <span className="block text-[11px] text-linen mt-0.5">
                    Pallipalayam - Erode Textile Corridor
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 pt-1">
                <Factory className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <span className="text-ivory font-medium block">Loom Operations</span>
                  <span>Air-Jet & Water-Jet Weaving</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 pt-1">
                <Mail className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <span className="text-ivory font-medium block">Inquiries</span>
                  <span className="text-xs text-linen-light">
                    Direct form on Contact Page
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <span className="text-ivory font-medium block">Direct Inquiries</span>
                  <span className="text-xs text-linen-light">
                    See Contact page for verification
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-linen space-y-3 sm:space-y-0">
          <div>
            © {CURRENT_YEAR} {COMPANY_CONFIG.name}. All rights reserved.
          </div>
          <div className="text-xs text-linen text-center sm:text-right">
            <span>Pallipalayam, Erode, Tamil Nadu, India</span>
            <span className="mx-2">·</span>
            <span>Woven Fabric Manufacturer & Exporter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
