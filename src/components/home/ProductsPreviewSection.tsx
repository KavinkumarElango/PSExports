import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';
import { WOVEN_PRODUCTS } from '../../data/products';
import type { ProductItem } from '../../types';
import { ProductCard } from '../products/ProductCard';
import { ProductDetailModal } from '../products/ProductDetailModal';
import { Button } from '../ui/Button';

export const ProductsPreviewSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleViewSpecs = (product: ProductItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleEnquire = (product: ProductItem) => {
    navigate(`/contact?product=${encodeURIComponent(product.name)}&specs=${encodeURIComponent(product.specifications.construction + ', ' + product.specifications.gsmRange)}`);
  };

  // Preview the first 3 primary product offerings
  const previewProducts = WOVEN_PRODUCTS.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-ivory border-b border-linen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-linen gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-sans uppercase tracking-wider text-terracotta font-semibold block">
              WOVEN FABRIC CATALOGUE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest leading-[1.18]">
              Fabrics for Your Requirements.
            </h2>
            <p className="text-base font-sans text-charcoal leading-[1.65]">
              We manufacture woven textiles in continuous roll format across natural, blended, and synthetic
              filament constructions. All specifications are customizable to international buyer technical sheets.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              to="/products"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5 ml-1.5" />}
            >
              View Full Catalogue (5 Categories)
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewSpecs={handleViewSpecs}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        {/* Commercial Notice Banner with High Contrast */}
        <div className="mt-12 p-6 bg-ivory-light border border-linen flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center space-x-3.5 text-xs sm:text-sm font-sans text-charcoal">
            <Package className="w-5 h-5 text-terracotta shrink-0" />
            <div>
              <strong className="text-forest font-semibold">Continuous Roll Packaging:</strong> Supplied on high-crush cardboard cores with moisture-barrier polythene and export outer wrapping.
            </div>
          </div>
          <Link
            to="/products"
            className="text-xs sm:text-[13px] font-sans uppercase tracking-wider font-semibold text-forest hover:text-terracotta transition-colors flex items-center space-x-1.5 shrink-0"
          >
            <span>Explore All Woven Structures</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Modal for viewing specifications */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEnquire={handleEnquire}
      />
    </section>
  );
};
