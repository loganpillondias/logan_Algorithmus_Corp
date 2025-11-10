import { Button } from "@/components/ui/button";
import { Search, FileText, Code, TestTube, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico gratuito",
    description: "Conversa inicial para entender seus desafios e identificar oportunidades de automação."
  },
  {
    number: "02",
    icon: FileText,
    title: "Planejamento da solução",
    description: "Desenho do sistema ideal para seu negócio com escopo, prazo e investimento definidos."
  },
  {
    number: "03",
    icon: Code,
    title: "Desenvolvimento personalizado",
    description: "Criação da automação ou sistema sob medida usando as melhores tecnologias."
  },
  {
    number: "04",
    icon: TestTube,
    title: "Teste e entrega",
    description: "Validação completa do sistema em ambiente real antes da implementação final."
  },
  {
    number: "05",
    icon: Headphones,
    title: "Suporte e manutenção mensal",
    description: "Acompanhamento contínuo, ajustes e melhorias para garantir máxima eficiência."
  }
];

export const HowItWorks = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Do primeiro contato à <span className="text-gradient">automação total</span> — tudo em 7 dias.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo simples, transparente e focado em resultados rápidos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon Circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4 hover:bg-primary/10 transition-colors group">
                      <step.icon className="w-6 h-6 text-primary" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex gap-4 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="relative w-14 h-14 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button variant="cta" size="lg" onClick={scrollToContact}>
            Agende seu diagnóstico gratuito agora
          </Button>
        </div>
      </div>
    </section>
  );
};
