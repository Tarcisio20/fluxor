# 🚀 Fluxor

**Fluxor** é uma plataforma SaaS moderna para gestão de comandas em bares e restaurantes.

Com foco em **agilidade operacional**, o sistema conecta clientes, garçons, cozinha e caixa em um único fluxo digital — desde o QR Code na mesa até o fechamento da conta.

---

## ⚡ Principais funcionalidades

- 📱 Acesso via QR Code por mesa  
- 🍽️ Controle de comandas em tempo real  
- 🧾 Gestão de pedidos e consumo  
- 🧑‍🍳 Integração com cozinha/bar  
- 🛎️ Chamada de garçom pelo cliente  
- 💳 Controle de pagamento e fechamento  
- 📊 Relatórios operacionais  
- 🏢 Multiempresa (SaaS multi-tenant)  
- 🎁 Sistema de trial e cortesias  

---

## 🧠 Conceito

Fluxor foi projetado para representar o **fluxo completo da operação**:

➡️ Mesa → Pedido → Cozinha → Entrega → Pagamento  

Tudo conectado, sem fricção e em tempo real.

---

## 🏗️ Arquitetura

```bash
apps/
  web-client    # 📱 Interface do cliente (QR Code)
  web-system    # 🧑‍💼 Painel administrativo e operação
  api           # 🔧 Backend Node.js + Express

packages/
  ui            # 🎨 Componentes compartilhados
  types         # 📦 Tipagens globais
  utils         # 🛠️ Funções utilitárias
