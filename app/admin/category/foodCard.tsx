"use client";
import { useState, useEffect } from "react";
import { Uploader } from "./Uploader";

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
  const [newFoodImage, setNewFoodImage] = useState("");

  const addFood = async () => {
    const foodName = prompt("Enter new food name");
    const price = parseFloat(prompt("Enter price ") || "0");
    const ingredients = prompt("Enter ingredients ");
    if (!newFoodImage) {
      alert("Hool nemheesee omno zurag oruulna uu");
      return;
    }
    const response = await fetch("http://localhost:5006/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodName,
        price,
        ingredients,
        image: newFoodImage,
      }),
    });
    const data = await response.json();
    setFoods([...foods, data.newItem]);
    setNewFoodImage("");
  };
  async function fetchAll() {
    const res = await fetch(`http://localhost:5006/food`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
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
                  src={food.image}
                  alt={food.foodName || "No Name"}
                  className="w-full h-[135px] object-cover object-center rounded-t-3xl"
                />
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
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-red-500 w-[270px] h-[241px] bg-white rounded-2xl shadow-md">
          <Uploader setImage={setNewFoodImage} />
          <p className="font-[700]"> Add new dish</p>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-2xl"
            onClick={addFood}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
