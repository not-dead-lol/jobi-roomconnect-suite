import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small properties just getting started",
    features: [
      "Up to 5 rooms",
      "3 platform integrations",
      "Basic analytics",
      "Email support",
      "Mobile app access",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "149",
    description: "Ideal for growing properties and boutique hotels",
    features: [
      "Up to 25 rooms",
      "Unlimited integrations",
      "Advanced analytics & reports",
      "Priority support",
      "Multi-property management",
      "Dynamic pricing AI",
      "Team collaboration tools",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large hotel chains and property management companies",
    features: [
      "Unlimited rooms",
      "Unlimited integrations",
      "Custom reporting",
      "Dedicated account manager",
      "API access",
      "White-label options",
      "Custom SLA",
      "Advanced security",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border-2 transition-all hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-purple bg-gradient-to-b from-background to-accent"
                  : "border-border bg-background"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                <div className="flex items-baseline justify-center">
                  {plan.price !== "Custom" ? (
                    <>
                      <span className="text-5xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground ml-2">/month</span>
                    </>
                  ) : (
                    <span className="text-5xl font-bold">{plan.price}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`w-full ${
                  plan.popular
                    ? "gradient-primary text-primary-foreground"
                    : "border-2"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            All plans include 14-day free trial. No credit card required.
          </p>
          <Button variant="link" className="text-primary">
            View detailed comparison →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
