import { Button } from "@/components/ui/button";
import EmptyCart from "./EmptyCart";
import EmptyOrder from "./EmptyOrder";
export default function OrderSheetCard() {
  return (
    <div>
      <div className="w-[471px] h-[540px] bg-white rounded-3xl mt-8 p-4">
        <h1 className="font-[600] text-xl mb-4">My cart</h1>
        <EmptyCart />
        <Button className="w-[439px] h-[44px] bg-white rounded-full shadow-none font-medium text-sm border mt-4 border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:border-none">
          Add food
        </Button>
      </div>
      <div className="w-[471px] h-[275px] rounded-3xl p-4 bg-white mt-10">
        <h1 className="font-semibold text-xl">Payment info</h1>
        <Button className="w-[439px] h-[44px] bg-black text-white hover:bg-red-500 rounded-full">
          Checkout
        </Button>
      </div>
    </div>
  );
}
