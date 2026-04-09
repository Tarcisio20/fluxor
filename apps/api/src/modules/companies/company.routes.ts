import { Router } from "express";
import { CompanyController } from "./company.controller"; 

const companyRoutes = Router();

companyRoutes.post("/", CompanyController.create);
companyRoutes.get("/", CompanyController.list);

export { companyRoutes };