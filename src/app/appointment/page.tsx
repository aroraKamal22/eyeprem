"use client";

import { useState } from "react";
import { User, Calendar, CheckCircle, MapPin, Clock, Phone, Lightbulb, ArrowRight, ArrowLeft, Check } from "lucide-react";

const services = [
  "General Eye Checkup",
  "Cataract Surgery",
  "LASIK Eye Surgery",
  "Retina Treatment",
  "Glaucoma Treatment",
  "Pediatric Eye Care",
  "Cornea Treatment",
  "Contact Lens Fitting",
  "Maternity - Pregnancy Care",
  "Maternity - Delivery",
];

const doctors = [
  { name: "Dr. Rupesh Singla", specialization: "Phaco & LASIK Surgeon" },
  { name: "Dr. Pallvi Singla", specialization: "OBS & Gynae" },
  { name: "Dr. David Aggarwal", specialization: "Vitreo-Retina (Thursdays)" },
  { name: "Dr. Amit Gupta", specialization: "Pediatric (Last Friday)" },
  { name: "Dr. Amanjot Kaur Sandhu", specialization: "Cornea Specialist" },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM"
];

export default function AppointmentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
    doctor: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  // Validation for each step
  const isStep1Valid = formData.name && formData.age && formData.gender && formData.phone;
  const isStep2Valid = formData.date && formData.time && formData.service;

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md mx-4">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle size={56} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">
            Appointment Booked!
          </h2>
          <p className="text-gray-600 mb-2">
            Thank you, <span className="font-semibold text-primary">{formData.name}</span>!
          </p>
          <p className="text-gray-600 mb-6">
            Your appointment has been scheduled for<br />
            <span className="font-semibold text-secondary">{formData.date}</span> at <span className="font-semibold text-secondary">{formData.time}</span>
          </p>
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <p className="text-sm text-gray-500 mb-2">Confirmation will be sent to:</p>
            <p className="font-medium text-gray-800">{formData.phone}</p>
            {formData.email && <p className="text-gray-600 text-sm">{formData.email}</p>}
          </div>
          <a href="/" className="btn-primary inline-block">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Book an <span className="text-primary">Appointment</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your visit with our expert ophthalmologists in just a few steps
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                {/* Step Indicator */}
                <div className="bg-gradient-to-r from-primary to-primary-light p-6">
                  <div className="flex items-center justify-center gap-4">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`
                          w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all
                          ${currentStep >= step
                            ? 'bg-white text-primary'
                            : 'bg-white/20 text-white/60'}
                        `}>
                          {currentStep > step ? <Check size={20} /> : step}
                        </div>
                        {step < 3 && (
                          <div className={`w-12 md:w-20 h-1 mx-2 rounded ${currentStep > step ? 'bg-white' : 'bg-white/20'}`}></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center gap-8 md:gap-16 mt-3 text-sm text-white/80">
                    <span className={currentStep === 1 ? 'text-white font-medium' : ''}>Patient Info</span>
                    <span className={currentStep === 2 ? 'text-white font-medium' : ''}>Schedule</span>
                    <span className={currentStep === 3 ? 'text-white font-medium' : ''}>Confirm</span>
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-6 md:p-10">

                  {/* Step 1: Patient Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fade-in-up">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <User size={24} className="text-primary" />
                        </div>
                        <div>
                          <h2 className="text-xl font-heading font-bold text-gray-800">Patient Information</h2>
                          <p className="text-sm text-gray-500">Please fill in your details</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all text-gray-800"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Age <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            min="1"
                            max="120"
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all text-gray-800"
                            placeholder="Your age"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Gender <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all text-gray-800 bg-white"
                          >
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength={10}
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all text-gray-800"
                            placeholder="10-digit mobile number"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address <span className="text-gray-400">(Optional)</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all text-gray-800"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <button
                        onClick={nextStep}
                        disabled={!isStep1Valid}
                        className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
                          isStep1Valid
                            ? 'bg-primary text-white hover:bg-primary-dark'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Next Step
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  )}

                  {/* Step 2: Schedule */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fade-in-up">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                          <Calendar size={24} className="text-secondary" />
                        </div>
                        <div>
                          <h2 className="text-xl font-heading font-bold text-gray-800">Schedule Appointment</h2>
                          <p className="text-sm text-gray-500">Choose your preferred date and time</p>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service Required <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all text-gray-800 bg-white"
                          >
                            <option value="">Select service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Doctor <span className="text-gray-400">(Optional)</span>
                          </label>
                          <select
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all text-gray-800 bg-white"
                          >
                            <option value="">Any available doctor</option>
                            {doctors.map((doctor) => (
                              <option key={doctor.name} value={doctor.name}>
                                {doctor.name} - {doctor.specialization}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={today}
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all text-gray-800"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Preferred Time <span className="text-red-500">*</span>
                          </label>
                          <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                            {timeSlots.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setFormData({ ...formData, time: slot })}
                                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                                  formData.time === slot
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button
                          onClick={prevStep}
                          className="flex-1 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-600 hover:bg-gray-50 transition-all"
                        >
                          <ArrowLeft size={20} />
                          Back
                        </button>
                        <button
                          onClick={nextStep}
                          disabled={!isStep2Valid}
                          className={`flex-1 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
                            isStep2Valid
                              ? 'bg-primary text-white hover:bg-primary-dark'
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          Next Step
                          <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Confirm */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-fade-in-up">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <CheckCircle size={24} className="text-green-600" />
                        </div>
                        <div>
                          <h2 className="text-xl font-heading font-bold text-gray-800">Confirm Details</h2>
                          <p className="text-sm text-gray-500">Please review your appointment details</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                          <User size={18} className="text-primary" />
                          Patient Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Name</p>
                            <p className="font-medium text-gray-800">{formData.name}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Age / Gender</p>
                            <p className="font-medium text-gray-800">{formData.age} years / {formData.gender}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Phone</p>
                            <p className="font-medium text-gray-800">{formData.phone}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Email</p>
                            <p className="font-medium text-gray-800">{formData.email || 'Not provided'}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-primary/5 rounded-2xl p-6 space-y-4 border-2 border-primary/20">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                          <Calendar size={18} className="text-secondary" />
                          Appointment Details
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Service</p>
                            <p className="font-medium text-gray-800">{formData.service}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Doctor</p>
                            <p className="font-medium text-gray-800">{formData.doctor || 'Any available'}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Date</p>
                            <p className="font-medium text-primary text-lg">{formData.date}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Time</p>
                            <p className="font-medium text-primary text-lg">{formData.time}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button
                          onClick={prevStep}
                          className="flex-1 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-600 hover:bg-gray-50 transition-all"
                        >
                          <ArrowLeft size={20} />
                          Back
                        </button>
                        <button
                          onClick={handleSubmit}
                          className="flex-1 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 transition-all"
                        >
                          <CheckCircle size={20} />
                          Confirm Booking
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* Location Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Anaj Mandi Road, Near Chhaju Roshan Karkhana, Barnala, Punjab
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium mt-3 inline-block hover:underline"
                >
                  View on Map →
                </a>
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Clock size={20} className="text-secondary" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Working Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mon - Sat</span>
                    <span className="font-medium text-gray-800">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">OPD Timing</span>
                    <span className="font-medium text-gray-800">10:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency</span>
                    <span className="font-medium text-green-600">24/7 Available</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Need Help?</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Call us for assistance with booking
                </p>
                <a
                  href="tel:+919877242893"
                  className="text-xl font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  +91 98772-42893
                </a>
              </div>

              {/* Tips Card */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Lightbulb size={20} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Quick Tips</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Please arrive 15 minutes before your scheduled time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Bring your previous prescriptions and reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Carry your insurance card if applicable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Avoid wearing eye makeup for eye checkups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
