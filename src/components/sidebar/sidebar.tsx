"use client";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { MdArrowRight, MdMessage } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`bg-sky-800 h-screen
    ${open ? (isMobile ? "w-1/2" : "w-1/3") : "w-2"}
    duration-300
    ${isMobile ? "absolute" : "relative"}`}
    >
      <div className={`w-full ${open ? "flex" : "hidden"} flex-col gap-8 pt-6`}>
        <div className="flex items-center justify-between p-2 hover:bg-sky-600">
          <div className="flex items-center gap-2">
            <CiUser />
            <div>Hello,User</div>
          </div>
          <GoBell />
        </div>
        <div className="w-full h-px bg-white"></div>
        <div className="flex items-center gap-2 p-2 hover:bg-sky-600">
          <MdMessage />
          <div className="text-white">Disscussion Forum</div>
        </div>
        <div className="flex items-center gap-2 p-2 hover:bg-sky-600">
          <RiMoneyDollarBoxFill />
          <div className="text-white">Market Stories</div>
        </div>
        <div className="flex items-center gap-2 p-2 hover:bg-sky-600">
          <div className="text-white px-5">Sentiment</div>
        </div>
        <div className="flex items-center gap-2 p-2 hover:bg-sky-600">
          <div className="text-white px-5">Market</div>
        </div>
        <div className="flex items-center gap-2 p-2 hover:bg-sky-600">
          <div className="text-white px-5">Sector</div>
        </div>
      </div>
      <div
        className="text-3xl absolute -right-2 top-1/3 cursor-pointer bg-sky-800 text-white h-14 flex items-center border border-white"
        onClick={() => setOpen((prev) => !prev)}
      >
        <MdArrowRight />
      </div>
    </div>
  );
}
