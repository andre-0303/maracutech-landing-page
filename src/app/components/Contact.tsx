"use client";

import { Phone, Mail, MessageSquareText } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6 md:px-10 lg:px-20 bg-surface">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="flex flex-col">
          <Image
            src="/image.png"
            alt="Harvest Logo"
            width={100}
            height={100}
            className="mb-2"
          />

          <h2 className="text-4xl lg:text-[2.75rem] font-medium text-[#181D17] leading-[1.15] tracking-tight">
            Pronto para a sua
            <br />
            melhor colheita?
          </h2>

          <p className="text-[#515A4F] text-[17px] leading-relaxed mt-6 max-w-md">
            Nossa equipe de consultores está pronta para analisar
            <br />
            seu talhão e propor a melhor estratégia digital.
          </p>

          {/* Contatos */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#E8F0E6] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#2B4B29]" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#515A4F]">
                  Fale Conosco
                </p>
                <p className="text-[#181D17] text-lg font-semibold tracking-tight">
                  +55 (85) 9796-1611
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#E8F0E6] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#2B4B29]" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#515A4F]">
                  E-mail
                </p>
                <p className="text-[#181D17] text-lg font-semibold tracking-tight">
                  contato@maracutech.com.br
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado direito — Formulário */}
        <div className="bg-[#ECEEE9] rounded-3xl p-8 lg:p-10">
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#515A4F] mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                placeholder="Como podemos te chamar?"
                className="w-full bg-[#E0E3DB] rounded-xl px-5 py-4 text-[#181D17] placeholder-[#8A8F86] text-[15px] outline-none focus:ring-2 focus:ring-[#2B4B29]/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#515A4F] mb-2">
                E-mail Corporativo
              </label>
              <input
                type="email"
                placeholder="seuemail@fazenda.com.br"
                className="w-full bg-[#E0E3DB] rounded-xl px-5 py-4 text-[#181D17] placeholder-[#8A8F86] text-[15px] outline-none focus:ring-2 focus:ring-[#2B4B29]/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#515A4F] mb-2">
                Mensagem
              </label>
              <textarea
                placeholder="Conte-nos sobre sua plantação..."
                rows={4}
                className="w-full bg-[#E0E3DB] rounded-xl px-5 py-4 text-[#181D17] placeholder-[#8A8F86] text-[15px] outline-none resize-none focus:ring-2 focus:ring-[#2B4B29]/30 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2B4B29] hover:bg-[#1E3A1C] text-white font-semibold text-[16px] py-4 rounded-2xl transition-colors cursor-pointer mt-2"
            >
              Enviar Solicitação de Consultoria
            </button>

            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[#2B4B29] font-semibold text-[15px] hover:underline mt-1"
            >
              <MessageSquareText className="w-5 h-5" />
              Ou chame no WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
