"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-red-50 to-white">
      <BackgroundBeams className="absolute inset-0" />
      <Spotlight
        className="absolute -top-40 left-0 md:left-60 md:-top-20"
        fill="red"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-900 mb-6">
            <TextGenerateEffect
              words="SortOut Innovation: One Source, Various Solutions"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-900"
            />
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-red-700 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Comprehensive business solutions including digital marketing, HR
          solutions, website development, and live streaming services. Your
          trusted partner for innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/services"
            className="group bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button className="group bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>Watch Demo</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-red-900">500+</h3>
            <p className="text-red-700">Projects Completed</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-red-900">100+</h3>
            <p className="text-red-700">Happy Clients</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-red-900">5+</h3>
            <p className="text-red-700">Years Experience</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-red-900">24/7</h3>
            <p className="text-red-700">Support Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
