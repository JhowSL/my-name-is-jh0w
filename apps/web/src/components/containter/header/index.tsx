"use client";

import type { ReactElement } from "react";

export function ContainerHeader({
  children,
}: Readonly<{ children: ReactElement }>) {
  return (
    <header className="sticky mt-4 top-4 z-50 px-2 md:px-4 md:flex justify-center">
      {children}
    </header>
  );
}
