import { PrismaClient } from "@prisma/client";
import { jobsData, companyData } from "./seedData";

const prisma = new PrismaClient();

const run = async () => {
  // Define company data
  const companies = await Promise.all(
    companyData.map(async (company) => {
      return prisma.company.upsert({
        where: { name: company.name },
        update: {},
        create: {
          name: company.name,
          email: company.email,
          image: company.image,
        },
      });
    })
  );

  // Define jobs
  await Promise.all(
    jobsData.map((job) => {
      return prisma.job.create({
        data: {
          title: job.title,
          salary: job.salary,
          remoteStatus: job.remoteStatus,
          description: job.description,
          yearsOfExperience: job.yearsOfExperience,
          location: job.location,
          status: job.status,
          category: job.category,
          company: {
            // Find company where company.name === job.company return company.id
            connect: { id: companies.find((c) => c.name === job.company)?.id },
          },
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit();
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
