import Link from "next/link";
type Dishesh = {
  foodName: String,
    image: String,
    price: Number,
    ingredients: String,
};

type Props = {
  title: string;
  endpoint: string;
};

export const options = {
  method: "GET",
  headers:{

  }
};

export const Section = async ({ title, endpoint }: Props) => {
  const res = await fetch(`http://localhost:5006/food-category`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  const dishes: Dishesh[] = data.results;

  return (
<div>hi</div>
  )
};