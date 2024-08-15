# Usar uma imagem base oficial do Node.js
FROM node:20-alpine

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Definir o diretório de trabalho
WORKDIR /server-production

# Copiar os arquivos de configuração do monorepo
COPY ../../pnpm-workspace.yaml ./
COPY ../../pnpm-lock.yaml ./

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN pnpm install

# Copiar o restante do código da aplicação
COPY . .

# Copiar a pasta packages/database
COPY packages/database ./database


# Instalar dependências de produção
RUN pnpm install --only=prod

# Expor a porta que a aplicação irá rodar
EXPOSE 8383

# Comando para iniciar a aplicação em modo de desenvolvimento
CMD ["pnpm", "run", "start:prod"]