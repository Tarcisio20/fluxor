import { Router } from "express";

const healthRoutes = Router();

healthRoutes.get("/", (_req, res) => {
  res.status(200).json({
    ok: true,
    service: "fluxor-api",
    timestamp: new Date().toISOString(),
  });
});

export { healthRoutes };