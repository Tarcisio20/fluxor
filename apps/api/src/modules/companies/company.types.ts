export interface CreateCompanyDTO {
  legalName: string;
  tradeName: string;
  cnpj: string;
  email: string;
  phone?: string;
}