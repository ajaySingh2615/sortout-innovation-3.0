"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Lightbulb,
  Shield,
} from "lucide-react";

const values = [
  {
    title: "Innovation First",
    description:
      "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    header: (
      <div className="w-full h-32 bg-gradient-to-r from-red-500 to-red-600 rounded-lg"></div>
    ),
    icon: <Lightbulb className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Client-Centric",
    description:
      "Your success is our priority. We tailor every solution to meet your unique business needs.",
    header: (
      <div className="w-full h-32 bg-gradient-to-r from-red-400 to-red-500 rounded-lg"></div>
    ),
    icon: <Heart className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in everything we do, ensuring exceptional results every time.",
    header: (
      <div className="w-full h-32 bg-gradient-to-r from-red-600 to-red-700 rounded-lg"></div>
    ),
    icon: <Award className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Transparency",
    description:
      "Open communication and honest relationships are the foundation of our business approach.",
    header: (
      <div className="w-full h-32 bg-gradient-to-r from-red-500 to-red-600 rounded-lg"></div>
    ),
    icon: <Shield className="h-6 w-6 text-red-600" />,
  },
];

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    description:
      "15+ years experience in digital innovation and business strategy",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Digital Marketing",
    description:
      "Expert in SEO, SEM, and social media marketing with proven track record",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    description: "Full-stack developer specializing in modern web technologies",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Emily Rodriguez",
    role: "HR Director",
    description:
      "Human resources professional with expertise in talent management",
    image: "/api/placeholder/300/300",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-red-50 to-white">
        <BackgroundBeams className="absolute inset-0" />

        <div className="relative z-10 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <TextGenerateEffect
              words="About SortOut Innovation"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-900 mb-8"
            />
            <p className="text-xl md:text-2xl text-red-700 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking company dedicated to providing
              comprehensive business solutions that drive innovation and growth.
              Founded on the principle of "One Source, Various Solutions," we
              bring together expertise across multiple domains to serve our
              clients better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">
                Our Mission
              </h3>
              <p className="text-red-700 leading-relaxed">
                To empower businesses with innovative, comprehensive solutions
                that drive growth, efficiency, and success in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">
                Our Vision
              </h3>
              <p className="text-red-700 leading-relaxed">
                To be the leading provider of integrated business solutions,
                recognized for innovation, quality, and exceptional client
                satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">
                Our Values
              </h3>
              <p className="text-red-700 leading-relaxed">
                Innovation, integrity, excellence, and client-centricity are the
                core values that guide everything we do.
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-red-900 text-center mb-12">
              Our Core Values
            </h2>
            <BentoGrid className="max-w-4xl mx-auto">
              {values.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                />
              ))}
            </BentoGrid>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience
              and passion for delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              These numbers reflect our commitment to excellence and client
              satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2">500+</h3>
              <p className="text-red-200">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2">100+</h3>
              <p className="text-red-200">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2">5+</h3>
              <p className="text-red-200">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2">50+</h3>
              <p className="text-red-200">Team Members</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
