"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    // offset: ["start end", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#dc2626", // red-600
    "#b91c1c", // red-700
    "#991b1b", // red-800
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #dc2626, #b91c1c)", // red-600 to red-700
    "linear-gradient(to bottom right, #b91c1c, #991b1b)", // red-700 to red-800
    "linear-gradient(to bottom right, #991b1b, #7f1d1d)", // red-800 to red-900
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[50rem] w-full justify-center space-x-10 p-0"
      ref={ref}
    >
      <div className="div relative flex items-start px-10">
        <div className="max-w-3xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-40">
              {/* Service Number Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                  scale: activeCard === index ? 1 : 0.8,
                }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
              </motion.div>

              {/* Service Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                  y: activeCard === index ? 0 : 20,
                }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              >
                {item.title}
              </motion.h2>

              {/* Service Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                  y: activeCard === index ? 0 : 20,
                }}
                className="text-xl text-white/90 max-w-2xl leading-relaxed mb-8"
              >
                {item.description}
              </motion.p>

              {/* Service Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                  y: activeCard === index ? 0 : 20,
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl"
              >
                <div className="flex items-center space-x-3 text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">Comprehensive Strategy</span>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">Data-Driven Results</span>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">24/7 Support</span>
                </div>
              </motion.div>

              {/* Progress Indicator */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                  scaleX: activeCard === index ? 1 : 0,
                }}
                className="mt-8 h-1 bg-white/30 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-white rounded-full"
                  style={{ width: `${((index + 1) / content.length) * 100}%` }}
                />
              </motion.div>
            </div>
          ))}
          <div className="h-60" />
        </div>
      </div>
      <div className="sticky top-24 hidden lg:block">
        {/* Modern Service Showcase */}
        <div className="relative">
          {/* Main Service Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden w-[480px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Service Image */}
            <div className="h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{activeCard + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {content[activeCard].title.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {content[activeCard].title.split(" ").slice(2).join(" ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Content */}
            <div className="p-8">
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {content[activeCard].description.substring(0, 150)}...
                </p>
              </div>

              {/* Service Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Strategy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Results</span>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {content.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                        activeCard === index
                          ? "bg-red-500 scale-110"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => setActiveCard(index)}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <motion.button
                    onClick={() => setActiveCard(Math.max(0, activeCard - 1))}
                    className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </motion.button>

                  <span className="text-sm text-gray-500 font-medium">
                    {activeCard + 1} of {content.length}
                  </span>

                  <motion.button
                    onClick={() =>
                      setActiveCard(
                        Math.min(content.length - 1, activeCard + 1)
                      )
                    }
                    className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Service Icon */}
          <motion.div
            className="absolute -top-6 -right-6 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-white text-xl font-bold">
              {content[activeCard].title.charAt(0)}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
