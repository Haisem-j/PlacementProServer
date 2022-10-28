export const jobsData: {
  title: string;
  salary: number;
  remoteStatus: "Remote" | "Hybrid" | "Onsite";
  description: string;
  yearsOfExperience: number;
  location: string;
  status: "Part Time" | "Full Time" | "Contract";
  category: "Software Development" | "Design";
  company: string;
}[] = [
  {
    title: "Software Development Engineer",
    salary: 80000,
    remoteStatus: "Remote",
    description:
      "You will be partnering with research scientists, product managers and software engineers to solve complex problems and building innovative solutions to drive $100B inventory buying decisions. You will design/build scalable, distributed computing solutions. Candidate needs to have a high sense of ownership, ability to develop end to end solutions and improve customer experience. This role would expose you to solving problems of scale in the areas of data mining, machine learning algorithms and distributed systems of cloud-scale. You will be responsible for driving the team’s technical direction, strategizing and shaping our long-term vision and architecture.",
    yearsOfExperience: 1,
    location: "Toronto, On",
    status: "Full Time",
    category: "Software Development",
    company: "Amazon",
  },
  {
    title: "Front End Product Software Engineer",
    salary: 180000,
    remoteStatus: "Onsite",
    description:
      "Our strategy starts with our mission: how do we build the right set of products that can help our customers work in a more enlightened way? If the first big problem Dropbox solved was getting your files in the cloud, the new problem we’re solving is helping you organize your life.As we’re evolving the core business from syncing and sharing files, we are looking for Software Engineers to come build the next generation of new products for collaboration and distributed work. Product Engineers thrive working across technologies and codebases, but are also involved in various product development cycle stages. Along the way they help representing users needs through close partnership with product, design, and user research.In this role you will deliver best-in-breed software by building robust systems that power optimized user experiences on marquee projects like Dropbox Paper , Transfer , or Family . As a Product Engineer, you will use data-driven approaches to conduct experiments or iterate features, while ensuring that the software we write will last and scale.",
    yearsOfExperience: 5,
    location: "Toronto, On",
    status: "Full Time",
    category: "Software Development",
    company: "Dropbox",
  },
  {
    title: "Senior Full Stack Engineer",
    salary: 220000,
    remoteStatus: "Hybrid",
    description:
      "As part of the Web Platform Engineering team, you will be implementing exciting new features that engage and influence Autodesk customers. Our team faces a variety of unique and interesting challenges, from creating new tools and components, implementing critical web services, creating new and engaging end-user experiences, to digging into low-level performance details and streamlining processes. To be successful in this role, you’ll need a solid foundation in server-side Java programming, a passion for the latest web technologies, and a desire to tackle new challenges head-on. This is your chance to work with a team of experienced and talented individuals, participate in a fun and engaging workplace culture, and have your work seen and used by millions.",
    yearsOfExperience: 10,
    location: "Vancouver, BC",
    status: "Full Time",
    category: "Software Development",
    company: "Autodesk",
  },
  {
    title: "Fullstack Software Engineer - Creative Program",
    salary: 100000,
    remoteStatus: "Remote",
    description:
      "The Creative Program team is focused on building a platform for creators to discover and showcase products on Wish. Customers are able to discover Wish through creators’ content on various social media and outreach channels. We deliver tools and integrations to make this process simple and easy, from areas such as discovering and onboarding creators, to providing rewards and incentives from them. We aim to build a full-featured platform that connects both customers and creators to the best of what Wish has to offer.",
    yearsOfExperience: 2,
    location: "Montreal, QC",
    status: "Full Time",
    category: "Software Development",
    company: "Wish",
  },
  {
    title: "Product Software Engineer, DocSend",
    salary: 120000,
    remoteStatus: "Onsite",
    description:
      "As a Software Engineer, you’ll play a pivotal role in shaping the trajectory of product development, while ensuring we stay customer-focused. Our current stack is a Ruby on Rails web app running on Heroku with CoffeeScript, Haml, and LESS with some React.",
    yearsOfExperience: 2,
    location: "Toronto, On",
    status: "Full Time",
    category: "Software Development",
    company: "Dropbox",
  },
  {
    title: "Software Engineer - Frontend",
    salary: 180000,
    remoteStatus: "Onsite",
    description:
      "Yammer was one of the first startup unicorns this past decade and was acquired by Microsoft in 2012. Today, this means we get the benefits of a startup - rapid innovation, cutting-edge technology, outsized individual impact - with the advantages of working for one of the most successful software companies in the world. We work together in small, cross-functional teams - engineers, product managers, designers, data scientists - to design, deliver and operate delightful end user experiences to our tens of millions of users spread across the world.",
    yearsOfExperience: 2,
    location: "Toronto, QC",
    status: "Full Time",
    category: "Software Development",
    company: "Microsoft",
  },
  {
    title: "Software Engineer - Client Infrastructure (Web)",
    salary: 210000,
    remoteStatus: "Remote",
    description:
      "The Buying Experience, Client Infrastructure team owns Wish iOS and Android mobile apps and Wish.com website client infrastructure. This team defines standards regarding the app and website performance benchmarks, builds tools and systems for other engineers to seamlessly develop consumer-facing features, and sets up monitoring and alerting infrastructure to maintain a high level of client quality.As a core web engineer who is part of the Client Infrastructure team, you will work on the foundation of the Wish.com website. This includes fine tuning site speed, developing tools to consolidate code quality, contributing to libraries shared across the company, and enforcing web code quality standards among all web engineers working on Wish.com. You will have a great deal of responsibility for each project you work on and will have the flexibility to influence design and execution. This is an impactful role where you will have the opportunity to continuously improve the web development coding standards and guidelines for other consumer-side engineers.For this role, you should be hands-on, driven, want to make an impact and grow your career, and have a solid foundation in computer science. You should have strong competencies in web development, software design, problem solving, testing and debugging, and be able to contribute under a great deal of independence.",
    yearsOfExperience: 5,
    location: "Montreal, QC",
    status: "Full Time",
    category: "Software Development",
    company: "Wish",
  },
];

export const companyData: {
  name: string;
  email: string;
  image: string;
}[] = [
  {
    name: "Wish",
    email: "wish@wish.com",
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQGj4N65gtGF3Q/company-logo_200_200/0/1659622141077?e=1669852800&v=beta&t=s5sav1LYT3Q4eqBmEbwFT3QN6YJfge8nkL6dyWUJt9o",
  },
  {
    name: "Amazon",
    email: "amazon@amazon.com",
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_200_200/0/1612205615891?e=1669852800&v=beta&t=Dxv0DS61JE4iCvbYZlo3PXgFRvhRLQFdQJdt90O_iNs",
  },
  {
    name: "Dropbox",
    email: "drop@box.com",
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQHjnNsmL5L2NA/company-logo_200_200/0/1654114493079?e=1669852800&v=beta&t=BvbuQoJmmmQ92YX8immmt1y2ZHuJ-l4Ix57IGpoIKOY",
  },
  {
    name: "Microsoft",
    email: "micro@soft.com",
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1618231291419?e=1669852800&v=beta&t=4XcwnI37vKoEg7n11nV3Wv7Zby9kNZ9IMhQNfPILFV8",
  },
  {
    name: "Autodesk",
    email: "auto@desk.com",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQEbID5EjKkN7A/company-logo_200_200/0/1656693231377?e=1669852800&v=beta&t=F8AuUs6aq4WybFwOF5fR-juqLVbotjHSU6RAq3d-d7c",
  },
];
