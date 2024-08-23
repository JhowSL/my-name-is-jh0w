"use client";

import { ContainerHeader } from "../containter";

export function Header() {
  return (
    <ContainerHeader>
      <nav className="border border-border px-4 flex items-center backdrop-filter backdrop-blur-xl bg-[#121212] bg-opacity-70 h-[50px] z-20">
        NavBar
      </nav>
    </ContainerHeader>
  );
}
