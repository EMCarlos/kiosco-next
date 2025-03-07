import { Fragment } from "react";
import OrderSidebar from "../componets/order/OrderSidebar";
import OrderSummary from "../componets/order/OrderSummary";
import ToastNotification from "../componets/order/ui/ToastNotification";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <div className="md:flex">
        <OrderSidebar />
        <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
          {children}
        </main>
        <OrderSummary />
      </div>

      <ToastNotification />
    </Fragment>
  );
}
