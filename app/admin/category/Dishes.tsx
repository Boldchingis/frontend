"use client";
import { useEffect, useState } from "react";
import { FilteredFood } from "./filteredFood";
import { useParams } from "next/navigation";

export type CategoryType = {
  categoryName: string;
  _id: string;
};

export const Dishes = () => {
  const [foodCategory, setFoodCategory] = useState<CategoryType[]>();
  const params = useParams();
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("http://localhost:5006/food-category");
      const data = await response.json();
      setFoodCategory(data);
    };

    fetchCategory();
  }, []);
  console.log(foodCategory);
  return (
    <div className="flex flex-col gap-5 w-11/12 ">
      {!params.id
        ? foodCategory?.map((category) => (
            <div key={category._id}>
              <FilteredFood
                _id={category._id}
                categoryName={category.categoryName}
              />
            </div>
          ))
        : foodCategory
            ?.filter((category) => category._id === params.id)
            .map((category) => (
              <div key={category._id}>
                <FilteredFood
                  _id={category._id}
                  categoryName={category.categoryName}
                />
              </div>
            ))}
    </div>
  );
};
