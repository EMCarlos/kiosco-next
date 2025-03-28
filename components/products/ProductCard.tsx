import { formatCurrency, getProductImageUrl } from "@/src/utils";
import { Product } from "@prisma/client/wasm";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imagePath = getProductImageUrl(product.image);

  return (
    <div
      className="border rounded-lg p-3 flex flex-col justify-between items-center"
      style={{
        backgroundColor: "var(--card-background)",
        borderColor: "var(--card-border)",
      }}
    >
      <Image
        src={imagePath}
        alt={product.name}
        width={350}
        height={200}
        className="rounded-lg object-cover"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>

        <AddProductButton product={product} />
      </div>
    </div>
  );
}
