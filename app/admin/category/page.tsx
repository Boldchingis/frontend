"use client";

import { Categories } from "./dishCategory";
import { Dishes } from "./Dishes";

export default function Home() {
  return (
    <div>
      <Categories />
      <Dishes />
    </div>
  );
}
