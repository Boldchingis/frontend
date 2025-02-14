import React from "react";
import OrderList from "./orderList";
import OrderHeader from "./orderHeader";

export default function OrderListHome() {
  return (
    <div className="w-[1560px] bg-gray-50 p-8 mt-10 rounded-2xl">
      <OrderHeader />
      <OrderList />
    </div>
  );
}
