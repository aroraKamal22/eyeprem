"use client";

import { useState } from "react";
import { Shield, Lock, Eye, FileText, ChevronDown, ChevronUp, Phone, Mail } from "lucide-react";

const sections = [
  {
    title: "Information We Collect",
    content: `We collect the following types of information:

• Personal Information: Name, age, gender, contact details (phone, email, address)
• Medical Information: Medical history, diagnoses, treatment records, prescriptions
• Financial Information: Payment details, insurance information
• Technical Information: IP address, browser type, device information when using our website
• Communication Records: Emails, phone calls, and messages exchanged with our staff`
  },
  {
    title: "How We Use Your Information",
    content: `Your information is used for:

• Providing medical care and treatment
• Scheduling appointments and follow-ups
• Processing payments and insurance claims
• Communicating important health information
• Improving our services and patient experience
• Legal compliance and medical record keeping`
  },
  {
    title: "Information Sharing & Disclosure",
    content: `We may share your information with:

• Healthcare providers involved in your care
• Insurance companies for claim processing
• Laboratory and diagnostic services
• Legal authorities when required by law

We NEVER sell, rent, or trade your personal information to third parties for marketing purposes.`
  },
  {
    title: "Data Security & Protection",
    content: `We implement robust security measures:

• Encrypted data transmission and storage
• Secure access controls and authentication
• Regular security audits and updates
• Staff training on data protection
• Physical security of medical records
• Compliance with healthcare data protection standards`
  },
  {
    title: "Your Privacy Rights",
    content: `You have the right to:

• Access your medical records
• Request corrections to your information
• Opt-out of non-essential communications
• Request deletion of non-medical data
• Know how your data is being used
• File a complaint regarding privacy concerns`
  },
  {
    title: "Cookies & Website Tracking",
    content: `Our website uses cookies to:

• Improve website functionality
• Analyze website traffic and usage
• Remember your preferences
• Provide personalized experience

You can control cookie settings through your browser preferences.`
  },
  {
    title: "Data Retention",
    content: `We retain your data as follows:

• Medical records: As per legal requirements (typically 7-10 years)
• Financial records: As per tax and accounting requirements
• Communication records: Up to 3 years
• Website data: Up to 2 years

After retention periods, data is securely deleted or anonymized.`
  }
];

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-sm mb-6">
            <Shield className="w-4 h-4" />
            Privacy Policy
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Your Privacy & Data Protection<br />is Our Priority
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We are committed to protecting your personal and medical information with the highest standards of security and confidentiality.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { icon: Lock, text: "Secure Data" },
              { icon: Shield, text: "NABH Standards" },
              { icon: Eye, text: "Transparent Policy" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-600">
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Last Updated */}
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

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Privacy Concerns?</h3>
            <p className="text-white/80 mb-6">
              If you have any questions about our privacy policy or how we handle your data, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919877242893" className="flex items-center gap-2 bg-white/20 px-4 py-3 rounded-full hover:bg-white/30 transition-colors">
                <Phone className="w-5 h-5" />
                +91 98772-42893
              </a>
              <a href="mailto:info@premeyehospital.com" className="flex items-center gap-2 bg-white/20 px-4 py-3 rounded-full hover:bg-white/30 transition-colors">
                <Mail className="w-5 h-5" />
                info@premeyehospital.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
