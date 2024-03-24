import { useEffect, useState } from "react";
import Tab from "./tab";

export default function MarketStories(props: { tab?: number }) {
  const tab = props.tab ?? 0;
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => setStories(data.stories))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div
      className={`flex flex-col gap-11 ${
        tab === 2 ? "w-full" : "w-1/3"
      } h-full`}
    >
      {stories.map((story, i) => (
        <Tab story={story} key={i} />
      ))}
    </div>
  );
}
