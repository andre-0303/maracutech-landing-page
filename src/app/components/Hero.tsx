import Image from "next/image";
import { Rocket, ArrowUpRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <main className="flex-1 flex items-center px-10 py-20 lg:px-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Lado Esquerdo: Conteúdo */}
        <div className="space-y-8 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full font-semibold text-sm tracking-wide uppercase shadow-sm">
            <Rocket size={16} />
            <span>Agrotech Precision 2024</span>
          </div>

          {/* Título */}
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-semibold leading-tight text-[#181D17]">
              A Revolução <span className="text-[#388E3C]">Digital</span> no
              Cultivo do Maracujá
            </h1>
            <p className="text-xl text-neutral font-semibold leading-relaxed max-w-lg">
              Gestão inteligente, colheitas precisas. Transforme sua plantação
              com tecnologia de ponta desenvolvida para o produtor brasileiro.
            </p>
          </div>

          {/* Ações */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-8 py-4 cursor-pointer bg-primary text-white rounded-xl font-bold text-lg hover:bg-[#1B5E20] transition-all hover:scale-105 shadow-lg shadow-primary/20 group">
              Quero Modernizar Minha Fazenda
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>

            <button className="flex items-center gap-2 cursor-pointer px-8 py-4 bg-white/10 backdrop-blur-sm border border-neutral/10 text-primary rounded-xl font-bold text-lg hover:bg-white transition-all hover:shadow-md">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm">
                <Play size={14} fill="currentColor" />
              </div>
              Ver Demonstração
            </button>
          </div>
        </div>

        {/* Lado Direito: Imagem e Stats */}
        <div className="relative group">
          {/* Moldura da Imagem */}
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 bg-white">
            <Image
              src="/hero-passion.png"
              alt="Tecnologia no Cultivo do Maracujá"
              width={800}
              height={1000}
              className="w-full h-auto object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
            />
          </div>

          {/* Card Flutuante de Produtividade */}
          <div className="absolute -right-8 bottom-20 z-20 bg-yellow-500 p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/50 -rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="w-14 h-14 bg-black/10 rounded-xl flex items-center justify-center">
              <Image src="/image.png" alt="Icon" width={30} height={30} className="invert" />
            </div>
            <div className="text-[#1A1A1A]">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">
                Produtividade
              </p>
              <p className="text-2xl font-black">+34% este ano</p>
            </div>
          </div>

          {/* Elementos Decorativos de fundo */}
          <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-accent-yellow/20 rounded-full blur-3xl opacity-50" />
        </div>
      </div>
    </main>
  );
}
