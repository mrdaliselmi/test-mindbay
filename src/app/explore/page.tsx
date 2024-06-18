"use client";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/utils/util";
import React from "react";

export default function page() {
  const cards = [
    { id: 1, name: "test", books: 4 },
    { id: 2, name: "test", books: 4 },
    { id: 3, name: "test", books: 4 },
    { id: 4, name: "test", books: 4 },
    { id: 5, name: "test", books: 4 },
    { id: 6, name: "test", books: 4 },
    { id: 7, name: "test", books: 4 },
  ];
  return (
    <div className="flex flex-row !h-full !w-screen !bg-[#FFFFFF] gap-x-[20px]">
      <Sidebar />
      <div className="flex flex-col w-full mr-[90px] pt-[60px] pl-[100px]">
        <div className="flex flex-col px-[20px] text-[#030303] space-y-[40px]">
          <div className="">
            <span className="font-bold">Explore</span>{" "}
            <span className="font-light">by Author</span>
          </div>
          <div className="grid gap-[12px] p-6 w-full">
            {cards.map((card, index) => (
              <Card
                variant={index % 3 === 0 ? "small" : "large"}
                className={cn(index % 3 === 0 ? "col-span-2" : "")}
                key={card.id}
                name={card.name}
                image=""
                books={card.books}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
