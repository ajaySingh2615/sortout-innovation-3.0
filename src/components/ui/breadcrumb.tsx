"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MovingBorder } from "./moving-border";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

export const Breadcrumb = ({
  items,
  className,
  showHome = true,
}: BreadcrumbProps) => {
  const allItems = showHome ? [{ label: "Home", href: "/" }, ...items] : items;
  const isSingleItem = allItems.length === 1;

  return (
    <motion.nav
      className={cn(
        "flex items-center space-x-1 text-sm font-medium text-red-600",
        className
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Breadcrumb"
    >
      {isSingleItem ? (
        <div className="relative inline-flex rounded-full bg-red-50 px-4 py-2 border border-red-200 shadow-sm overflow-hidden">
          <MovingBorder duration={4000} rx="3rem" ry="3rem">
            <div className="h-0.5 w-6 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full" />
          </MovingBorder>
          {allItems.map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative z-10"
              >
                {item.href && !item.isActive ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center hover:text-red-800 transition-colors duration-200",
                      item.label === "Home" && "flex items-center"
                    )}
                  >
                    {item.label === "Home" && <Home className="h-4 w-4 mr-1" />}
                    <span className="font-heading font-medium">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <span
                    className={cn(
                      "flex items-center text-red-900 font-heading font-semibold",
                      item.label === "Home" && "flex items-center"
                    )}
                    aria-current="page"
                  >
                    {item.label === "Home" && <Home className="h-4 w-4 mr-1" />}
                    {item.label}
                  </span>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <>
          {allItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ChevronRight className="h-4 w-4 text-red-400" />
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {item.href && !item.isActive ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center hover:text-red-800 transition-colors duration-200",
                      item.label === "Home" && "flex items-center"
                    )}
                  >
                    {item.label === "Home" && <Home className="h-4 w-4 mr-1" />}
                    <span className="font-heading font-medium">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <span
                    className={cn(
                      "flex items-center text-red-900 font-heading font-semibold",
                      item.label === "Home" && "flex items-center"
                    )}
                    aria-current="page"
                  >
                    {item.label === "Home" && <Home className="h-4 w-4 mr-1" />}
                    {item.label}
                  </span>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </>
      )}
    </motion.nav>
  );
};
