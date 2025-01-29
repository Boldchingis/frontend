import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrderSheetCard from "./companents/OrderSheetCard";

interface OrderSheetProps {
  isOpen: Boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function OrderSheet({ isOpen, setIsOpen }: OrderSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="rounded-tl-3xl rounded-bl-3xl min-w-[535px] bg-[#404040] border-none ">
        <SheetHeader>
          <SheetTitle className="flex gap-2 text-white ">
            <ShoppingCart /> Food order detail
          </SheetTitle>
          <SheetDescription>
            <div>
              <div className="w-[471px] h-[44px] bg-white rounded-full mt-6 flex justify-center items-center gap-3">
                <Button className="w-[220px] h-[36px] text-white   bg-black rounded-full  hover:bg-red-500 ">
                  Cart
                </Button>
                <Button className="w-[220px] h-[36px] text-white bg-black rounded-full hover:bg-red-500 ">
                  Order
                </Button>
              </div>
              <div>
                <OrderSheetCard />
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
