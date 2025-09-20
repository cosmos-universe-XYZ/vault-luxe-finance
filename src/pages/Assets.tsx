import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import AnimatedFooter from "@/components/AnimatedFooter";
import { Watch, Car, Gem, TrendingUp, Shield, DollarSign, Plus, Upload } from "lucide-react";
import { useWallet, useContract } from "@/hooks/useWallet";
import { useState } from "react";
import { useAccount } from "wagmi";

const Assets = () => {
  const { isConnected } = useAccount();
  const { registerAsset } = useContract();
  const [isRegisteringAsset, setIsRegisteringAsset] = useState(false);
  const [assetForm, setAssetForm] = useState({
    assetType: "",
    description: "",
    metadataHash: "",
    value: "",
    appraisalScore: ""
  });

  const handleRegisterAsset = async () => {
    if (!assetForm.assetType || !assetForm.description || !assetForm.value) return;
    
    setIsRegisteringAsset(true);
    try {
      await registerAsset(
        assetForm.assetType,
        assetForm.description,
        assetForm.metadataHash,
        parseInt(assetForm.value),
        parseInt(assetForm.appraisalScore) || 0
      );
      setAssetForm({
        assetType: "",
        description: "",
        metadataHash: "",
        value: "",
        appraisalScore: ""
      });
    } catch (error) {
      console.error("Error registering asset:", error);
    } finally {
      setIsRegisteringAsset(false);
    }
  };

  const assetCategories = [
    {
      icon: Watch,
      title: "Luxury Watches",
      description: "Rolex, Patek Philippe, Audemars Piguet",
      valueRange: "$10K - $500K+",
      ltv: "Up to 70%",
      examples: ["Submariner", "Nautilus", "Royal Oak"]
    },
    {
      icon: Car,
      title: "Classic & Exotic Cars", 
      description: "Ferrari, Lamborghini, Porsche, McLaren",
      valueRange: "$50K - $2M+",
      ltv: "Up to 60%",
      examples: ["911 Turbo", "F430", "Gallardo"]
    },
    {
      icon: Gem,
      title: "Fine Jewelry & Diamonds",
      description: "Certified diamonds, precious stones, designer pieces",
      valueRange: "$5K - $1M+", 
      ltv: "Up to 65%",
      examples: ["Cartier", "Tiffany & Co", "Harry Winston"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-luxury bg-clip-text text-transparent">
                Accepted Assets
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Finance against your luxury assets while maintaining complete privacy and security
            </p>
          </div>

          {/* Asset Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {assetCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 encrypted-glow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl gradient-luxury bg-clip-text text-transparent">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Value Range</span>
                      <Badge variant="secondary">{category.valueRange}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Max LTV</span>
                      <Badge className="bg-primary/20 text-primary">{category.ltv}</Badge>
                    </div>
                    <div>
                      <span className="text-sm font-medium mb-2 block">Popular Models</span>
                      <div className="flex flex-wrap gap-1">
                        {category.examples.map((example, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
              <p className="text-muted-foreground">Starting from 8.5% APR for premium assets</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
              <p className="text-muted-foreground">Bank-grade vaults with full insurance coverage</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Access</h3>
              <p className="text-muted-foreground">Funds available within 24-48 hours</p>
            </div>
          </div>

          {/* Register Asset Section */}
          {isConnected && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 gradient-luxury bg-clip-text text-transparent">
                Register Your Asset
              </h2>
              <Card className="max-w-2xl mx-auto bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plus className="w-6 h-6 text-primary" />
                    <span>New Asset Registration</span>
                  </CardTitle>
                  <CardDescription>
                    Register your luxury asset to start using it as collateral
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Asset Type</label>
                      <select
                        value={assetForm.assetType}
                        onChange={(e) => setAssetForm({...assetForm, assetType: e.target.value})}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      >
                        <option value="">Select asset type</option>
                        <option value="Luxury Watch">Luxury Watch</option>
                        <option value="Classic Car">Classic Car</option>
                        <option value="Fine Jewelry">Fine Jewelry</option>
                        <option value="Art">Art</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Estimated Value (USD)</label>
                      <input
                        type="number"
                        value={assetForm.value}
                        onChange={(e) => setAssetForm({...assetForm, value: e.target.value})}
                        placeholder="Enter estimated value"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <textarea
                      value={assetForm.description}
                      onChange={(e) => setAssetForm({...assetForm, description: e.target.value})}
                      placeholder="Describe your asset in detail"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background h-20"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Metadata Hash (Optional)</label>
                      <input
                        type="text"
                        value={assetForm.metadataHash}
                        onChange={(e) => setAssetForm({...assetForm, metadataHash: e.target.value})}
                        placeholder="IPFS hash or document reference"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Appraisal Score (0-100)</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={assetForm.appraisalScore}
                        onChange={(e) => setAssetForm({...assetForm, appraisalScore: e.target.value})}
                        placeholder="Professional appraisal score"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={handleRegisterAsset}
                    disabled={!assetForm.assetType || !assetForm.description || !assetForm.value || isRegisteringAsset}
                    className="w-full btn-luxury"
                  >
                    {isRegisteringAsset ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Registering Asset...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Register Asset
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center">
            {!isConnected ? (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Connect Your Wallet to Register Assets</h3>
                <p className="text-muted-foreground mb-6">
                  Connect your wallet to register and manage your luxury assets
                </p>
              </div>
            ) : null}
            <Button size="lg" className="btn-luxury text-lg px-8 py-4 mr-4" asChild>
              <a href="/register">Register Your Assets</a>
            </Button>
            <Button size="lg" variant="outline" className="btn-vault text-lg px-8 py-4" asChild>
              <a href="/vault">Learn More About Vault</a>
            </Button>
          </div>
        </section>
      </main>

      <AnimatedFooter />
    </div>
  );
};

export default Assets;