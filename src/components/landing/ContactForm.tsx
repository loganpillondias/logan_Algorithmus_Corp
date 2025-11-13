import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    businessType: "",
    challenge: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.businessType) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    setIsLoading(true);
    
    // Simulação de envio - aqui você integraria com N8N
    try {
      // TODO: Integrar com webhook N8N aqui
      console.log("Dados do formulário:", formData);
      
      // Simulação de delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Solicitação enviada com sucesso! A E.A. System entrará em contato em breve.");
      
      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        businessType: "",
        challenge: ""
      });
    } catch (error) {
      toast.error("Erro ao enviar. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Agende sua <span className="text-gradient">Consultoria Gratuita</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Receba uma análise técnica personalizada de como a E.A. System pode transformar sua operação empresarial.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card border-border shadow-[0_0_30px_hsl(190_100%_50%_/_0.1)]">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    placeholder="(00) 00000-0000"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType">Tipo de negócio *</Label>
                  <Select
                    value={formData.businessType}
                    onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                    required
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinica">Clínica/Consultório</SelectItem>
                      <SelectItem value="barbearia">Barbearia/Salão</SelectItem>
                      <SelectItem value="estudio">Estúdio (tatuagem, fotografia, etc)</SelectItem>
                      <SelectItem value="loja">Loja/Comércio</SelectItem>
                      <SelectItem value="autonomo">Profissional Autônomo</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge">Qual seu principal desafio?</Label>
                <Textarea
                  id="challenge"
                  placeholder="Descreva brevemente o que você gostaria de automatizar ou melhorar no seu negócio..."
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="bg-background border-border min-h-32"
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Solicitar Consultoria Gratuita"}
                <Send className="ml-2 w-4 h-4" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Ao enviar este formulário, você receberá contato da E.A. System para agendar sua consultoria técnica.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
