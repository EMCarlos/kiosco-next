import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { categories } from "./data/categories";
import { products } from "./data/products";

const prisma = new PrismaClient().$extends(withAccelerate());

async function main() {
  try {
    await prisma.category.createMany({
      data: categories
    });
    await prisma.product.createMany({
      data: products
    });
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Database seeded successfully");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// const globalForPrisma = global as unknown as { prisma: typeof prisma }

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// export default prisma
