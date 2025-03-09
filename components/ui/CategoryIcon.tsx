"use client";
import { Category } from "@prisma/client/wasm";
import Image from "next/image";
import { useParams } from "next/navigation";

const CategoryIcon = ({ category }: { category: Category }) => {
  const params = useParams<{ category: string }>();

  return (
    <div
      className={`${
        category.slug === params.category ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b hover:bg-blue-100`}
    >
      <Image
        src={`/icon_${category.slug}.svg`}
        alt={`Icono de ${category.name}`}
        width={36}
        height={36}
      />
      {category.name}
    </div>
  );
};

export default CategoryIcon;
