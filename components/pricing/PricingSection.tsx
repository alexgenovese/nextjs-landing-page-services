import { Zap, Shield, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingFeature {
  text: string;
}

interface PricingTierProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  features: string[];
  description: string;
  isPopular?: boolean;
}

function PricingTier({ icon, title, price, features, description, isPopular }: PricingTierProps) {
  return (
    <Card className={`p-8 ${isPopular ? 'border-yellow-500 relative' : 'border-gray-800'}`}>
      {isPopular && (
        <span className="absolute -top-3 right-8 bg-yellow-500 text-black text-sm px-3 py-1 rounded-full">
          Popular
        </span>
      )}
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl text-center font-semibold mb-6">{title}</h3>
      <div className="text-center mb-8">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-400 ml-1">/month</span>
        <div className="text-sm text-gray-400 mt-1">billed monthly</div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="outline" className="w-full">
        Subscribe
      </Button>
      <p className="text-sm text-gray-500 text-center mt-4">{description}</p>
    </Card>
  );
}

export function PricingSection() {
  return (
    <section className="py-32 px-4">
      <div className="text-center mb-20">
        <span className="text-yellow-500 text-sm uppercase tracking-wider">
          PRICING
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-16">
          Choose the plan that's right for you
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          icon={<Zap className="w-8 h-8 text-yellow-500" />}
          title="BASIC TIER"
          price="$5,000"
          features={[
            "1 AI Development Project at a time",
            "2 Automation workflows per month",
            "Monthly strategy session",
            "Basic monitoring & maintenance",
            "Standard support (48hr response)",
            "Development in standard queue"
          ]}
          description="Perfect for individuals and small projects"
        />
        <PricingTier
          icon={<Shield className="w-8 h-8 text-yellow-500" />}
          title="PROFESSIONAL TIER"
          price="$10,000"
          features={[
            "2 concurrent AI Development Projects",
            "5 Automation workflows per month",
            "Bi-weekly strategy sessions",
            "Proactive monitoring & optimization",
            "Priority support (24hr response)",
            "Development in priority queue",
            "Quarterly ROI/Performance review",
            "Custom model fine-tuning"
          ]}
          description="Ideal for growing businesses and teams"
          isPopular={true}
        />
        <PricingTier
          icon={<Crown className="w-8 h-8 text-yellow-500" />}
          title="CUSTOM TIER"
          price="Custom Price"
          features={[
            "Deep-dive assessment of your business operations and technology landscape",
            "Fully bespoke AI development strategy tailored to your growth objectives",
            "Exclusive access to a dedicated team of AI strategists, available 24/7",
            "Integration of state-of-the-art AI solutions to revolutionize your business"
          ]}
          description="Tailored for enterprises with unique and complex needs"
        />
      </div>

      <div className="text-center mt-12 text-gray-400">
        Not sure which package is right for you? Let's discuss your needs and find the perfect solution.
      </div>
      <div className="text-center mt-6">
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
          Schedule Your Consultation
        </Button>
      </div>
    </section>
  );
}