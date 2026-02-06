"use client";
import { useTheme } from "@/store/ThemeContext";
import { Sun, TreePine, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "home", href: "/" },
    { label: "3D viewing", href: "/3DModels" },
    { label: "history", href: "/History" },
    { label: "about us", href: "/About" },
    { label: "blogs", href: "/Blogs" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group select-none">
          <span className="font-display font-bold text-2xl tracking-tight text-primary dark:text-white group-hover:text-accent transition-colors">
            marshtopia
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center font-medium text-xs tracking-[0.2em] uppercase">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all relative py-1 ${
                  isActive
                    ? "text-primary dark:text-accent font-bold"
                    : "text-stone-500 dark:text-stone-400 hover:text-primary"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-accent rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="bg-primary dark:bg-stone-800 hover:bg-opacity-90 text-white rounded-full p-2 transition-transform hover:scale-105 shadow-lg flex items-center justify-center w-10 h-10"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <TreePine size={18} /> : <Sun size={18} />}
          </button>

          <div className="hidden sm:flex h-10 w-10 bg-black rounded-lg items-center justify-center overflow-hidden border border-accent/30">
            <Image
              width={30}
              height={30}
              alt="Logo"
              className="h-full w-full object-cover opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMXo7DuzySf-K0R33C_Ycqfl1wJsP2lfNmBdtwi3-jZaQ0LAfYxVpmeuTFbSNWvXW2DVaGBdkSqvkjRvzpSJ1GktpAgc6QtTR6gsn6WKtSDBIn-6Zuy1pvOcbvK40zn0SeTO8t3iTX-OJdqk0NVsIOVrUMnGBhHeWvvnUMo0xAOm7i-kLm1vC7zLdbyBx1XMvnuDk0bPOU7ZsOJ9ujWJ5oIfLEP7OKOFPIbM1TnhUT5x70mS_AJNXJ6tmJHTroVQNsg5H3x9TUEjQq"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-primary/20 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm tracking-widest uppercase py-2 border-b border-stone-100 dark:border-stone-800 last:border-0 ${
                  isActive
                    ? "text-primary dark:text-accent font-bold"
                    : "text-stone-500 dark:text-stone-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
