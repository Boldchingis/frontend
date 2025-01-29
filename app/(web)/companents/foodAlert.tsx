import { HandPlatter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FoodAlert() {
  return (
    <div className="w-[664px] h-[320px] bg-white rounded-3xl flex flex-col items-center justify-center text-center p-6 shadow-lg">
      <h1 className="font-semibold text-black text-2xl mb-4">
        Please select your delivery address!
      </h1>
      <HandPlatter className="text-red-500 w-[142px] h-[116px] mb-4" />
      <Button className="bg-[#F4F4F5] shadow-none rounded-xl px-6 py-2 hover:text-white">
        Close
      </Button>
    </div>
  );
}
