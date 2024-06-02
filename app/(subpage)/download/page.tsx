import { CloudDownload, FileBarChart } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "河南华星计量有限公司 | 在线下载",
  description: "河南华星计量有限公司",
};

export default function page() {
  return (
    <div className="flex mt-4 gap-3 mb-10">
      <div className="w-1/4 border-blue-300 border-2">
        <div className="border-b-2 bg-blue-500 p-2 w-full font-bold text-2xl">
          下载类别
        </div>
        <ul className="flex flex-col gap-2 p-4">
          <li className="border-b-gray-300 h-10 inline-flex items-center border-dashed border-b-2">
            电离辐射计量
          </li>
          <li className="border-b-gray-300 h-10 inline-flex items-center border-dashed border-b-2">
            光学计量
          </li>
          <li className="border-b-gray-300 h-10 inline-flex items-center border-dashed border-b-2">
            计量管理概论
          </li>
          <li className="border-b-gray-300 h-10 inline-flex items-center border-dashed border-b-2">
            化学计量
          </li>
          <li className="border-b-gray-300 h-10 inline-flex items-center border-dashed border-b-2">
            力学计量
          </li>
          <li className="border-b-gray-300 h-10 inline-flex items-center border-dashed border-b-2">
            热工计量
          </li>
        </ul>
      </div>
      <div className="w-3/4">
        <h1 className="font-bold text-4xl mb-6">在线下载</h1>
        <ul className="flex flex-col gap-6 p-6">
          <li className="flex gap-1">
            <div className="flex justify-between w-full ">
              <div className="flex flex-col gap-4 w-full">
                <Link href="#">
                  <h1 className="flex font-bold text-blue-400 text-1xl">
                    <FileBarChart />
                    信号发生器检定装置
                  </h1>
                </Link>
                <p className="text-gray-400 text-wrap">
                  上传时间：2024-03-12 15:16:18
                </p>
              </div>
              <Link href="" className="w-1/4">
                <CloudDownload />
                <div>点击下载</div>
              </Link>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="flex justify-between w-full ">
              <div className="flex flex-col gap-4 w-full">
                <Link href="#">
                  <h1 className="flex font-bold text-blue-400 text-1xl">
                    <FileBarChart />
                    信号发生器检定装置
                  </h1>
                </Link>
                <p className="text-gray-400 text-wrap">
                  上传时间：2024-03-12 15:16:18
                </p>
              </div>
              <Link href="" className="w-1/4">
                <CloudDownload />
                <div>点击下载</div>
              </Link>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="flex justify-between w-full ">
              <div className="flex flex-col gap-4 w-full">
                <Link href="#">
                  <h1 className="flex font-bold text-blue-400 text-1xl">
                    <FileBarChart />
                    信号发生器检定装置
                  </h1>
                </Link>
                <p className="text-gray-400 text-wrap">
                  上传时间：2024-03-12 15:16:18
                </p>
              </div>
              <Link href="" className="w-1/4">
                <CloudDownload />
                <div>点击下载</div>
              </Link>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="flex justify-between w-full ">
              <div className="flex flex-col gap-4 w-full">
                <Link href="#">
                  <h1 className="flex font-bold text-blue-400 text-1xl">
                    <FileBarChart />
                    信号发生器检定装置
                  </h1>
                </Link>
                <p className="text-gray-400 text-wrap">
                  上传时间：2024-03-12 15:16:18
                </p>
              </div>
              <Link href="" className="w-1/4">
                <CloudDownload />
                <div>点击下载</div>
              </Link>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="flex justify-between w-full ">
              <div className="flex flex-col gap-4 w-full">
                <Link href="#">
                  <h1 className="flex font-bold text-blue-400 text-1xl">
                    <FileBarChart />
                    信号发生器检定装置
                  </h1>
                </Link>
                <p className="text-gray-400 text-wrap">
                  上传时间：2024-03-12 15:16:18
                </p>
              </div>
              <Link href="" className="w-1/4">
                <CloudDownload />
                <div>点击下载</div>
              </Link>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="flex justify-between w-full ">
              <div className="flex flex-col gap-4 w-full">
                <Link href="#">
                  <h1 className="flex font-bold text-blue-400 text-1xl">
                    <FileBarChart />
                    信号发生器检定装置
                  </h1>
                </Link>
                <p className="text-gray-400 text-wrap">
                  上传时间：2024-03-12 15:16:18
                </p>
              </div>
              <Link href="" className="w-1/4">
                <CloudDownload />
                <div>点击下载</div>
              </Link>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="flex justify-between w-full ">
              <div className="flex flex-col gap-4 w-full">
                <Link href="#">
                  <h1 className="flex font-bold text-blue-400 text-1xl">
                    <FileBarChart />
                    信号发生器检定装置
                  </h1>
                </Link>
                <p className="text-gray-400 text-wrap">
                  上传时间：2024-03-12 15:16:18
                </p>
              </div>
              <Link href="" className="w-1/4">
                <CloudDownload />
                <div>点击下载</div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
