import React from 'react';

interface WovenPatternProps {
  className?: string;
  variant?: 'ivory' | 'forest' | 'linen' | 'subtle' | 'terracotta';
  density?: 'fine' | 'medium' | 'broad';
  opacity?: number;
  mask?: 'left-calm' | 'radial' | 'none';
}

export const WovenPattern: React.FC<WovenPatternProps> = ({
  className = '',
  variant = 'linen',
  density = 'medium',
  opacity = 0.1,
  mask = 'none'
}) => {
  const getStrokeColor = () => {
    switch (variant) {
      case 'forest':
        return '#FAF7F0';
      case 'ivory':
        return '#183C35';
      case 'subtle':
        return '#292D2A';
      case 'terracotta':
        return '#B86F52';
      case 'linen':
      default:
        // Genuine soft, muted linen beige that harmonizes gently with Warm Ivory #F5F0E6
        return '#C9BA9B';
    }
  };

  const strokeColor = getStrokeColor();
  const size = density === 'fine' ? 14 : density === 'medium' ? 22 : 32;

  const getMaskStyle = (): React.CSSProperties => {
    if (mask === 'left-calm') {
      // Dissolves the grid behind the left text column, leaving it pristine and calm,
      // while keeping a subtle decorative whisper on the right and perimeter.
      return {
        maskImage: 'linear-gradient(to right, transparent 0%, transparent 45%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 0.9) 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 45%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 0.9) 100%)',
      };
    }
    if (mask === 'radial') {
      return {
        maskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.8) 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.8) 0%, transparent 75%)',
      };
    }
    return {};
  };

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity, ...getMaskStyle() }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`woven-weave-${variant}-${density}`}
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            {/* Warp threads (vertical) - ultra-fine 0.5px subtle dashed thread */}
            <line
              x1={size / 2}
              y1="0"
              x2={size / 2}
              y2={size}
              stroke={strokeColor}
              strokeWidth="0.5"
              strokeDasharray="1.5 2.5"
            />
            {/* Weft threads (horizontal) - ultra-fine 0.5px subtle dashed thread */}
            <line
              x1="0"
              y1={size / 2}
              x2={size}
              y2={size / 2}
              stroke={strokeColor}
              strokeWidth="0.5"
              strokeDasharray="1.5 2.5"
            />
            {/* Subtle intersection node */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r="0.75"
              fill={strokeColor}
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#woven-weave-${variant}-${density})`}
        />
      </svg>
    </div>
  );
};

export const ThreadDivider: React.FC<{ className?: string; dark?: boolean; text?: string }> = ({
  className = '',
  dark = false,
  text
}) => {
  return (
    <div className={`relative flex items-center justify-center my-6 ${className}`}>
      <div className={`h-[1px] w-full ${dark ? 'bg-forest-light/30' : 'bg-linen/60'}`} />
      {text ? (
        <span className={`px-4 text-xs uppercase tracking-widest font-sans font-medium ${
          dark ? 'bg-forest text-linen/80' : 'bg-ivory text-charcoal/80'
        }`}>
          {text}
        </span>
      ) : (
        <div className="absolute flex space-x-1.5 items-center">
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-terracotta' : 'bg-forest'}`} />
          <span className={`w-2.5 h-0.5 ${dark ? 'bg-linen/50' : 'bg-forest/40'}`} />
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-linen' : 'bg-terracotta'}`} />
        </div>
      )}
      <div className={`h-[1px] w-full ${dark ? 'bg-forest-light/30' : 'bg-linen/60'}`} />
    </div>
  );
};
