import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, RefreshCw, LayoutDashboard, TrendingUp, Calendar, BarChart3, Users, Home, Hotel, Building, Globe, BookOpen, Video, FileText, GraduationCap, MessageCircle, Phone, Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">JR</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-xl text-foreground">
                  Jobi Rooms
                </span>
                <span className="text-primary font-semibold"> Connect</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors font-medium">
                Features
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
              </button>
              {featuresOpen && (
                <div className="absolute top-full left-0 mt-2 w-[500px] bg-background border border-border rounded-xl shadow-xl z-50 animate-fade-in">
                  <div className="grid grid-cols-2 gap-2 p-4">
                    <div className="space-y-1">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase px-3 py-2">Features</h4>
                      <a href="#features" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <RefreshCw className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium text-sm">Real-Time Sync</div>
                          <div className="text-xs text-muted-foreground">Instant updates</div>
                        </div>
                      </a>
                      <a href="#features" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <LayoutDashboard className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium text-sm">Unified Dashboard</div>
                          <div className="text-xs text-muted-foreground">All in one place</div>
                        </div>
                      </a>
                      <a href="#features" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium text-sm">Dynamic Pricing</div>
                          <div className="text-xs text-muted-foreground">AI-powered rates</div>
                        </div>
                      </a>
                      <a href="#features" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium text-sm">Calendar Manager</div>
                          <div className="text-xs text-muted-foreground">Drag & drop</div>
                        </div>
                      </a>
                      <a href="#features" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium text-sm">Analytics</div>
                          <div className="text-xs text-muted-foreground">Deep insights</div>
                        </div>
                      </a>
                      <a href="#features" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <Users className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium text-sm">Team Access</div>
                          <div className="text-xs text-muted-foreground">Role-based</div>
                        </div>
                      </a>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase px-3 py-2">Use Cases</h4>
                      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <Home className="w-5 h-5 text-primary" />
                        <div className="font-medium text-sm">Homestays</div>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <Hotel className="w-5 h-5 text-primary" />
                        <div className="font-medium text-sm">Hotels</div>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <Building className="w-5 h-5 text-primary" />
                        <div className="font-medium text-sm">Resorts</div>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <Globe className="w-5 h-5 text-primary" />
                        <div className="font-medium text-sm">Multi-Property</div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Pricing
            </a>
            <a
              href="#integrations"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Integrations
            </a>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors font-medium">
                Resources
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full right-0 mt-2 w-[400px] bg-background border border-border rounded-xl shadow-xl z-50 animate-fade-in">
                  <div className="grid grid-cols-2 gap-2 p-4">
                    <div className="space-y-1">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase px-3 py-2">Learn</h4>
                      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <div className="font-medium text-sm">Help Center</div>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <Video className="w-5 h-5 text-primary" />
                        <div className="font-medium text-sm">Video Tutorials</div>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <FileText className="w-5 h-5 text-primary" />
                        <div className="font-medium text-sm">Blog</div>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <div className="font-medium text-sm">Webinars</div>
                      </a>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase px-3 py-2">Support</h4>
                      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <MessageCircle className="w-5 h-5 text-primary" />
                        <div className="font-medium text-sm">Live Chat</div>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                        <div className="font-medium text-sm">Phone Support</div>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                        <div className="font-medium text-sm">Email Us</div>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
                        <Code className="w-5 h-5 text-primary" />
                        <div className="font-medium text-sm">API Docs</div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="default" asChild>
              <a href="/login">Login</a>
            </Button>
            <Button size="default" className="gradient-primary text-primary-foreground" asChild>
              <a href="/signup">Get Started Free</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#features"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#integrations"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Integrations
            </a>
            <a
              href="#how-it-works"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" size="default" className="w-full" asChild>
                <a href="/login">Login</a>
              </Button>
              <Button size="default" className="w-full gradient-primary text-primary-foreground" asChild>
                <a href="/signup">Get Started Free</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
