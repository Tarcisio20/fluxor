import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(3333),
  API_PREFIX: z.string().default("/api"),
  JWT_SECRET: z.string().min(6, "JWT_SECRET deve ter pelo menos 6 caracteres"),
  DATABASE_URL: z.url("DATABASE_URL inválida"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Erro nas variáveis de ambiente:");
  console.error(parsedEnv.error.format());
  throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;