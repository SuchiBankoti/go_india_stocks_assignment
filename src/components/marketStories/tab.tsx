import Image from "next/image";

const fallbackPicture: string = "https://robohash.org/Sheldon.png?set=set4";
export default function Tab(props: {
  story: {
    coverImage: string;
    title: string;
    description: string;
  };
}) {
  const { coverImage, title, description } = props.story;
  return (
    <div className="w-full h-fit flex flex-col my-1 text-base bg-gray-50 text-black rounded shadow shadow-gray-400 hover:shadow-lg">
      <Image
        src={coverImage ? coverImage : fallbackPicture}
        alt="profile"
        width={200}
        height={200}
        className="w-full h-32 rounded-t"
      ></Image>
      <div className="flex flex-col justify-between w-full p-2 text-xs">
        <div className="flex gap-2 my-1 font-semibold">{title}</div>
        <div className="text-sm h-20 overflow-hidden pb-1">{description}</div>
      </div>
    </div>
  );
}
