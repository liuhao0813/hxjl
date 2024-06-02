import Banner from "@/components/Banner";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Banner />
      {children}
    </div>
  );
}
