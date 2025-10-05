import { Plug, RefreshCw, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: <Plug className="w-8 h-8" />,
    title: "Connect Your Platforms",
    description:
      "Link your existing accounts from Booking.com, Airbnb, Expedia, and more. Our secure OAuth integration takes just 2 minutes per platform.",
    subSteps: [
      "Click 'Add Channel' in dashboard",
      "Select platform and authorize access",
      "Confirm property mapping",
    ],
    timeEstimate: "5-10 minutes",
  },
  {
    number: "02",
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Map Your Inventory",
    description:
      "Jobi Connect automatically matches your room types across platforms. Review and approve mappings, set your base rates, and define booking rules.",
    subSteps: [
      "Auto-map room types (AI-powered)",
      "Set base pricing and availability",
      "Configure minimum stays and restrictions",
    ],
    timeEstimate: "10-15 minutes",
  },
  {
    number: "03",
    icon: <Sparkles className="w-8 h-8" />,
    title: "Sit Back and Let It Work",
    description:
      "That's it! Jobi Connect now handles all synchronization automatically. Update once, and changes propagate everywhere in real-time. Focus on guests, not spreadsheets.",
    benefits: [
      "Real-time sync (< 2 seconds)",
      "Automatic overbooking prevention",
      "Instant notifications on bookings",
      "24/7 monitoring and support",
    ],
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-accent/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Get Started in Minutes, Not Days
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to transform your property management
          </p>
        </div>

        {/* Progress Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-primary transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-background rounded-2xl p-8 border-2 border-border hover:border-primary transition-colors shadow-lg">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <div className="pt-8">
                    {/* Icon */}
                    <div className="mb-6 text-primary">{step.icon}</div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Sub-steps or Benefits */}
                    {step.subSteps && (
                      <ul className="space-y-2 mb-4">
                        {step.subSteps.map((subStep, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-muted-foreground"
                          >
                            <Check className="w-4 h-4 mr-2 text-success mt-0.5 flex-shrink-0" />
                            <span>{subStep}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {step.benefits && (
                      <ul className="space-y-2 mb-4">
                        {step.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-muted-foreground"
                          >
                            <Check className="w-4 h-4 mr-2 text-success mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Time Estimate */}
                    {step.timeEstimate && (
                      <div className="inline-flex items-center text-sm text-primary font-semibold bg-accent px-3 py-1 rounded-full">
                        ⏱ {step.timeEstimate}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="gradient-primary text-primary-foreground px-8">
            Start Your Free Trial
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No technical knowledge required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
