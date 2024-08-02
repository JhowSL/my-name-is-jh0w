# Documentação de Configuração do Ambiente

## Introdução

Para gerenciar diferentes ambientes (`test`, `dev`, `prod`) usando dotenv ou uma biblioteca similar, você pode seguir os passos abaixo:

### Instale o `dotenv`

Primeiro, instale a biblioteca `dotenv` no seu projeto:

```shell
pnpm add dotenv
```

### Crie arquivos `.env` para cada ambiente

Crie arquivos .env específicos para cada ambiente na raiz do seu projeto, como `.env.development`, `.env.test`, e `.env.production`. Por exemplo:

```shell
# .env.development
PORT=3000
DATABASE_URL="mongodb://localhost:27017/dev_db"
```

```shell
# .env.test
PORT=3001
DATABASE_URL="mongodb://localhost:27017/test_db"
```

```shell
# .env.production
PORT=80
DATABASE_URL="mongodb+srv://user:password@cluster.mongodb.net/prod_db"
```

Carregue o arquivo `.env` correto no código: No seu código principal, carregue o arquivo `.env` apropriado com base no ambiente. Você pode fazer isso no início do seu arquivo de entrada, como `index.ts` ou `server.ts`:

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

### Configure os scripts no `package.json`

Adicione scripts no seu package.json para definir o ambiente ao iniciar o servidor:

```json
"scripts": {
"start:dev": "NODE_ENV=development ts-node-dev src/index.ts",
"start:test": "NODE_ENV=test ts-node-dev src/index.ts",
"start:prod": "NODE_ENV=production ts-node src/index.ts",
}
```

### Use as variáveis de ambiente no seu código

Agora você pode usar as variáveis de ambiente carregadas no seu código, como no exemplo abaixo:

```typescript
import express from 'express';
import { envConfig } from './utils/env';

const app = express();
const port = envConfig.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

Seguindo esses passos, você poderá gerenciar facilmente diferentes ambientes no seu projeto.
