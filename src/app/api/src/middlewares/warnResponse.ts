export const warnResponse = (data: unknown, warnings: string[]) => ({
  status: 'success',
  warnings,
  data,
  timestamp: new Date().toISOString(),
})
