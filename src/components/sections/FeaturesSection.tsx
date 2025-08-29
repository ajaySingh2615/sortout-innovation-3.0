"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Breadcrumb } from "../ui/breadcrumb";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24 lg:px-10">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14">
          {/* Left Column - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative order-2 md:order-1"
          >
            {/* Main Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-[360px] w-full overflow-hidden rounded-[12px] md:h-[520px]">
                <motion.img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=faces"
                  alt="Professional team collaborating in modern office"
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Red Frame */}
              <motion.div
                className="pointer-events-none absolute -bottom-[18px] -left-[18px] -top-[18px] rounded-[12px] border-8 border-[#FF3B3B]"
                style={{
                  width: "92%",
                  height: "92%",
                  right: "6px",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>

            {/* Overlay Photo Card */}
            <motion.div
              className="absolute -bottom-[28px] left-[46%] w-[320px] h-[190px] md:w-[380px] md:h-[220px] -translate-x-1/2 transform"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="h-full w-full overflow-hidden rounded-[12px] ring-8 ring-white filter grayscale drop-shadow-lg">
                <motion.img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=faces"
                  alt="Team members in a productive meeting"
                  className="h-full w-full rounded-[8px] object-cover"
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2, delay: 1.4 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>

            {/* Decorative Dot Grid */}
            <motion.div
              className="absolute right-[-52px] top-[24px] hidden h-[140px] w-[110px] opacity-80 md:block"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "radial-gradient(#E5E7EB 2px, transparent 2px)",
                  backgroundSize: "14px 14px",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2"
          >
            {/* Large Watermark */}
            <div className="relative">
              <svg
                className="absolute -right-[40px] -top-[40px] -z-10 hidden h-[360px] w-[360px] opacity-[0.08] md:block"
                viewBox="0 0 200 200"
                fill="none"
                stroke="#111827"
                strokeWidth="1"
              >
                <circle cx="100" cy="100" r="80" />
                <circle cx="100" cy="100" r="60" />
                <circle cx="100" cy="100" r="40" />
                <circle cx="100" cy="100" r="20" />
                <line x1="100" y1="20" x2="100" y2="180" />
                <line x1="20" y1="100" x2="180" y2="100" />
                <line x1="41" y1="41" x2="159" y2="159" />
                <line x1="159" y1="41" x2="41" y2="159" />
              </svg>

              {/* Overline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Breadcrumb
                  items={[{ label: "ABOUT OUR COMPANY", isActive: true }]}
                  showHome={false}
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                />
              </motion.div>

              {/* Headline */}
              <motion.h2
                className="mt-4 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Designing Websites That Drive Success
              </motion.h2>

              {/* Body Paragraph */}
              <motion.p
                className="mt-5 max-w-[560px] leading-relaxed text-[#6B7280]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                We combine cutting-edge design with powerful functionality to
                create digital experiences that not only look stunning but also
                deliver measurable results for your business.
              </motion.p>

              {/* Checklist */}
              <motion.div
                className="mt-6 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#FF3B3B] mr-3"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                  >
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <span className="text-[#111827]">
                    Professional design that converts visitors into customers
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#FF3B3B] mr-3"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                  >
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <span className="text-[#111827]">
                    Modern technology stack for optimal performance and security
                  </span>
                </motion.div>
              </motion.div>

              {/* Supporting Paragraph */}
              <motion.p
                className="mt-6 leading-relaxed text-[#6B7280]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
              >
                Our team of experienced developers and designers work together
                to ensure every project exceeds expectations and delivers real
                business value.
              </motion.p>

              {/* Sub-feature Block */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="font-semibold text-[#111827]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  viewport={{ once: true }}
                >
                  24/7 Support
                </motion.h3>
                <motion.p
                  className="text-[#6B7280]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  viewport={{ once: true }}
                >
                  Round-the-clock technical support to keep your business
                  running smoothly.
                </motion.p>
              </motion.div>

              {/* CTA Row */}
              <motion.div
                className="mt-8 flex flex-col items-center md:flex-row md:items-center md:justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="inline-flex h-12 items-center rounded-full bg-[#FF3B3B] pl-3 pr-6 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(255,59,59,0.25)] transition hover:brightness-95"
                  aria-label="Discover more"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 2.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="h-4 w-4 text-[#FF3B3B]" />
                  </motion.div>
                  DISCOVER MORE
                </motion.button>

                {/* Trust Badge Card */}
                <motion.div
                  className="hidden md:block md:ml-auto md:mt-[-40px] md:self-start"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 2.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="h-[190px] w-[190px] rounded-[14px] bg-white shadow-[0_24px_40px_rgba(0,0,0,0.08)]"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Top Accent Bar */}
                    <div className="h-[6px] w-full rounded-t-[14px] bg-[#FF3B3B]" />

                    {/* Content */}
                    <div className="flex h-[184px] flex-col items-center justify-center p-6">
                      <motion.div
                        className="mb-4 flex h-12 w-12 items-center justify-center"
                        initial={{ rotate: -180, scale: 0 }}
                        whileInView={{ rotate: 0, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 2.6,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}
                      >
                        <svg
                          className="h-12 w-12 text-[#FF3B3B]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                          />
                        </svg>
                      </motion.div>
                      <motion.p
                        className="text-center font-semibold text-[#111827]"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2.8 }}
                        viewport={{ once: true }}
                      >
                        Trusted by clients
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Mobile Trust Badge */}
              <div className="mt-8 flex justify-center md:hidden">
                <div className="h-[120px] w-[200px] rounded-[14px] bg-white shadow-[0_24px_40px_rgba(0,0,0,0.08)]">
                  <div className="h-[6px] w-full rounded-t-[14px] bg-[#FF3B3B]" />
                  <div className="flex h-[114px] flex-col items-center justify-center p-4">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center">
                      <svg
                        className="h-8 w-8 text-[#FF3B3B]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-center text-sm font-semibold text-[#111827]">
                      Trusted by clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
