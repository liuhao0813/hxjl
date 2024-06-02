import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import WChatImage from "@/public/images/aboutus/banner.jpg";

export default function WChat() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>微信</TooltipTrigger>
        <TooltipContent>
          <Image src={WChatImage} alt="weixin" className="w-40 h-40"></Image>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
