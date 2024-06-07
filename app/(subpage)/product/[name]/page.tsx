import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

import company from "@/public/images/home/company.jpg";

export async function generateStaticParams() {
  return [
    {
      name: "detail",
    },
  ];
}

export default function page() {
  return (
    <>
      <div className="flex justify-between gap-4 mt-16">
        <div className="w-2/5">
          <Image src={company} alt="ddd" className="w-full"></Image>
          <div className="border-gray-500 border-solid">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselItem className="basis-1/5">
                  <Image src={company} alt="top" className="w-20 h-20" />
                </CarouselItem>
                <CarouselItem className="basis-1/5">
                  <Image src={company} alt="top" className="w-20 h-20" />
                </CarouselItem>
                <CarouselItem className="basis-1/5">
                  <Image src={company} alt="top" className="w-20 h-20" />
                </CarouselItem>
                <CarouselItem className="basis-1/5">
                  <Image src={company} alt="top" className="w-20 h-20" />
                </CarouselItem>
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
            </Carousel>
          </div>
        </div>
        <div className="flex flex-col w-3/5">
          <h1 className="font-bold text-2xl">
            长度力学试验
            <span className="text-xl text-gray-400">(长度力学检测)</span>
          </h1>
          <span className="text-xl text-gray-400">2024-06-05 10:12:33</span>
          <span className="text-3xl text-red-500">$ 0.00</span>
          <p className="text-xl text-gray-500 mt-4 tracking-widest leading-normal indent-12 break-all hyphens-auto">
            长度实验室：本实验室量传历史悠久、标准设备最为齐全、检测维修能力较强。实验室建有量块、平直度、粗糙度、光学仪器、测绘仪器、通用量具、精密测量、三坐标测量机、圆度仪、验光标准器组等几十项社会公用计量标准，提供检测和校准服务，开展各项目计量仪器的校准、检测与修理。
            力学实验室：本实验室配备了活塞压力计、质量比较仪、标准测力仪、能量发生器、弹簧冲击锤、能量发生器、扭矩测试仪、材料试验机、标准转速装置、压力校准装置、精密天平、微差压检定装置等精密仪器及标准件，可开展质量、衡器、力值、能量、扭矩、转速、压力、硬度、振动、冲击、密度、容量等项目的校准、检测与修理。
            产品订购热线：4006-929-878 在线购买
          </p>
          <div className="flex flex-col gap-4 mt-4 justify-center items-center  border-2 border-solid border-blue-500 rounded-md p-4">
            <span className="font-bold">产品订购热线：4006-929-878</span>
            <Button
              variant="default"
              className="pr-16 pl-16 bg-blue-500 hover:bg-blue-400"
            >
              在线咨询
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full border-b-2 border-b-blue-500">
        <h1 className="font-bold text-2xl text-blue-500">产品详情</h1>
      </div>
      <div className="mb-6 mt-6">
        <h1 className="font-bold text-2xl">长度实验室开展校准／检测项目：</h1>
        <p className="text-xl text-gray-500 mt-4 tracking-widest leading-normal indent-12 break-all hyphens-auto">
          量块、平晶、干涉仪、测长仪、经纬仪、水准仪、测厚仪、坐标测长机、光学计、投影仪、影像测绘仪、激光对中仪、万能工具显微镜、电动轮廓仪、气动量仪、偏摆仪、测微仪、液塑限测定仪、直角尺检定仪、百分表检定仪、千分表检定仪、量仪测力仪、水平仪检定器、水平仪零位检定器、测量显微镜、读数显微镜、金相显微镜、光学平直仪、水平尺、电子水平仪、合象水平仪、框式水平仪、平板、平尺、宽座角尺、刀口尺、线纹钢直角尺、万能角尺、卡尺、千分尺、指示表、内径表、杠杆表、数显表、钢卷尺、钢直尺、塞尺、工程检测尺、方箱、环规、螺纹量规、表面粗糙度样块、半径样板、螺纹样板、滑板式汽车侧滑检验台、轮偏检测仪、线缆计米器、线速激光测径等。
        </p>
        <h1 className="mt-6 font-bold text-2xl">
          力学实验室开展校准／检测项目：
        </h1>
        <div className="text-xl text-gray-500 mt-4 tracking-widest leading-normal break-all hyphens-auto">
          <ul className="list-none list-inside">
            <li>（1）砝码和质量测量仪器类：标准砝码、专用砝码等。</li>
            <li>
              （2）指示秤等衡器类：电子天平、机械天平、架盘天平、扭力天平、液体比重天平、电子秤、电于皮带秤、定量包装秤、定量自动衡器、台秤等。
            </li>
            <li>
              （3）拉力试验机、推拉力计、扭矩等力值测量仪器类：推拉力计、数字式压力计、万能材料试验机等。
            </li>
            <li>
              （4）压力表和真空表等表类：精密压力表、数字压力表、压力（差压、绝对压）变送器、液体压力计、U型压力计、氧气乙炔表等。
            </li>
            <li>
              （5）布、洛、维及橡胶等各类硬度计：硬度计等各种金属硬度计、邵氏硬度计、定负荷橡胶国际硬度计、微型橡胶国际硬度计等各种非金属硬度计、韦氏硬度计、巴氏硬度计等。
            </li>
            <li>
              （6）转速测量仪器类：机械式转速表、数字式转速表、转速检定装置等。
            </li>
            <li>
              （7）振动仪器类：机械振动台、数字振动台、振动测试仪、测振仪等。
            </li>
            <li>
              （8）密度计、比重计、波美计等玻璃量具类：滴定管、量筒、量杯、分度吸管等。
            </li>
            <li>
              （9）安规类设备：弹簧冲击锺、摇摆试验机、寿命试验机、球压装置、试验箱、摆锺冲击试验机等。
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
