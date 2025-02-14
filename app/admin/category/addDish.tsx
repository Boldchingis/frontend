import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Plus, Image } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction, useState } from "react";
import { FoodType } from "./filteredFood";

interface AddDishProps {
  categoryName: string;
  _id: string;
  setFoods: Dispatch<SetStateAction<FoodType[]>> | undefined;
}

export const AddDish = ({ categoryName, _id, setFoods }: AddDishProps) => {
  const [loading, setLoading] = useState(false);
  const [food, setFood] = useState({
    name: "",
    price: 0,
    ingredients: "",
    image: "",
    category: _id,
  });

  const [error, setError] = useState<string | null>(null);

  const addDish = async () => {
    if (!food.name || !food.price || !food.ingredients || !food.image) {
      setError("All fields are required.");
      return;
    }

    setLoading(true); 

    try {
      const response = await fetch("http://localhost:5006/food/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(food),
      });

      if (!response.ok) {
        throw new Error("Failed to add dish");
      }

      const newFood = await response.json();
      console.log(newFood);

      setFoods && setFoods((prev) => [...prev, newFood]);

      setLoading(false); 
      setError(null); 
    } catch (error) {
      setLoading(false);
      setError(error instanceof Error ? error.message : "Something went wrong");
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "food-delivery");

      setLoading(true); 

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/duhir31qk/upload`,
          {
            method: "POST",
            body: data,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to upload image");
        }

        const dataJson = await response.json();
        setFood((prev) => ({ ...prev, image: dataJson.secure_url }));

        setLoading(false); 
      } catch (error) {
        setLoading(false);
        setError(error instanceof Error ? error.message : "Image upload failed");
      }
    }
  };

  return (
    <Dialog>
      <DialogTitle className="text-center">
        <DialogTrigger asChild>
          <Button variant="destructive" className="rounded-full p-[10px]">
            <Plus />
          </Button>
        </DialogTrigger>
        <div className="text-center text-sm font-medium mt-6">
          <h4>Add new Dish to</h4>
          <h4>{categoryName}</h4>
        </div>
      </DialogTitle>
      <DialogContent className="flex flex-col gap-6 p-6">
        <DialogHeader className="pb-4 grid gap-4">
          <DialogTitle>Add new dish to {categoryName}</DialogTitle>
        </DialogHeader>
        <div className="flex gap-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="foodName">Food name</Label>
            <Input
              value={food.name}
              id="foodName"
              name="name"
              type="text"
              placeholder="Type food name..."
              onChange={onChange}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="foodPrice">Food price</Label>
            <Input
              value={food.price}
              id="foodPrice"
              name="price"
              type="number"
              placeholder="Enter price..."
              onChange={onChange}
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-1.5">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows={4}
            cols={50}
            className="border rounded-md py-2 px-4 text-sm font-normal"
            placeholder="List ingredients..."
            onChange={onChange}
            value={food.ingredients}
          ></textarea>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <h1 className="text-sm">Food image</h1>
          {food.image !== "" ? (
            <div
              className={`w-full h-[138px] object-cover object-center rounded-t-3xl`}
              style={{ backgroundImage: `url(${food.image})` }}
            ></div>
          ) : (
            <Label
              htmlFor="image"
              className={`h-[138px] border border-dashed rounded-md bg-blue-50 flex flex-col items-center justify-center p-4 gap-2`}
            >
              <div className="rounded-full p-2 bg-background">
                <Image />
              </div>
              <h3 className="text-sm">Choose a file or drag & drop it here</h3>
            </Label>
          )}

          <Input
            id="image"
            name="image"
            type="file"
            className="hidden"
            onChange={handleUpload}
            disabled={loading}
          />
          {loading && <Progress value={33} />}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <DialogFooter className="pt-6">
          <DialogClose asChild>
            <Button
              className="bg-white border shadow-none"
              onClick={() => {
                addDish();
              }}
              disabled={loading} 
            >
              Add dish
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
