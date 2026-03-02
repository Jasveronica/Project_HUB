import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio ",
};

const PortfolioList = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
  ];
  return (
    <>
      <HeroSub
        title="Portfolio"
        description="Work That Speaks For Itself, A Showcase Of Projects Crafted With Clean UI, Smooth Flow, & Real-World Impact."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Portfolio />
    </>
  );
};

export default PortfolioList;
