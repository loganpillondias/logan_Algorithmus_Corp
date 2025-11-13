import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(190_100%_50%_/_0.1),transparent_50%)]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(222_35%_20%_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(222_35%_20%_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Elohim Algorithmus System</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Automatize. </span>
            <span className="text-foreground">Escale. </span>
            <span className="text-gradient">Simplifique.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformamos empresas em operações inteligentes que economizam tempo, eliminam trabalho manual e multiplicam resultados — com automação avançada, IA e tecnologia sob medida.
          </p>
          
          <p className="text-lg text-primary font-semibold mb-8">
            Inteligência Que Move Negócios
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={() => scrollToSection("contato")}
              className="text-lg px-8 py-6 h-auto"
            >
              Agendar Diagnóstico Gratuito
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("solucoes")}
              className="text-lg px-8 py-6 h-auto"
            >
              Ver Soluções
            </Button>
          </div>

          {/* Stats or Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Sistemas Operando</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">70%+</div>
              <div className="text-muted-foreground">Redução de Trabalho Manual</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Personalizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
