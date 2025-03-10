import prisma from "@/src/lib/prisma";
import { Category } from "@prisma/client/wasm";
import Link from "next/link";
import CategoryIcon from "../ui/CategoryIcon";
import SwitchThemeButton from "../ui/ChangeThemeButton";
import Logo from "../ui/Logo";

async function getCategories() {
  const categories = await prisma.category.findMany();
  return categories;
}

const OrderSidebar = async () => {
  const categories = await getCategories();

  return (
    <aside className="md:w-72 md:h-screen border-r border-gray-200">
      <Logo />
      <div className="flex justify-center items-center pt-5">
        <h1 className="text-4xl text-center font-black">Categorías</h1>
        <SwitchThemeButton />
      </div>
      <nav className="mt-10 flex flex-col">
        {categories.map((category: Category) => (
          <Link
            key={category.id}
            className="text-xl font-bold"
            href={`/order/${category.slug}`}
          >
            <CategoryIcon category={category} />
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default OrderSidebar;
