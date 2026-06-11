"use client";

import { useState } from "react";
import { FileText, ChevronDown, ChevronUp, Scale } from "lucide-react";

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using the services of Prem Eye & Maternity Hospital, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.

These terms apply to all patients, visitors, and users of our website and facilities.`
  },
  {
    title: "Medical Services",
    content: `• All medical services are provided by qualified and licensed healthcare professionals
• Treatment plans are based on medical assessment and may vary per individual
• We reserve the right to refuse service if it's not in the patient's best interest
• Emergency services are available 24/7
• Scheduled appointments are subject to doctor availability`
  },
  {
    title: "Patient Responsibilities",
    content: `Patients are responsible for:

• Providing accurate and complete medical history
• Following prescribed treatment plans
• Attending scheduled appointments or canceling with adequate notice
• Settling bills and payments as per agreed terms
• Treating staff and other patients with respect
• Following hospital rules and guidelines`
  },
  {
    title: "Appointment & Cancellation",
    content: `• Appointments should be booked in advance
• Cancellations should be made at least 24 hours before the scheduled time
• No-shows may affect future appointment scheduling
• Emergency cases are given priority
• Wait times may vary based on patient volume and emergencies`
  },
  {
    title: "Payment Terms",
    content: `• Payment is expected at the time of service unless prior arrangements are made
• We accept cash, cards, UPI, and approved insurance
• Insurance claims are processed as per the insurance company's terms
• Estimates are approximate and final bills may vary
• Refunds are processed as per our refund policy`
  },
  {
    title: "Limitation of Liability",
    content: `• Medical outcomes cannot be guaranteed
• We are not liable for complications arising from undisclosed medical history
• Personal belongings are the patient's responsibility
• We are not responsible for delays due to emergencies or circumstances beyond our control`
  },
  {
    title: "Intellectual Property",
    content: `• All content on our website is owned by Prem Eye & Maternity Hospital
• Unauthorized use, reproduction, or distribution is prohibited
• Our logo, name, and branding are registered trademarks
• Patient testimonials are used with consent`
  },
  {
    title: "Changes to Terms",
    content: `We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.`
  }
];

export default function TermsOfUse() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-sm mb-6">
            <Scale className="w-4 h-4" />
            Terms of Use
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-500 text-sm mb-8 text-center">
            Last Updated: January 2025
          </p>

          {/* Accordion Sections */}
          <div className="space-y-4">
            {sections.map((section, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{section.title}</h3>
                  </div>
                  {openSection === i ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openSection === i && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <div className="pl-13 md:pl-[52px]">
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
