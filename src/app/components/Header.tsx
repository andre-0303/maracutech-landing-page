import Image from "next/image";

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="
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
      <a href="#" className="inline-block">
        {children}
      </a>
    </li>
  );
}

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10">
      <Image src="/image.png" alt="Logo" width={100} height={100} />

      <nav>
        <ul className="flex gap-10 items-center">
          <NavItem>Início</NavItem>
          <NavItem>Sobre</NavItem>
          <NavItem>Serviços</NavItem>
          <NavItem>Projetos</NavItem>
          <NavItem>Contato</NavItem>
        </ul>
      </nav>

      <button
        className="
    relative overflow-hidden px-6 py-2 rounded-lg text-white cursor-pointer
    bg-primary
    before:absolute before:inset-0
    before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)]
    before:-translate-x-full
    before:transition-transform before:duration-700
    hover:before:translate-x-full
  "
      >
        Contact
      </button>
    </header>
  );
}
