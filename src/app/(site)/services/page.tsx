import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import Services from "@/components/Home/Services";
export const metadata: Metadata = {
  title: "Services",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Services"
        description="Project Hub specializes in modern frontend development, mobile app UI screens, and custom features for business and student projects.We build fast, clean, and responsive user interfaces and integrate any client-provided APIs for dynamic functionality."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Services />
    </>
  );
};

export default page;
