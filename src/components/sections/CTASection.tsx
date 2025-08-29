"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      <BackgroundBeams className="absolute inset-0 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who have revolutionized their
            business with our comprehensive solutions. Let's discuss how we can
            help you achieve your goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <Link
            href="/contact"
            className="group bg-white text-red-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/about"
            className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-900 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Learn More About Us</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-3 text-red-100">
            <Phone className="h-6 w-6" />
            <div>
              <p className="font-semibold">Call Us</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 text-red-100">
            <Mail className="h-6 w-6" />
            <div>
              <p className="font-semibold">Email Us</p>
              <p>info@sortoutinnovation.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-red-200 text-sm">
            Free consultation • No commitment required • Quick response time
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
