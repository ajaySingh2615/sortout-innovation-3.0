import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-red-900 font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">SortOut Innovation</span>
            </div>
            <p className="text-red-100 mb-4 max-w-md">
              Your trusted partner for comprehensive business solutions. We
              provide digital marketing, HR solutions, website development, and
              live streaming services - one source, various solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-red-200 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-red-200 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-red-200 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-red-200 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-red-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-red-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-red-200 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-red-200 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-300" />
                <span className="text-red-200">info@sortoutinnovation.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-300" />
                <span className="text-red-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-red-300 mt-1" />
                <span className="text-red-200">
                  123 Innovation Street
                  <br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center">
          <p className="text-red-200">
            © 2024 SortOut Innovation. All rights reserved. |
            <Link href="/privacy" className="hover:text-white ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-white ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
