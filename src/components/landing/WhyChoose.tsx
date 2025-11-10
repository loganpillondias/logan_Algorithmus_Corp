import { Card, CardContent } from "@/components/ui/card";
import { Zap, Bot, Briefcase, Shield } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Soluções rápidas e personalizadas",
    description: "Desenvolvimento ágil com foco em entregar valor rapidamente. Cada solução é desenhada especificamente para seu negócio."
  },
  {
    icon: Bot,
    title: "Automação com IA e N8N",
    description: "Uso das tecnologias mais modernas de automação e inteligência artificial para criar sistemas verdadeiramente inteligentes."
  },
  {
    icon: Briefcase,
    title: "Experiência prática em negócios locais",
    description: "Especializado em entender e resolver os desafios reais de clínicas, estúdios, barbearias e profissionais autônomos."
  },
  {
    icon: Shield,
    title: "Entrega segura e suporte dedicado",
    description: "Código limpo, sistemas confiáveis e suporte contínuo para garantir que tudo funcione perfeitamente sempre."
  }
];

export const WhyChoose = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por que escolher <span className="text-gradient">minhas soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compromisso com qualidade, inovação e resultados reais para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(190_100%_50%_/_0.15)] group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
