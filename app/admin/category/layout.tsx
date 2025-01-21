import SideBar from "@/app/admin/category/admin-sidebar"
import Home from "@/app/admin/page";
export default function AdminRouter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-muted h-screen flex gap-6  ">
      {children}
    </div>
  );
}