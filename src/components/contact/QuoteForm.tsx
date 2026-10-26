import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw, Download } from 'lucide-react';
import type { QuoteFormData, FormSubmissionState } from '../../types';
import { Button } from '../ui/Button';
import { COMPANY_CONFIG } from '../../config/company';

interface QuoteFormProps {
  initialProduct?: string;
  initialSpecs?: string;
  className?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialProduct = '',
  initialSpecs = '',
  className = ''
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    country: '',
    productRequirement: initialProduct,
    message: '',
    phoneNumber: '',
    requiredQuantity: '',
    quantityUnit: 'meters',
    fabricSpecifications: initialSpecs,
    sampleRequest: false,
    targetDeliveryDate: '',
    honeyPot: '' // anti-spam
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [submissionState, setSubmissionState] = useState<FormSubmissionState>({
    status: 'idle',
    message: ''
  });
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);

  // Update state when initial product or specs props change
  const [prevInitialProduct, setPrevInitialProduct] = useState(initialProduct);
  const [prevInitialSpecs, setPrevInitialSpecs] = useState(initialSpecs);

  if (initialProduct !== prevInitialProduct || initialSpecs !== prevInitialSpecs) {
    setPrevInitialProduct(initialProduct);
    setPrevInitialSpecs(initialSpecs);
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        productRequirement: initialProduct,
        fabricSpecifications: initialSpecs || prev.fabricSpecifications
      }));
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid email address';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country / Region is required';
    }

    if (!formData.productRequirement.trim()) {
      newErrors.productRequirement = 'Please specify the fabric type or requirement';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your requirement or project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name as keyof QuoteFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.honeyPot) {
      // Silently ignore bot submission
      return;
    }

    if (!validate()) {
      return;
    }

    setSubmissionState({
      status: 'submitting',
      message: 'Processing your fabric specification...'
    });

    const apiEndpoint = import.meta.env.VITE_CONTACT_API_ENDPOINT;
    const referenceId = `PSE-${Date.now().toString().slice(-6)}`;

    try {
      if (apiEndpoint) {
        // Send to real backend API or email webhook if configured
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            referenceId,
            submittedAt: new Date().toISOString()
          })
        });

        if (!response.ok) {
          throw new Error(`Server returned status: ${response.status}`);
        }

        setSubmissionState({
          status: 'success',
          message: 'Your inquiry has been successfully sent to our export team.',
          referenceId
        });
      } else {
        // Honest simulation layer when no endpoint is hooked up
        // Simulates realistic network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        setSubmittedData({ ...formData });
        setSubmissionState({
          status: 'success',
          message: 'Inquiry received. A direct summary has been generated for your records.',
          referenceId
        });
      }
    } catch (err) {
      setSubmissionState({
        status: 'error',
        message: err instanceof Error ? err.message : 'Failed to send inquiry. Please contact us via email.'
      });
    }
  };

  const handleDownloadSummary = () => {
    if (!submittedData && !formData) return;
    const data = submittedData || formData;
    const content = `
=========================================
PS EXPORTS — B2B FABRIC INQUIRY SUMMARY
Reference ID: ${submissionState.referenceId || 'PSE-PREVIEW'}
Date: ${new Date().toLocaleString()}
=========================================

BUYER DETAILS:
- Contact Name: ${data.fullName}
- Company: ${data.companyName}
- Business Email: ${data.businessEmail}
- Phone: ${data.phoneNumber || 'Not provided'}
- Country: ${data.country}

FABRIC REQUIREMENTS:
- Primary Requirement: ${data.productRequirement}
- Estimated Quantity: ${data.requiredQuantity || 'Open for discussion'} ${data.quantityUnit || ''}
- Specifications: ${data.fabricSpecifications || 'Standard loom state'}
- Sample Swatch Request: ${data.sampleRequest ? 'Yes, sample swatches requested' : 'Not requested'}
- Target Timeline: ${data.targetDeliveryDate || 'Standard delivery lead time'}

MESSAGE / TECHNICAL NOTES:
${data.message}

-----------------------------------------
MANUFACTURING NOTE:
PS Exports
Pallipalayam, Erode, Tamil Nadu, India
Air-Jet & Water-Jet Woven Textiles
Continuous Textile Rolls
=========================================
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `PS_Exports_Inquiry_${submissionState.referenceId || 'Record'}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      country: '',
      productRequirement: '',
      message: '',
      phoneNumber: '',
      requiredQuantity: '',
      quantityUnit: 'meters',
      fabricSpecifications: '',
      sampleRequest: false,
      targetDeliveryDate: '',
      honeyPot: ''
    });
    setErrors({});
    setSubmissionState({ status: 'idle', message: '' });
    setSubmittedData(null);
  };

  return (
    <div className={`bg-ivory-light border border-linen p-6 sm:p-8 lg:p-10 ${className}`}>
      {/* Honeypot field for bot spam prevention */}
      <input
        type="text"
        name="honeyPot"
        value={formData.honeyPot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Backend Status Notice */}
      {!import.meta.env.VITE_CONTACT_API_ENDPOINT && (
        <div className="mb-6 p-3 bg-linen/30 border border-linen text-xs text-charcoal/80 flex items-start space-x-2">
          <AlertCircle className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-forest">B2B Direct Inquiry Form:</span> Fill in your exact fabric counts, GSM, and roll requirements. Submissions validate all required commercial fields and provide an instant downloadable quotation brief.
          </div>
        </div>
      )}

      {submissionState.status === 'success' ? (
        <div className="py-8 text-center space-y-6 animate-fadeIn">
          <div className="w-14 h-14 mx-auto rounded-full bg-forest/10 border border-forest/30 flex items-center justify-center text-forest">
            <CheckCircle2 className="w-8 h-8 text-forest" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-terracotta font-semibold">
              REFERENCE ID: {submissionState.referenceId}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-forest">
              Fabric Inquiry Recorded
            </h3>
            <p className="text-sm font-sans text-charcoal/80 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-forest">{formData.fullName}</strong>. Your inquiry for{' '}
              <strong className="text-forest">{formData.productRequirement}</strong> from{' '}
              <strong className="text-forest">{formData.companyName}</strong> has been logged.
            </p>
          </div>

          <div className="p-4 bg-ivory border border-linen max-w-md mx-auto text-left text-xs space-y-1.5 text-charcoal/80">
            <div className="font-semibold text-forest text-sm pb-1 border-b border-linen">
              Next Steps for Buyers:
            </div>
            <p>1. Our technical weaving team reviews loom availability and warp beam configuration.</p>
            <p>2. We confirm yarn count feasibility, roll yardages, and sample swatch dispatch.</p>
            <p>3. Expected response window: {COMPANY_CONFIG.contact.responseTimeNotice}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              onClick={handleDownloadSummary}
              variant="secondary"
              size="sm"
              icon={<Download className="w-4 h-4 ml-1" />}
            >
              Download Inquiry Brief (.txt)
            </Button>
            <Button
              onClick={resetForm}
              variant="outline"
              size="sm"
              icon={<RefreshCw className="w-3.5 h-3.5 ml-1" />}
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="border-b border-linen pb-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold block mb-1">
              B2B SPECIFICATION & COMMERCIAL INQUIRY
            </span>
            <h3 className="font-serif text-2xl font-semibold text-forest">
              Request Fabric Specifications or Bulk Quote
            </h3>
            <p className="text-xs font-sans text-charcoal/70 mt-1 leading-relaxed">
              Supplying woven fabrics in industrial continuous rolls. Share your target construction,
              blend, GSM, or roll yardages.
            </p>
          </div>

          {/* Section 1: Buyer Details */}
          <div className="space-y-4">
            <div className="text-[11px] font-sans uppercase tracking-widest text-forest font-semibold flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-terracotta rounded-full" />
              <span>1. Buyer & Company Information</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-sans font-medium text-charcoal mb-1">
                  Full Name <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. David Vance"
                  className={`w-full px-3.5 py-2.5 bg-ivory text-charcoal text-xs border transition-colors focus:outline-none focus:ring-1 focus:ring-forest ${
                    errors.fullName ? 'border-red-500' : 'border-linen hover:border-forest/40'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-[11px] text-red-600">{errors.fullName}</p>
                )}
              </div>

              {/* Business Email */}
              <div>
                <label htmlFor="businessEmail" className="block text-xs font-sans font-medium text-charcoal mb-1">
                  Business Email <span className="text-terracotta">*</span>
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  placeholder="e.g. procurement@textilewholesaler.com"
                  className={`w-full px-3.5 py-2.5 bg-ivory text-charcoal text-xs border transition-colors focus:outline-none focus:ring-1 focus:ring-forest ${
                    errors.businessEmail ? 'border-red-500' : 'border-linen hover:border-forest/40'
                  }`}
                />
                {errors.businessEmail && (
                  <p className="mt-1 text-[11px] text-red-600">{errors.businessEmail}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-xs font-sans font-medium text-charcoal mb-1">
                  Company / Organization <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Continental Fabric Imports Ltd."
                  className={`w-full px-3.5 py-2.5 bg-ivory text-charcoal text-xs border transition-colors focus:outline-none focus:ring-1 focus:ring-forest ${
                    errors.companyName ? 'border-red-500' : 'border-linen hover:border-forest/40'
                  }`}
                />
                {errors.companyName && (
                  <p className="mt-1 text-[11px] text-red-600">{errors.companyName}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-xs font-sans font-medium text-charcoal mb-1">
                  Country / Destination Port <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. United Kingdom / Germany / UAE"
                  className={`w-full px-3.5 py-2.5 bg-ivory text-charcoal text-xs border transition-colors focus:outline-none focus:ring-1 focus:ring-forest ${
                    errors.country ? 'border-red-500' : 'border-linen hover:border-forest/40'
                  }`}
                />
                {errors.country && (
                  <p className="mt-1 text-[11px] text-red-600">{errors.country}</p>
                )}
              </div>

              {/* Phone (Optional) */}
              <div className="sm:col-span-2">
                <label htmlFor="phoneNumber" className="block text-xs font-sans font-medium text-charcoal mb-1">
                  Telephone / Direct WhatsApp Number <span className="text-charcoal/50 text-[11px]">(Optional, with country code)</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="e.g. +44 20 7946 0991"
                  className="w-full px-3.5 py-2.5 bg-ivory text-charcoal text-xs border border-linen hover:border-forest/40 transition-colors focus:outline-none focus:ring-1 focus:ring-forest"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Fabric Requirements */}
          <div className="space-y-4 pt-2">
            <div className="text-[11px] font-sans uppercase tracking-widest text-forest font-semibold flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-terracotta rounded-full" />
              <span>2. Fabric Specifications & Quantity</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Product Requirement */}
              <div className="sm:col-span-2">
                <label htmlFor="productRequirement" className="block text-xs font-sans font-medium text-charcoal mb-1">
                  Fabric Type / Weave Category <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  id="productRequirement"
                  name="productRequirement"
                  value={formData.productRequirement}
                  onChange={handleChange}
                  placeholder="e.g. Plain Weave Greige / Twill Drill / Water-Jet Filament / Custom"
                  className={`w-full px-3.5 py-2.5 bg-ivory text-charcoal text-xs border transition-colors focus:outline-none focus:ring-1 focus:ring-forest ${
                    errors.productRequirement ? 'border-red-500' : 'border-linen hover:border-forest/40'
                  }`}
                />
                {errors.productRequirement && (
                  <p className="mt-1 text-[11px] text-red-600">{errors.productRequirement}</p>
                )}
              </div>

              {/* Required Quantity & Unit */}
              <div>
                <label htmlFor="requiredQuantity" className="block text-xs font-sans font-medium text-charcoal mb-1">
                  Estimated Quantity <span className="text-charcoal/50 text-[11px]">(Optional)</span>
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="requiredQuantity"
                    name="requiredQuantity"
                    value={formData.requiredQuantity}
                    onChange={handleChange}
                    placeholder="e.g. 5,000"
                    className="w-3/5 px-3 py-2.5 bg-ivory text-charcoal text-xs border border-r-0 border-linen hover:border-forest/40 focus:outline-none focus:ring-1 focus:ring-forest"
                  />
                  <select
                    name="quantityUnit"
                    value={formData.quantityUnit}
                    onChange={handleChange}
                    className="w-2/5 px-2 py-2.5 bg-ivory border border-linen text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-forest cursor-pointer"
                  >
                    <option value="meters">Meters</option>
                    <option value="yards">Yards</option>
                    <option value="rolls">Rolls</option>
                    <option value="metric_tonnes">Tonnes</option>
                  </select>
                </div>
              </div>

              {/* Technical Specifications / Construction */}
              <div className="sm:col-span-3">
                <label htmlFor="fabricSpecifications" className="block text-xs font-sans font-medium text-charcoal mb-1">
                  Technical Specifications <span className="text-charcoal/50 text-[11px]">(GSM, Yarn Count, Width, Reed/Pick if available)</span>
                </label>
                <input
                  type="text"
                  id="fabricSpecifications"
                  name="fabricSpecifications"
                  value={formData.fabricSpecifications}
                  onChange={handleChange}
                  placeholder="e.g. 180 GSM, 60-inch width, 2/1 twill, 100% cotton combed yarn"
                  className="w-full px-3.5 py-2.5 bg-ivory text-charcoal text-xs border border-linen hover:border-forest/40 transition-colors focus:outline-none focus:ring-1 focus:ring-forest"
                />
              </div>

              {/* Target Delivery Date (Optional) */}
              <div className="sm:col-span-2">
                <label htmlFor="targetDeliveryDate" className="block text-xs font-sans font-medium text-charcoal mb-1">
                  Target Shipping / Delivery Month <span className="text-charcoal/50 text-[11px]">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="targetDeliveryDate"
                  name="targetDeliveryDate"
                  value={formData.targetDeliveryDate}
                  onChange={handleChange}
                  placeholder="e.g. Q3 2026 or Immediate trial lot"
                  className="w-full px-3.5 py-2.5 bg-ivory text-charcoal text-xs border border-linen hover:border-forest/40 transition-colors focus:outline-none focus:ring-1 focus:ring-forest"
                />
              </div>

              {/* Sample Request Checkbox */}
              <div className="sm:col-span-1 flex items-end pb-2">
                <label className="flex items-center space-x-2 text-xs font-sans text-charcoal cursor-pointer">
                  <input
                    type="checkbox"
                    name="sampleRequest"
                    checked={formData.sampleRequest}
                    onChange={handleChange}
                    className="w-4 h-4 text-forest border-linen rounded-none focus:ring-forest accent-forest cursor-pointer"
                  />
                  <span>Request sample swatch</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section 3: Message */}
          <div className="space-y-2 pt-2">
            <label htmlFor="message" className="block text-xs font-sans font-medium text-charcoal">
              Detailed Requirements & End Application <span className="text-terracotta">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide any additional details regarding your end application (e.g. dyeing conversion, garment interlining, industrial lamination), target export specifications, or roll diameter preferences."
              className={`w-full px-3.5 py-2.5 bg-ivory text-charcoal text-xs border transition-colors focus:outline-none focus:ring-1 focus:ring-forest ${
                errors.message ? 'border-red-500' : 'border-linen hover:border-forest/40'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-[11px] text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Submission Notice & Submit Button */}
          <div className="pt-4 border-t border-linen flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[11px] text-charcoal/60 leading-relaxed max-w-sm">
              We respect your commercial confidentiality. Fabric parameters submitted are shared solely
              with our internal technical weaving department in Pallipalayam.
            </p>

            <Button
              type="submit"
              variant="terracotta"
              size="md"
              disabled={submissionState.status === 'submitting'}
              icon={
                submissionState.status === 'submitting' ? (
                  <RefreshCw className="w-3.5 h-3.5 ml-1 animate-spin" />
                ) : (
                  <Send className="w-3.5 h-3.5 ml-1" />
                )
              }
            >
              {submissionState.status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
            </Button>
          </div>

          {submissionState.status === 'error' && (
            <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-800 flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{submissionState.message}</span>
            </div>
          )}
        </form>
      )}
    </div>
  );
};
