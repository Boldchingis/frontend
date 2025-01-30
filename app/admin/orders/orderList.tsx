"use client";
import React from "react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const orders = [
  {
    id: 1,
    email: "Test@gamil.com",
    quantity: 1,
    items: "2 foods",
    date: "2024/12/20",
    price: "$26.97",
    address: "12-р хороо, СБД Sbd negdsen emneleg",
    status: "Pending",
  },
];
export default function OrderList() {
  const [status, setStatus] = useState("");
  const [borderColor, setBorderColor] = useState("");

  const handleChange = (event: any) => {
    const selectedValue = event.target.value;
    setStatus(selectedValue);
    if (selectedValue === "Pending") {
      setBorderColor("border-yellow-500");
    } else if (selectedValue === "Delivered") {
      setBorderColor("border-green-500");
    } else if (selectedValue === "Cancelled") {
      setBorderColor("border-black");
    }
  };
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div
          key={order.id}
          className="grid grid-cols-8 items-center gap-4 border border-gray-200 p-4 "
        >
          <input type="checkbox" className="col-span-1 w-4 h-4" />
          <span className="col-span-1 text-gray-600">{order.quantity}</span>
          <span className="col-span-2 text-gray-800 truncate">
            {order.email}
          </span>
          <span className="col-span-1 text-gray-600">{order.items}</span>
          <span className="col-span-1 text-gray-600">{order.date}</span>
          <span className="col-span-1 text-gray-800">{order.price}</span>
          <Select value={status} onValueChange={handleChange}>
            <SelectTrigger
              className={`font-[600] text-[12px] py-[6px] px-[10px] rounded-full w-[94px] border-2 ${borderColor}`}
            >
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Delivered">Delivered</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  );
}
