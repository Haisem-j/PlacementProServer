import express, { Request, Response, NextFunction, Express } from "express";
import dotenv from "dotenv";
import prisma from "../prisma";
import { logError } from "../logger";

dotenv.config();

const router = express.Router();
const BASE_URL = "/api/v1/jobs";
/**
 * Fetches all jobs and their companies
 * @route POST /
 * @REQUEST BODY { limit: number, skip: number }
 */
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { limit, skip } = req.body;
    const jobs = await prisma.job.findMany({
      skip: skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
    const companyMap: any = {};

    jobs.forEach((job) => {
      if (!companyMap[job.companyId]) {
        companyMap[job.companyId] = true;
      }
    });
    const compIds: number[] = [];
    Object.keys(companyMap).forEach((key) => {
      compIds.push(Number(key));
    });
    const companies = await prisma.company.findMany({
      where: {
        id: { in: compIds },
      },
    });

    res.status(200).send({
      success: true,
      data: { jobs, companies },
      message: "Jobs fetched successfully",
    });
  } catch (error: any) {
    logError(BASE_URL + "/jobs", error, req.method);
  }
});

/**
 * Fetches jobs with featured status
 * @route POST /jobs/featured
 */
router.get(
  "/featured",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const jobs = await prisma.job.findMany({
        where: {
          featured: true,
        },
      });
      res.status(200).send({
        success: true,
        data: jobs,
        message: "Featured jobs fetched successfully",
      });
    } catch (error: any) {
      logError(BASE_URL + "/featured", error, req.method);
    }
  }
);

export default router;
