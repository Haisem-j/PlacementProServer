import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import jobsRoutes from "./Routes/jobsRoutes";
import companiesRoutes from "./Routes/companiesRoutes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
app.use("/api/v1/jobs", jobsRoutes);
app.use("/api/v1/companies", companiesRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Placement Pro Portal API");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
