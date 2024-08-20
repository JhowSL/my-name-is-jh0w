export const warnResponse = (data: unknown, warnings: string[]) => ({
  status: "success",
  data,
  warnings,
  timestamp: new Date().toISOString(),
});
