import { Settings, DollarSign, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ProblemCard({ icon, title, description }: ProblemCardProps) {
  return (
    <Card className="bg-transparent border-none">
      <div className="rounded-full bg-[rgba(255,193,7,0.1)] w-12 h-12 flex items-center justify-center mb-6">
        <div className="text-yellow-500">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
}

export function ProblemSection() {
  return (
    <div className="mt-20">
      <div className="text-center mb-16">
        <span className="text-yellow-500 text-sm uppercase tracking-wider">PROBLEM</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Manually entering your data is a hassle.
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ProblemCard
          icon={<Settings className="w-6 h-6" />}
          title="Manual Processes Limiting Efficiency"
          description="Are time-consuming manual tasks hindering your productivity?"
        />
        <ProblemCard
          icon={<DollarSign className="w-6 h-6" />}
          title="Escalating Operational Expenses"
          description="Facing rising operational costs that impact your profitability?"
        />
        <ProblemCard
          icon={<Cpu className="w-6 h-6" />}
          title="Challenges in AI Integration"
          description="Struggling to find AI solutions that align with your unique business needs?"
        />
      </div>
    </div>
  );
}