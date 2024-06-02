import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex-col">
      <div className="bg-blue-600">
        <ul className="container mx-auto flex justify-center text-white text-lg">
          <Link href="/">
            <li className="p-3 hover:bg-blue-400">首页</li>
          </Link>
          <Link href="/product">
            <li className="p-3 hover:bg-blue-400">产品中心</li>
          </Link>
          {/* <li className="p-3 hover:bg-blue-400">
            <a href="#">客服服务</a>
          </li> */}
          <Link href="/news">
            <li className="p-3 hover:bg-blue-400">新闻资讯</li>
          </Link>
          {/* <li className="p-3 hover:bg-blue-400">
            <a href="#">视频播放</a>
          </li>*/}
          <Link href="/download">
            <li className="p-3 hover:bg-blue-400">在线下载</li>
          </Link>
          <Link href="/contact">
            <li className="p-3 hover:bg-blue-400">联系我们</li>
          </Link>
          <Link href="/about">
            <li className="p-3 hover:bg-blue-400">关于我们</li>
          </Link>
        </ul>
      </div>
      <div className="bg-gray-200 text-center">
        <div className="text-gray-500 pt-2">
          网站ICP备案号：粤ICP备20010120号
        </div>
        <div className="text-gray-500 pt-2">
          Copyright © 2013. A232.up71.com All Rights Reserved 版权所有
          深圳华星计量检测技术有限公司
        </div>
        <div className="text-gray-500 pt-2 pb-4">
          地址:广东省深圳市宝安区新桥街道黄埔社区洪田路155号创新智慧港2栋11楼1102
          电话：0755-27883026 江先生：13670116477 梁先生：18707563684
        </div>
      </div>
    </div>
  );
}
