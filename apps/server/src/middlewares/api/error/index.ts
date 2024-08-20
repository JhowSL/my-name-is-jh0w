export const errorResponse = (error: Error) => ({
  status: "error",
  message: error.message,
  timestamp: new Date().toISOString(),
});
