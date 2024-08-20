import { z } from "zod";

const SuccessResponseSchema = z.object({
  status: z.literal("success"),
  data: z.array(
    z.object({
      id: z.string(),
      contactEmail: z.string().email(),
      name: z.string(),
      message: z.string(),
      dataSent: z.string(),
    }),
  ),
  timestamp: z.string(),
});

const ErrorResponseSchema = z.object({
  status: z.literal("error"),
  message: z.string(),
  timestamp: z.string(),
});

const WarningResponseSchema = z.object({
  status: z.literal("warning"),
  warnings: z.array(z.string()),
  timestamp: z.string(),
});

export const ApiResponseSchema = z.union([
  SuccessResponseSchema,
  ErrorResponseSchema,
  WarningResponseSchema,
]);

export type ApiResponse = z.infer<typeof ApiResponseSchema>;
