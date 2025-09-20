import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AssetShowcase from "@/components/AssetShowcase";
import AnimatedFooter from "@/components/AnimatedFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AssetShowcase />
      </main>
      <AnimatedFooter />
    </div>
  );
};

export default Index;
