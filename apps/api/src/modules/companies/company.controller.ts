import { Request, Response } from "express";
import { CompanyService } from "./company.service"; 
import { asyncHandler } from "../../shared/helpers/async-handler";

export const CompanyController = {
  create: asyncHandler(async (req: Request, res: Response) => {
    const company = await CompanyService.create(req.body);

    return res.status(201).json(company);
  }),

  list: asyncHandler(async (_req: Request, res: Response) => {
    const companies = await CompanyService.list();

    return res.status(200).json(companies);
  }),
};