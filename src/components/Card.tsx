"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/utils/util";
import Link from "next/link";
export default function Card({ image, name, books, className, variant }) {
  console.log(books)
  return (
    <Link 
      href={`/explore/${1}`}
      className={cn(
        "bg-[#F2F2EB] border border-[#ECECE3] w-full rounded-[20px] hover:cursor-pointer",
        className,
        variant === "large" ? ' flex flex-col space-y-[24px] py-[12px] px-[16px] w-full' : 'px-[16px] py-[24px] flex flex-row space-x-[24px]'
      )}
      onClick={() => console.log("clicked")}
    >
      <div>
        <Image
          src={image}
          width={48}
          height={48}
          alt="picture"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-black text-[16px] font-medium">{name}</div>
        <div className="text-[#A7A7A7] text-[12px] font-regular">
          {`${books}` + (books > 1) ? " Books" : "Book"}
        </div>
      </div>
    </Link>
  );
}
