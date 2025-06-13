import React from "react";
import { Button } from "./Button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Where we are:",
      details: "1202 Something St., Country 6000",
      color: "text-cyan-400",
    },
    {
      icon: "📞",
      title: "Customer Care:",
      details: "1234-5678-90",
      color: "text-cyan-400",
    },
    {
      icon: "✉️",
      title: "General Email:",
      details: "support@splashes.com",
      color: "text-cyan-400",
    },
    {
      icon: "🕒",
      title: "Work Time:",
      details: "Mon. - Fri. 09:00 - 24:00",
      color: "text-cyan-400",
    },
  ];

  return (
    <>
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-4">
              <span className="text-gray-800">CONTACT</span>
              <span className="text-cyan-400"> /</span>
              <span className="text-gray-300"> GET IN TOUCH WITH US</span>
            </h2>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {info.icon}
                </div>
                <h3 className="font-bold text-[#EA6220] mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-gray-600">{info.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-400 to-cyan-500">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">SUBSCRIBE</h2>
            </div>

            <div className="flex-1 max-w-md">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-6 py-4 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-r-lg font-bold transition-all duration-300">
                  SEND
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 mb-4 md:mb-0">
              Copyright © <span className="text-cyan-400">Splashes</span>{" "}
              2016-All Rights Reserved
            </div>

            <div className="text-2xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text">
                splashes
              </span>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
              {["T", "F", "I", "B", "L"].map((social, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
