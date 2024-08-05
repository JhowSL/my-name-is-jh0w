# Configuração do MongoDB Atlas

Este documento fornece instruções para configurar a conexão com o banco de dados MongoDB Atlas para o projeto. Siga os passos abaixo para garantir que a conexão seja configurada corretamente.

## Requisitos

- Conta no [MongoDB Atlas](https://cloud.mongodb.com/)
- Nome de usuário e senha do MongoDB Atlas
- Nome do cluster MongoDB Atlas
- Nome do banco de dados

## Configuração da Conexão

1. **Obtenha as Informações Necessárias**

   Certifique-se de que você tem as seguintes informações do MongoDB Atlas:
   - **username**: Seu nome de usuário no MongoDB Atlas.
   - **password**: Sua senha para o usuário no MongoDB Atlas.
   - **cluster**: O endereço do seu cluster no MongoDB Atlas (por exemplo, `cluster001.gcagvrl`).
   - **database**: O nome do banco de dados que você deseja acessar (por exemplo, `my-name-is-jh0w_dev_db`).
   - **appname**: Nome do aplicativo, se desejado (por exemplo, `cluster001`).

2. **Configure o Arquivo `.env`**

   Crie ou edite o arquivo `.env` na raiz do seu projeto e adicione a variável `DATABASE_URL` com a seguinte estrutura:

```env
   DATABASE_URL="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority&appName=<appname>"
```

Substitua os placeholders conforme necessário:

`<username>`: Seu nome de usuário do MongoDB Atlas.
`<password>`: Sua senha do MongoDB Atlas.
`<cluster>`: O endereço do seu cluster MongoDB Atlas.
`<database>`: O nome do banco de dados (por exemplo, my-name-is-jh0w_dev_db).
`<appname>`: Nome do aplicativo, se aplicável (por exemplo, cluster001).
Exemplo de configuração:

env
DATABASE_URL="mongodb+srv://Jh0w:`<password>`@cluster001.gcagvrl.mongodb.net/my-name-is-jh0w_dev_db?retryWrites=true&w=majority&appName=cluster001"

Atualize o Arquivo schema.prisma

Certifique-se de que o arquivo schema.prisma está configurado para usar a URL do banco de dados a partir da variável de ambiente:

prisma
Copiar código
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
Carregue as Variáveis de Ambiente no Código

Se você estiver usando Node.js, verifique se o arquivo .env é carregado corretamente no seu código principal:

typescript
Copiar código
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const contactRouter = t.router({
  getAllContactForm: t.procedure.query(async ({ ctx }) => {
    try {
      const getAllContactForm = await ctx.prisma.contactForm.findMany();
      return getAllContactForm;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch contact forms");
    }
  })
});
Resolução de Problemas
Se você encontrar problemas de conexão, verifique o seguinte:

As credenciais e o nome do banco de dados estão corretos.
O cluster MongoDB Atlas está acessível e configurado corretamente.
O arquivo .env está corretamente configurado e sendo carregado pelo seu aplicativo.
Para mais informações, consulte a documentação do MongoDB Atlas e a documentação do Prisma.
