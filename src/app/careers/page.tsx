"use client";

import { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, Users, Heart, Award, Zap, Mail, Phone, X, Upload, CheckCircle } from "lucide-react";

const openPositions = [
  {
    title: "Ophthalmologist",
    department: "Eye Care",
    type: "Full-time",
    location: "Barnala",
    experience: "2+ years"
  },
  {
    title: "Staff Nurse",
    department: "Nursing",
    type: "Full-time",
    location: "Barnala",
    experience: "1+ years"
  },
  {
    title: "Optometrist",
    department: "Eye Care",
    type: "Full-time",
    location: "Barnala",
    experience: "Freshers Welcome"
  },
  {
    title: "Receptionist",
    department: "Administration",
    type: "Full-time",
    location: "Barnala",
    experience: "1+ years"
  },
  {
    title: "OT Technician",
    department: "Operations",
    type: "Full-time",
    location: "Barnala",
    experience: "2+ years"
  }
];

const benefits = [
  { icon: Heart, title: "Health Insurance", desc: "Comprehensive coverage for you and family" },
  { icon: Award, title: "Growth Opportunities", desc: "Regular training and career advancement" },
  { icon: Users, title: "Great Team", desc: "Work with experienced professionals" },
  { icon: Zap, title: "Modern Facilities", desc: "State-of-the-art equipment and technology" }
];

export default function Careers() {
  const [showForm, setShowForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    message: ""
  });

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setShowForm(true);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log("Form submitted:", { ...formData, position: selectedPosition });
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-sm mb-6">
            <Briefcase className="w-4 h-4" />
            Careers
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Join Our Team
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Be part of a dedicated team committed to providing exceptional healthcare in Barnala.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Why Work With Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Open Positions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((job, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>
                    <p className="text-primary text-sm mt-2 font-medium">
                      Experience: {job.experience}
                    </p>
                  </div>
                  <button
                    onClick={() => handleApply(job.title)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all text-sm cursor-pointer"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Suitable Position */}
          <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-3">Don&apos;t See a Suitable Position?</h3>
            <p className="text-gray-300 mb-6">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => handleApply("General Application")}
                className="flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <Upload className="w-5 h-5" />
                Submit Your Resume
              </button>
              <a href="tel:+919877242893" className="flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors">
                <Phone className="w-5 h-5" />
                +91 98772-42893
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary to-primary-light p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Apply for Position</h3>
                  <p className="text-white/80 text-sm mt-1">{selectedPosition}</p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h4>
                  <p className="text-gray-600">
                    Thank you for applying. We will review your application and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <select
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select experience</option>
                      <option value="fresher">Fresher</option>
                      <option value="0-1">0-1 Years</option>
                      <option value="1-2">1-2 Years</option>
                      <option value="2-5">2-5 Years</option>
                      <option value="5+">5+ Years</option>
                    </select>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Upload Resume (PDF/DOC) *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cover Letter / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell us about yourself and why you want to join our team..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Submit Application
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    By submitting, you agree to our privacy policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
