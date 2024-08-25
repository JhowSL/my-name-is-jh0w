"use client";

import type { ReactElement } from "react";

export function ContainerFooter({
  children,
}: Readonly<{ children: ReactElement }>) {
  return (
    <footer className="border-t-[1px] border-border px-4 md:px-6 pt-10 md:pt-16 bg-[#0C0C0C] overflow-hidden md:max-h-[820px]">
      {children}
    </footer>
  );
}
