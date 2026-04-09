export function getTableStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    FREE: "Livre",
    OCCUPIED: "Ocupada",
    WAITING_SERVICE: "Aguardando atendimento",
    WAITING_PAYMENT: "Aguardando pagamento",
    BLOCKED: "Bloqueada",
  };

  return labels[status] || status;
}

export function getTicketStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    OPEN: "Aberta",
    IN_PROGRESS: "Em andamento",
    WAITING_PAYMENT: "Aguardando pagamento",
    PAID: "Paga",
    CANCELED: "Cancelada",
  };

  return labels[status] || status;
}

export function getSubscriptionStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    TRIALING: "Em teste",
    ACTIVE: "Ativa",
    COURTESY: "Cortesia",
    PAST_DUE: "Pagamento pendente",
    SUSPENDED: "Suspensa",
    CANCELED: "Cancelada",
    EXPIRED: "Expirada",
  };

  return labels[status] || status;
}