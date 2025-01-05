import { Card } from "@/components/ui/card";

interface SolutionCardProps {
  title: string;
  description: string;
  accentTitle?: string;
}

function SolutionCard({ title, description, accentTitle }: SolutionCardProps) {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800 p-8">
      {accentTitle && (
        <span className="text-yellow-500 text-sm font-medium mb-4 block">
          {accentTitle}
        </span>
      )}
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </Card>
  );
}

export function SolutionSection() {
  return (
    <div className="py-32 px-4">
      <div className="text-center mb-20">
        <span className="text-yellow-500 text-sm uppercase tracking-wider">
          SOLUTION
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Empower Your Business with AI Workflows
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-lg">
          Generic AI tools won't suffice. Our platform is purpose-built to provide
          exceptional AI-driven solutions for your unique business needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <SolutionCard
          accentTitle="Customized AI Integrations"
          title="Seamless Integration"
          description="Implement bespoke AI solutions that seamlessly integrate into your existing workflows, enhancing efficiency and driving growth."
        />
        <SolutionCard
          accentTitle="Expert Implementation"
          title="End-to-End Management"
          description="Benefit from end-to-end management—from ideation to deployment—ensuring solutions are tailored to your specific operational requirements."
        />
        <SolutionCard
          accentTitle="Comprehensive Support"
          title="Ongoing Optimization"
          description="Receive ongoing support and optimization to adapt to your evolving business landscape."
        />
      </div>
    </div>
  );
}