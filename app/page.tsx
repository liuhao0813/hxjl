import Image from "next/image";
import banner from "@/public/images/banner1.jpg";
import top from "@/public/images/home/top.jpg";
import top1 from "@/public/images/home/top1.jpg";
import top20 from "@/public/images/home/top20.jpg";
import top21 from "@/public/images/home/top21.jpg";
import top22 from "@/public/images/home/top22.jpg";
import top23 from "@/public/images/home/top23.jpg";
import top24 from "@/public/images/home/top24.jpg";
import top25 from "@/public/images/home/top25.jpg";
import top26 from "@/public/images/home/top26.jpg";
import company from "@/public/images/home/company.jpg";

import Link from "next/link";
import Product from "@/components/Product";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "河南华星计量有限公司",
  description: "河南华星计量有限公司",
};

export default function Home() {
  return (
    <>
      <div>
        <Image className="w-full" src={banner} alt="banner"></Image>
      </div>
      <div className="flex justify-end bg-blue-700  pt-3 pb-3 text-white">
        <span className="block p-3 text-lg">热门产品关键词：</span>
        <div className="flex w-3/4 pr-4 space-x-4">
          <input
            type="text"
            className="block flex-1 w-full focus:border-none active:border-none"
            placeholder="请输入产品名称"
          ></input>
          <button className="bg-blue-400 p-3" type="submit">
            搜索
          </button>
        </div>
      </div>
      <div>
        <Image className="w-full" src={top} alt="top"></Image>
        <Image className="w-full" src={top1} alt="top"></Image>
      </div>
      <div className="flex justify-between space-x-4 pb-4">
        <div className="flex w-full justify-between border-solid border-gray-200 border-2">
          <Image src={top} className="w-28 h-28" alt="长度力学试验..."></Image>
          <div className="flex flex-col justify-center text-right text-gray-500">
            <span className="text-4xl pb-2">长度力学试验...</span>
            <span className="text-2xl">还有10款</span>
          </div>
        </div>
        <div className="flex w-full justify-between border-solid border-gray-200 border-2">
          <Image src={top} className="w-28 h-28" alt="长度力学试验..."></Image>
          <div className="flex flex-col justify-center text-right text-gray-500">
            <span className="text-4xl pb-2">长度力学试验...</span>
            <span className="text-2xl">还有10款</span>
          </div>
        </div>
        <div className="flex w-full justify-between border-solid border-gray-200 border-2">
          <Image src={top} className="w-28 h-28" alt="长度力学试验..."></Image>
          <div className="flex flex-col justify-center text-right text-gray-500">
            <span className="text-4xl pb-2">长度力学试验...</span>
            <span className="text-2xl">还有10款</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-blue-600 text-white p-3">
        <div className="space-x-4">
          <span className="text-xl font-bold">新品</span>
          <span className="text-blue-50/25 font-bold">NEW PRODUCTS</span>
        </div>
        <div>
          <Link href={"/product"}>
            <span>更多产品</span>
          </Link>
        </div>
      </div>
      <Product />
      <Image className="w-full" src={top20} alt="top2"></Image>
      <Image className="w-full" src={top21} alt="top2"></Image>
      <Image className="w-full" src={top22} alt="top2"></Image>
      <Image className="w-full" src={top23} alt="top2"></Image>
      <Image className="w-full" src={top24} alt="top2"></Image>
      <Image className="w-full" src={top25} alt="top2"></Image>
      <Image className="w-full" src={top26} alt="top2"></Image>
      <div className="flex justify-between bg-blue-600 text-white p-3">
        <div className="space-x-4">
          <span className="text-xl font-bold">了解我们</span>
          <span className="text-blue-50/25 font-bold">KNOW US</span>
        </div>
        <div>
          <span></span>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex-col flex-1 text-gray-600">
          <div className="p-5">
            <h1 className="font-bold text-4xl">公司简介</h1>
            <h3>Company Profile</h3>
          </div>
          <div className="flex gap-1">
            <Image
              className="w-48 h-48 rounded-full"
              src={company}
              alt="公司简介"
            ></Image>
            <div>
              <h3 className="text-xl font-bold mb-2">Company Profile</h3>
              <p className="mb-4">
                深圳华量计量检测技术有限公司是经中国合格评定国家认可委员会（CNAS）认可的第三方计量校准机构。公司通过了ISO17025国际计量准则的认可，得到与CNAS签署互认多边协议的国家和地区实验室机构的承认，所出具校准证书和报告得到国际实验室、合作组织多边互认协议（ILAC-MRA）成员的承认和认可。公司自2018年发展至今，为众多客户提供了专业的仪器计量校准检测、仪器维修、仪器销售等一系列专业的服务。华量计量是中国合格评定国家认可委员会（CNAS）认可的实验室，注册...
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                [详细]
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col text-gray-600">
          <div className="flex flex-col p-5">
            <h1 className="font-bold text-4xl">公司新闻</h1>
            <h3>Company News</h3>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-1">
              <div className="w-16">04-12</div>
              <div className="flex-col">
                <h1 className="font-bold text-1xl">电离辐射计量</h1>
                <p className="text-sm text-wrap">
                  电离辐射( IonizingRadiat ion
                  )是指能够足以使原子离子化的、由微粒、射线或光子所发出的辐射。它可以影响...
                </p>
              </div>
            </li>
            <li className="flex gap-1">
              <div className="w-16">04-12</div>
              <div className="flex-col">
                <h1 className="font-bold text-1xl">电离辐射计量</h1>
                <p className="text-sm text-wrap">
                  电离辐射( IonizingRadiat ion
                  )是指能够足以使原子离子化的、由微粒、射线或光子所发出的辐射。它可以影响...
                </p>
              </div>
            </li>
            <li className="flex gap-1">
              <div className="w-16">04-12</div>
              <div className="flex-col">
                <h1 className="font-bold text-1xl">电离辐射计量</h1>
                <p className="text-sm text-wrap">
                  电离辐射( IonizingRadiat ion
                  )是指能够足以使原子离子化的、由微粒、射线或光子所发出的辐射。它可以影响...
                </p>
              </div>
            </li>
            <li className="flex gap-1">
              <div className="w-16">04-12</div>
              <div className="flex-col">
                <h1 className="font-bold text-1xl">电离辐射计量</h1>
                <p className="text-sm text-wrap">
                  电离辐射( IonizingRadiat ion
                  )是指能够足以使原子离子化的、由微粒、射线或光子所发出的辐射。它可以影响...
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 mt-6 mb-6">
        <h1 className="font-bold">友情链接：</h1>
        <span className="text-gray-500">
          <Link href={"/register"}>注册计量师培训</Link>
        </span>
        <span className="text-gray-500">
          <Link href={"/register"}>深圳方圆检测</Link>
        </span>
        <span className="text-gray-500">
          <Link href={"/register"}>深圳市计量所</Link>
        </span>
        <span className="text-gray-500">
          <Link href={"/register"}>计量建标培训</Link>
        </span>
        <span className="text-gray-500">
          <Link href={"/register"}>计量检测系统软件</Link>
        </span>
      </div>
    </>
  );
}
