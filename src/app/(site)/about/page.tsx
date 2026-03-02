import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <HeroSub
        title="About Us"
        description="Project Hub is a growing development team dedicated to creating modern, reliable, and impactful digital products. We build web applications, Android mobile apps, and academic final-year projects (major & mini) for students, startups, and small businesses.Our focus is on clean development, fast execution, and solutions that truly add value."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Counter isColorMode={true} />
      <Progresswork isColorMode={true} />
    </>
  );
};

export default page;
