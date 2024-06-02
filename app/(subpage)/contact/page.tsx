import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "河南华星计量有限公司 | 联系我们",
  description: "河南华星计量有限公司",
};
export default function page() {
  return (
    <div className="mt-6 mb-6 flex flex-col gap-4 h-[420px]">
      <h1 className="font-bold text-4xl">联系我们</h1>
      <span className="font-bold text-2xl  text-gray-800">
        深圳华星计量检测技术有限公司（总部）
      </span>
      <span className="text-2xl text-gray-700">客服热线：0755-27883026</span>
      <span className="text-2xl text-gray-700">江先生：13670116477</span>
      <span className="text-2xl text-gray-700">
        公司地址：广东省深圳市宝安区新桥街道黄埔社区洪田路155号创新智慧港2栋11楼1102
      </span>
    </div>
  );
}
