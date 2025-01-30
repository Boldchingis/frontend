import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import OrderSheetCard from "./companents/OrderSheetCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderSheetOrder from "./companents/OrderSheetOrder";
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
            <Tabs defaultValue="Cart" className="w-[471px]">
              <TabsList className="w-full bg-white rounded-full mt-6 flex justify-center items-center gap-3">
                <TabsTrigger
                  value="Cart"
                  className="w-[222px] h-[32px] text-black shadow-none  rounded-full
                   data-[state=active]:bg-[#EF4444] data-[state=active]:text-white"
                >
                  Cart
                </TabsTrigger>
                <TabsTrigger
                  value="Order"
                  className="w-[222px] h-[32px] text-black shadow-none  rounded-full
                  data-[state=active]:bg-[#EF4444] data-[state=active]:text-white"
                >
                  Order
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Cart">
                <OrderSheetCard />
              </TabsContent>
              <TabsContent value="Order">
                <OrderSheetOrder />
              </TabsContent>
            </Tabs>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
