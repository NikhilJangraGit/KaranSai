import React from 'react';
import { Check, Sparkles } from "lucide-react";

// --- INLINE UI COMPONENTS (To ensure self-contained execution) ---

const Card = ({ className, ...props }) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow ${className || ""}`} {...props} />
);

const CardHeader = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className || ""}`} {...props} />
);

const CardTitle = ({ className, ...props }) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className || ""}`} {...props} />
);

const CardContent = ({ className, ...props }) => (
  <div className={`p-6 pt-0 ${className || ""}`} {...props} />
);

const Button = ({ className, variant = "default", size = "default", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };
  const sizes = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  };
  
  // Simple class merging
  const combinedClasses = `${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className || ""}`;

  return <button className={combinedClasses} {...props} />;
};

 import videoEditingImg from '../assets/Video-editing.jpg';
 import studioImg from '../assets/Studio.jpg';

const Packages = () => {
  const packages = [
    {
      name: "Podcast Shoot Package",
      price: "₹1,999",
      image: studioImg, 
      featured: true,
      includes: [
        "1.5 Hour Studio Session",
        "Professional Lighting Setup",
        "Teleprompter Available",
        "Two camera Shoot Setup",
        "Two Cameramen",
        "Changing Room Available",
        "Make-up room Available",
        "Servant Available",
        "Raw Footage Delivery Same Day",
      ],
    },
    {
      name: "Premium Editing Package",
      price: "₹1,999",
      // USE THIS IF USING LOCAL IMPORTS:
      // image: studioImg,

      // FOR PREVIEW PURPOSES:
      image: videoEditingImg,
      featured: true,
      includes: [
        "1 Full Podcast Episode Edit (Incl. 10 B-Roll Clips & Visuals)",
        "1 Promotional Teaser",
        "6 Reels (Includes B-Roll, Visuals & Captions)",
        "6 Thumbnail for reels",
        "2 Thumbnail for podcast",
        "Smooth Transitions",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Choose Your <span className="text-gradient">Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. Premium quality at competitive rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-scale-in group border-0 ${
                pkg.featured ? "shadow-2xl" : "shadow-xl"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* --- BACKGROUND IMAGE LAYER --- */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* --- DARK OVERLAY LAYER --- */}
              {/* Added bg-black/75 for strong contrast. Adjust opacity (60-90) as needed. */}
              <div className={`absolute inset-0 bg-black/80 ${pkg.featured ? "border-2 border-primary/50" : ""}`} />

              {/* --- CONTENT LAYER (z-10 to sit on top) --- */}
              <div className="relative z-10 h-full flex flex-col">
                {pkg.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 text-sm font-semibold flex items-center gap-1 rounded-bl-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-12">
                  <CardTitle className="text-3xl font-display font-bold mb-4 text-white">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-5xl font-display font-bold text-primary">
                    {pkg.price}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    {pkg.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                        {/* Text set to gray-200 for readability on dark bg */}
                        <span className="text-gray-200 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToContact}
                    className={`w-full mt-8 ${
                      pkg.featured
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20"
                    }`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;