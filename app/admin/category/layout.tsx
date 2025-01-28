import SideBar from "./admin-sidebar";
import Home from "@/app/admin/page";
import { Categories } from "./dishCategory";
export default function AdminRouter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-muted h-screen flex gap-6  ">{children}</div>;
}
