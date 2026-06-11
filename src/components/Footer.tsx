import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Youtube, Facebook, Instagram, ChevronRight } from "lucide-react";

const Footer = () => {
  const quickLinks = [
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

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
    { href: "/cancellation-refund", label: "Cancellation & Refund" },
    { href: "/shipping-delivery", label: "Shipping & Delivery" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.JPG"
                alt="Prem Eye & Maternity Hospital"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-heading font-bold text-xl text-white">PREM</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Eye & Maternity Hospital</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted healthcare partner in Barnala, providing comprehensive eye care and maternity services since 2012.
            </p>
            <div className="flex gap-4">
              <a href="https://youtube.com/@premeyeandmaternityhospital" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="https://www.facebook.com/share/16iUVTFSK7/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/premeyehospital/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                    <ChevronRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                    <ChevronRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span>Anaj Mandi Road, Near Chhaju Roshan Karkhana, Barnala</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <div>
                  <a href="tel:+919877242893" className="hover:text-primary transition-colors">+91 98772-42893</a>
                  <br />
                  <a href="tel:01679230492" className="hover:text-primary transition-colors">01679-230492</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:rupeshsingla32@gmail.com" className="hover:text-primary transition-colors">rupeshsingla32@gmail.com</a>
              </li>
              <li className="flex gap-3">
                <Clock size={20} className="text-primary flex-shrink-0" />
                <span>Mon-Sat: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Emergency Contact</h4>
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center animate-pulse-slow">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">24/7 Emergency Service</p>
                  <a href="tel:+919877242893" className="text-xl font-bold text-white hover:text-primary transition-colors">
                    +91 98772-42893
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Available round the clock for eye emergencies and maternity care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Prem Eye & Maternity Hospital. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed with care for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
