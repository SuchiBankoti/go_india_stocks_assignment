import Image from "next/image";
import { BiBullseye, BiMessage, BiShare } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

let source: string = "https://robohash.org/Terry.png?set=set4";
export default function Tab() {
  return (
    <div className="w-full h-fit flex gap-1 p-1 text-base bg-gray-50 text-black rounded shadow shadow-gray-400 hover:shadow-lg">
      <Image
        src={source}
        alt="profile"
        width={10}
        height={10}
        className="w-8 h-8 mx-1 border rounded-full"
      ></Image>
      <div className="flex flex-col justify-between w-4/5">
        <div className="flex gap-2 my-1">
          <span className="font-semibold">Lorem ipsum</span>
          <span className="border px-2 border-blue-700 rounded-2xl bg-sky-800 text-white text-xs flex items-center">
            random text
          </span>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          voluptatum eius assumenda temporibus magnam fuga veritatis delectus
          perspiciatis vero.
        </div>
        <div className="flex w-full py-1 justify-between text-xs">
          <div className="flex items-center gap-1">
            <CiHeart />
            <span>2k</span>
          </div>
          <div className="flex items-center gap-1">
            <IoEyeOutline />
            <span>2k</span>
          </div>
          <div className="flex items-center gap-1">
            <BiMessage />
            <span>2k Comments</span>
          </div>
          <div className="flex items-center gap-1">
            <BiShare />
            <span>Share</span>
          </div>
        </div>
      </div>
      <div className="text-xs text-sky-800 w-fit">2 min ago</div>
    </div>
  );
}
