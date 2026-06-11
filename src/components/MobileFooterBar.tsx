"use client";

import { Phone, CalendarPlus, MessageCircle } from "lucide-react";

const MobileFooterBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex">
        {/* Call Button */}
        <a
          href="tel:+919877242893"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-4 font-semibold transition-all active:scale-95"
        >
          <Phone size={20} fill="white" />
          <span>Call Now</span>
        </a>

        {/* Appointment Button */}
        <a
          href="/appointment"
          className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white py-4 font-semibold transition-all active:scale-95"
        >
          <CalendarPlus size={20} />
          <span>Appointment</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919877242893"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 font-semibold transition-all active:scale-95"
        >
          <MessageCircle size={20} fill="white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default MobileFooterBar;
