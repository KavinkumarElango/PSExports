import React from 'react';
import { ArrowRight, Check, Shield } from 'lucide-react';
import type { ProductItem } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface ProductDetailModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onEnquire,
}) => {
  const [prevProductId, setPrevProductId] = React.useState<string | undefined>(undefined);
  const [imageError, setImageError] = React.useState(false);

  if (product?.id !== prevProductId) {
    setPrevProductId(product?.id);
    setImageError(false);
  }

  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={product.name}
      subtitle={`${product.code} · ${product.category.toUpperCase()}`}
      maxWidth="4xl"
    >
      <div className="space-y-6">
        {/* Visual & Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-ivory border border-linen p-4 sm:p-5">
          {/* Weave Photograph */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-linen/20 border border-linen shadow-2xs">
              {product.image && !imageError ? (
                <img
                  src={product.image}
                  alt={product.imageAlt || `${product.name} weave texture close-up`}
                  loading="eager"
                  decoding="async"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-charcoal/60 bg-ivory-light">
                  <span className="font-serif text-sm font-semibold text-forest text-center">
                    {product.name}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal/50 mt-1">
                    Sample Swatch Available
                  </span>
                </div>
              )}
            </div>
            {product.isIllustrativeSample && (
              <p className="mt-2 text-[10px] font-sans text-charcoal/70 italic text-center">
                * Illustrative reference swatch showing weave structure. Physical batch cuttings available on request.
              </p>
            )}
          </div>

          {/* Overview text */}
          <div className="md:col-span-7 space-y-3">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold block">
              WEAVING SPECIFICATION OVERVIEW
            </span>
            <p className="text-sm font-sans text-charcoal leading-[1.65]">
              {product.detailedOverview}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-sans">
              <span className="px-2.5 py-1 bg-ivory-light border border-linen text-forest font-semibold">
                Loom: {product.loomTechnology}
              </span>
              <span className="px-2.5 py-1 bg-ivory-light border border-linen text-charcoal font-medium">
                Supply: Continuous Rolls
              </span>
            </div>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div>
          <div className="flex items-center justify-between pb-2 border-b border-linen mb-3">
            <h4 className="font-serif text-lg font-semibold text-forest">
              Technical Specification Parameters
            </h4>
            <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-semibold">
              Woven Roll Supply
            </span>
          </div>

          <div className="border border-linen divide-y divide-linen text-xs font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-ivory">
              <span className="font-medium text-forest uppercase tracking-wider text-[11px]">Fabric Type</span>
              <span className="sm:col-span-2 text-charcoal">{product.specifications.fabricType}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-ivory-light">
              <span className="font-medium text-forest uppercase tracking-wider text-[11px]">Fibre Composition</span>
              <span className="sm:col-span-2 text-charcoal">{product.specifications.fibreComposition}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-ivory">
              <span className="font-medium text-forest uppercase tracking-wider text-[11px]">Construction / Weave</span>
              <span className="sm:col-span-2 text-charcoal font-medium">{product.specifications.construction}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-ivory-light">
              <span className="font-medium text-forest uppercase tracking-wider text-[11px]">Weight / GSM</span>
              <span className="sm:col-span-2 text-charcoal">{product.specifications.gsmRange}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-ivory">
              <span className="font-medium text-forest uppercase tracking-wider text-[11px]">Usable Loom Width</span>
              <span className="sm:col-span-2 text-charcoal">{product.specifications.widthRange}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-ivory-light">
              <span className="font-medium text-forest uppercase tracking-wider text-[11px]">Finishing Options</span>
              <div className="sm:col-span-2 space-y-1">
                {product.specifications.finishingOptions.map((opt, i) => (
                  <div key={i} className="flex items-center space-x-1.5 text-charcoal">
                    <span className="w-1 h-1 bg-terracotta rounded-full" />
                    <span>{opt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-ivory">
              <span className="font-medium text-forest uppercase tracking-wider text-[11px]">Colour / State</span>
              <span className="sm:col-span-2 text-charcoal">{product.specifications.colourAvailability}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-ivory-light">
              <span className="font-medium text-forest uppercase tracking-wider text-[11px]">Minimum Order Quantity (MOQ)</span>
              <span className="sm:col-span-2 text-charcoal italic">{product.specifications.moqPlaceholder}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-ivory">
              <span className="font-medium text-forest uppercase tracking-wider text-[11px]">Sample Availability</span>
              <span className="sm:col-span-2 text-charcoal">{product.specifications.sampleAvailability}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-ivory-light">
              <span className="font-medium text-forest uppercase tracking-wider text-[11px]">Export Packaging Format</span>
              <span className="sm:col-span-2 text-charcoal">{product.specifications.rollPackaging}</span>
            </div>
          </div>
        </div>

        {/* Intended Applications */}
        <div>
          <h5 className="text-xs font-sans uppercase tracking-widest font-semibold text-forest mb-2">
            Typical Commercial Applications
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.intendedApplications.map((app, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 text-xs text-charcoal/80 p-2 bg-linen/20 border border-linen/50"
              >
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-4 border-t border-linen flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-charcoal/70 flex items-center space-x-1.5">
            <Shield className="w-4 h-4 text-forest shrink-0" />
            <span>Pallipalayam Loom Facility · Custom beam sizing available upon buyer confirmation</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <Button onClick={onClose} variant="secondary" size="sm">
              Close
            </Button>
            <Button
              onClick={() => {
                onClose();
                onEnquire(product);
              }}
              variant="terracotta"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
            >
              Enquire About This Fabric
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
