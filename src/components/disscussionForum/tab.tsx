import Image from "next/image";
import { BiMessage, BiShare } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const fallbackProfilePicture: string =
  "https://robohash.org/Sheldon.png?set=set4";
export default function Tab(props: {
  forum: {
    name: string;
    sector: string;
    likes: string;
    views: string;
    comments: string;
    profilePicture: string;
    timePost: string;
    description: string;
  };
}) {
  const {
    name,
    sector,
    likes,
    views,
    comments,
    profilePicture,
    timePost,
    description,
  } = props.forum;
  return (
    <div className="w-full h-fit flex gap-1 p-1 text-base bg-gray-50 text-black rounded shadow shadow-gray-400 hover:shadow-lg">
      <Image
        src={profilePicture ? profilePicture : fallbackProfilePicture}
        alt="profile"
        width={200}
        height={200}
        className="w-8 h-8 mx-1 border rounded-full"
        // onError={(e) => {
        //   e.target.src = fallbackProfilePicture;
        // }}
      ></Image>
      <div className="flex flex-col justify-between w-4/5">
        <div className="flex gap-2 my-1">
          <span className="font-semibold">{name}</span>
          <span className="border px-2 border-blue-700 rounded-2xl bg-sky-800 text-white text-xs flex items-center">
            {sector}
          </span>
        </div>
        <div className="text-sm overflow-hidden max-h-16">{description}</div>
        <div className="flex w-full py-1 justify-between text-xs">
          <div className="flex items-center gap-1">
            <CiHeart />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <IoEyeOutline />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <BiMessage />
            <span>{comments} Comments</span>
          </div>
          <div className="flex items-center gap-1">
            <BiShare />
            <span>Share</span>
          </div>
        </div>
      </div>
      <div className="text-xs text-sky-800 w-16">{timePost}</div>
    </div>
  );
}
