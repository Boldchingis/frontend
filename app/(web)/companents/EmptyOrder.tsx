import { HandPlatter } from "lucide-react";

export default function EmptyOrder() {
  return (
    <div className="w-[439px] h-[182px] bg-[#F4F4F5] flex items-center justify-center flex-col rounded-xl">
      <HandPlatter className="text-red-500 w-[61px] h-[50px] my-4" />
      <h1 className="font-semibold text-[16px]">No Orders Yet? </h1>
      <div className="text-[#71717A] text-sm flex justify-center text-center mt-1">
        🍕 "You haven't placed any orders yet. Start exploring our menu and
        satisfy your cravings!"
      </div>
    </div>
  );
}
