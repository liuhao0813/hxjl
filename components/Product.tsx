import Image from "next/image";

import changdulixueshiyanshi from "@/public/images/product/changdulixueshiyanshi.png";
import Link from "next/link";

export default function Product() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4 mb-4">
      <div className="flex flex-col items-center border-solid border-2 border-gray-200">
        <Link href="/product/detail">
          <Image className="w-80" src={changdulixueshiyanshi} alt=""></Image>
          <span className="block text-xl p-2">长度力学实验室</span>
        </Link>
      </div>
      <div className="flex flex-col items-center border-solid border-2 border-gray-200">
        <Link href="/product/detail">
          <Image className="w-80" src={changdulixueshiyanshi} alt=""></Image>
          <span>长度力学实验室</span>
        </Link>
      </div>
      <div className="flex flex-col items-center border-solid border-2 border-gray-200">
        <Link href="/product/detail">
          <Image className="w-80" src={changdulixueshiyanshi} alt=""></Image>
          <span>长度力学实验室</span>
        </Link>
      </div>
      <div className="flex flex-col items-center border-solid border-2 border-gray-200">
        <Link href="/product/detail">
          <Image className="w-80" src={changdulixueshiyanshi} alt=""></Image>
          <span>长度力学实验室</span>
        </Link>
      </div>
      <div className="flex flex-col items-center text-center border-solid border-2 border-gray-200">
        <Link href="/product/detail">
          <Image className="w-80" src={changdulixueshiyanshi} alt=""></Image>
          <span>长度力学实验室</span>
        </Link>
      </div>
      <div className="flex flex-col items-center text-center border-solid border-2 border-gray-200">
        <Link href="/product/detail">
          <Image className="w-80" src={changdulixueshiyanshi} alt=""></Image>
          <span>长度力学实验室</span>
        </Link>
      </div>
      <div className="flex flex-col items-center text-center border-solid border-2 border-gray-200">
        <Link href="/product/detail">
          <Image className="w-80" src={changdulixueshiyanshi} alt=""></Image>
          <span>长度力学实验室</span>
        </Link>
      </div>
      <div className="flex flex-col items-center text-center border-solid border-2 border-gray-200">
        <Link href="/product/detail">
          <Image className="w-80" src={changdulixueshiyanshi} alt=""></Image>
          <span>长度力学实验室</span>
        </Link>
      </div>
    </div>
  );
}
