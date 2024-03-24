"use client";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { MdArrowRight, MdMessage } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-sky-800 h-screen
    ${open ? "w-72" : "w-2"}
    duration-300
    relative`}
    >
      <div className={`w-full ${open ? "flex" : "hidden"} flex-col gap-8`}>
        <div className="flex items-end justify-between h-14 px-2">
          <div className="flex items-center gap-2">
            <CiUser />
            <div>Hello,User</div>
          </div>
          <GoBell />
        </div>
        <div className="w-full h-px bg-white"></div>
        <div className="flex items-center gap-2 p-2">
          <MdMessage />
          <div className="text-white">Disscussion Forum</div>
        </div>
        <div className="flex items-center gap-2 p-2">
          <RiMoneyDollarBoxFill />
          <div className="text-white">Market Stories</div>
        </div>
        <div className="flex items-center gap-2 p-2">
          <div className="text-white px-5">Sentiment</div>
        </div>
        <div className="flex items-center gap-2 p-2">
          <div className="text-white px-5">Market</div>
        </div>
        <div className="flex items-center gap-2 p-2">
          <div className="text-white px-5">Sector</div>
        </div>
      </div>
      <div
        className="text-3xl absolute -right-2 top-1/3 cursor pointer bg-sky-800 text-white h-14 flex items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        <MdArrowRight />
      </div>
    </div>
  );
}
