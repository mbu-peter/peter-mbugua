import React from "react";
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
    <nav className="bg-violet-600 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        {/* Desktop Logo */}
        <Link
          to={"/"}
          className="text-white text-2xl md:text-3xl font-extrabold"
        >
          Peter Mbugua
        </Link>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="text-white">
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
                <SheetTitle className="text-2xl font-bold text-black">
                  Menu
                </SheetTitle>
                <Separator />
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                <SheetClose asChild>
                  <a
                    href="#home"
                    className="text-lg font-bold hover:text-yellow-300"
                  >
                    Home
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="/about"
                    className="text-lg font-bold hover:text-yellow-300"
                  >
                    About Me
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/project"
                    className="text-lg font-bold hover:text-yellow-300"
                  >
                    Projects
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#resume"
                    className="text-lg font-bold hover:text-yellow-300"
                  >
                    Resume
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-bold text-lg md:text-xl">
          <li>
            <Link
              to={"/"}
              className="hover:text-yellow-300 transition-transform transform hover:scale-110"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-yellow-300 transition-transform transform hover:scale-110"
            >
              About Me
            </a>
          </li>
          <li>
            <Link
              to={"/project"}
              className="hover:text-yellow-300 transition-transform transform hover:scale-110"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="/resume/resume.pdf"
              className="hover:text-yellow-300 transition-transform transform hover:scale-110"
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
