import Product from "@/components/Product";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "河南华星计量有限公司 | 产品列表",
  description: "河南华星计量有限公司",
};

export default function page() {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-4xl">服务中心</h1>
      <Product />
    </div>
  );
}
