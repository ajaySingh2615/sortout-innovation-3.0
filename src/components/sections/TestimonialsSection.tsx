"use client";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "SortOut Innovation transformed our digital presence completely. Their digital marketing expertise helped us increase our online sales by 300% within just 6 months.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Solutions",
  },
  {
    quote:
      "The HR solutions provided by SortOut Innovation streamlined our entire hiring process. We now save 40% of our time on recruitment and have improved employee satisfaction significantly.",
    name: "Michael Chen",
    title: "HR Director, GlobalTech Corp",
  },
  {
    quote:
      "Our new website developed by SortOut Innovation is absolutely stunning and performs exceptionally well. The team's attention to detail and technical expertise is remarkable.",
    name: "Emily Rodriguez",
    title: "Marketing Manager, Creative Agency",
  },
  {
    quote:
      "The live streaming services for our corporate events were flawless. Professional setup, crystal clear quality, and seamless execution. Highly recommended!",
    name: "David Thompson",
    title: "Event Coordinator, Enterprise Solutions",
  },
  {
    quote:
      "Working with SortOut Innovation has been a game-changer for our business. Their comprehensive approach and one-stop solution saved us time and delivered exceptional results.",
    name: "Lisa Anderson",
    title: "Founder, StartupHub",
  },
  {
    quote:
      "The team's expertise in digital marketing and web development helped us establish a strong online presence. Our brand visibility has increased tremendously.",
    name: "Robert Kim",
    title: "Business Owner, Local Services",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with SortOut Innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-red-900">98%</h3>
              <p className="text-red-700">Client Satisfaction</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-red-900">4.9/5</h3>
              <p className="text-red-700">Average Rating</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-red-900">95%</h3>
              <p className="text-red-700">Project Success Rate</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-red-900">90%</h3>
              <p className="text-red-700">Client Retention</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
