import { Router } from "express";
import { healthRoutes } from "./health.routes";
import { companyRoutes } from "../modules/companies/company.routes";

const router = Router();

router.use("/health", healthRoutes);
router.use("/companies", companyRoutes);

export { router };