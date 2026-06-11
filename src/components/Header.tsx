"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, Youtube, Facebook, Instagram } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/empanelment", label: "Empanelment" },
    { href: "/gallery", label: "Gallery" },
    { href: "/videos", label: "Videos" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:rupeshsingla32@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              rupeshsingla32@gmail.com
            </a>
            <a href="tel:+919877242893" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              +91 98772-42893
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://youtube.com/@premeyeandmaternityhospital" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Youtube size={18} />
            </a>
            <a href="https://www.facebook.com/share/16iUVTFSK7/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/premeyehospital/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.JPG"
                alt="Prem Eye & Maternity Hospital"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h1 className="font-heading font-bold text-xl text-primary">PREM</h1>
                <p className="text-[10px] text-gray-600 uppercase tracking-wider">Eye & Maternity Hospital <span className="text-primary">Since 2012</span></p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/appointment" className="btn-primary flex items-center gap-2">
                <Phone size={18} />
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-screen" : "max-h-0"}`}>
          <div className="bg-white border-t px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/appointment"
              className="btn-primary block text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
