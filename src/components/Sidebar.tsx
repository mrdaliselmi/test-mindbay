import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-[#FCFCFC] w-[282.88px] h-screen overflow-hidden flex flex-col text-md relative px-[20px]">
      <div className="flex flex-col mt-[50.6px] space-y-[76px]">
        <div className="flex justify-center text-center">
          <Image width={199.87} height={47.44} src="/Frame_196.png" alt="NextLogo" />
        </div>
        <Link href={'/home'} className="flex flex-col space-y-[30px]">
          <div className="text-[#6C6C6C] text-[14px] font-medium flex flex-row gap-x-[8px] p-[16px] items-center">
            <Image src="/Icon.png" width={36} height={36} alt="Icon" />
            <div>Home</div>
          </div>
          <Link href={'/explore'} className="text-[#4B97F1] text-[14px] font-medium flex flex-row gap-x-[8px] p-[16px] items-center">
            <Image src="/explore.png" width={36} height={36} alt="Icon" />
            <div>Explore</div>
          </Link>
        </Link>
      </div>
      <div className="flex flex-row absolute bottom-[48px] items-center pl-[25.3px] py-[10.12]">
        <Image src="/logout.png" width={38.92} height={38.92} alt="Icon" />
        <div className="text-[#6C6C6C] text-[14px] font-medium">Logout</div>
      </div>
    </div>
  );
}
