# Configuração do Prisma com MongoDB Atlas

## 1. Configuração do Prisma

### 1.1. Arquivo schema.prisma

No diretório do seu projeto, crie ou atualize o arquivo `schema.prisma` com a configuração do seu banco de dados. Abaixo está um exemplo básico:

```prisma
// prisma/schema.prisma

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

## 2. Configuração do MongoDB Atlas

### 2.1. Obtenção da URI de Conexão

Acesse o MongoDB Atlas.

No seu cluster MongoDB, clique em "Connect" e selecione "Connect your application".

Copie a URI de conexão fornecida. Ela deve seguir o formato:

```bash
mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority&appName=<appname>
```

### 2.2. Configuração das Variáveis de Ambiente

No seu ambiente de desenvolvimento ou em um arquivo .env, configure a variável DATABASE_URL com a URI de conexão do MongoDB Atlas:

```bash
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority&appName=<appname>"
```

- username: Substitua pelo nome de usuário do seu banco de dados MongoDB Atlas.
- password: Substitua pela senha do seu usuário.
- cluster: Substitua pelo endereço do seu cluster MongoDB Atlas.
- database: Substitua pelo nome do banco de dados que você deseja acessar.
- appname: Substitua com suas informações específicas. Além disso, se você estiver usando um nome de aplicativo específico, como por exemplo "app-test", adicione &appName=app-test no final da URL.

Este documento fornece os passos essenciais para configurar a conexão do Prisma com o MongoDB Atlas.
