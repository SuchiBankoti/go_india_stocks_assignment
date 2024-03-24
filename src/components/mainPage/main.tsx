"use client";
import { useState, useEffect } from "react";
import DisscussionForum from "../disscussionForum/disscussion";
import MarketStories from "../marketStories/market";

export default function MainPage() {
  const [activeTab, setActiveTab] = useState(1);
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
  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-full bg-white overflow-y-auto h-screen px-2">
      {!isMobile && <DesktopComponent />}
      {isMobile && (
        <MobileComponent
          handleTabChange={handleTabChange}
          activeTab={activeTab}
        />
      )}
      {/* <>
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
      </> */}
    </div>
  );
}

const DesktopComponent = () => {
  return (
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
  );
};
const MobileComponent = (props: {
  handleTabChange: (tab: number) => void;
  activeTab: number;
}) => {
  return (
    <>
      <div className="flex w-full h-8 my-2 bg-sky-800 rounded text-sm font-bold items-center">
        <div
          className="w-1/2 p-1 text-center cursor-pointer hover:bg-sky-600"
          onClick={() => props.handleTabChange(1)}
        >
          DISSCUSSION FORUMS
        </div>
        <div
          className="w-1/2 p-1 text-center cursor-pointer hover:bg-sky-600"
          onClick={() => props.handleTabChange(2)}
        >
          MARKET STORIES
        </div>
      </div>
      <div className="flex bg-white gap-14 mt-11">
        {props.activeTab === 1 && <DisscussionForum tab={props.activeTab} />}
        {props.activeTab === 2 && <MarketStories tab={props.activeTab} />}
      </div>
    </>
  );
};
