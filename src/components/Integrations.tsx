import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import integrationVisual from "@/assets/integration-visual.jpg";

const integrations = [
  { name: "Jobi Rooms", badge: "Native", featured: true },
  { name: "Booking.com", badge: "Official Partner", featured: true },
  { name: "Airbnb", badge: "Superhost Approved", featured: true },
  { name: "Expedia Group", badge: "Group Access", featured: true },
  { name: "MakeMyTrip", badge: null },
  { name: "Agoda", badge: null },
  { name: "TripAdvisor", badge: null },
  { name: "Google Hotel Ads", badge: null },
  { name: "Hostelworld", badge: null },
  { name: "Goibibo", badge: null },
  { name: "Cleartrip", badge: null },
  { name: "Marriott", badge: "Coming Soon", comingSoon: true },
];

const benefits = [
  {
    icon: "🔄",
    title: "Two-Way Sync",
    description: "Bookings and availability flow both directions seamlessly",
  },
  {
    icon: "⚡",
    title: "Instant Updates",
    description: "Changes reflect across all platforms in under 2 seconds",
  },
  {
    icon: "🛡️",
    title: "No Data Loss",
    description: "Redundant backups ensure your booking history is never lost",
  },
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Connects With All Major Booking Platforms
          </h2>
          <p className="text-lg text-muted-foreground">
            Your existing workflow, supercharged. We integrate with 15+ channels
            and counting.
          </p>
        </div>

        {/* Visual + Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Visual */}
          <div className="order-2 lg:order-1">
            <img
              src={integrationVisual}
              alt="Integration Network"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Right: Integration Cards */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {integrations.slice(0, 8).map((integration, index) => (
                <div
                  key={index}
                  className={`relative bg-background border-2 rounded-xl p-6 text-center hover-lift transition-all ${
                    integration.featured
                      ? "border-primary shadow-purple"
                      : integration.comingSoon
                      ? "border-border opacity-60"
                      : "border-border"
                  }`}
                >
                  {integration.badge && (
                    <span
                      className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded ${
                        integration.comingSoon
                          ? "bg-muted text-muted-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {integration.badge}
                    </span>
                  )}
                  <div className="font-semibold text-sm text-card-foreground">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" size="sm">
                View All 15+ Integrations
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-background border border-border hover:border-primary transition-colors"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-display text-xl font-bold mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* API Access */}
        <div className="mt-16 text-center bg-accent/50 rounded-2xl p-8 border-2 border-dashed border-primary/30">
          <h3 className="font-display text-2xl font-bold mb-4">
            Need a Custom Integration?
          </h3>
          <p className="text-muted-foreground mb-6">
            Developer API available for custom integrations and workflows
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">View API Documentation</Button>
            <Button variant="default">Request Integration</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
