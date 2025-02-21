import OrderSidebar from "../componets/order/OrderSidebar";
import OrderSummary from "../componets/order/OrderSummary";

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:flex">
      <OrderSidebar />
      <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
        {children}
      </main>
      <OrderSummary />
    </div>
  );
}
