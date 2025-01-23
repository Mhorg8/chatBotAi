// import { PrismaClient } from "@prisma/client";

// // Extend the globalThis type to include the `prisma` property
// declare global {
//   // eslint-disable-next-line no-var
//   var prisma: PrismaClient | undefined;
// }

// const client = global.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//   global.prisma = client;
// }

// export default client;
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export default client;
