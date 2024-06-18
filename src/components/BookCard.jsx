import React from "react";

export default function BookCard({ name, date }) {
  return (
    <div className="bg-[#F2F2EB] rounded-[20px] py-[24px] px-[16px] flex flex-col space-y-[32px] w-full text-start">
      <div className="text-md font-medium text-[#030303]">{name}</div>
      <div className="text-[14px] text-[#3A5959]">Published: {date}</div>
    </div>
  );
}
