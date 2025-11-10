import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-primary/20 border-4 border-primary mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">LP</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Desenvolvedor & Consultor</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Sobre <span className="text-gradient">mim</span>
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Sou o <span className="text-foreground font-semibold">Logan P. Dias</span>, desenvolvedor e consultor de automação.
                    </p>
                    <p>
                      Transformo negócios em sistemas inteligentes que operam no piloto automático. 
                      Com anos de experiência em desenvolvimento web e automação de processos, 
                      meu foco está em criar soluções que realmente fazem a diferença no dia a dia dos empresários.
                    </p>
                    <p>
                      Trabalho com foco em <span className="text-foreground font-semibold">eficiência</span>, 
                      <span className="text-foreground font-semibold"> estética</span> e 
                      <span className="text-foreground font-semibold"> resultados reais</span>.
                    </p>
                    <p className="pt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                        N8N Expert
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                        React/TypeScript
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                        IA & Automação
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                        APIs & Integrações
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
