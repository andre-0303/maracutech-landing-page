"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

function NavItem({ children, href, onClick }: { children: React.ReactNode; href?: string; onClick?: () => void }) {
  return (
    <li
      className="
        text-neutral
        font-semibold
        relative cursor-pointer
        after:content-['']
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:w-full
        after:bg-primary
        after:scale-x-0
        after:origin-left
        after:transition-transform
        after:duration-300
        after:ease-out
        hover:after:scale-x-100
      "
    >
      <a href={href || "#"} className="inline-block" onClick={onClick}>
        {children}
      </a>
    </li>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 md:px-10 py-4">
      <Image src="/image.png" alt="Logo" width={80} height={80} className="w-16 md:w-24" />

      {/* Desktop Nav */}
      <nav className="hidden lg:flex">
        <ul className="flex gap-10 items-center">
          <NavItem href="#hero">Início</NavItem>
          <NavItem href="#about">Sobre</NavItem>
          <NavItem href="#features">Serviços</NavItem>
          <NavItem href="#results">Projetos</NavItem>
          <NavItem href="#contact">Contato</NavItem>
        </ul>
      </nav>

      {/* Desktop Button */}
      <button className="hidden lg:block relative overflow-hidden px-6 py-2 rounded-lg text-white cursor-pointer bg-primary before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)] before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full">
        Contact
      </button>

      {/* Mobile Menu Button */}
      <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(true)}>
        <Menu size={28} />
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-surface z-50 transform transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-6">
          <button className="self-end p-2 mb-6" onClick={() => setIsMenuOpen(false)}>
            <X size={28} />
          </button>
          <nav className="flex-1">
            <ul className="flex flex-col gap-6 items-start">
              <NavItem href="#hero" onClick={() => setIsMenuOpen(false)}>Início</NavItem>
              <NavItem href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</NavItem>
              <NavItem href="#features" onClick={() => setIsMenuOpen(false)}>Serviços</NavItem>
              <NavItem href="#results" onClick={() => setIsMenuOpen(false)}>Projetos</NavItem>
              <NavItem href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</NavItem>
            </ul>
          </nav>
          <button className="mt-4 px-6 py-3 rounded-lg text-white bg-primary font-semibold w-full">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
