import { TrendingUp, Target, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnalyticsShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                DATA-DRIVEN DECISIONS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                Turn Bookings Into Business Intelligence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every booking tells a story. Jobi Connect transforms raw reservation data into actionable insights that help you optimize pricing, improve occupancy, and increase revenue.
              </p>
            </div>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Revenue Forecasting</h3>
                  <p className="text-muted-foreground">
                    Predict future earnings with 85% accuracy based on historical data and market trends.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Channel Performance</h3>
                  <p className="text-muted-foreground">
                    See which platforms drive the most profit and optimize your distribution strategy.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Guest Analytics</h3>
                  <p className="text-muted-foreground">
                    Understand booking patterns, preferences, and behaviors to personalize guest experiences.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Competitor Benchmarking</h3>
                  <p className="text-muted-foreground">
                    Compare your rates to nearby properties and stay competitive in your market.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" variant="outline" className="text-base">
              View Sample Report
            </Button>
          </div>

          {/* Right Column - Interactive Visualization */}
          <div className="relative animate-slide-in-right">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
              {/* Revenue Chart */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Revenue Trend (Last 6 Months)</h3>
                <div className="h-48 flex items-end justify-between gap-2">
                  {[65, 75, 70, 85, 95, 90].map((height, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div className="text-xs font-semibold text-primary">
                        ₹{(height * 1000).toLocaleString('en-IN')}
                      </div>
                      <div
                        className="w-full gradient-primary rounded-t-lg transition-all duration-500 hover:opacity-80"
                        style={{ height: `${height}%` }}
                      />
                      <div className="text-xs text-muted-foreground">
                        M{idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Total Revenue</div>
                  <div className="text-2xl font-bold">₹5.4L</div>
                  <div className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +18% vs last month
                  </div>
                </div>
                <div className="bg-accent/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Avg Occupancy</div>
                  <div className="text-2xl font-bold">87%</div>
                  <div className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +5% vs last month
                  </div>
                </div>
                <div className="bg-accent/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Top Channel</div>
                  <div className="text-lg font-bold">MakeMyTrip</div>
                  <div className="text-xs text-muted-foreground mt-1">45% of bookings</div>
                </div>
                <div className="bg-accent/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">ADR</div>
                  <div className="text-2xl font-bold">₹4,200</div>
                  <div className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +12% vs last month
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-lg shadow-2xl p-4 animate-float">
              <div className="text-sm font-medium mb-1">Revenue Growth</div>
              <div className="text-3xl font-bold">+24%</div>
              <div className="text-xs opacity-90">Last Quarter</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsShowcase;
