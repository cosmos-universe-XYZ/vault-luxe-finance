import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import AnimatedFooter from "@/components/AnimatedFooter";
import { Lock, Shield, Eye, Fingerprint, Globe, Clock, Plus, Vault } from "lucide-react";
import { useWallet, useContract } from "@/hooks/useWallet";
import { useState } from "react";
import { useAccount } from "wagmi";

const Vault = () => {
  const { isConnected } = useAccount();
  const { createVault } = useContract();
  const [isCreatingVault, setIsCreatingVault] = useState(false);
  const [vaultName, setVaultName] = useState("");
  const [vaultDescription, setVaultDescription] = useState("");

  const handleCreateVault = async () => {
    if (!vaultName || !vaultDescription) return;
    
    setIsCreatingVault(true);
    try {
      await createVault(vaultName, vaultDescription, true);
      setVaultName("");
      setVaultDescription("");
    } catch (error) {
      console.error("Error creating vault:", error);
    } finally {
      setIsCreatingVault(false);
    }
  };

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Military-grade AES-256 encryption protects all asset data",
      status: "Active"
    },
    {
      icon: Shield,
      title: "Multi-Layer Security",
      description: "Biometric access, multi-factor authentication, and hardware security modules",
      status: "Active"
    },
    {
      icon: Eye,
      title: "Zero-Knowledge Architecture",
      description: "Your asset details remain encrypted until loan approval",
      status: "Active"
    },
    {
      icon: Fingerprint,
      title: "Biometric Verification",
      description: "Fingerprint and facial recognition for secure access",
      status: "Active"
    }
  ];

  const vaultStats = [
    { label: "Total Assets Secured", value: "$2.3B+", trend: "+12%" },
    { label: "Active Vaults", value: "15,847", trend: "+8%" },
    { label: "Security Incidents", value: "0", trend: "Always" },
    { label: "Uptime", value: "99.99%", trend: "24/7" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-encrypted bg-clip-text text-transparent">
                Digital Vault
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your luxury assets are protected by bank-grade security and advanced encryption technology
            </p>
          </div>

          {/* Vault Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {vaultStats.map((stat, index) => (
              <Card key={index} className="bg-card/30 border-border/50 text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold gradient-luxury bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                  <Badge variant="outline" className="text-xs">
                    {stat.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Security Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 gradient-luxury bg-clip-text text-transparent">
              Vault Security Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 rounded-full bg-primary/10">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          {feature.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-muted-foreground mt-2">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Vault Access Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 gradient-encrypted bg-clip-text text-transparent">
              How Vault Access Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-6 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Secure Registration</h3>
                <p className="text-muted-foreground">Connect your wallet and complete biometric verification</p>
              </div>
              <div className="text-center">
                <div className="p-6 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                  <Lock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Asset Encryption</h3>
                <p className="text-muted-foreground">Your asset data is encrypted and stored in the vault</p>
              </div>
              <div className="text-center">
                <div className="p-6 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. On-Demand Access</h3>
                <p className="text-muted-foreground">Data is decrypted only when loan approval is needed</p>
              </div>
            </div>
          </div>

          {/* Create Vault Section */}
          {isConnected && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 gradient-luxury bg-clip-text text-transparent">
                Create Your Vault
              </h2>
              <Card className="max-w-2xl mx-auto bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Vault className="w-6 h-6 text-primary" />
                    <span>New Vault</span>
                  </CardTitle>
                  <CardDescription>
                    Create a secure vault to store your luxury assets
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Vault Name</label>
                    <input
                      type="text"
                      value={vaultName}
                      onChange={(e) => setVaultName(e.target.value)}
                      placeholder="Enter vault name"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <textarea
                      value={vaultDescription}
                      onChange={(e) => setVaultDescription(e.target.value)}
                      placeholder="Describe your vault"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background h-20"
                    />
                  </div>
                  <Button
                    onClick={handleCreateVault}
                    disabled={!vaultName || !vaultDescription || isCreatingVault}
                    className="w-full btn-encrypted"
                  >
                    {isCreatingVault ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Creating Vault...
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 mr-2" />
                        Create Vault
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
                <h3 className="text-xl font-semibold mb-4">Connect Your Wallet to Access Vault</h3>
                <p className="text-muted-foreground mb-6">
                  Connect your wallet to create and manage your luxury asset vaults
                </p>
              </div>
            ) : null}
            <Button size="lg" className="btn-encrypted text-lg px-8 py-4 mr-4" asChild>
              <a href="/register">Access Your Vault</a>
            </Button>
            <Button size="lg" variant="outline" className="btn-vault text-lg px-8 py-4" asChild>
              <a href="/assets">View Security Details</a>
            </Button>
          </div>
        </section>
      </main>

      <AnimatedFooter />
    </div>
  );
};

export default Vault;