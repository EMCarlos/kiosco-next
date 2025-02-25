"use client";
import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client/wasm";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="border rounded-lg p-3 flex flex-col justify-between items-center"
      style={{
        backgroundColor: "var(--card-background)",
        borderColor: "var(--card-border)"
      }}
    >
      <Image
        src={`/products/${product.image}.jpg`}
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

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          onClick={() => {
            console.log("Agregar al carrito");
          }}
          style={{
            color: "var(--foreground)"
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
