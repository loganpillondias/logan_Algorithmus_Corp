import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Ricardo Santos",
    role: "Clínica Médica",
    text: "A automação do Logan reduziu drasticamente nossas faltas de pacientes. O sistema de lembretes via WhatsApp é perfeito!",
    rating: 5
  },
  {
    name: "Marina Costa",
    role: "Studio de Beleza",
    text: "Economizo mais de 10 horas por semana com a automação do agendamento. Posso focar no que realmente importa: minhas clientes.",
    rating: 5
  },
  {
    name: "Paulo Mendes",
    role: "Barbearia Premium",
    text: "Sistema profissional, entrega rápida e suporte excepcional. Meu negócio cresceu 35% após a implementação.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que dizem <span className="text-gradient">meus clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de empresários que transformaram seus negócios com automação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(190_100%_50%_/_0.15)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
