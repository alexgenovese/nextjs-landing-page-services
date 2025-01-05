import { Search, Code, Lock, RefreshCw } from "lucide-react";

interface WorkflowStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function WorkflowStep({ icon, title, description }: WorkflowStepProps) {
  return (
    <div className="flex items-start gap-6">
      <div className="rounded-full bg-[rgba(255,193,7,0.1)] w-12 h-12 flex items-center justify-center flex-shrink-0">
        <div className="text-yellow-500">{icon}</div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function WorkflowSection() {
  return (
    <section className="py-32 px-4 bg-black">
      <div className="text-center mb-20">
        <span className="text-yellow-500 text-sm uppercase tracking-wider">
          HOW IT WORKS
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-16">
          Where AI innovation meets effortless solutions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        <WorkflowStep
          icon={<Search className="w-6 h-6" />}
          title="Consultation"
          description="Identify automation opportunities within your operations through expert consultation"
        />
        <WorkflowStep
          icon={<Code className="w-6 h-6" />}
          title="Custom Development"
          description="Design and develop AI solutions tailored to your business challenges"
        />
        <WorkflowStep
          icon={<Lock className="w-6 h-6" />}
          title="Seamless Integration"
          description="Implement solutions with minimal disruption and maximum impact"
        />
        <WorkflowStep
          icon={<RefreshCw className="w-6 h-6" />}
          title="Continuous Optimization"
          description="Monitor performance and refine systems to ensure sustained efficiency gains"
        />
      </div>
    </section>
  );
}