"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

import top1 from "@/public/images/home/top1.jpg";
import top2 from "@/public/images/home/top20.jpg";
import top3 from "@/public/images/home/top21.jpg";
import top4 from "@/public/images/home/top22.jpg";

export default function Banner() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <Image src={top1} alt="top" className="w-full h-[200px]" />
        </CarouselItem>
        <CarouselItem>
          <Image src={top2} alt="top" className="w-full  h-[200px]" />
        </CarouselItem>
        <CarouselItem>
          <Image src={top3} alt="top" className="w-full h-[200px]" />
        </CarouselItem>
        <CarouselItem>
          <Image src={top4} alt="top" className="w-full h-[200px]" />
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
