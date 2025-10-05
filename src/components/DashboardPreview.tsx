import { useState } from "react";
import { Check, TrendingUp, Calendar, IndianRupee } from "lucide-react";

const tabs = [
  { id: "home", label: "Dashboard Home" },
  { id: "calendar", label: "Calendar View" },
  { id: "pricing", label: "Pricing Manager" },
  { id: "analytics", label: "Analytics" },
];

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            Your Command Center for Channel Management
          </h2>
          <p className="text-lg text-gray-300">
            Clean, intuitive, and powerful. Built for hospitality professionals.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? "gradient-primary text-white shadow-purple"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Container */}
        <div className="relative">
          {/* Browser Frame */}
          <div className="bg-gray-800 rounded-t-xl border border-gray-700 p-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 bg-gray-700 rounded px-4 py-1 text-sm text-gray-400">
              connect.jobirooms.com/dashboard
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="bg-white rounded-b-xl border border-t-0 border-gray-700 p-8 min-h-[500px] shadow-2xl">
            {activeTab === "home" && <DashboardHome />}
            {activeTab === "calendar" && <CalendarView />}
            {activeTab === "pricing" && <PricingManager />}
            {activeTab === "analytics" && <AnalyticsDashboard />}
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl -z-10" />
        </div>

        {/* Bottom Note */}
        <p className="text-center mt-8 text-sm text-gray-400">
          Live demo available after signup - no credit card required
        </p>
      </div>
    </section>
  );
};

// Dashboard Home Tab Content
const DashboardHome = () => (
  <div className="space-y-6 animate-fade-in">
    {/* KPI Cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-accent/50 rounded-lg p-4">
        <div className="text-sm text-muted-foreground mb-1">Today's Bookings</div>
        <div className="text-3xl font-bold text-foreground flex items-center gap-2">
          12 <TrendingUp className="w-5 h-5 text-success" />
        </div>
      </div>
      <div className="bg-accent/50 rounded-lg p-4">
        <div className="text-sm text-muted-foreground mb-1">Revenue</div>
        <div className="text-3xl font-bold text-foreground">₹45.6K</div>
      </div>
      <div className="bg-accent/50 rounded-lg p-4">
        <div className="text-sm text-muted-foreground mb-1">Occupancy</div>
        <div className="text-3xl font-bold text-foreground">87%</div>
      </div>
      <div className="bg-accent/50 rounded-lg p-4">
        <div className="text-sm text-muted-foreground mb-1">Avg Rate</div>
        <div className="text-3xl font-bold text-foreground">₹3,800</div>
      </div>
    </div>

    {/* Recent Bookings */}
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Recent Bookings</h3>
        <a href="#" className="text-primary text-sm font-medium hover:underline">
          View All
        </a>
      </div>
      <div className="space-y-3">
        {[
          { platform: "MakeMyTrip", room: "Deluxe Room", price: "₹4,500", color: "bg-purple-500" },
          { platform: "Booking.com", room: "Suite", price: "₹6,200", color: "bg-blue-500" },
          { platform: "Airbnb", room: "Villa", price: "₹8,000", color: "bg-red-500" },
          { platform: "Jobi Rooms", room: "Standard", price: "₹3,200", color: "bg-green-500" },
        ].map((booking, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${booking.color}`} />
              <div>
                <div className="font-medium">{booking.platform}</div>
                <div className="text-sm text-muted-foreground">{booking.room}</div>
              </div>
            </div>
            <div className="font-semibold">{booking.price}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Sync Status */}
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
      <Check className="w-5 h-5 text-success" />
      <div>
        <div className="font-medium text-green-900">All platforms synced</div>
        <div className="text-sm text-green-700">Last updated: 2 minutes ago</div>
      </div>
    </div>
  </div>
);

// Calendar View Tab Content
const CalendarView = () => (
  <div className="space-y-4 animate-fade-in">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-lg">Calendar View</h3>
      <div className="flex gap-2">
        <button className="px-4 py-2 text-sm bg-accent rounded-lg">Daily</button>
        <button className="px-4 py-2 text-sm bg-primary text-white rounded-lg">Weekly</button>
        <button className="px-4 py-2 text-sm bg-accent rounded-lg">Monthly</button>
      </div>
    </div>

    <div className="grid grid-cols-7 gap-2">
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
        <div key={day} className="text-center font-semibold text-sm text-muted-foreground py-2">
          {day}
        </div>
      ))}
      {[
        { type: "mmt", room: "Deluxe", price: "₹4,500" },
        { type: "booking", room: "Suite", price: "₹6,200" },
        { type: "available", room: "Available", price: "" },
        { type: "airbnb", room: "Villa", price: "₹8,000" },
        { type: "mmt", room: "Std Rm", price: "₹3,200" },
        { type: "mmt", room: "Deluxe", price: "₹4,500" },
        { type: "available", room: "Available", price: "" },
      ].map((day, idx) => (
        <div
          key={idx}
          className={`p-3 rounded-lg border-2 min-h-[100px] ${
            day.type === "available"
              ? "border-dashed border-gray-300 bg-gray-50"
              : day.type === "mmt"
              ? "border-purple-500 bg-purple-50"
              : day.type === "booking"
              ? "border-blue-500 bg-blue-50"
              : "border-red-500 bg-red-50"
          }`}
        >
          <div className="text-xs font-medium">{day.room}</div>
          {day.price && <div className="text-xs text-muted-foreground mt-1">{day.price}</div>}
        </div>
      ))}
    </div>

    <div className="flex gap-4 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-purple-500" />
        <span>MakeMyTrip</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-blue-500" />
        <span>Booking.com</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <span>Airbnb</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span>Jobi Rooms</span>
      </div>
    </div>
  </div>
);

// Pricing Manager Tab Content
const PricingManager = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-lg">Pricing Manager</h3>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Jan 15-31, 2025"
          className="px-4 py-2 border border-border rounded-lg text-sm"
        />
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm">Apply</button>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-semibold">Room Type</th>
            <th className="text-left py-3 px-4 font-semibold">Base Price</th>
            <th className="text-left py-3 px-4 font-semibold">Weekend Price</th>
            <th className="text-left py-3 px-4 font-semibold">AI Suggestion</th>
          </tr>
        </thead>
        <tbody>
          {[
            { room: "Deluxe Room", base: "₹4,000", weekend: "₹4,800", ai: "₹5,200" },
            { room: "Suite", base: "₹6,000", weekend: "₹7,200", ai: "₹7,800" },
            { room: "Premium Villa", base: "₹8,000", weekend: "₹9,600", ai: "₹10,500" },
          ].map((row, idx) => (
            <tr key={idx} className="border-b border-border hover:bg-accent/30">
              <td className="py-3 px-4 font-medium">{row.room}</td>
              <td className="py-3 px-4">{row.base}</td>
              <td className="py-3 px-4">{row.weekend}</td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center gap-2 text-primary font-semibold">
                  💡 {row.ai}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div>
      <h4 className="font-semibold mb-3">Heat Map (14 days)</h4>
      <div className="flex gap-1">
        {["🟦", "🟦", "🟨", "🟨", "🟧", "🟧", "🟥", "🟥", "🟧", "🟧", "🟨", "🟨", "🟦", "🟦"].map(
          (emoji, idx) => (
            <div key={idx} className="text-2xl">
              {emoji}
            </div>
          )
        )}
      </div>
      <div className="flex justify-between text-xs text-muted-foreground mt-2">
        <span>Low Demand</span>
        <span>Medium</span>
        <span>High</span>
        <span>Peak</span>
      </div>
    </div>
  </div>
);

// Analytics Dashboard Tab Content
const AnalyticsDashboard = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-lg">Analytics</h3>
      <div className="flex gap-2">
        <select className="px-4 py-2 border border-border rounded-lg text-sm">
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>This Year</option>
        </select>
        <button className="px-4 py-2 bg-accent text-foreground rounded-lg text-sm">
          Export CSV
        </button>
      </div>
    </div>

    {/* Revenue Chart Placeholder */}
    <div className="bg-accent/30 rounded-lg p-6">
      <h4 className="font-semibold mb-4">Revenue Trend</h4>
      <div className="h-48 flex items-end justify-between gap-2">
        {[40, 60, 45, 75, 85, 70, 90, 95].map((height, idx) => (
          <div
            key={idx}
            className="flex-1 bg-primary rounded-t"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-muted-foreground mt-2">
        <span>Week 1</span>
        <span>Week 2</span>
        <span>Week 3</span>
        <span>Week 4</span>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-accent/30 rounded-lg p-6">
        <h4 className="font-semibold mb-4">Occupancy Rate</h4>
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg className="transform -rotate-90 w-32 h-32">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-gray-200"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 56}
                strokeDashoffset={2 * Math.PI * 56 * (1 - 0.87)}
                className="text-primary"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">87%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-accent/30 rounded-lg p-6">
        <h4 className="font-semibold mb-4">Top Platforms</h4>
        <div className="space-y-3">
          {[
            { name: "MakeMyTrip", percent: 45, color: "bg-purple-500" },
            { name: "Booking.com", percent: 30, color: "bg-blue-500" },
            { name: "Airbnb", percent: 15, color: "bg-red-500" },
            { name: "Jobi Rooms", percent: 10, color: "bg-green-500" },
          ].map((platform, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm mb-1">
                <span>{platform.name}</span>
                <span className="font-semibold">{platform.percent}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${platform.color}`}
                  style={{ width: `${platform.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DashboardPreview;
