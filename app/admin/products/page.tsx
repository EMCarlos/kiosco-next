import Heading from "@/components/ui/Heading";
import prisma from "@/src/lib/prisma";

async function productCount() {
  return await prisma.product.count();
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <>
      <Heading>Administrar Productos</Heading>
    </>
  );
}
