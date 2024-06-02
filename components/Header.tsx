"use client";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/logo.jpg";
import contactInfomation from "@/public/images/contact-infomation.jpg";
import { usePathname } from "next/navigation";
import WChat from "./WChat";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className="container mx-auto  ">
        <div className="flex justify-between bg-blue-50">
          <span>欢迎光临深圳华星计量检测技术有限公司网站!</span>
          <ul className="flex">
            <li className="pl-2 pr-2">
              <WChat />
            </li>
            <li className="pl-2 pr-2">QQ</li>
            <li className="pl-2 pr-2">收藏本站</li>
            <li className="pl-2 pr-2">留言反馈</li>
            <li className="pl-2 pr-2">网站地图</li>
          </ul>
        </div>
      </div>
      <div className="container flex justify-between">
        <Image src={logo} alt="深圳华星计量检测技术有限公司"></Image>
        <Image src={contactInfomation} alt="联系我们 0755-27883026"></Image>
      </div>
      <div className="bg-blue-800">
        <ul className="container mx-auto flex justify-start gap-6 text-lg font-semibold text-white ">
          <Link
            href="/"
            className={`link ${pathname === "/" ? "bg-blue-600" : ""}`}
          >
            <li className="p-4 hover:bg-blue-600">首页</li>
          </Link>
          {/* <li className="p-4 hover:bg-blue-600">
            <a href="#">无线电计量检测</a>
          </li>
          <li className="p-4 hover:bg-blue-600">
            <a href="#">电学计量检测</a>
          </li>
          <li className="p-4 hover:bg-blue-600">
            <a href="#">热工计量检测</a>
          </li>
          <li className="p-4 hover:bg-blue-600">
            <a href="#">产品中心</a>
          </li>
          <li className="p-4 hover:bg-blue-600">
            <a href="#">客户服务</a>
          </li> */}
          <Link
            href="/product"
            className={`link ${pathname === "/product" ? "bg-blue-600" : ""}`}
          >
            <li className="p-4 hover:bg-blue-600">服务中心</li>
          </Link>
          <Link
            href="/news"
            className={`link ${pathname === "/news" ? "bg-blue-600" : ""}`}
          >
            <li className="p-4 hover:bg-blue-600">新闻资讯</li>
          </Link>
          <Link
            href="/download"
            className={`link ${pathname === "/download" ? "bg-blue-600" : ""}`}
          >
            <li className="p-4 hover:bg-blue-600">在线下载</li>
          </Link>
          <Link
            href="/contact"
            className={`link ${pathname === "/contact" ? "bg-blue-600" : ""}`}
          >
            <li className="p-4 hover:bg-blue-600">联系我们</li>
          </Link>
          <Link
            href="/about"
            className={`link ${pathname === "/about" ? "bg-blue-600" : ""}`}
          >
            <li className="p-4 hover:bg-blue-600">关于我们</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
