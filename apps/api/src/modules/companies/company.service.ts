export const CompanyService = {
  async create(data: Record<string, unknown>) {
    return {
      id: "temp-id",
      ...data,
      createdAt: new Date().toISOString(),
    };
  },

  async list() {
    return [];
  },
};