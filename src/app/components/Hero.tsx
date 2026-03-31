import Image from "next/image";
import { Rocket, ArrowUpRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <main className="flex-1 flex items-center px-6 md:px-10 py-12 lg:py-20 lg:px-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Lado Esquerdo: Conteúdo */}
        <div className="space-y-6 lg:space-y-8 max-w-2xl order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary text-white rounded-full font-semibold text-xs md:text-sm tracking-wide uppercase shadow-sm">
            <Rocket size={14} />
            <span>Agrotech Precision 2024</span>
          </div>

          {/* Título */}
          <div className="space-y-3 lg:space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-mixed leading-tight text-[#181D17]">
              A Revolução <span className="text-[#388E3C]">Digital</span> no
              Cultivo do Maracujá
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-neutral font-semibold leading-relaxed max-w-lg">
              Gestão inteligente, colheitas precisas. Transforme sua plantação
              com tecnologia de ponta desenvolvida para o produtor brasileiro.
            </p>
          </div>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
            <button className="flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 cursor-pointer bg-primary text-white rounded-xl font-bold text-base lg:text-lg hover:bg-[#1B5E20] transition-all hover:scale-105 shadow-lg shadow-primary/20 group">
              Quero Modernizar Minha Fazenda
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>

            <button className="flex items-center justify-center gap-2 cursor-pointer px-6 lg:px-8 py-3 lg:py-4 bg-white/10 backdrop-blur-sm border border-neutral/10 text-primary rounded-xl font-bold text-base lg:text-lg hover:bg-white transition-all hover:shadow-md">
              <div className="w-7 lg:w-8 h-7 lg:h-8 flex items-center justify-center bg-white rounded-full shadow-sm">
                <Play size={12} fill="currentColor" />
              </div>
              Ver Demonstração
            </button>
          </div>
        </div>

        {/* Lado Direito: Imagem e Stats */}
        <div className="relative group order-1 lg:order-2">
          {/* Moldura da Imagem */}
          <div className="relative z-10 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border-[8px] lg:border-[12px] border-white shadow-2xl rotate-2 lg:group-hover:rotate-0 transition-transform duration-500 bg-white">
            <Image
              src="/hero-passion.png"
              alt="Tecnologia no Cultivo do Maracujá"
              width={800}
              height={1000}
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
            />
          </div>

          {/* Card Flutuante de Produtividade */}
          <div className="absolute -right-2 md:-right-4 lg:-right-8 bottom-10 lg:bottom-20 z-20 bg-yellow-500 p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-2xl flex items-center gap-3 lg:gap-4 border border-white/50 -rotate-3 lg:hover:rotate-0 transition-transform duration-300">
            <div className="w-10 lg:w-14 h-10 lg:h-14 bg-black/10 rounded-lg lg:rounded-xl flex items-center justify-center">
              <Image
                src="/image.png"
                alt="Icon"
                width={24}
                height={24}
                className="invert"
              />
            </div>
            <div className="text-[#1A1A1A]">
              <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest opacity-60">
                Produtividade
              </p>
              <p className="text-lg lg:text-2xl font-black">+34% este ano</p>
            </div>
          </div>

          {/* Elementos Decorativos de fundo */}
          <div className="absolute -z-10 -top-10 -right-10 w-48 lg:w-64 h-48 lg:h-64 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute -z-10 -bottom-10 -left-10 w-48 lg:w-64 h-48 lg:h-64 bg-accent-yellow/20 rounded-full blur-3xl opacity-50" />
        </div>
      </div>
    </main>
  );
}
