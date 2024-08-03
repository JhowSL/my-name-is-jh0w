# Documentação de Resolução de Erro

## Introdução

Este documento descreve as etapas realizadas para corrigir um problema de tipo inválido na variável de ambiente `PORT_BACK` e garantir que as variáveis de ambiente sejam validadas corretamente usando Zod.

## Problema Inicial

Foi encontrado um erro `ZodError` indicando que a variável `PORT_BACK` estava recebendo um valor do tipo `string` quando o esperado era um `number`.

```json
ZodError: [
  {
    "code": "invalid_type",
    "expected": "number",
    "received": "string",
    "path": [
      "PORT_BACK"
    ],
    "message": "Expected number, received string"
  }
]
```

Solução Aplicada
Ajuste no Arquivo `.env.test`
Para resolver o problema, foi necessário garantir que o valor de `PORT_BACK` fosse um número. No arquivo `.env.test`, o valor foi ajustado removendo as aspas ao redor do número.

```json
PORT_BACK=3131
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority&appName=<appname>"
```

Ajuste no Arquivo `env.ts`
Além disso, foi necessário converter o valor de `PORT_BACK` para um número no código antes de validá-lo com `Zod`. O arquivo `env.ts` foi ajustado da seguinte forma:

```typescript
import { config } from "dotenv";
import { z } from "zod";

const env = process.env.NODE_ENV || "development";

config({ path: `.env.${env}` });

const envSchema = z.object({
  PORT_BACK: z.number().default(3333),
  DATABASE_URL: z.string().url(),
});

// Converter PORT_BACK para número antes da validação
const parsedEnv = {
  PORT_BACK: Number(process.env.PORT_BACK),
  DATABASE_URL: process.env.DATABASE_URL,
};

export const envConfig = envSchema.parse(parsedEnv);
```

Conclusão
Com essas alterações, garantimos que a variável `PORT_BACK` seja tratada como um número e validada corretamente, evitando o erro `ZodError` e garantindo que as variáveis de ambiente estejam no formato esperado.
