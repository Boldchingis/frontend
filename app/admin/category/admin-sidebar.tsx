import { HandPlatter, Truck } from "lucide-react";
import { Dock } from "lucide-react";
import { Car } from "lucide-react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function SideBar() {
  
  return (
    <div className="w-[205px] min-h-[1024px]  bg-gray-100">
      <Link href={"/"}>
        <div className="flex items-center justify-center ">
          <div className="items-center justify-center flex size-[40px] text-red-500">
            <HandPlatter />
          </div>
          <div>
            <p className="text-[18px] font-[600] leading-[28px]">NomNom</p>
            <p className="text-[12px] font-[400] leading-[16px] text-[#71717A]">
              Swift delivery
            </p>
          </div>
        </div>
      </Link>
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[200px] h-auto p-4 items-start ml-5 ">
          <Link href={"/admin/category"}>
            <button className="w-[124px] h-[25px] mt-3  text-[12px] rounded-full flex items-center bg-[#FFFFFF] gap-2  text-[#000000]  pl-6 hover:bg-[#18181B] hover:text-[#ffffff]">
              <Dock className="size-[14px]" /> Food menu
            </button>
          </Link>
          <Link href={"/admin/orders"}>
            <button className="w-[124px] h-[25px] mt-3 text-[12px] rounded-full flex items-center bg-[#FFFFFF] gap-2  text-[#000000]  pl-6 hover:bg-[#18181B] hover:text-[#ffffff]">
              <Truck className="size-[14px]" /> Order
            </button>
          </Link>
          <button className="w-[124px] h-[25px] mt-3 text-[12px] rounded-full flex items-center bg-[#FFFFFF] gap-2  text-[#000000]  pl-6 hover:bg-[#18181B] hover:text-[#ffffff]">
            <Settings className="size-[14px]" /> Settings
          </button>
        </div>
      </div>
    </div>
  );
}
