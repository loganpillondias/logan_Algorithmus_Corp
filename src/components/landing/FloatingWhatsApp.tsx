import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingWhatsApp = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Oi Logan, gostaria de agendar com você um diagnóstico gratuíto para meu negócio");
    window.open(`https://wa.me/5549999539181?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform animate-glow"
      variant="cta"
      size="icon"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};
