import DiamondLogo from "./DiamondLogo";
import { Watch, Car, Gem, Shield, Lock, Zap } from "lucide-react";

const ShowcaseStand = ({ 
  icon, 
  title, 
  rotationDelay = "0s" 
}: { 
  icon: React.ReactNode; 
  title: string; 
  rotationDelay?: string; 
}) => {
  return (
    <div className="relative group">
      {/* Stand base */}
      <div className="relative w-32 h-32 mx-auto">
        {/* Pedestal */}
        <div className="absolute inset-x-6 bottom-0 h-8 bg-gradient-to-t from-card to-muted rounded-t-lg border border-border/50"></div>
        
        {/* Rotating platform */}
        <div 
          className="absolute inset-6 top-2 h-24 bg-gradient-to-br from-card via-muted to-card rounded-full border border-border/30 flex items-center justify-center animate-rotate-showcase"
          style={{ animationDelay: rotationDelay }}
        >
          {/* Asset icon */}
          <div className="text-primary p-4 bg-background/50 rounded-full border border-primary/20 group-hover:border-primary/40 transition-colors">
            {icon}
          </div>
        </div>
        
        {/* Holographic glow effect */}
        <div className="absolute inset-6 top-2 h-24 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Encrypted overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-2 rounded-full border-2 border-accent/50 border-dashed animate-spin-slow"></div>
          <Lock className="w-6 h-6 text-accent relative z-10" />
        </div>
      </div>
      
      {/* Title */}
      <p className="text-center text-sm text-muted-foreground mt-4 group-hover:text-primary transition-colors">
        {title}
      </p>
    </div>
  );
};

const AnimatedFooter = () => {
  const showcaseAssets = [
    {
      icon: <Watch className="w-8 h-8" />,
      title: "Luxury Watches",
      rotationDelay: "0s"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Exotic Cars",
      rotationDelay: "2s"
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Fine Jewelry",
      rotationDelay: "4s"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-vault-dark via-background to-background border-t border-border/30">
      {/* Animated showcase stands */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-display font-bold mb-4">
              <span className="gradient-encrypted bg-clip-text text-transparent">Encrypted</span>{" "}
              <span className="text-foreground">Showcase</span>
            </h3>
            <p className="text-muted-foreground">
              Your assets, secured and confidential until financing approval
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {showcaseAssets.map((asset, index) => (
              <ShowcaseStand
                key={index}
                icon={asset.icon}
                title={asset.title}
                rotationDelay={asset.rotationDelay}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="border-t border-border/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <DiamondLogo size={32} />
                <div>
                  <h4 className="font-display font-bold text-lg gradient-luxury bg-clip-text text-transparent">
                    LuxVault
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">
                    ENCRYPTED ASSETS
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                The future of luxury asset financing, where privacy meets premium.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h5 className="font-semibold text-foreground">Services</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="hover:text-primary cursor-pointer transition-colors">Asset Appraisal</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Luxury Financing</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Vault Storage</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Insurance Coverage</p>
              </div>
            </div>

            {/* Security */}
            <div className="space-y-4">
              <h5 className="font-semibold text-foreground">Security</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>End-to-End Encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-accent" />
                  <span>Zero-Knowledge Protocol</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>Instant Verification</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h5 className="font-semibold text-foreground">Contact</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>concierge@luxvault.com</p>
                <p>+1 (555) VAULT-99</p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 LuxVault. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-primary cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Security</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-accent/20 rotate-12 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;