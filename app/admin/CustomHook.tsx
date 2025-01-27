"use client";
import path from "path";
import { useEffect, useState } from "react";
import { CategoryType } from "./category/Dishes";

export function useAuthFetch(path: string) {
  const [data, setData] = useState<CategoryType[]>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5006/${path}`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return data;
}
