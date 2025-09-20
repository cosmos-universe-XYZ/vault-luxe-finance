const DiamondLogo = ({ className = "", size = 40 }: { className?: string; size?: number }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="diamond-sparkle"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main diamond shape */}
        <path
          d="M30 20 L70 20 L85 35 L50 85 L15 35 Z"
          fill="url(#diamondGradient)"
          stroke="url(#circuitGradient)"
          strokeWidth="1.5"
          className="drop-shadow-lg"
        />
        
        {/* Inner facets */}
        <path d="M30 20 L50 35 L70 20" fill="url(#facetGradient)" opacity="0.6" />
        <path d="M15 35 L50 35 L85 35" fill="url(#facetGradient)" opacity="0.4" />
        <path d="M30 20 L15 35 L50 35" fill="url(#shadowGradient)" opacity="0.3" />
        <path d="M70 20 L85 35 L50 35" fill="url(#shadowGradient)" opacity="0.3" />
        
        {/* Circuit lines */}
        <g stroke="url(#circuitGradient)" strokeWidth="1" fill="none" opacity="0.8">
          {/* Horizontal circuits */}
          <line x1="10" y1="25" x2="25" y2="25" strokeDasharray="2,2" />
          <line x1="75" y1="25" x2="90" y2="25" strokeDasharray="2,2" />
          <line x1="5" y1="40" x2="20" y2="40" strokeDasharray="2,2" />
          <line x1="80" y1="40" x2="95" y2="40" strokeDasharray="2,2" />
          
          {/* Vertical circuits */}
          <line x1="25" y1="10" x2="25" y2="25" strokeDasharray="2,2" />
          <line x1="75" y1="10" x2="75" y2="25" strokeDasharray="2,2" />
          <line x1="50" y1="5" x2="50" y2="15" strokeDasharray="2,2" />
          
          {/* Circuit nodes */}
          <circle cx="25" cy="25" r="1.5" fill="hsl(var(--encryption-blue))" />
          <circle cx="75" cy="25" r="1.5" fill="hsl(var(--encryption-blue))" />
          <circle cx="20" cy="40" r="1.5" fill="hsl(var(--encryption-blue))" />
          <circle cx="80" cy="40" r="1.5" fill="hsl(var(--encryption-blue))" />
        </g>
        
        {/* Glow effect */}
        <path
          d="M30 20 L70 20 L85 35 L50 85 L15 35 Z"
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="2"
          opacity="0.6"
          filter="blur(2px)"
        />
        
        <defs>
          <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--diamond-white))" />
            <stop offset="50%" stopColor="hsl(var(--luxury-gold))" />
            <stop offset="100%" stopColor="hsl(var(--luxury-gold-dark))" />
          </linearGradient>
          
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--encryption-blue))" />
            <stop offset="100%" stopColor="hsl(var(--encryption-cyan))" />
          </linearGradient>
          
          <linearGradient id="facetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--diamond-white))" opacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--luxury-gold))" opacity="0.4" />
          </linearGradient>
          
          <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--vault-dark))" opacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--muted))" opacity="0.3" />
          </linearGradient>
          
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--luxury-gold))" />
            <stop offset="50%" stopColor="hsl(var(--encryption-blue))" />
            <stop offset="100%" stopColor="hsl(var(--luxury-gold))" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DiamondLogo;