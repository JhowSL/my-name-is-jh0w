"use client";

import { Card } from "@repo/ui/card";
import type { ReactNode } from "react";

export function CardContainer({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Card className="relative my-2 grid w-[96vw] h-[88vh] ">{children}</Card>
  );
}
