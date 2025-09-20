import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import AnimatedFooter from "@/components/AnimatedFooter";
import { Upload, Shield, Check, Camera, FileText, Lock } from "lucide-react";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    { number: 1, title: "Asset Details", icon: FileText },
    { number: 2, title: "Documentation", icon: Camera },
    { number: 3, title: "Verification", icon: Shield },
    { number: 4, title: "Encryption", icon: Lock }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-luxury bg-clip-text text-transparent">
                Register Your Assets
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Securely register your luxury assets with end-to-end encryption
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`p-3 rounded-full border-2 ${
                      currentStep >= step.number 
                        ? 'bg-primary border-primary text-primary-foreground' 
                        : 'border-border bg-background text-muted-foreground'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="mt-2 text-center">
                      <div className="text-sm font-medium">{step.title}</div>
                      <div className="text-xs text-muted-foreground">Step {step.number}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Registration Form */}
          <div className="max-w-2xl mx-auto">
            {currentStep === 1 && (
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="gradient-luxury bg-clip-text text-transparent">
                    Asset Information
                  </CardTitle>
                  <CardDescription>
                    Provide basic details about your luxury asset
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="assetType">Asset Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select asset type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="watch">Luxury Watch</SelectItem>
                          <SelectItem value="car">Exotic Car</SelectItem>
                          <SelectItem value="jewelry">Fine Jewelry</SelectItem>
                          <SelectItem value="art">Art & Collectibles</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estimatedValue">Estimated Value (USD)</Label>
                      <Input id="estimatedValue" placeholder="$100,000" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand/Manufacturer</Label>
                    <Input id="brand" placeholder="e.g., Rolex, Ferrari, Cartier" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="model">Model/Description</Label>
                    <Input id="model" placeholder="e.g., Submariner Date, 488 GTB" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input id="year" placeholder="2020" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="very-good">Very Good</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea id="notes" placeholder="Any additional details about your asset..." />
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 2 && (
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="gradient-luxury bg-clip-text text-transparent">
                    Documentation Upload
                  </CardTitle>
                  <CardDescription>
                    Upload photos and documents for verification
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <Label>Asset Photos</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <Upload className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Drop photos here or click to upload
                        </p>
                        <Button variant="outline" className="mt-4">
                          Choose Files
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Label>Certificates & Documents</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <FileText className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Certificates, receipts, appraisals
                        </p>
                        <Button variant="outline" className="mt-4">
                          Upload Documents
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Required Documents</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">High-resolution photos (all angles)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Purchase receipt or invoice</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Certificate of authenticity (if available)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Previous appraisal (if available)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 3 && (
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="gradient-encrypted bg-clip-text text-transparent">
                    Identity Verification
                  </CardTitle>
                  <CardDescription>
                    Verify your identity for secure asset registration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center p-8 border border-border/50 rounded-lg">
                    <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Biometric Verification</h3>
                    <p className="text-muted-foreground mb-6">
                      Complete facial recognition and document verification
                    </p>
                    <Button className="btn-encrypted">
                      Start Verification
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <Badge className="mb-2 bg-primary/20 text-primary">Step 1</Badge>
                      <p className="text-sm">Take a selfie</p>
                    </div>
                    <div>
                      <Badge className="mb-2 bg-primary/20 text-primary">Step 2</Badge>
                      <p className="text-sm">Scan ID document</p>
                    </div>
                    <div>
                      <Badge className="mb-2 bg-primary/20 text-primary">Step 3</Badge>
                      <p className="text-sm">Liveness check</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 4 && (
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="gradient-encrypted bg-clip-text text-transparent">
                    Secure Encryption
                  </CardTitle>
                  <CardDescription>
                    Your asset data is being encrypted and stored securely
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center p-8">
                    <Lock className="w-16 h-16 mx-auto mb-4 text-primary diamond-sparkle" />
                    <h3 className="text-xl font-semibold mb-2">Encryption Complete</h3>
                    <p className="text-muted-foreground mb-6">
                      Your asset information has been encrypted using military-grade AES-256 encryption
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-card/30 rounded-lg">
                        <div className="text-sm text-muted-foreground">Encryption Status</div>
                        <div className="text-lg font-semibold text-green-400">✓ Secured</div>
                      </div>
                      <div className="p-4 bg-card/30 rounded-lg">
                        <div className="text-sm text-muted-foreground">Asset ID</div>
                        <div className="text-lg font-mono">LV-{Math.random().toString(36).substr(2, 8).toUpperCase()}</div>
                      </div>
                    </div>
                    
                    <Button className="btn-luxury mr-4" asChild>
                      <a href="/vault">View in Vault</a>
                    </Button>
                    <Button variant="outline" className="btn-vault" asChild>
                      <a href="/register">Add Another Asset</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button
                  onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                  className="btn-luxury"
                >
                  Next Step
                </Button>
              ) : (
                <Button className="btn-encrypted">
                  Complete Registration
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>

      <AnimatedFooter />
    </div>
  );
};

export default Register;