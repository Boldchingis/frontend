"use client";
import { Pencil } from "lucide-react";
import { useState, useEffect } from "react";

type FoodType = {
  foodName: string;
  price: number;
  ingredients: string;
  image: string;
  _id: string;
};

export default function FoodCardHome() {
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addFood = async () => {
    const foodName = prompt("Enter new food name");
    const price = parseFloat(prompt("Enter price ") || "0");
    const ingredients = prompt("Enter ingredients ");

    const response = await fetch("http://localhost:5006/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ foodName, price, ingredients }),
    });

    const data = await response.json();
    setFoods([...foods, data.newItem]);
  };

  async function fetchAll() {
    const res = await fetch(`http://localhost:5006/food`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      console.error("Failed to fetch food data");
      return;
    }

    const data = await res.json();
    setFoods(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="w-screen-full h-screen bg-white rounded-2xl mt-5">
      <div className="grid grid-cols-5 gap-6 p-12">
        {foods.map((food) =>
          food ? (
            <div
              key={food._id}
              className="bg-white w-[270px] h-[241px] rounded-3xl border"
            >
              <div>
                <img
                  src="https://i.ytimg.com/vi/8tpqNEoJpEs/maxresdefault.jpg"
                  alt={food.foodName || "No Name"}
                  className="w-full h-[135px] object-cover object-center rounded-t-3xl"
                />
                {/* <Pencil /> */}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mt-2">
                  <p className="text-red-500 font-semibold text-[14px]">
                    {food.foodName || "Unnamed Food"}
                  </p>
                  <p className="text-[12px] font-semibold">
                    ${food.price ? food.price.toFixed(2) : "0.00"}
                  </p>
                </div>
                <p className="text-[12px] text-gray-600 mt-2">
                  {food.ingredients || "No ingredients listed"}
                </p>
              </div>
            </div>
          ) : null
        )}
        <button
          className="flex flex-col items-center justify-center border-2 border-dashed border-red-500 w-[270px] h-[241px] bg-white rounded-2xl shadow-md"
          onClick={addFood}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full text-2xl font-bold">
            +
          </div>
          <p className="text-gray-600 mt-4 text-center text-sm">Add new Dish</p>
        </button>
      </div>
    </div>
  );
}
