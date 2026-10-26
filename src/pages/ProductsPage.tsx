import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, HelpCircle, ArrowRight } from 'lucide-react';
import { WOVEN_PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import type { ProductItem } from '../types';
import { SeoMeta } from '../components/ui/SeoMeta';
import { ProductCard } from '../components/products/ProductCard';
import { ProductDetailModal } from '../components/products/ProductDetailModal';
import { Button } from '../components/ui/Button';
import { WovenPattern } from '../components/ui/WovenPattern';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Fabrics');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const filteredProducts = selectedCategory === 'All Fabrics'
    ? WOVEN_PRODUCTS
    : WOVEN_PRODUCTS.filter(p => p.category === selectedCategory);

  const handleViewSpecs = (product: ProductItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleEnquire = (product: ProductItem) => {
    navigate(`/contact?product=${encodeURIComponent(product.name)}&specs=${encodeURIComponent(product.specifications.construction + ', ' + product.specifications.gsmRange)}`);
  };

  return (
    <>
      <SeoMeta
        title="Woven Fabric Catalogue — Continuous Export Rolls"
        description="Explore PS Exports' woven textile offerings: plain weave greige, twill drill, synthetic water-jet filament fabrics, and custom industrial substrates in continuous rolls."
        canonicalPath="/products"
      />

      {/* Page Header */}
      <section className="relative bg-ivory border-b border-linen pt-12 pb-16 overflow-hidden">
        <WovenPattern variant="linen" density="medium" opacity={0.25} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold block">
              PRODUCT ARCHITECTURE · INDUSTRIAL WOVEN FABRIC
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-forest">
              Woven Fabrics for Global Importers & Wholesalers.
            </h1>
            <p className="text-base font-sans text-charcoal/80 leading-relaxed">
              Supplied exclusively in continuous textile rolls wound onto heavy-duty cardboard cores.
              Our air-jet and water-jet weaving looms accommodate custom yarn counts, pick densities,
              and specific finishing requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Product Filters & Catalogue Grid */}
      <section className="py-14 bg-ivory-light border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="mb-10 flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <Filter className="w-4 h-4 text-forest shrink-0 mr-1" />
            <div className="flex space-x-2">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-sans uppercase tracking-wider px-3.5 py-2 transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-forest text-ivory font-semibold shadow-xs'
                      : 'bg-ivory text-charcoal/75 hover:bg-linen/40 border border-linen'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewSpecs={handleViewSpecs}
                onEnquire={handleEnquire}
              />
            ))}
          </div>

          {/* Custom Specification Banner */}
          <div className="mt-14 p-8 bg-ivory border border-linen flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-semibold block">
                CUSTOM WEAVING ORDERS
              </span>
              <h3 className="font-serif text-2xl font-semibold text-forest">
                Require a custom warp count or specific GSM?
              </h3>
              <p className="text-xs font-sans text-charcoal/80 leading-relaxed max-w-xl">
                We accept buyer technical specifications. Our weaving masters in Pallipalayam can
                configure warping beams and loom tensions to your exact dimensional tolerances.
              </p>
            </div>

            <Button
              to="/contact?product=Custom%20Woven%20Specification"
              variant="terracotta"
              size="md"
              icon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
              className="shrink-0"
            >
              Submit Custom Spec
            </Button>
          </div>

        </div>
      </section>

      {/* Buyer Technical FAQs */}
      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold">
              BUYER GUIDELINES
            </span>
            <h2 className="font-serif text-3xl font-semibold text-forest">
              Frequently Discussed Buyer Specifications
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-ivory-light border border-linen space-y-2">
              <h4 className="font-serif font-semibold text-forest text-base flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-terracotta shrink-0" />
                <span>In what format is fabric packed and shipped?</span>
              </h4>
              <p className="text-xs font-sans text-charcoal/80 leading-relaxed pl-6">
                All woven fabric is supplied in continuous industrial rolls wound directly on rigid
                cardboard cores. Rolls are sealed with inner moisture-resistant polythene tubing,
                end-protected, and wrapped with durable outer hessian or woven polypropylene export
                jackets to safeguard against marine humidity during sea transit.
              </p>
            </div>

            <div className="p-6 bg-ivory-light border border-linen space-y-2">
              <h4 className="font-serif font-semibold text-forest text-base flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-terracotta shrink-0" />
                <span>How are Minimum Order Quantities (MOQ) determined?</span>
              </h4>
              <p className="text-xs font-sans text-charcoal/80 leading-relaxed pl-6">
                Because shuttleless air-jet and water-jet weaving operates via precision warp beams,
                MOQ is determined by yarn procurement minimums and warp beam sizing capacity for that
                construction. For running constructions, smaller trial allotments are often possible.
                Contact our team with your required construction for an accurate MOQ calculation.
              </p>
            </div>

            <div className="p-6 bg-ivory-light border border-linen space-y-2">
              <h4 className="font-serif font-semibold text-forest text-base flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-terracotta shrink-0" />
                <span>Are quality swatch cuttings available for prospective importers?</span>
              </h4>
              <p className="text-xs font-sans text-charcoal/80 leading-relaxed pl-6">
                Yes. For legitimate commercial fabric importers, wholesalers, and garment converters,
                we provide fabric swatches and roll cuttings to evaluate hand-feel, yarn regularity,
                and construction metrics. Submit an inquiry specifying your target application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEnquire={handleEnquire}
      />
    </>
  );
};
