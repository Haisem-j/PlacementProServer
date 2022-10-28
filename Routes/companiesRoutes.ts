import express, { Request, Response, NextFunction, Express } from "express";
import dotenv from "dotenv";
import prisma from "../prisma";
import { logError } from "../logger";
dotenv.config();

const router = express.Router();
const BASE_URL = "/api/v1/companies";
/**
 * Fetches the featured companies
 * @route POST /companies/featured
 */
router.post(
  "/featured",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { ids } = req.body;
      const compIds: number[] = [];
      Object.keys(ids).forEach((key) => {
        compIds.push(Number(key));
      });
      const companies = await prisma.company.findMany({
        where: {
          id: { in: compIds },
        },
      });
      res.status(200).send({
        success: true,
        data: companies,
        message: "Featured companies fetched successfully",
      });
    } catch (error: any) {
      logError(BASE_URL + "/featured", error, req.method);
    }
  }
);

export default router;
