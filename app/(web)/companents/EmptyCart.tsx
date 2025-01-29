import { HandPlatter } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="w-[439px] h-[182px] bg-[#F4F4F5] flex items-center justify-center flex-col rounded-xl">
      <HandPlatter className="text-red-500 w-[61px] h-[50px] my-4" />
      <h1 className="font-semibold text-[16px]">Your cart is empty</h1>
      <div className="text-[#71717A] text-sm flex justify-center text-center mt-1">
        Hungry? 🍔 Add some delicious dishes to your cart and satisfy your
        cravings!
      </div>
    </div>
  );
}
