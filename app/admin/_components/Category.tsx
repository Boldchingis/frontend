"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
type CategoryType = {
  categoryName: string;
  _id: string;
};

export default function Home() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const addCategory = async () => {
    const categoryName = prompt("Enter new category name");
    const response = await fetch("http://localhost:5006/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName }),
    });
    const data = await response.json();
    setCategories([...categories, data.newItem]);
  };
  async function fetchAll() {
    const res = await fetch(`http://localhost:5006/food-category`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setCategories(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="bg-white  w-[1171px] h-[176px] p-6 rounded-xl ">
      <h4 className="text-[20px], font-[600]">Dishes category </h4>
      <div>
        {categories?.map((category) => (
          <Badge className="gap-5" variant="outline" key={category._id}>
            {category.categoryName}
          </Badge>
        ))}
        <button
          className="size-[36px] bg-red-500 rounded-xl"
          onClick={addCategory}
        >
          +
        </button>
      </div>
    </div>
  );
}
