"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getImgPath } from "@/utils/image";
import Toast from "@/components/Common/Toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    specialist: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToastVisible(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          specialist: "",
          date: "",
          time: "",
        });
      } else {
        alert("Failed to schedule appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toast
        message="Your appointment has been successfully scheduled. Our team will contact you ASAP."
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
        duration={5000}
      />
      <section className="dark:bg-darkmode md:pb-24 pb-16">
        <section id="contact-form" className="pt-20 pb-10">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
              <div className="col-span-6">
                <h2 className="max-w-72 text-[40px] leading-tight font-bold mb-9 text-midnight_text dark:text-white">
                  Get Online Consultation
                </h2>
                <form
                  className="flex flex-wrap w-full m-auto justify-between"
                  onSubmit={handleSubmit}
                >
                  <div className="sm:flex gap-3 w-full">
                    <div className="mx-0 my-2.5 flex-1">
                      <label
                        htmlFor="first-name"
                        className="pb-3 inline-block text-base text-midnight_text dark:text-white"
                      >
                        First Name*
                      </label>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full text-base px-4 rounded-lg py-2.5 border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                        type="text"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="mx-0 my-2.5 flex-1">
                      <label
                        htmlFor="last-name"
                        className="pb-3 inline-block text-base text-midnight_text dark:text-white"
                      >
                        Last Name*
                      </label>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                        type="text"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="sm:flex gap-3 w-full">
                    <div className="mx-0 my-2.5 flex-1">
                      <label
                        htmlFor="email"
                        className="pb-3 inline-block text-base text-midnight_text dark:text-white"
                      >
                        Email address*
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        type="email"
                        placeholder="your@email.com"
                        className="w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                      />
                    </div>
                    <div className="mx-0 my-2.5 flex-1">
                      <label
                        htmlFor="specialist"
                        className="pb-3 inline-block text-base text-midnight_text dark:text-white"
                      >
                        Specialist*
                      </label>
                      <select
                        name="specialist"
                        value={formData.specialist}
                        onChange={handleChange}
                        required
                        className="w-full text-base px-4 py-2.5 rounded-lg border-border dark:text-white border-solid dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0"
                      >
                        <option value="">Choose a specialist</option>
                        <option value="Business Consultant">
                          Business Consultant
                        </option>
                        <option value="Technical Expert">
                          Design Specialist
                        </option>
                        <option value="Design Specialist">
                          Project Manager
                        </option>
                        <option value="Project Manager">Careers</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:flex gap-3 w-full">
                    <div className="mx-0 my-2.5 flex-1">
                      <label
                        htmlFor="date"
                        className="pb-3 inline-block text-base text-midnight_text dark:text-white"
                      >
                        Date*
                      </label>
                      <input
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full text-base px-4 rounded-lg  py-2.5 outline-hidden dark:text-white dark:bg-darkmode border-border border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0"
                        type="date"
                      />
                    </div>
                    <div className="mx-0 my-2.5 flex-1">
                      <label
                        htmlFor="time"
                        className="pb-3 inline-block text-base text-midnight_text dark:text-white"
                      >
                        Time*
                      </label>
                      <input
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full text-base px-4 rounded-lg py-2.5 border-border outline-hidden dark:text-white dark:bg-darkmode border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0"
                        type="time"
                      />
                    </div>
                  </div>
                  <div className="mx-0 my-2.5 w-full">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                    >
                      {loading ? "Scheduling..." : "Make an appointment"}
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-span-6">
                <Image
                  src={getImgPath("/images/contact-page/contact.jpg")}
                  alt="Contact"
                  width={1300}
                  height={0}
                  quality={100}
                  style={{ width: "100%", height: "auto" }}
                  className="bg-no-repeat bg-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ContactForm;
