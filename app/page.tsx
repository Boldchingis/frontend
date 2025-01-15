"use client"
import { useState, useEffect } from 'react';


type CategoryType = {
  _id: string;
  categoryName: string; 
};

export default function Home() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5006/food-category");
      const data = await response.json();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div key={category._id}>{category.categoryName}</div>
      ))}
    </div>
  );
  
}
