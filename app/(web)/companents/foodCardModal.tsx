import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function FoodCardModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-[#F4F4F5] shadow-none rounded-xl px-6 py-2 hover:text-white">
          Open
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white w-[826px] h-[412px] flex justify-between p-5 rounded-3xl">
        <div className="flex justify-between">
          <img
            className="w-[377px] h-[364px] object-center object-cover rounded-xl"
            src="food.1.png"
          />
          <div className="absolute ml-[730px] border p-1 rounded-xl">
            <X />
          </div>
        </div>
        <div className="flex flex-col justify-between p-4">
          <DialogHeader>
            <DialogTitle className="font-[600] text-[30px] leading-9 text-red-500 p-2">
              Sunshine Stackers
            </DialogTitle>
          </DialogHeader>
          <p className="text-[16px] leading-6 text-[#09090B]">
            Fluffy pancakes stacked with fruits, cream, syrup, and powdered
            sugar.
          </p>
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <p className="text-[16px] leading-6 text-[#09090B]">
                Total price
              </p>
              <p className="text-[24px] leading-8 text-[#09090B] font-[600]">
                $12.99
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-[34px] h-[34px] rounded-full border">
                -
              </button>
              <p>1</p>
              <button className="w-[34px] h-[34px] rounded-full border">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="w-[377px] h-[44px] rounded-full text-white hover:bg-white hover:text-black shadow-none hover:border">
              Add to cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
