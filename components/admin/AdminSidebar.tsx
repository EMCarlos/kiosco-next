import Logo from "../ui/Logo";
import SwitchThemeButton from "../ui/SwitchThemeButton";
import AdminRoute from "./AdminRoute";

export const adminNavigation = [
  { url: "/admin/orders", text: "Ordenes", blank: false },
  { url: "/admin/products", text: "Productos", blank: false },
  { url: "/order/cafe", text: "Ver Quiosco", blank: true },
];

export default function AdminSidebar() {
  return (
    <>
      <Logo />
      <div className="space-y-3 ">
        <div className="mt-5 flex items-center justify-space-between w-100 px-5">
          <p
            className="uppercase font-bold text-sm text-center"
            style={{ color: "var(--text-tertiary)" }}
          >
            Navegación
          </p>
          <div className="ml-auto">
            <SwitchThemeButton />
          </div>
        </div>
        <nav className="flex flex-col">
          {adminNavigation.map((link) => (
            <AdminRoute
              key={link.url}
              link={link}
            />
          ))}
        </nav>
      </div>
    </>
  );
}
