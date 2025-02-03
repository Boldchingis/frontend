import EmptyOrder from "./EmptyOrder";
import PaymentInfo from "./Payment";
import { Button } from "@/components/ui/button";
export default function OrderSheetOrder() {
  return (
    <div>
      <div className="w-[471px] h-[540px] bg-white rounded-3xl mt-4 p-4">
        <h1 className="font-[600] text-xl mb-4">Order history</h1>
        <EmptyOrder />
        <Button className="w-[439px] h-[44px] bg-white rounded-full shadow-none font-medium text-sm border mt-4 border-red-500 text-red-500 hover:bg-red-500 my-[52%] hover:text-white hover:border-none">
          Add food
        </Button>
      </div>   <PaymentInfo />
    </div>
  );
}
