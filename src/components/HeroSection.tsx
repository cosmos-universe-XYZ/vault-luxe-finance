import { Button } from "@/components/ui/button";
import { Lock, Shield, Gem } from "lucide-react";
import heroImage from "@/assets/luxury-vault-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background hero image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-vault-dark/80 via-background/90 to-card/80"></div>
      
      {/* Animated vault door effect */}
      <div className="absolute inset-0 vault-door"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rotate-45 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border border-accent/20 rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-primary/20 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main headline */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="gradient-luxury bg-clip-text text-transparent">
              Finance Luxury,
            </span>
            <br />
            <span className="text-foreground">Keep It</span>{" "}
            <span className="gradient-encrypted bg-clip-text text-transparent diamond-sparkle">
              Confidential
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Private luxury asset financing for watches, cars, and jewelry. 
            Your collateral details stay encrypted until loans close.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="flex items-center space-x-3 encrypted-glow">
            <div className="p-3 rounded-full bg-card border border-border/50">
              <Lock className="w-6 h-6 text-accent" />
            </div>
            <span className="text-foreground font-medium">End-to-End Encryption</span>
          </div>
          
          <div className="flex items-center space-x-3 encrypted-glow">
            <div className="p-3 rounded-full bg-card border border-border/50">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <span className="text-foreground font-medium">Private Collateral</span>
          </div>
          
          <div className="flex items-center space-x-3 encrypted-glow">
            <div className="p-3 rounded-full bg-card border border-border/50">
              <Gem className="w-6 h-6 text-accent" />
            </div>
            <span className="text-foreground font-medium">Luxury Assets</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="btn-luxury text-lg px-8 py-4" asChild>
            <a href="/financing">Start Financing</a>
          </Button>
          
          <Button size="lg" variant="outline" className="btn-vault text-lg px-8 py-4" asChild>
            <a href="/vault">Explore Vault</a>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span>Bank-Grade Security</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
            <span>$50M+ Assets Financed</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            <span>Certified Appraisers</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;