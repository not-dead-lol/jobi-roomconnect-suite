import {
  RefreshCw,
  LayoutDashboard,
  TrendingUp,
  Calendar,
  BarChart3,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <RefreshCw className="w-12 h-12 text-primary" />,
    title: "Real-Time Sync Across Channels",
    description:
      "Update once, reflect everywhere. Instantly sync availability, pricing, and restrictions across all connected platforms in under 2 seconds.",
    color: "primary",
  },
  {
    icon: <LayoutDashboard className="w-12 h-12 text-primary" />,
    title: "One Dashboard for All Bookings",
    description:
      "See all reservations, guests, and properties in a single, beautiful interface. No more platform-hopping or missed bookings.",
    color: "primary",
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-success" />,
    title: "AI-Powered Dynamic Pricing",
    description:
      "Maximize revenue with intelligent price suggestions based on demand, seasonality, competitor rates, and occupancy patterns.",
    badge: "NEW",
    color: "success",
  },
  {
    icon: <Calendar className="w-12 h-12 text-info" />,
    title: "Drag-and-Drop Booking Calendar",
    description:
      "Manage check-ins, check-outs, and blocked dates with an intuitive visual calendar. Bulk operations save hours of repetitive work.",
    color: "info",
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-primary" />,
    title: "Deep Analytics & Insights",
    description:
      "Track revenue, occupancy, channel performance, and booking trends with customizable reports. Export data for accounting and forecasting.",
    color: "primary",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Team Access & Permissions",
    description:
      "Add team members with role-based access controls. Property managers, front desk staff, and accountants get exactly what they need.",
    color: "primary",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-4 block">
            Powerful Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to Manage Your Distribution
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for property managers who want to work smarter, not harder
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-8 hover-lift hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {feature.badge && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold bg-primary text-primary-foreground px-2 py-1 rounded">
                    {feature.badge}
                  </span>
                </div>
              )}

              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="font-display text-xl font-bold mb-4 text-card-foreground">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="text-base">
            Explore All 20+ Features
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
