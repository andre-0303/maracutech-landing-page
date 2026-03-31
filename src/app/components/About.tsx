import Image from "next/image";

export default function About() {
  return (
    <section className="py-12 lg:py-24 px-6 lg:px-10 md:px-10 bg-surface">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Lado Esquerdo: Texto & Stats */}
        <div className="space-y-8 lg:space-12 order-2 lg:order-1">
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-medium text-[#181D17] leading-tight lg:leading-16">
              Unindo Tradição e <br /> Tecnologia
            </h2>
            <div className="space-y-3 lg:space-y-4 text-sm lg:text-lg text-neutral/80 leading-relaxed max-w-xl">
              <p className="font-medium">
                A MaracuTech nasceu para unir a tradição do campo com a precisão
                do código.
              </p>
              <p className="font-normal">
                Ajudamos produtores a monitorar talhões, controlar manejos e
                maximizar lucros através de uma plataforma intuitiva que fala a
                língua de quem vive da terra. Nossa missão é colocar a
                inteligência artificial a serviço da agricultura familiar e
                comercial de larga escala.
              </p>
            </div>
          </div>

          {/* Métrica de Impacto */}
          <div className="flex gap-8 lg:gap-16">
            <div className="space-y-1">
              <p className="text-2xl lg:text-4xl font-bold text-primary">0%</p>
              <p className="text-xs lg:text-sm font-medium text-neutral tracking-wider">
                Desperdício de Insumos
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl lg:text-4xl font-bold text-primary">24/7</p>
              <p className="text-xs lg:text-sm font-medium text-neutral uppercase tracking-wider">
                Monitoramento Real
              </p>
            </div>
          </div>
        </div>

        {/* Lado Direito: Mosaico de Imagens (Layout 2 Colunas - Proporções Reais) */}
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 lg:gap-4 h-[400px] lg:h-[800px]">
          {/* Coluna 1 */}
          <div className="grid grid-rows-6 gap-3 lg:gap-4">
            {/* Imagem Plantação (Topo esquerda - MAIOR/Vertical) */}
            <div className="row-span-4 relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm">
              <Image
                src="/plantation.png"
                alt="Plantação"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Card Amarelo (Baixo esquerda - MENOR/Quadrado) */}
            <div className="row-span-2 bg-[#FDD835] rounded-2xl lg:rounded-3xl p-4 lg:p-8 flex items-center justify-center text-center shadow-sm">
              <p className="text-[#181D17] font-bold text-sm lg:text-lg leading-tight font-poppins">
                "A tecnologia é a semente do futuro."
              </p>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="grid grid-rows-6 gap-3 lg:gap-4">
            {/* Imagem Mão (Topo direita - MENOR/Quadrada) */}
            <div className="row-span-2 relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm">
              <Image
                src="/farmer-hands.png"
                alt="Mãos do produtor"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            {/* Imagem Irrigação (Baixo direita - MAIOR/Vertical) */}
            <div className="row-span-4 relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm">
              <Image
                src="/irrigation.png"
                alt="Irrigação"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
