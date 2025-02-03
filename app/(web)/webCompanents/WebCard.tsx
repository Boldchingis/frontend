import { Card } from "@/components/ui/card";
import React from "react";
import { AddOrder } from "../companents/addOrder";
export const CardComp = ({ food, id, setFoods }: any) => {
  if (!food) {
    console.error("Food object is undefined:", food);
    return null; 
  }
  return (
    <Card className="bg-white w-[397px] h-[342px] rounded-3xl border relative">
      <div>
        <img
          src={food.image || "/placeholder-image.jpg"} 
          alt={food.name || "No Name"}
          className="w-[365px] h-[210px] object-cover object-center rounded-xl ml-auto mr-auto mt-4"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mt-2">
          <span className="text-red-500 font-semibold text-[24px]">
            {food.name || "Unnamed Food"}
          </span>
          <span className="text-[18px] font-semibold">
            ${food.price ? food.price.toFixed(2) : "0.00"}
          </span>
        </div>
        <p className="text-[14px] text-gray-600 mt-2">
          {food.ingredients || "No ingredients listed"}
        </p>
      </div>
      <div className="absolute top-40 right-8">
        <div className="h-[44px] w-[44px] rounded-full bg-white flex justify-center items-center text-[28px] text-[#EF4444]">
          <AddOrder food={food} id={id} />
        </div>
      </div>
    </Card>
  );
};
