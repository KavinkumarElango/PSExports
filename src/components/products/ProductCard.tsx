import React, { useState } from 'react';
import { ArrowRight, FileSpreadsheet, Eye, Layers } from 'lucide-react';
import type { ProductItem } from '../../types';
import { Button } from '../ui/Button';

interface ProductCardProps {
  product: ProductItem;
  onViewSpecs: (product: ProductItem) => void;
  onEnquire: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewSpecs,
  onEnquire,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group relative bg-ivory-light border border-linen flex flex-col justify-between transition-all duration-300 hover:border-forest/60 hover:shadow-xs overflow-hidden">
      {/* Visual Product Image Container */}
      <div 
        className="relative aspect-[16/10] overflow-hidden bg-linen/25 border-b border-linen cursor-pointer"
        onClick={() => onViewSpecs(product)}
        title={`View specifications for ${product.name}`}
      >
        {product.image && !imageError ? (
          <>
            <img
              src={product.image}
              alt={product.imageAlt || `${product.name} woven fabric structure`}
              loading="lazy"
              decoding="async"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-forest/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
              <span className="text-[11px] font-sans font-medium text-ivory flex items-center space-x-1 drop-shadow-xs">
                <Eye className="w-3.5 h-3.5" />
                <span>Click to examine weave specs</span>
              </span>
            </div>
          </>
        ) : (
          /* Tasteful Minimalist Fabric Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-ivory text-charcoal/70 border-b border-linen">
            <Layers className="w-8 h-8 text-terracotta/70 mb-2 stroke-[1.5]" />
            <span className="font-serif text-sm font-semibold text-forest text-center">
              {product.name}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal/60 mt-1">
              Fabric Swatch On Request
            </span>
          </div>
        )}

        {/* Illustrative Swatch Badge (adhering to honest representation) */}
        {product.isIllustrativeSample && (
          <div className="absolute top-3 left-3 pointer-events-none">
            <span className="inline-flex items-center text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 bg-ivory/95 text-forest border border-linen shadow-2xs backdrop-blur-xs">
              Reference Weave
            </span>
          </div>
        )}

        {/* Category Pill Tag */}
        <div className="absolute top-3 right-3 pointer-events-none">
          <span className="text-[10px] font-sans uppercase tracking-wider text-terracotta font-semibold px-2 py-0.5 bg-ivory/95 border border-linen shadow-2xs backdrop-blur-xs">
            {product.category}
          </span>
        </div>
      </div>

      {/* Main Card Content */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between border-b border-linen/70 pb-2.5 mb-3">
          <span className="font-mono text-xs uppercase tracking-wider text-charcoal/80 font-medium">
            {product.code}
          </span>
          <span className="text-[11px] font-sans text-charcoal/70 font-medium">
            {product.loomTechnology}
          </span>
        </div>

        <h3 
          onClick={() => onViewSpecs(product)}
          className="font-serif text-xl sm:text-2xl font-semibold text-forest mb-2.5 group-hover:text-forest-light transition-colors cursor-pointer"
        >
          {product.name}
        </h3>

        <p className="text-xs sm:text-[13px] font-sans text-charcoal leading-[1.62] mb-5">
          {product.shortDescription}
        </p>

        {/* Technical Snapshot Grid with High Contrast */}
        <div className="bg-ivory border border-linen p-3.5 space-y-2 text-xs font-sans">
          <div className="flex items-center justify-between">
            <span className="text-charcoal/80 text-[11px] uppercase tracking-wider font-medium">Weave Type</span>
            <span className="font-semibold text-forest text-right text-[11px]">{product.specifications.construction.split('[')[0].trim()}</span>
          </div>
          <div className="flex items-center justify-between border-t border-linen/50 pt-1.5">
            <span className="text-charcoal/80 text-[11px] uppercase tracking-wider font-medium">Weight / GSM</span>
            <span className="font-semibold text-charcoal">{product.specifications.gsmRange}</span>
          </div>
          <div className="flex items-center justify-between border-t border-linen/50 pt-1.5">
            <span className="text-charcoal/80 text-[11px] uppercase tracking-wider font-medium">Loom Width</span>
            <span className="font-semibold text-charcoal">{product.specifications.widthRange}</span>
          </div>
          <div className="flex items-center justify-between border-t border-linen/50 pt-1.5">
            <span className="text-charcoal/80 text-[11px] uppercase tracking-wider font-medium">Packaging</span>
            <span className="font-semibold text-forest text-right text-[11px]">Continuous Rolls</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-3 border-t border-linen mt-auto flex flex-col sm:flex-row gap-2.5">
        <Button
          onClick={() => onViewSpecs(product)}
          variant="secondary"
          size="sm"
          className="w-full sm:w-1/2"
          icon={<FileSpreadsheet className="w-3.5 h-3.5 ml-1" />}
        >
          View Specs
        </Button>

        <Button
          onClick={() => onEnquire(product)}
          variant="primary"
          size="sm"
          className="w-full sm:w-1/2"
          icon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
        >
          Enquire Fabric
        </Button>
      </div>
    </article>
  );
};
