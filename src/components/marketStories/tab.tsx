import Image from "next/image";

let source: string = "https://robohash.org/Terry.png?set=set4";
export default function Tab() {
  return (
    <div className="w-full h-fit flex flex-col p-1 my-5 text-base bg-gray-50 text-black rounded shadow shadow-gray-400 hover:shadow-lg">
      <Image
        src={source}
        alt="profile"
        width={10}
        height={10}
        className="w-full h-32 mx-1"
      ></Image>
      <div className="flex flex-col justify-between w-4/5 p-2 text-xs">
        <div className="flex gap-2 my-1 font-semibold">Lorem ipsum</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          voluptatum eius assumenda temporibus magnam fuga veritatis delectus
          perspiciatis vero.
        </div>
      </div>
    </div>
  );
}
