import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    // TODO: Adicionar número do WhatsApp real
    const message = encodeURIComponent("Olá! Gostaria de conhecer as soluções E.A. System para meu negócio.");
    window.open(`https://wa.me/5500000000000?text=${message}`, "_blank");
  };

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Pronto para transformar seu negócio em uma{" "}
            <span className="text-gradient">máquina automática?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-up">
            Agende seu diagnóstico gratuito e descubra como posso automatizar seus processos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
            <Button 
              variant="cta" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-6 h-auto"
            >
              <MessageCircle className="mr-2" />
              Agendar agora no WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 h-auto"
            >
              Preencher formulário
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Resposta em</p>
                <p className="text-2xl font-bold text-primary">24 horas</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Diagnóstico</p>
                <p className="text-2xl font-bold text-primary">100% Gratuito</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Sem</p>
                <p className="text-2xl font-bold text-primary">Compromisso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
