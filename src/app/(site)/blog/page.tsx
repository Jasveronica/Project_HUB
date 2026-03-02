import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponent/HeroSub";

const BlogPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
  ];
  return (
    <>
      <HeroSub
        title="Blog"
        description="Project Hub is a modern,clean,and responsive portfolio created to showcase high-quality mobile app projects,UI designs, and final-year students projects.Built using a premium Next.js + Tailwind CSS template, this portfolio provides a smooth professional experience with fast performance and a beautiful design."
        breadcrumbLinks={breadcrumbLinks}
      />
      <BlogList />
    </>
  );
};

export default BlogPage;
