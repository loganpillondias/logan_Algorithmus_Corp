import { Card, CardContent } from "@/components/ui/card";
import { Workflow, Code, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Workflow,
    title: "Automação de Processos (N8N + IA)",
    description: "Fluxos inteligentes para WhatsApp, Google Sheets, CRMs e APIs personalizadas.",
    features: [
      "Integração com WhatsApp Business",
      "Automação de atendimento",
      "Sincronização com CRM",
      "Relatórios automáticos"
    ]
  },
  {
    icon: Code,
    title: "Desenvolvimento Web Profissional",
    description: "Landing pages, dashboards e sistemas personalizados com performance e design moderno.",
    features: [
      "Sites responsivos e rápidos",
      "Dashboards interativos",
      "Sistemas sob medida",
      "SEO otimizado"
    ]
  },
  {
    icon: Shuffle,
    title: "Integrações Personalizadas",
    description: "Conecte suas ferramentas e elimine trabalho manual — de agendamentos a relatórios.",
    features: [
      "Integração entre sistemas",
      "APIs personalizadas",
      "Sincronização de dados",
      "Automação de backups"
    ]
  }
];

export const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solucoes" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Soluções práticas que transformam <span className="text-gradient">o caos em eficiência</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especializado em conectar sistemas, integrar ferramentas e automatizar tarefas repetitivas. 
            Eu desenvolvo soluções que trabalham por você — 24 horas por dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(190_100%_50%_/_0.15)] group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Descubra como posso otimizar o seu negócio
          </Button>
        </div>
      </div>
    </section>
  );
};
