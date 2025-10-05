import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">JR</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg">Jobi Rooms</div>
                <div className="text-sm text-muted">Connect</div>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              The all-in-one channel manager for modern hospitality businesses.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="text-muted hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-muted hover:text-background transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © 2025 Jobi Rooms Connect. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm text-muted">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
