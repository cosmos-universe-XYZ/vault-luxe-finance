import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import AnimatedFooter from "@/components/AnimatedFooter";
import { Calculator, CreditCard, TrendingUp, Clock, CheckCircle, DollarSign } from "lucide-react";

const Financing = () => {
  const loanOptions = [
    {
      title: "Standard Loan",
      rate: "8.5% - 12%",
      term: "6-36 months",
      ltv: "Up to 65%",
      processing: "2-3 days",
      features: ["Competitive rates", "Flexible terms", "No prepayment penalty"]
    },
    {
      title: "Premium Loan",
      rate: "7.5% - 10%",
      term: "12-60 months",
      ltv: "Up to 70%",
      processing: "24-48 hours",
      features: ["Priority processing", "Higher LTV", "Dedicated advisor"]
    },
    {
      title: "Platinum Loan",
      rate: "6.5% - 9%",
      term: "24-84 months",
      ltv: "Up to 75%",
      processing: "Same day",
      features: ["Best rates", "Maximum flexibility", "White glove service"]
    }
  ];

  const loanProcess = [
    {
      step: 1,
      title: "Asset Appraisal",
      description: "Professional evaluation of your luxury assets",
      duration: "30 minutes"
    },
    {
      step: 2,
      title: "Loan Application",
      description: "Complete application with encrypted asset details",
      duration: "15 minutes"
    },
    {
      step: 3,
      title: "Underwriting",
      description: "Risk assessment and loan approval process",
      duration: "2-24 hours"
    },
    {
      step: 4,
      title: "Fund Transfer",
      description: "Secure transfer of funds to your account",
      duration: "1-2 hours"
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
                Financing Options
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible financing solutions tailored to your luxury assets and financial needs
            </p>
          </div>

          {/* Loan Calculator Preview */}
          <div className="max-w-md mx-auto mb-16">
            <Card className="bg-card/50 border-border/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="gradient-luxury bg-clip-text text-transparent">
                  Loan Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Asset Value</span>
                    <span className="font-medium">$500,000</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Loan Amount (70% LTV)</span>
                    <span className="font-medium text-primary">$350,000</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Monthly Payment</span>
                    <span className="font-medium">$12,450</span>
                  </div>
                </div>
                <Button className="w-full btn-luxury">
                  Get Detailed Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Loan Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 gradient-luxury bg-clip-text text-transparent">
              Choose Your Financing Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {loanOptions.map((option, index) => (
                <Card key={index} className={`bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 ${index === 1 ? 'ring-2 ring-primary/30' : ''}`}>
                  <CardHeader className="text-center">
                    {index === 1 && (
                      <Badge className="mb-2 bg-primary/20 text-primary w-fit mx-auto">
                        Most Popular
                      </Badge>
                    )}
                    <CardTitle className="text-2xl gradient-luxury bg-clip-text text-transparent">
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Interest Rate</span>
                        <div className="font-semibold text-primary">{option.rate}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Loan Term</span>
                        <div className="font-semibold">{option.term}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Max LTV</span>
                        <div className="font-semibold text-accent">{option.ltv}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Processing</span>
                        <div className="font-semibold">{option.processing}</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full btn-luxury mt-4">
                      Select Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Loan Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 gradient-encrypted bg-clip-text text-transparent">
              Simple Application Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {loanProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-4">
                    <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto">
                      <span className="text-2xl font-bold text-primary">{process.step}</span>
                    </div>
                    {index < loanProcess.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-[2px] bg-primary/20 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{process.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {process.duration}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Credit Check</h3>
              <p className="text-muted-foreground">Asset-backed loans don't require traditional credit scoring</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Approval</h3>
              <p className="text-muted-foreground">Get approved in hours, not weeks</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Keep Your Assets</h3>
              <p className="text-muted-foreground">Continue using your luxury items while they're collateralized</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button size="lg" className="btn-luxury text-lg px-8 py-4 mr-4" asChild>
              <a href="/register">Apply for Financing</a>
            </Button>
            <Button size="lg" variant="outline" className="btn-vault text-lg px-8 py-4" asChild>
              <a href="/assets">Calculate Loan Amount</a>
            </Button>
          </div>
        </section>
      </main>

      <AnimatedFooter />
    </div>
  );
};

export default Financing;