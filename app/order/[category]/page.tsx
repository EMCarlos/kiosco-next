import ProductCard from "@/components/products/ProductCard";
import Heading from "@/components/ui/Heading";
import prisma from "@/src/lib/prisma";

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });

  return products;
}

interface Props {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const paramsResolved = await Promise.resolve(params);
  const products = await getProducts(paramsResolved.category);

  return (
    <>
      <Heading>Elige y personaliza tu pedido a continuación</Heading>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}
