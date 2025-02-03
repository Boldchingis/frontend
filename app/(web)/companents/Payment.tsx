import { Button } from "@/components/ui/button";
export default function PaymentInfo() {
  return (
    <div className="w-[471px] h-[275px] rounded-3xl p-6 bg-white mt-4 shadow-md ">
      <h1 className="font-semibold text-lg mb-4">Payment info</h1>

      <div className="flex justify-between text-gray-600">
        <p>Items</p>
        <p className="text-black font-medium">-</p>
      </div>

      <div className="flex justify-between text-gray-600 mt-2">
        <p>Shipping</p>
        <p className="text-black font-medium">-</p>
      </div>

      <div className="border-t border-dashed my-4"></div>

      <div className="flex justify-between text-black font-semibold text-lg">
        <p>Total</p>
        <p>-</p>
      </div>

      <Button className="w-full h-[44px] bg-red-500 text-white hover:bg-red-600 rounded-full mt-6">
        Checkout
      </Button>
    </div>
  );
}
