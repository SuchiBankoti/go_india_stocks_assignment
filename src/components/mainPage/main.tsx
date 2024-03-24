"use client";
import { useState } from "react";
import DisscussionForum from "../disscussionForum/disscussion";
import MarketStories from "../marketStories/market";

export default function MainPage() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-full bg-white overflow-scroll h-screen px-2">
      <>
        <div className="flex w-full h-8 my-2 gap-14">
          <div className="w-2/3">
            <p className="w-fit bg-slate-300 text-red-500 p-1 rounded text-xl font-bold">
              DISSCUSSION FORUMS
            </p>
          </div>
          <div className="w-1/3">
            <p className="w-fit bg-slate-300 text-red-500 p-1 rounded text-xl font-bold">
              MARKET STORIES
            </p>
          </div>
        </div>
        <div className="flex bg-white gap-14 mt-11">
          <DisscussionForum />
          <MarketStories />
        </div>
      </>
    </div>
  );
}
