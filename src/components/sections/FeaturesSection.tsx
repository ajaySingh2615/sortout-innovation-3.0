"use client";
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Globe,
  Users,
  Code,
  Video,
  Zap,
  Shield,
  Clock,
  Award,
} from "lucide-react";

const features = [
  {
    title: "Digital Marketing Excellence",
    description:
      "Comprehensive digital marketing strategies that drive results and grow your business online.",
    header: (
      <div className="w-full h-32 bg-gradient-to-r from-red-500 to-red-600 rounded-lg"></div>
    ),
    icon: <Globe className="h-6 w-6 text-red-600" />,
    className: "md:col-span-2",
  },
  {
    title: "HR Solutions",
    description:
      "Complete human resource management solutions for modern businesses.",
    header: (
      <div className="w-full h-32 bg-gradient-to-r from-red-400 to-red-500 rounded-lg"></div>
    ),
    icon: <Users className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Website Development",
    description:
      "Custom websites built with cutting-edge technology and modern design principles.",
    header: (
      <div className="w-full h-32 bg-gradient-to-r from-red-600 to-red-700 rounded-lg"></div>
    ),
    icon: <Code className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Live Streaming Services",
    description:
      "Professional live streaming solutions for events, webinars, and broadcasts.",
    header: (
      <div className="w-full h-32 bg-gradient-to-r from-red-500 to-red-600 rounded-lg"></div>
    ),
    icon: <Video className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Lightning Fast Delivery",
    description: "Quick turnaround times without compromising on quality.",
    header: (
      <div className="w-full h-32 bg-gradient-to-r from-red-400 to-red-500 rounded-lg"></div>
    ),
    icon: <Zap className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security and reliability for all our services.",
    header: (
      <div className="w-full h-32 bg-gradient-to-r from-red-600 to-red-700 rounded-lg"></div>
    ),
    icon: <Shield className="h-6 w-6 text-red-600" />,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock support to ensure your business never stops running.",
    header: (
      <div className="w-full h-32 bg-gradient-to-r from-red-500 to-red-600 rounded-lg"></div>
    ),
    icon: <Clock className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Award-Winning Team",
    description:
      "Industry-recognized professionals delivering exceptional results.",
    header: (
      <div className="w-full h-32 bg-gradient-to-r from-red-400 to-red-500 rounded-lg"></div>
    ),
    icon: <Award className="h-6 w-6 text-red-600" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Why Choose SortOut Innovation?
          </h2>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver
            comprehensive solutions that drive your business forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BentoGrid className="max-w-4xl mx-auto">
            {features.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={item.className}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
