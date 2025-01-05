import { Zap, Clock, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="text-center">
      <div className="rounded-full bg-[rgba(255,193,7,0.1)] w-16 h-16 flex items-center justify-center mx-auto mb-6">
        <div className="text-yellow-500">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
        {description}
      </p>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="py-32 px-4">
      <div className="text-center mb-20">
        <span className="text-yellow-500 text-sm uppercase tracking-wider">
          SERVICES
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-16">
          User Flows and Navigational Structures
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <ServiceCard
          icon={<Zap className="w-8 h-8" />}
          title="AI-Powered Process Automation"
          description="Automate repetitive tasks to boost efficiency and allow your team to focus on strategic initiatives"
        />
        <ServiceCard
          icon={<Clock className="w-8 h-8" />}
          title="Data-Driven Decision Support"
          description="Leverage AI to analyze complex datasets, providing actionable insights for informed business decisions"
        />
        <ServiceCard
          icon={<Cpu className="w-8 h-8" />}
          title="Custom AI Solution Development"
          description="Receive AI tools designed specifically to address your unique business challenges and objectives"
        />
      </div>
    </section>
  );
}