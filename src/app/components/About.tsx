import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-10 lg:px-20 bg-surface">
      <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Lado Esquerdo: Texto & Stats */}
        <div className="space-y-12 order-2 lg:order-1">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-semibold text-[#181D17] leading-tight">
              Unindo Tradição e <br /> Tecnologia
            </h2>
            <div className="space-y-4 text-lg text-neutral/80 leading-relaxed max-w-xl">
              <p>
                A MaracuTech nasceu para unir a tradição do campo com a precisão do código. 
                Ajudamos produtores a monitorar talhões, controlar manejos e maximizar lucros 
                através de uma plataforma intuitiva que fala a língua de quem vive da terra.
              </p>
              <p>
                Nossa missão é colocar a inteligência artificial a serviço da agricultura 
                familiar e comercial de larga escala.
              </p>
            </div>
          </div>

          {/* Métrica de Impacto */}
          <div className="flex gap-16">
            <div className="space-y-1">
              <p className="text-5xl font-bold text-primary">0%</p>
              <p className="text-sm font-semibold text-neutral uppercase tracking-wider">Desperdício de Insumos</p>
            </div>
            <div className="space-y-1">
              <p className="text-5xl font-bold text-primary">24/7</p>
              <p className="text-sm font-semibold text-neutral uppercase tracking-wider">Monitoramento Real</p>
            </div>
          </div>
        </div>

        {/* Lado Direito: Mosaico de Imagens (Layout 2 Colunas - Proporções Reais) */}
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-[800px]">
          {/* Coluna 1 */}
          <div className="grid grid-rows-6 gap-4">
            {/* Imagem Plantação (Topo esquerda - MAIOR/Vertical) */}
            <div className="row-span-4 relative rounded-3xl overflow-hidden shadow-sm">
              <Image 
                src="/plantation.png" 
                alt="Plantação" 
                fill
                className="object-cover"
              />
            </div>
            {/* Card Amarelo (Baixo esquerda - MENOR/Quadrado) */}
            <div className="row-span-2 bg-[#FDD835] rounded-3xl p-8 flex items-center justify-center text-center shadow-sm">
              <p className="text-[#181D17] font-bold text-lg lg:text-xl leading-tight font-outfit">
                "A tecnologia é a semente do futuro."
              </p>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="grid grid-rows-6 gap-4">
            {/* Imagem Mão (Topo direita - MENOR/Quadrada) */}
            <div className="row-span-2 relative rounded-3xl overflow-hidden shadow-sm">
              <Image 
                src="/farmer-hands.png" 
                alt="Mãos do produtor" 
                fill
                className="object-cover"
              />
            </div>
            {/* Imagem Irrigação (Baixo direita - MAIOR/Vertical) */}
            <div className="row-span-4 relative rounded-3xl overflow-hidden shadow-sm">
              <Image 
                src="/irrigation.png" 
                alt="Irrigação" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
