"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Users,
  Code,
  Video,
  TrendingUp,
  Target,
  Briefcase,
  Camera,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Globe className="h-12 w-12 text-red-600" />,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies including SEO, SEM, social media marketing, content marketing, and analytics.",
    features: [
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Social Media Management",
      "Content Strategy",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    icon: <Users className="h-12 w-12 text-red-600" />,
    title: "HR Solutions",
    description:
      "Complete human resource management solutions including recruitment, payroll, performance management, and employee development.",
    features: [
      "Talent Acquisition",
      "Payroll Management",
      "Performance Reviews",
      "Employee Training",
      "HR Analytics",
      "Compliance Management",
    ],
    color: "from-red-400 to-red-500",
  },
  {
    icon: <Code className="h-12 w-12 text-red-600" />,
    title: "Website Development",
    description:
      "Custom website development using modern technologies, responsive design, and optimized for performance and SEO.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Mobile-First Design",
      "CMS Development",
      "API Integration",
      "Maintenance & Support",
    ],
    color: "from-red-600 to-red-700",
  },
  {
    icon: <Video className="h-12 w-12 text-red-600" />,
    title: "Live Streaming",
    description:
      "Professional live streaming services for events, webinars, conferences, and entertainment with high-quality production.",
    features: [
      "Event Live Streaming",
      "Webinar Production",
      "Multi-Platform Broadcasting",
      "Professional Equipment",
      "Real-time Interaction",
      "Recording & Archive",
    ],
    color: "from-red-500 to-red-600",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            From digital marketing to live streaming, we provide comprehensive
            solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-red-900 mb-4">
                {service.title}
              </h3>

              <p className="text-red-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center space-x-2 text-red-600 hover:text-red-800 font-semibold group-hover:translate-x-2 transition-all duration-300"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
