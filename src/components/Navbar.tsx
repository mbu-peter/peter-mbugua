import React from "react";
import { Code } from "lucide-react"; // icon for logo
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo + Branding */}
        <Link to={"/"} className="flex items-center space-x-3">
          <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md">
            <Code className="w-6 h-6" />
          </div>
          <span className="text-gray-900 text-2xl md:text-3xl font-extrabold">
            Peter Mbugua
          </span>
        </Link>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="text-gray-700">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold text-gray-900">
                  Menu
                </SheetTitle>
                <Separator />
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                <SheetClose asChild>
                  <a
                    href="#home"
                    className="text-lg font-medium hover:text-indigo-600"
                  >
                    Home
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="/about"
                    className="text-lg font-medium hover:text-indigo-600"
                  >
                    About
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/project"
                    className="text-lg font-medium hover:text-indigo-600"
                  >
                    Projects
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#resume"
                    className="text-lg font-medium hover:text-indigo-600"
                  >
                    Resume
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold text-lg">
          <li>
            <Link
              to={"/"}
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <Link
              to={"/project"}
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-indigo-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
