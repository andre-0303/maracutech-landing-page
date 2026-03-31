import Image from "next/image";
import { CheckCircle2, MapPin, Wallet } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-12 lg:py-24 px-6 lg:px-10 md:px-10 bg-[#F9FBF7]">
      <div className="container mx-auto space-y-10 lg:space-y-16">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8">
          <div className="space-y-3 lg:space-y-4">
            <p className="text-primary font-bold text-xs lg:text-sm tracking-widest uppercase">
              Soluções Completas
            </p>
            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-medium text-[#181D17] leading-tight max-w-2xl">
              Especialidade em cada fase da colheita
            </h2>
          </div>
          <p className="text-neutral font-medium max-w-sm text-left lg:text-right lg:pb-2 text-sm lg:text-base">
            Ferramentas desenhadas para a realidade climática e econômica do
            Brasil.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Gestão de Campo */}
          <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 shadow-sm border border-neutral/5 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500">
            <div className="space-y-6 lg:space-y-8">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-[#E8F5E9] text-primary rounded-xl lg:rounded-2xl flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-xl lg:text-3xl font-semibold text-[#181D17]">
                  Gestão de Campo
                </h3>
                <ul className="space-y-3 lg:space-y-4">
                  {[
                    "Monitoramento em tempo real",
                    "Talhões geolocalizados",
                    "Rastreamento de fases de crescimento",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 lg:gap-3 text-neutral font-semibold text-sm lg:text-base"
                    >
                      <CheckCircle2 size={18} className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 lg:mt-12 relative h-32 lg:h-48 rounded-2xl lg:rounded-3xl overflow-hidden shadow-inner">
              <Image
                src="/heatmap.png"
                alt="Mapa de Calor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90"
              />
            </div>
          </div>

          {/* Card 2: Inteligência Financeira */}
          <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 shadow-sm border border-neutral/5 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500">
            <div className="space-y-6 lg:space-y-8">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-[#FFF9C4] text-[#F9A825] rounded-xl lg:rounded-2xl flex items-center justify-center">
                <Wallet size={24} />
              </div>
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-xl lg:text-3xl font-semibold text-[#181D17]">
                  Inteligência Financeira & Manejo
                </h3>
                <ul className="space-y-3 lg:space-y-4">
                  {[
                    "Controle rigoroso de custos",
                    "Alertas de carência de defensivos",
                    "Fluxo de caixa projetado por safra",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 lg:gap-3 text-neutral font-semibold text-sm lg:text-base"
                    >
                      <CheckCircle2 size={18} className="text-[#F9A825]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 lg:mt-12 relative h-32 lg:h-48 rounded-2xl lg:rounded-3xl overflow-hidden shadow-inner">
              <Image
                src="/dashboard.png"
                alt="Dashboard Financeiro"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
