import { useEffect, useState } from "react";
import Tab from "./tab";

export default function DisscussionForum(props: { tab?: number }) {
  const tab = props.tab ?? 0;
  const [forums, setForums] = useState([]);
  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => setForums(data.forums))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div
      className={`flex flex-col gap-11 ${
        tab === 1 ? "w-full" : "w-2/3"
      } h-full`}
    >
      {forums.map((forum, i) => (
        <Tab forum={forum} key={i} />
      ))}
    </div>
  );
}
