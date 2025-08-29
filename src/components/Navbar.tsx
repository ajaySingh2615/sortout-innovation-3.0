"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Home,
  User,
  Briefcase,
  Mail,
  LogIn,
  UserPlus,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <User className="h-4 w-4" /> },
  {
    name: "Services",
    link: "/services",
    icon: <Briefcase className="h-4 w-4" />,
  },
  { name: "Contact", link: "/contact", icon: <Mail className="h-4 w-4" /> },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-red-900">
              SortOut Innovation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="text-red-700 hover:text-red-900 transition-colors duration-200 flex items-center space-x-1"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-red-700 hover:text-red-900 transition-colors duration-200 flex items-center space-x-1"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
              <Link
                href="/register"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center space-x-1"
              >
                <UserPlus className="h-4 w-4" />
                <span>Register</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-red-700 hover:text-red-900 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-red-100"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="text-red-700 hover:text-red-900 transition-colors duration-200 flex items-center space-x-2 px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-red-100">
                <Link
                  href="/login"
                  className="text-red-700 hover:text-red-900 transition-colors duration-200 flex items-center space-x-2 px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Register</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
