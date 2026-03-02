import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getImgPath } from "@/utils/image";

const Footer = () => {
  return (
    <footer className="bg-darkmode relative z-1 border-t border-dark_border px-6">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-0">
          {/* LEFT — LOGO + BUTTON */}
          <div className="md:col-span-4 sm:col-span-6 col-span-12 border-b sm:border-r sm:border-b-0 border-dark_border flex items-center justify-center sm:justify-start py-10">
            <div className="text-center sm:text-left w-full">
              <Link href="/" className="flex justify-center sm:justify-start">
                <Image
                  src={getImgPath("/images/logo/logo-icon.svg")}
                  alt="logo"
                  width={300}
                  height={40}
                  style={{ width: "auto", height: "auto" }}
                  quality={100}
                  unoptimized
                />
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-blue-700 transition inline-block text-center mt-6"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          {/* MIDDLE — SUPPORT */}
          <div className="md:col-span-4 sm:col-span-6 col-span-12 border-b md:border-r sm:border-b-0 border-dark_border flex flex-col items-center sm:items-start justify-center py-10 px-4">
            <span className="text-lg font-bold text-white">Support</span>

            <div className="flex flex-col gap-3 mt-4 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <p className="text-base font-bold text-white">Phone:</p>
                <Link
                  href="tel:+91 9344172263"
                  className="text-xl text-white/50 hover:text-white"
                >
                  +91 9344172263
                </Link>
              </div>

              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <p className="text-base font-bold text-white">Email:</p>
                <Link
                  href="mailto:projecthubsolutionz@gmail.com"
                  className="text-xl text-white/50 hover:text-white"
                >
                  projecthubsolutionz@gmail.com
                </Link>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <ul className="flex items-center gap-4 mt-6">
              {/* Call */}
              <li className="group">
                <Link href="tel:+91 9344172263">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="#A3BBD1"
                    className="group-hover:fill-primary transition"
                  >
                    <path d="M20.01 15.38c-1.21 0-2.39-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.73l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 11.72 21 21.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                </Link>
              </li>

              {/* Email */}
              <li className="group">
                <Link href="mailto:projecthubsolutionz@gmail.com">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 25 25"
                    fill="#A3BBD1"
                    className="group-hover:fill-primary transition"
                  >
                    <path d="M20 4H5C3.9 4 3.01 4.9 3.01 6L3 18C3 19.1 3.9 20 5 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12 13.9L4.4 8.25V6L12 11.75L19.6 6V8.25Z" />
                  </svg>
                </Link>
              </li>

              {/* Instagram */}
              <li className="group">
                <Link href="https://www.instagram.com/project_hub_24?utm_source=qr&igsh=MTdhMTAyZHNnZjh5ag==">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="#A3BBD1"
                    className="group-hover:fill-primary transition"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="21"
                      height="21"
                      rx="5"
                      ry="5"
                      stroke="#A3BBD1"
                      strokeWidth="1.5"
                      fill="none"
                      className="group-hover:stroke-primary"
                    />
                    <circle
                      cx="12.5"
                      cy="12.5"
                      r="5"
                      stroke="#A3BBD1"
                      strokeWidth="1.5"
                      fill="none"
                      className="group-hover:stroke-primary"
                    />
                    <circle
                      cx="18.5"
                      cy="6.5"
                      r="1"
                      fill="#A3BBD1"
                      className="group-hover:fill-primary"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT — CONNECT WITH US */}
          <div className="md:col-span-4 col-span-12 sm:flex sm:items-center sm:justify-end py-10 px-4">
            <div className="text-center sm:text-left w-full">
              <span className="font-bold text-white text-2xl">
                Connect with Us
              </span>
              <p className="text-white/50 text-base mt-4 text-xl">
                Follow us on social media or reach out via email/phone for any
                queries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="text-center p-7 border-t border-dark_border">
        <ul className="flex justify-center mb-4 items-center gap-6 flex-wrap">
          {["About", "Services", "Portfolio", "Blog", "Contact"].map(
            (item, i) => (
              <li
                key={i}
                className="text-base text-white/50 hover:text-primary transition"
              >
                <Link
                  href={`/${
                    item.toLowerCase() === "about" ||
                    item.toLowerCase() === "services"
                      ? `#${item.toLowerCase()}`
                      : item.toLowerCase()
                  }`}
                >
                  {item}
                </Link>
              </li>
            ),
          )}
        </ul>

        <p className="text-base text-white/50">
          © 2026 Project Hub. All rights reserved
        </p>
        {/* <p className="text-base text-white/50">All rights reserved</p> */}
        <p className="text-base text-white/50">
          Built for innovators, creators & businesses.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
