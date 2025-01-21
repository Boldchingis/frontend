import { Pencil } from "lucide-react";
export default function FoodCardHome() {
  return (
    <div>
      <div className="bg-white w-[400px] h-[350px] rounded-3xl shadow-lg">
        <div>
          <img
            src="https://media1.popsugar-assets.com/files/thumbor/UaPHoioZJ0WnEl6Mbqnj0rUk-TE=/fit-in/1584x1056/top/filters:format_auto():upscale()/2024/02/07/785/n/1922729/tmp_daiSfS_05bf2b0c6c83396d_GettyImages-1360517004.jpg" //
            className="w-full h-[210px] object-cover object-center rounded-t-3xl"
          />
          <Pencil />
        </div>
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
    </div>
  );
}
