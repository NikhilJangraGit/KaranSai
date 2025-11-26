import { Instagram, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-gradient mb-4">KaranSays</h3>
            <p className="text-muted-foreground">
              Professional video editing and content creation services that bring your vision to life.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/karansayss_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all rounded-xl"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/918595343877"
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all rounded-xl"
                aria-label="whatsapp"
                target="_blank"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KaranSays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;