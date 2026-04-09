import { z } from "zod";

export const createCompanySchema = z.object({
  legalName: z.string().min(2),
  tradeName: z.string().min(2),
  cnpj: z.string().min(11),
  email: z.email(),
  phone: z.string().optional(),
});