import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gradient">Logan P. Dias</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("solucoes")} className="text-foreground/80 hover:text-primary transition-colors">
              Soluções
            </button>
            <button onClick={() => scrollToSection("como-funciona")} className="text-foreground/80 hover:text-primary transition-colors">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection("resultados")} className="text-foreground/80 hover:text-primary transition-colors">
              Resultados
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground/80 hover:text-primary transition-colors">
              Contato
            </button>
            <Button variant="hero" onClick={() => scrollToSection("contato")}>
              Agendar Diagnóstico Gratuito
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button onClick={() => scrollToSection("solucoes")} className="text-foreground/80 hover:text-primary transition-colors text-left">
              Soluções
            </button>
            <button onClick={() => scrollToSection("como-funciona")} className="text-foreground/80 hover:text-primary transition-colors text-left">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection("resultados")} className="text-foreground/80 hover:text-primary transition-colors text-left">
              Resultados
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground/80 hover:text-primary transition-colors text-left">
              Contato
            </button>
            <Button variant="hero" onClick={() => scrollToSection("contato")} className="w-full">
              Agendar Diagnóstico Gratuito
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
