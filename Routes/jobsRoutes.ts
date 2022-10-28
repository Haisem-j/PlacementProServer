import express, { Request, Response, NextFunction, Express } from "express";
import dotenv from "dotenv";
import prisma from "../prisma";
import { logError } from "../logger";

dotenv.config();

const router = express.Router();
const BASE_URL = "/api/v1/jobs";
/**
 * Fetches all jobs
 * @route GET /jobs
 */
router.get("/jobs", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const jobs = await prisma.job.findMany();
    res.status(200).send({
      success: true,
      data: jobs,
      message: "Jobs fetched successfully",
    });
  } catch (error: any) {
    logError(BASE_URL + "/jobs", error, req.method);
  }
});

/**
 * Fetches jobs with featured status
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
