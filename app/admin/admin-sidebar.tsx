import { HandPlatter } from "lucide-react";
import { Dock } from "lucide-react";
import { Car } from "lucide-react";
import { Settings } from "lucide-react";
export default function SideBar() {
  return (
    <div className="w-[205px] h-[1000px] bg-slate-400">
      <div className="flex ">
        <div className="items-center flex justify-center size-[40px] text-red-500">
          <HandPlatter />
        </div>
        <div>
          <p className="text-[18px] font-[600] leading-[28px]">NomNom</p>
          <p className="text-[12px] font-[400] leading-[16px] text-[#71717A]">
            Swift delivery
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[200px] h-auto p-4 ">
          <div className=" p-4 rounded-md space-y-4">
            <div className="flex items-center justify-between px-4 py-2   ">
              <Dock className="text-gray-700" />
              <span className="text-[#09090B] text-[14px] font-[500]">
                Food Menu
              </span>
            </div>
            <div className="flex items-center justify-between px-4 py-2 ">
              <Car className="text-gray-700" />
              <span className="text-[#09090B] text-[14px] font-[500]">
                Orders
              </span>
            </div>
            <div className="flex items-center justify-between px-4 py-2  ">
              <Settings className="text-gray-700" />
              <span className="text-[#09090B] text-[14px] font-[500]">
                Settings
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
