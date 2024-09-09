"use client";

import { Card } from "@repo/ui/card";
import type { ReactNode } from "react";

export function CardContainer({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Card className="container grid card my-2 w-[95vw] h-[95vh] sm:grid sm:w-[92vw] sm:h-[90vh] lg:grid lg:w-[92vw] lg:h-[92vh] xl:grid xl:w-[94vw] xl:h-[92vh] 2xl:grid 2xl:w-[98vw] 2xl:h-[93vh]">
      {children}
    </Card>
  );
}
