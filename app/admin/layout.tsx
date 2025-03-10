import AdminSidebar from "@/components/admin/AdminSidebar";
import ToastNotification from "@/components/ui/ToastNotification";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:flex">
        <aside
          className="md:w-72 md:h-screen border-r border-gray-200"
          style={{ backgroundColor: "var(--background)" }}
        >
          <AdminSidebar />
        </aside>

        <main
          className="md:flex-1 md:h-screen md:overflow-y-scroll p-5"
          style={{ backgroundColor: "var(--card-background)" }}
        >
          {children}
        </main>
      </div>

      <ToastNotification />
    </>
  );
}
