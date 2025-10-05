import { ArrowRight, Play, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardHero from "@/assets/dashboard-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-3xl opacity-30 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Powered by Jobi Rooms
              </span>
            </div>

            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight">
              <span className="text-gradient">Sync Your Stays.</span>
              <br />
              Simplify Your Bookings.
            </h1>

            <p className="text-2xl font-semibold text-primary mb-4">
              भारत का सबसे आसान Channel Manager
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Manage rooms, prices, and guests across all booking platforms from one dashboard. 
              <span className="font-semibold text-foreground"> Save 15+ hours weekly. Increase revenue by 18%. Zero overbookings.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground text-lg px-8 py-6 shadow-purple hover:scale-105 transition-transform"
                asChild
              >
                <a href="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-accent"
                asChild
              >
                <a href="/login">
                  <Play className="mr-2 w-5 h-5" />
                  Watch 2-Min Demo
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-success" />
                No credit card required
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-success" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-success" />
                Cancel anytime
              </div>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by 2,500+ properties across India
              </p>
              <div className="flex gap-4 items-center">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <div>
                  <div className="font-semibold text-foreground">4.9/5 rating</div>
                  <div className="text-xs text-muted-foreground">Based on 300+ reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 animate-float hover:shadow-purple group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 group-hover:from-primary/30 transition-all duration-500" />
              <img
                src={dashboardHero}
                alt="Jobi Rooms Connect Dashboard"
                className="w-full h-auto group-hover:brightness-110 transition-all duration-500"
              />
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-success rounded-full animate-pulse group-hover:scale-150 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-warning rounded-full animate-pulse group-hover:scale-150 transition-all duration-500" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-lg shadow-lg p-4 animate-fade-in hover:scale-110 transition-all duration-300 hover:shadow-purple cursor-pointer group">
              <div className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">2,500+</div>
              <div className="text-sm text-muted-foreground">Active Properties</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-background rounded-lg shadow-lg p-4 animate-fade-in hover:scale-110 transition-all duration-300 hover:shadow-purple cursor-pointer group" style={{ animationDelay: "0.2s" }}>
              <div className="text-2xl font-bold text-success group-hover:text-success/80 transition-colors">150K+</div>
              <div className="text-sm text-muted-foreground">Bookings/Month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
