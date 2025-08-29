"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "../ui/animated-tooltip";

export const HeroSection = () => {
  // Avatar images (placeholder URLs - replace with actual team photos)
  const people = [
    {
      id: 1,
      name: "Aarav Singh",
      designation: "Frontend Engineer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Isha Verma",
      designation: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Rohan Mehta",
      designation: "Full-stack Dev",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Ananya Rao",
      designation: "UX Researcher",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Vihaan Shah",
      designation: "Mobile Engineer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Sara Kapoor",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    },
  ];

  // Brand logos
  const logos = [
    { name: "Aceternity UI" },
    { name: "Gamity" },
    { name: "Host IT" },
    { name: "Asteroid Kit" },
  ];

  // App showcase cards (placeholder screenshots)
  const showcaseCards = [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=280&h=560&fit=crop",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=280&h=560&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=280&h=560&fit=crop",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=280&h=560&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=280&h=560&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=280&h=560&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=280&h=560&fit=crop",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=280&h=560&fit=crop",
  ];

  return (
    <section className="relative min-h-screen bg-white text-red-900 overflow-hidden">
      <div className="relative z-10">
        <div className="container mx-auto max-w-6xl px-5 pt-20 pb-16 md:pt-20 md:pb-16">
          {/* Avatar Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <AnimatedTooltip items={people} />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.05] mb-5"
          >
            <span className="text-red-900">Your best in class </span>
            <span
              className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(90deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              design and
              <br className="hidden md:block" /> development studio
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-red-700 mx-auto max-w-2xl text-base md:text-lg font-body mb-6"
          >
            We provide the best in class design and development services for
            teams that ship with the speed of light.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mb-7"
          >
            <button className="inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2.5 text-sm font-heading font-semibold text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all duration-200">
              Book a call
            </button>
          </motion.div>

          {/* Trusted Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-xs tracking-wide text-red-600 font-heading font-medium mb-4"
          >
            Trusted by famous brands
          </motion.p>

          {/* Logo Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex gap-12 items-center justify-center mb-16 md:mb-16"
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="h-7 flex items-center opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <div className="text-red-600/80 font-heading font-medium text-sm">
                  {logo.name}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Showcase Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative"
          >
            {/* Desktop: Infinite Scroll */}
            <div className="hidden md:block relative overflow-hidden">
              {/* Edge fade masks */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <div className="flex animate-showcase-scroll">
                {/* First sequence */}
                {showcaseCards.map((image, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-none w-[280px] h-[560px] mr-6 rounded-2xl bg-white border border-red-200 shadow-lg p-2"
                    style={{
                      boxShadow:
                        "0 6px 30px rgba(220,38,38,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Showcase ${index + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                ))}
                {/* Duplicate sequence for seamless loop */}
                {showcaseCards.map((image, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-none w-[280px] h-[560px] mr-6 rounded-2xl bg-white border border-red-200 shadow-lg p-2"
                    style={{
                      boxShadow:
                        "0 6px 30px rgba(220,38,38,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Showcase duplicate ${index + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Horizontal Scroll */}
            <div
              className="md:hidden overflow-x-auto scroll-smooth"
              style={{ scrollSnapType: "x mandatory" }}
            >
              <div className="flex gap-5 pb-4">
                {showcaseCards.map((image, index) => (
                  <div
                    key={index}
                    className="flex-none w-[280px] h-[560px] rounded-2xl bg-white border border-red-200 shadow-lg p-2"
                    style={{
                      boxShadow:
                        "0 6px 30px rgba(220,38,38,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
                      scrollSnapAlign: "start",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Showcase ${index + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
