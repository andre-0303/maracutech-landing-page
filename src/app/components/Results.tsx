import { Archive, ShieldCheck, Globe } from "lucide-react";

export default function Results() {
  return (
    <>
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-gray-100">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-4xl lg:text-5xl font-medium text-[#181D17] leading-tight max-w-2xl text-center">
            Resultados que Florescem
          </h2>
          <p className="text-neutral font-normal max-w-2xl text-center mt-3 lg:pb-2">
            Dados reais de produtores que migraram para a MaracuTech Harvest e
            transformaram sua rentabilidade.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto mt-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="bg-white rounded-4xl p-8 lg:p-10 flex flex-col justify-center min-h-[180px] md:col-span-12 lg:col-span-6 shadow-sm border border-black/5">
              <div className="flex items-center gap-4 text-[#181D17]">
                <Archive className="w-12 h-12 text-[#2B4B29]" strokeWidth={2} />
                <span
                  className="text-6xl font-black tracking-tight"
                  style={{ fontWeight: 900 }}
                >
                  128t
                </span>
              </div>
              <p className="text-[#515A4F] font-bold text-[13px] tracking-[0.2em] mt-5 uppercase">
                Monitoradas na última safra
              </p>
            </div>

            <div className="bg-[#FBE372] rounded-4xl p-8 lg:p-10 flex flex-col justify-center min-h-[180px] md:col-span-6 lg:col-span-3 shadow-sm">
              <div className="flex items-center gap-3 text-[#181D17]">
                <ShieldCheck className="w-10 h-10" strokeWidth={2} />
                <span
                  className="text-4xl lg:text-5xl font-black tracking-tight"
                  style={{ fontWeight: 800 }}
                >
                  94.8%
                </span>
              </div>
              <p className="text-[#3F483D] font-bold text-[11px] tracking-[0.15em] mt-5 uppercase">
                Eficiência Solo
              </p>
            </div>

            <div className="bg-[#CDE5C8] rounded-4xl p-8 lg:p-10 flex flex-col justify-center min-h-[180px] md:col-span-6 lg:col-span-3 shadow-sm">
              <div className="flex items-center gap-3 text-[#181D17]">
                <Globe className="w-10 h-10" strokeWidth={2} />
                <span
                  className="text-4xl lg:text-5xl font-black tracking-tight"
                  style={{ fontWeight: 800 }}
                >
                  +15
                </span>
              </div>
              <p className="text-[#3F483D] font-bold text-[11px] tracking-[0.15em] mt-5 uppercase">
                Cidades Atendidas
              </p>
            </div>
          </div>

          <div className="relative w-full h-[360px] rounded-4xl overflow-hidden shadow-sm flex items-end">
            <img
              src="https://casajardimsintonia.com.br/wp-content/uploads/2025/07/Plantar-Maracuja.jpg"
              alt="Plantação de maracujá - Case Fazenda Sol Nascente"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="relative z-10 p-8 lg:p-12 text-white">
              <h3 className="text-3xl font-bold mb-3 tracking-tight">
                Case: Fazenda Sol Nascente
              </h3>
              <p className="text-white/70 max-w-2xl text-[17px] leading-relaxed font-normal">
                Redução de 40% no custo de irrigação e aumento de 22% no peso
                médio dos frutos em 12 meses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
