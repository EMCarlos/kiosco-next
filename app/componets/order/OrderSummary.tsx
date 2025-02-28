"use client";
import { useStore } from "@/src/store";
import { useMemo } from "react";
import ProductDetailts from "./ProductDetailts";

const OrderSummary = () => {
  const order = useStore((state) => state.order);
  const total = useMemo(
    () => order.reduce((acc, item) => acc + item.price, 0),
    [order]
  );

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">Mi pedido</h1>

      {order.length === 0 ? (
        <p className="text-center my-10">No hay productos en tu pedido</p>
      ) : (
        <ul className="mt-5">
          {order.map((item) => (
            <ProductDetailts
              key={item.id}
              item={item}
            />
          ))}
        </ul>
      )}

      <p className="text-2xl mt-20 text-center">
        Total a pagar: {""}
        <span className="text-amber-500 font-black">{total}</span>
      </p>
    </aside>
  );
};

export default OrderSummary;
