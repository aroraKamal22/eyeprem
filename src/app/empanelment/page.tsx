"use client";

import { useState } from "react";
import { Shield, CheckCircle, Building2, Heart, FileCheck, Hospital, CreditCard, Phone, ChevronDown, Clock, Users, Headphones } from "lucide-react";

const governmentSchemes = [
  { name: "Ayushman Bharat (PM-JAY)", desc: "Free treatment up to 5 Lakhs" },
  { name: "ECHS", desc: "Ex-Servicemen Health Scheme" },
  { name: "CGHS", desc: "Central Govt Health Scheme" },
  { name: "Punjab Government", desc: "State Health Insurance" },
  { name: "Haryana Government", desc: "State Health Scheme" },
];

const insurancePartners = [
  "Star Health Insurance",
  "HDFC ERGO",
  "Bajaj Allianz",
  "ICICI Lombard",
  "Niva Bupa (Max Bupa)",
  "Manipal Cigna",
  "Cholamandalam MS",
  "Future Generali",
  "IFFCO Tokio",
  "Tata AIG",
  "Kotak Mahindra",
  "Aditya Birla Health",
  "Reliance General",
  "Care Health Insurance",
  "SBI General Insurance",
  "New India Assurance",
  "United India Insurance",
  "Oriental Insurance",
  "National Insurance",
  "Liberty General",
];

const tpaPartners = [
  "Medi Assist",
  "Health India TPA",
  "Family Health Plan TPA",
  "Park Mediclaim TPA",
  "Safeway TPA",
  "Paramount Health TPA",
  "Vipul Medcorp TPA",
  "Raksha TPA",
  "MD India TPA",
  "Good Health TPA",
];

const processSteps = [
  {
    icon: FileCheck,
    title: "Document Verification",
    desc: "Bring your insurance card and ID proof"
  },
  {
    icon: Hospital,
    title: "Hospital Registration",
    desc: "Visit our TPA desk for registration"
  },
  {
    icon: CreditCard,
    title: "Pre-Authorization",
    desc: "We process approval from insurer"
  },
  {
    icon: CheckCircle,
    title: "Cashless Treatment",
    desc: "Get treated without any payment"
  }
];

const faqs = [
  {
    q: "What documents are required for cashless treatment?",
    a: "You need to bring your health insurance card, a valid ID proof (Aadhar/PAN), and the policy document or e-card from your insurer."
  },
  {
    q: "How long does pre-authorization take?",
    a: "Usually, pre-authorization is approved within 2-4 hours for planned procedures. Emergency cases are handled on priority."
  },
  {
    q: "What if my insurance company is not listed?",
    a: "Contact our insurance desk. We regularly add new empanelments and can assist with reimbursement claims for non-empaneled insurers."
  },
  {
    q: "Is there any charge for TPA services?",
    a: "No, our TPA desk services are completely free for all patients. We handle all paperwork and coordination with insurers."
  }
];

export default function EmpanelmentPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-sm mb-6">
              <Shield className="w-4 h-4" />
              Insurance & Empanelment
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              35+ Empanelments for <span className="text-primary-light">Cashless</span> Treatment
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We are empaneled with major government schemes, insurance companies, and TPAs for hassle-free cashless treatment
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">5+</div>
              <div className="text-white/70 text-sm">Govt Schemes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">20+</div>
              <div className="text-white/70 text-sm">Insurance Companies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">10+</div>
              <div className="text-white/70 text-sm">TPA Partners</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-white/70 text-sm">Cashless Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Upfront Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Quick Approvals</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Dedicated TPA Desk</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              How Cashless Treatment Works
            </h2>
            <p className="text-gray-600">Simple 4-step process for hassle-free treatment</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Building2 className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Government Schemes</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {governmentSchemes.map((scheme, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{scheme.name}</h3>
                <p className="text-xs text-gray-500">{scheme.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-green-600 text-xs font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  Empaneled
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & TPA Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Insurance & TPA Partners
            </h2>
            <p className="text-gray-600">Cashless treatment available with all listed partners</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-10">
            {[
              { id: "all", label: "All Partners" },
              { id: "insurance", label: "Insurance" },
              { id: "tpa", label: "TPA" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Insurance Partners Grid */}
          {(activeTab === "all" || activeTab === "insurance") && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Heart className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-bold text-gray-900">Insurance Companies</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {insurancePartners.map((partner, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 text-center hover:shadow-xl transition-all border border-gray-100 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-7 h-7 text-red-500" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors">{partner}</p>
                    <div className="mt-2 flex items-center justify-center gap-1 text-green-600 text-xs">
                      <CheckCircle className="w-3 h-3" />
                      <span>Cashless</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TPA Partners Grid */}
          {(activeTab === "all" || activeTab === "tpa") && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileCheck className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold text-gray-900">TPA Partners</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {tpaPartners.map((partner, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 text-center hover:shadow-xl transition-all border border-gray-100 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FileCheck className="w-7 h-7 text-blue-500" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{partner}</p>
                    <div className="mt-2 flex items-center justify-center gap-1 text-green-600 text-xs">
                      <CheckCircle className="w-3 h-3" />
                      <span>Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Common questions about cashless treatment</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Help With Insurance?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our dedicated TPA desk is available to assist you with all insurance queries, document verification, and claim processing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+919877242893"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call TPA Desk: +91 98772-42893
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
