"use client";
import { createOrder } from "@/actions/create-order-actions";
import { OrderSchema } from "@/src/schema";
import { useStore } from "@/src/store";
import { useMemo } from "react";
import { toast } from "react-toastify";
import ProductDetailts from "./ProductDetailts";

const OrderSummary = () => {
  const order = useStore((state) => state.order);
  const clearOrder = useStore((state) => state.clearOrder);
  const total = useMemo(
    () => order.reduce((acc, item) => acc + item.quantity * item.price, 0),
    [order]
  );

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      total,
      order,
    };

    const result = OrderSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    const response = await createOrder(data);
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
    }

    toast.success("Pedido Realizado Correctamente");
    clearOrder();
  };

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">Mi pedido</h1>

      {order.length === 0 ? (
        <p className="text-center my-10">No hay productos en tu pedido</p>
      ) : (
        <div className="mt-5">
          <ul>
            {order.map((item) => (
              <ProductDetailts
                key={item.id}
                item={item}
              />
            ))}
          </ul>

          <p className="text-2xl mt-20 text-center">
            Total a pagar: {""}
            <span className="text-amber-500 font-black">{total}</span>
          </p>

          <form
            className="w-full mt-10 space-y-5"
            action={handleCreateOrder}
          >
            <input
              type="text"
              placeholder="Tu Nombre"
              className="bg-white border border-gray-100 p-2 w-full"
              name="name"
              style={{
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
              }}
            />
            <input
              type="submit"
              className="py-2 rounded uppercase w-full text-center cursor-pointer font-bold"
              style={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
              }}
              value={"Confirmar pedido"}
            />
          </form>
        </div>
      )}
    </aside>
  );
};

export default OrderSummary;
