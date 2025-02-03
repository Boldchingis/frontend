"use client";

import { useParams } from "next/navigation";
import { useAuthFetch } from "@/app/(Hook)/FetchData";
import { CardComp } from "./WebCard";
export type CategoryType = {
  categoryName: string;
  _id: string;
};

export type FoodType = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
};
export const Dishes = () => {
  const params = useParams();
  const foodCategories = useAuthFetch("food-category") || [];
  const foods = useAuthFetch("food") || [];
  if (!foods || foods.length === 0) return null;
  const filteredFoods = params.id
    ? foods.filter((food) => food.category === params.id)
    : foods;
  return (
    <div className="flex flex-col gap-[54px]">
      {foodCategories.map((category) => {
       
        const categoryFoods = filteredFoods.filter(
          (food) => food.category === category._id
        );

        
        if (categoryFoods.length === 0) return null;

      
        return (
          <div key={category._id}>
            <CardComp
              _id={category._id}
              categoryName={category.categoryName}
              foods={categoryFoods}
            />
          </div>
        );
      })}
    </div>
  );
};


// export const DishesSkeleton = () => {
//   return (
//     <div className="flex flex-col gap-[54px]">
//       {[1, 2, 3].map((index) => (
//         <div key={index}>
//           {/* <CardComp.Skeleton /> */}
//           <CardComp/>
//         </div>
//       ))}
//     </div>
//   );
// };
