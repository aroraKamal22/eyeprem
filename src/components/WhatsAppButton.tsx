"use client";

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919877242893"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float hidden md:flex"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default WhatsAppButton;
