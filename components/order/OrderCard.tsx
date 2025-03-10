import { completeOrder } from "@/actions/complete-order-action";
import { OrderWithProducts } from "@/src/types";
import { formatCurrency } from "@/src/utils";

type OrderCardProps = {
  order: OrderWithProducts;
};

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <section
      aria-labelledby="summary-heading"
      className="flex flex-col mt-16 rounded-lg px-4 py-6 sm:p-6 lg:mt-0 lg:p-8 space-y-4"
      style={{
        borderColor: "var(--card-border)",
        backgroundColor: "var(--bg-gray-50)",
        height: "-webkit-fill-available",
      }}
    >
      <p
        className="text-2xl font-medium"
        style={{ color: "var(--text-gray-900)" }}
      >
        Cliente: {order.name}{" "}
      </p>
      <p
        className="text-lg font-medium"
        style={{ color: "var(--text-gray-900)" }}
      >
        Productos Ordenados:
      </p>
      <dl className="mt-6 space-y-4">
        {order.orderProducts.map((product) => (
          <div
            key={product.productId}
            className="flex items-center gap-2 border-t border-gray-200 pt-4"
          >
            <dt
              className="flex items-center text-sm"
              style={{ color: "var(--text-gray-600)" }}
            >
              <span className="font-black">
                ({product.quantity}) {""}
              </span>
            </dt>
            <dd
              className="text-sm font-medium"
              style={{ color: "var(--text-gray-900)" }}
            >
              {product.product.name}
            </dd>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt
            className="text-base font-medium"
            style={{ color: "var(--text-gray-900)" }}
          >
            Total a Pagar:
          </dt>
          <dd
            className="text-base font-medium"
            style={{ color: "var(--text-gray-900)" }}
          >
            {formatCurrency(order.total)}
          </dd>
        </div>
      </dl>

      <form
        action={completeOrder}
        className="pt-5"
        style={{ marginTop: "auto" }}
      >
        <input
          type="hidden"
          value={order.id}
          name="order_id"
        />
        <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-auto p-3 uppercase font-bold cursor-pointer"
          value="Marcar Orden Completada"
        />
      </form>
    </section>
  );
}
