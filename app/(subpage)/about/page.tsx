import Image from "next/image";
import type { Metadata } from "next";

import banner from "@/public/images/aboutus/banner.jpg";
import aboutus from "@/public/images/aboutus/company1.jpg";

export const metadata: Metadata = {
  title: "河南华星计量有限公司 | 关于我们",
  description: "河南华星计量有限公司",
};

export default function about() {
  return (
    <div className="mt-6 mb-6">
      <div>
        <Image src={banner} alt="about" className="w-full" />
        <p className="text-2xl text-gray-500 mt-4 tracking-widest leading-normal indent-16 break-all hyphens-auto">
          深圳华星计量检测技术有限公司是经中国合格评定国家认可委员会（CNAS）认可的第三方计量检测机构。公司通过了ISO17025国际计量准则认可，得到与CNAS签署互认多边协议的国家和地区实验室机构的承认，所出具校准证书和报告得到国际实验室、合作组织多边互认协议（ILAC—MRA）成员的承认和认可。
          公司自2018年发展至今，为众多客户提供了专业的仪器计量校准/检测，仪器维修，仪器销售等一系列专业的服务。华星计量是中国合格评定认可委员会（CNAS）认可的实验室，注册编号为：CNAS
          L13179。公司计量检测范围涉及长度、温度、湿度、理化、力学、电学、无线电、光学、声学、时间频率等十大领域，覆盖98%以上工厂以及各企业的仪器设备。华星计量可对以上类别范围的仪器进行校准并出具国际认可的校准/检测证书。我们出具的报告满足ISO9000、TS16949、ISO17025等国际体系的要求，校准/检测报告具有权威性、可靠性、公正性。
          华星计量秉着“服务至上，质量第一”原则，科学、公正、准确、高效地为各大客户提供优质快捷的校准服务；为广大企业解决了众多品质难题，赢得了客户和社会的认可与信赖。华星计量检测中心期待与您携手共同发展，共创未来！
        </p>
        <Image src={aboutus} alt="aboutjs" className="w-full"></Image>
      </div>
    </div>
  );
}
