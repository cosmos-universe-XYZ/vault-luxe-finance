import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Watch, Car, Gem, Lock, Eye } from "lucide-react";
import { useState } from "react";

interface AssetCardProps {
  title: string;
  description: string;
  value: string;
  category: string;
  icon: React.ReactNode;
  isEncrypted: boolean;
  onEncryptToggle: () => void;
}

const AssetCard = ({ title, description, value, category, icon, isEncrypted, onEncryptToggle }: AssetCardProps) => {
  return (
    <Card className="asset-showcase group cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-muted/50 text-primary group-hover:bg-primary/10 transition-colors">
            {icon}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onEncryptToggle}
            className={`${isEncrypted ? 'text-accent hover:text-accent/80' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {isEncrypted ? <Lock className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{title}</h3>
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          </div>
          
          <p className={`text-sm ${isEncrypted ? 'blur-sm select-none' : ''} transition-all duration-300`}>
            {isEncrypted ? '████████████████' : description}
          </p>
          
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <span className="text-xs text-muted-foreground">Estimated Value</span>
            <span className={`font-bold text-lg ${isEncrypted ? 'blur-sm select-none' : ''} gradient-luxury bg-clip-text text-transparent`}>
              {isEncrypted ? '████████' : value}
            </span>
          </div>
          
          {isEncrypted && (
            <div className="flex items-center space-x-2 text-xs text-accent">
              <Lock className="w-3 h-3" />
              <span>Details encrypted until loan approval</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const AssetShowcase = () => {
  const [encryptedStates, setEncryptedStates] = useState({
    watch: true,
    car: true,
    jewelry: true,
    collectible: true,
    art: true,
    yacht: true,
  });

  const toggleEncryption = (assetKey: keyof typeof encryptedStates) => {
    setEncryptedStates(prev => ({
      ...prev,
      [assetKey]: !prev[assetKey]
    }));
  };

  const assets = [
    {
      key: 'watch' as keyof typeof encryptedStates,
      title: "Patek Philippe Nautilus",
      description: "5711/1A-010 stainless steel with blue dial. Original box and papers included. Purchased 2019.",
      value: "$180,000",
      category: "Timepiece",
      icon: <Watch className="w-6 h-6" />
    },
    {
      key: 'car' as keyof typeof encryptedStates,
      title: "Ferrari 488 GTB",
      description: "2018 model with only 8,500 miles. Rosso Corsa exterior with black leather interior. Full service history.",
      value: "$320,000",
      category: "Automobile",
      icon: <Car className="w-6 h-6" />
    },
    {
      key: 'jewelry' as keyof typeof encryptedStates,
      title: "Cartier Diamond Necklace",
      description: "18k white gold with 15.2ct total diamond weight. GIA certified stones with VVS1 clarity.",
      value: "$95,000",
      category: "Jewelry",
      icon: <Gem className="w-6 h-6" />
    },
    {
      key: 'collectible' as keyof typeof encryptedStates,
      title: "Rolex Daytona 116500LN",
      description: "Ceramic bezel white dial. Purchased new from authorized dealer in 2021. Unworn condition.",
      value: "$45,000",
      category: "Collectible",
      icon: <Watch className="w-6 h-6" />
    },
    {
      key: 'art' as keyof typeof encryptedStates,
      title: "Hermès Birkin 35",
      description: "Black Togo leather with palladium hardware. Pristine condition with all original accessories.",
      value: "$25,000",
      category: "Luxury Goods",
      icon: <Gem className="w-6 h-6" />
    },
    {
      key: 'yacht' as keyof typeof encryptedStates,
      title: "Lamborghini Huracán",
      description: "2020 Performante with 3,200 miles. Verde Mantis paint with full carbon fiber package.",
      value: "$285,000",
      category: "Supercar",
      icon: <Car className="w-6 h-6" />
    }
  ];

  return (
    <section id="assets" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-luxury bg-clip-text text-transparent">Encrypted</span>{" "}
            <span className="text-foreground">Asset</span>{" "}
            <span className="gradient-encrypted bg-clip-text text-transparent">Vault</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your luxury assets remain confidential throughout the financing process. 
            Details are encrypted and only revealed upon loan approval.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assets.map((asset) => (
            <AssetCard
              key={asset.key}
              title={asset.title}
              description={asset.description}
              value={asset.value}
              category={asset.category}
              icon={asset.icon}
              isEncrypted={encryptedStates[asset.key]}
              onEncryptToggle={() => toggleEncryption(asset.key)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="btn-luxury">
            Register Your Assets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssetShowcase;