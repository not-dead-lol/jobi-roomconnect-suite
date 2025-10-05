import { Building2, Calendar, Link2, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TrustBar = () => {
  return (
    <section className="py-12 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={<Building2 className="w-8 h-8 text-primary" />}
            number="2,500+"
            label="Active Properties"
          />
          <StatCard
            icon={<Calendar className="w-8 h-8 text-success" />}
            number="150,000+"
            label="Bookings Synced Monthly"
          />
          <StatCard
            icon={<Link2 className="w-8 h-8 text-info" />}
            number="15+"
            label="Integrated Platforms"
          />
          <StatCard
            icon={<Star className="w-8 h-8 text-warning" />}
            number="4.9/5.0"
            label="Average Rating"
            subLabel="Based on 300+ reviews"
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon,
  number,
  label,
  subLabel,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
  subLabel?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const target = parseInt(number.replace(/[^0-9]/g, ""));
    const duration = 2000;
    const increment = target / (duration / 16);

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-background hover:shadow-lg transition-shadow"
    >
      <div className="animate-scale-in">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold text-foreground">
        {isVisible ? number : "0"}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
      {subLabel && (
        <div className="text-xs text-muted-foreground">{subLabel}</div>
      )}
    </div>
  );
};

export default TrustBar;
