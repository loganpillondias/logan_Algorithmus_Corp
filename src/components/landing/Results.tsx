import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    metric: "70%",
    title: "Redução de Faltas",
    description: "Clínica estética reduziu 70% das faltas com automação de lembretes via WhatsApp.",
    industry: "Saúde & Estética"
  },
  {
    icon: Users,
    metric: "+35%",
    title: "Aumento de Clientes",
    description: "Barbearia aumentou 35% no volume de clientes usando sistema de agendamento automático.",
    industry: "Serviços"
  },
  {
    icon: Clock,
    metric: "10h/sem",
    title: "Economia de Tempo",
    description: "Estúdio de tatuagem economizou 10h semanais com automação de atendimento.",
    industry: "Arte & Criatividade"
  }
];

export const Results = () => {
  return (
    <section id="resultados" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resultados que <span className="text-gradient">Falam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Casos reais de transformação em negócios locais que automatizaram processos e multiplicaram resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(190_100%_50%_/_0.15)] relative overflow-hidden group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <result.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{result.metric}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{result.title}</h3>
                <p className="text-muted-foreground mb-4">{result.description}</p>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-xs font-medium text-primary">{result.industry}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
