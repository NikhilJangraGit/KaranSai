import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border" // Scrolled: Solid on all screens
          : "bg-background/80 backdrop-blur-lg border-b border-border md:bg-transparent md:backdrop-blur-none md:border-transparent" // Top: Solid on Mobile, Transparent on Desktop
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-display font-bold text-gradient hover:scale-105 transition-transform"
          >
            AGENCY:KARANSAI
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;