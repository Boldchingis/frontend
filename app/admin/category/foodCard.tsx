export default function FoodCardHome() {
  return (
    <div>
      <div className="bg-white w-[400px] h-[350px] rounded-3xl shadow-lg">
        <img
          src="meat.png" //
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
    </div>
  );
}
