import { Card, CardContent } from "@/components/ui/card";
import eaLogo from "@/assets/ea-logo.png";

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
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-background to-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <img 
                      src={eaLogo} 
                      alt="E.A. System Logo - Elohim Algorithmus" 
                      className="w-64 h-auto mx-auto mb-4"
                    />
                    <p className="text-sm text-muted-foreground">Technology & Automation</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Sobre a <span className="text-gradient">E.A. System</span>
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      A <span className="text-foreground font-semibold">E.A. System (Elohim Algorithmus System)</span> é uma empresa de tecnologia especializada em automação empresarial e inteligência artificial.
                    </p>
                    <p>
                      Transformamos negócios em operações inteligentes que funcionam no piloto automático. 
                      Com expertise consolidada em desenvolvimento web, automação de processos e integração de sistemas, 
                      nosso foco está em criar soluções tecnológicas que geram impacto real nos resultados das empresas.
                    </p>
                    <p>
                      Trabalhamos com compromisso em <span className="text-foreground font-semibold">eficiência operacional</span>, 
                      <span className="text-foreground font-semibold"> excelência técnica</span> e 
                      <span className="text-foreground font-semibold"> resultados mensuráveis</span>.
                    </p>
                    <p className="pt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                        N8N Enterprise
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                        React/TypeScript
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                        IA & Machine Learning
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                        APIs & Cloud Integration
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
