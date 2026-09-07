FROM oven/bun:1.4-alpine

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install

COPY . .

EXPOSE 3000

COPY src ./src/
COPY prisma ./prisma/

RUN bun run prisma:generate

CMD ["bun", "run", "start:dev"]