"use client";

import type { ReactElement } from "react";

export function ContainerFooter({
  children,
}: Readonly<{ children: ReactElement }>) {
  return (
    <footer className="container border-t-[1px] rounded-lg border border-border px-4 md:px-6 pt-10 md:pt-16 bg-[#B3B3B3] overflow-hidden w-[95vw] items-center justify-center relative sm:grid sm:w-[92vw] lg:grid lg:w-[92vw] xl:grid xl:w-[94vw] 2xl:grid 2xl:w-[98vw]">
      {children}
    </footer>
  );
}
