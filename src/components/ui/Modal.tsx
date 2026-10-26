import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = '2xl'
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClass = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl'
  }[maxWidth];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className={`relative w-full ${maxWidthClass} bg-ivory border border-linen shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto transform transition-all animate-fadeIn`}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-linen mb-6">
          <div>
            {subtitle && (
              <span className="text-[11px] font-sans uppercase tracking-widest text-terracotta block mb-1">
                {subtitle}
              </span>
            )}
            <h3 id="modal-title" className="font-serif text-2xl font-medium text-forest">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-charcoal/60 hover:text-charcoal hover:bg-linen/40 transition-colors focus:outline-none focus:ring-1 focus:ring-forest"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="text-charcoal">{children}</div>
      </div>
    </div>
  );
};
