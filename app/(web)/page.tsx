import { ShoppingCart } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { User } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "./footer";
import Link from "next/link";
import "./styles.css";
type CategoryType = {
  categoryName: string;
  _id: string;
};
export default function App() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
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
    <div>
      <div className="w-[full] h-[68px] bg-[#18181B] flex items-center justify-between  ">
        <Link href={"/admin/"}>
          <img className="w-[146px] h-[44px] ml-16 " src="homelogo.png" />
        </Link>
        <div className="text-white flex  mr-16 gap-4 ">
          <ShoppingCart />
          <User />
        </div>
      </div>

      <img className="w-full h-[700px]" src="homepic.png" />

      <div className="text-[30px] font-[600] text-white ml-16 mt-8">
        Categories
      </div>
      <div className="flex gap-4  px-8 py-4 ">
        {categories?.map((category) => (
          <div
            key={category._id}
            className="px-6 py-3 rounded-full text-black text-sm font-medium bg-white"
          >
            {category.categoryName}
          </div>
        ))}
      </div>

      <div className="bg-white w-[400px] h-[350px] rounded-3xl shadow-lg">
        <img
          src="food.1.png" //
          alt="Finger food"
          className="w-full h-[210px] object-cover object-center rounded-t-3xl"
        />
        <div className="p-4">
          <div className="flex justify-between items-center mt-2">
            <p className="text-red-500 font-semibold text-2xl">Finger food</p>
            <p className="text-lg font-semibold">$12.99</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Fluffy pancakes stacked with fruits, cream, syrup, and powdered
            sugar.
          </p>
        </div>
      </div>
      <div className="bg-[#18181B] w-full h-16"></div>
  <Footer/>
    </div>
  );
}
