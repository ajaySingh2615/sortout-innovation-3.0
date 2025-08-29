"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  Globe,
  Users,
  Code,
  Video,
  TrendingUp,
  Target,
  Search,
  Share2,
  Monitor,
  Smartphone,
  BarChart,
  UserCheck,
  DollarSign,
  Calendar,
  Mic,
  Camera,
  Settings,
  Play,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "digital-marketing",
    icon: <Globe className="h-16 w-16 text-white" />,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies that drive traffic, engagement, and conversions across all digital channels.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Content Marketing & Strategy",
      "Email Marketing Campaigns",
      "Analytics & Performance Tracking",
      "Conversion Rate Optimization",
      "Influencer Marketing",
    ],
    subServices: [
      {
        icon: <Search className="h-8 w-8 text-red-600" />,
        title: "SEO Services",
        description:
          "Improve your search engine rankings and organic visibility",
      },
      {
        icon: <Target className="h-8 w-8 text-red-600" />,
        title: "PPC Management",
        description: "Maximize ROI with targeted advertising campaigns",
      },
      {
        icon: <Share2 className="h-8 w-8 text-red-600" />,
        title: "Social Media",
        description: "Build brand presence across all social platforms",
      },
      {
        icon: <BarChart className="h-8 w-8 text-red-600" />,
        title: "Analytics",
        description: "Data-driven insights to optimize your marketing efforts",
      },
    ],
    color: "from-red-500 to-red-600",
    pricing: "Starting from $999/month",
  },
  {
    id: "hr-solutions",
    icon: <Users className="h-16 w-16 text-white" />,
    title: "HR Solutions",
    description:
      "Complete human resource management solutions that streamline operations and enhance employee experience.",
    features: [
      "Talent Acquisition & Recruitment",
      "Payroll Management Systems",
      "Performance Management",
      "Employee Training & Development",
      "HR Analytics & Reporting",
      "Compliance Management",
      "Employee Onboarding",
      "Benefits Administration",
    ],
    subServices: [
      {
        icon: <UserCheck className="h-8 w-8 text-red-600" />,
        title: "Recruitment",
        description: "Find and hire the best talent for your organization",
      },
      {
        icon: <DollarSign className="h-8 w-8 text-red-600" />,
        title: "Payroll",
        description: "Automated payroll processing and management",
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-red-600" />,
        title: "Performance",
        description: "Track and improve employee performance",
      },
      {
        icon: <Calendar className="h-8 w-8 text-red-600" />,
        title: "Training",
        description: "Comprehensive employee development programs",
      },
    ],
    color: "from-red-400 to-red-500",
    pricing: "Starting from $499/month",
  },
  {
    id: "web-development",
    icon: <Code className="h-16 w-16 text-white" />,
    title: "Website Development",
    description:
      "Custom web development solutions using cutting-edge technologies for optimal performance and user experience.",
    features: [
      "Custom Web Applications",
      "E-commerce Development",
      "Responsive Design",
      "Content Management Systems",
      "API Development & Integration",
      "Database Design",
      "Performance Optimization",
      "Maintenance & Support",
    ],
    subServices: [
      {
        icon: <Monitor className="h-8 w-8 text-red-600" />,
        title: "Web Apps",
        description: "Custom web applications tailored to your needs",
      },
      {
        icon: <Smartphone className="h-8 w-8 text-red-600" />,
        title: "Mobile-First",
        description: "Responsive designs that work on all devices",
      },
      {
        icon: <Settings className="h-8 w-8 text-red-600" />,
        title: "CMS",
        description: "Easy-to-manage content management systems",
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-red-600" />,
        title: "E-commerce",
        description: "Powerful online stores that drive sales",
      },
    ],
    color: "from-red-600 to-red-700",
    pricing: "Starting from $2,999",
  },
  {
    id: "live-streaming",
    icon: <Video className="h-16 w-16 text-white" />,
    title: "Live Streaming Services",
    description:
      "Professional live streaming solutions for events, webinars, and broadcasts with high-quality production.",
    features: [
      "Multi-Platform Broadcasting",
      "Professional Equipment Setup",
      "Real-time Audience Interaction",
      "HD/4K Video Quality",
      "Live Event Coverage",
      "Webinar Production",
      "Recording & Post-Production",
      "Technical Support",
    ],
    subServices: [
      {
        icon: <Camera className="h-8 w-8 text-red-600" />,
        title: "Event Streaming",
        description: "Professional live streaming for corporate events",
      },
      {
        icon: <Mic className="h-8 w-8 text-red-600" />,
        title: "Webinars",
        description: "Interactive webinar production and management",
      },
      {
        icon: <Play className="h-8 w-8 text-red-600" />,
        title: "Broadcasting",
        description: "Multi-platform live broadcasting solutions",
      },
      {
        icon: <Settings className="h-8 w-8 text-red-600" />,
        title: "Production",
        description: "Full production services with professional equipment",
      },
    ],
    color: "from-red-500 to-red-600",
    pricing: "Starting from $1,999/event",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-red-50 to-white">
        <BackgroundBeams className="absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <TextGenerateEffect
              words="Our Comprehensive Services"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-900 mb-8"
            />
            <p className="text-xl md:text-2xl text-red-700 max-w-4xl mx-auto leading-relaxed">
              From digital marketing to live streaming, we provide end-to-end
              solutions that empower your business to thrive in the digital
              landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-16`}
              >
                {/* Service Image/Icon */}
                <div className="lg:w-1/2">
                  <div
                    className={`w-64 h-64 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="lg:w-1/2 space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
                      {service.title}
                    </h2>
                    <p className="text-xl text-red-700 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <p className="text-red-800 font-semibold">
                        {service.pricing}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div>
                    <h3 className="text-2xl font-bold text-red-900 mb-4">
                      What's Included:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sub-services */}
                  <div>
                    <h3 className="text-2xl font-bold text-red-900 mb-6">
                      Service Areas:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.subServices.map((subService, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-red-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="flex items-center space-x-4 mb-3">
                            {subService.icon}
                            <h4 className="text-lg font-semibold text-red-900">
                              {subService.title}
                            </h4>
                          </div>
                          <p className="text-gray-700 text-sm">
                            {subService.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project
              delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We understand your needs, goals, and challenges through detailed consultation.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We develop a customized strategy and roadmap tailored to your objectives.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Our expert team implements the solution with precision and attention to detail.",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "We monitor, analyze, and continuously optimize for maximum results.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Let's discuss your project and create a solution that drives real
              results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-red-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-colors duration-300"
              >
                Start Your Project
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-900 transition-colors duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
