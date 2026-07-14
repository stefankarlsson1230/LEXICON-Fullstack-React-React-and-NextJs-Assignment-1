import { PrismaClient } from "./generated/prisma/client";			
import { PrismaPg } from "@prisma/adapter-pg";

// Define a global type to hold the Prisma instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient;
};

// Create the database adapter
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

// Initialize the client
// If an instance already exists (in dev), reuse it. Otherwise, create a new one.
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

// Attach to global object in development to prevent hot reload issues
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
