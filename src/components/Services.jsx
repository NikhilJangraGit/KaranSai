import { Video, PlaySquare, Camera, Film, Zap, Sparkles,Megaphone } from "lucide-react";
import { Card, CardContent } from "./ui/Card.jsx";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Podcast Studio",
      description: "Professional studio setup for high-quality video shoots and recordings",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional editing with smooth transitions, color grading, and cinematic effects",
    },
    {
      icon: Megaphone,
      title: "Social Media Management",
      description: "Strategic management of your social channels to grow your audience and boost engagement",
    },
     {
      icon: PlaySquare,
      title: "UGC Ad Video",
      description: "Authentic video ads created by real people to build trust and drive sales",
    },
    {
      icon: Film,
      title: "Content Creation",
      description: "Reels, thumbnails, and social media content that stands out",
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      description: "Fast delivery without compromising on quality",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            <span className="text-gradient">Services</span> I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive video production and editing services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-4 inline-flex p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-gradient transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;