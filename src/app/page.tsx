"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Eye, Baby, Users, Award, Clock, Heart, Microscope, Shield, Star, Phone,
  ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Play, MapPin,
  Sparkles, Calendar, Quote, ArrowUpRight, Zap, Target, Activity
} from "lucide-react";

// Data
const doctors = [
  {
    name: "Dr. Rupesh Singla",
    qualification: "M.B.B.S, M.S. (Ophthalmology)",
    role: "Founder & Chief Surgeon",
    specialization: "Phaco & LASIK Expert",
    experience: "16+",
    surgeries: "60,000+",
    image: "/images/Dr Rupesh Singla.jpg",
    color: "from-rose-500 to-red-600",
    available: true
  },
  {
    name: "Dr. Pallvi Singla",
    qualification: "MBBS, MS (OBS & Gynae)",
    role: "Gynecologist",
    specialization: "Safe Motherhood",
    experience: "16+",
    image: "/images/Dr Palvi Singla.JPG",
    color: "from-pink-500 to-rose-600",
    available: true
  },
  {
    name: "Dr. David Aggarwal",
    qualification: "M.B.B.S, M.S. (Eye)",
    role: "Visiting Consultant",
    specialization: "Vitreo-Retina",
    experience: "15+",
    timing: "Every Thursday",
    image: "/images/Dr David.jpg",
    color: "from-blue-500 to-indigo-600",
    available: false
  },
  {
    name: "Dr. Amit Gupta",
    qualification: "M.B.B.S, M.S. (Eye)",
    role: "Visiting Consultant",
    specialization: "Pediatric Eye",
    experience: "12+",
    timing: "Last Friday/Month",
    image: "/images/Amit.jpg",
    color: "from-emerald-500 to-teal-600",
    available: false
  },
  {
    name: "Dr. Amanjot Kaur",
    qualification: "MS, FICO, MRCS",
    role: "Cornea Specialist",
    specialization: "Cornea & Anterior",
    experience: "8+",
    surgeries: "3,000+",
    image: "/images/Dr.Amanjot Sandu.jpg",
    color: "from-violet-500 to-purple-600",
    available: true
  },
  {
    name: "Dr. Daizy Pathania",
    qualification: "M.B.B.S, M.S. (Ophthalmology)",
    role: "Glaucoma Specialist",
    specialization: "Glaucoma Management",
    experience: "10+",
    surgeries: "5,000+",
    image: "/images/Dr Daizy Pathania.jpg",
    color: "from-cyan-500 to-blue-600",
    available: true
  },
];

const services = [
  { icon: "/images/Cataract.png", title: "Cataract Surgery", desc: "Premium IOL implants with bladeless phaco surgery", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: "/images/lasik eye.png", title: "LASIK & Refractive", desc: "Freedom from glasses with advanced laser technology", color: "from-purple-500/20 to-pink-500/20" },
  { icon: "/images/vitreo-ratinal.png", title: "Retina Care", desc: "Expert treatment for diabetic retinopathy & macular diseases", color: "from-orange-500/20 to-red-500/20" },
  { icon: "/images/glacoma.png", title: "Glaucoma", desc: "Early detection & comprehensive management", color: "from-green-500/20 to-emerald-500/20" },
  { icon: "/images/cornea and external.png", title: "Cornea Services", desc: "Transplants, keratoconus & dry eye treatment", color: "from-teal-500/20 to-cyan-500/20" },
  { icon: "/images/squit and pediatric.png", title: "Pediatric Eye", desc: "Child-friendly care & squint correction", color: "from-yellow-500/20 to-orange-500/20" },
];

const stats = [
  { value: "2,00,000+", label: "Happy Patients", icon: Heart },
  { value: "60,000+", label: "Surgeries", icon: Activity },
  { value: "16+", label: "Years", icon: Award },
  { value: "4.9★", label: "Google Rating", icon: Star },
];

const testimonials = [
  { name: "Sukhdev Singh", location: "Barnala", text: "Best eye hospital! Dr. Rupesh Singla performed my cataract surgery with excellent results. World-class facilities.", rating: 5, image: "S" },
  { name: "Gurpreet Kaur", location: "Sangrur", text: "Amazing maternity care by Dr. Pallvi. The staff made my delivery experience comfortable and safe.", rating: 5, image: "G" },
  { name: "Harpreet Singh", location: "Bathinda", text: "Got LASIK done here. Now seeing 6/6 without glasses! Highly professional team.", rating: 5, image: "H" },
];

// Animated Counter Component
function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2000 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Home() {
  const [activeDoctor, setActiveDoctor] = useState(0);

  return (
    <div className="overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      {/* MOBILE HERO - Clean & Professional */}
      <section className="lg:hidden relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative pt-20 pb-6 px-4">
          {/* Trust Badge */}
          <div className="flex justify-center mb-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white shadow-md border border-gray-100 px-3 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-gray-700 text-xs font-medium">Since 2012 • Barnala</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-center text-2xl font-bold text-gray-900 leading-tight mb-3 animate-fade-in-up">
            Advanced{' '}
            <span className="text-primary">Eye Care</span>
            {' '}&{' '}
            <span className="text-secondary">Maternity</span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-600 text-sm mb-4 px-4 animate-fade-in-up">
            World-class healthcare with expert doctors & latest technology
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 justify-center mb-5 animate-fade-in-up">
            <Link href="/appointment" className="bg-gradient-to-r from-primary to-primary-light text-white px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg shadow-primary/20">
              <Calendar className="w-4 h-4" />
              Book Now
            </Link>
            <a href="tel:+919877242893" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg shadow-green-500/20">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Hospital Image */}
          <div className="relative mx-auto max-w-sm mb-5 animate-fade-in-up">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/front-pic.jpeg"
                  alt="Prem Eye & Maternity Hospital"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              {/* Badge on image */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-2.5 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-xs">Prem Eye & Maternity</p>
                      <p className="text-[10px] text-gray-500">Advanced Healthcare Center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 animate-fade-in-up">
            <div className="grid grid-cols-4 gap-2">
              <div className="text-center">
                <div className="flex items-center justify-center gap-0.5 mb-0.5">
                  <span className="text-lg font-bold text-gray-900">4.9</span>
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-500 text-[10px]">Rating</p>
              </div>
              <div className="text-center border-l border-gray-100">
                <span className="text-lg font-bold text-gray-900 block">2L+</span>
                <p className="text-gray-500 text-[10px]">Patients</p>
              </div>
              <div className="text-center border-l border-gray-100">
                <span className="text-lg font-bold text-gray-900 block">60K+</span>
                <p className="text-gray-500 text-[10px]">Surgeries</p>
              </div>
              <div className="text-center border-l border-gray-100">
                <span className="text-lg font-bold text-gray-900 block">16+</span>
                <p className="text-gray-500 text-[10px]">Years</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-600 animate-fade-in-up">
            <a href="tel:+919877242893" className="flex items-center gap-1.5 hover:text-primary">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98772-42893</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>9 AM - 5 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP HERO */}
      <section className="hidden lg:block relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary/5" />

        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient" style={{backgroundSize: '400% 400%'}} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/10 to-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-particle" style={{animationDelay: '0s'}} />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-secondary/40 rounded-full animate-particle" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-accent/30 rounded-full animate-particle" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary/20 rounded-full animate-particle" style={{animationDelay: '0.5s'}} />
          <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-secondary/25 rounded-full animate-particle" style={{animationDelay: '1.5s'}} />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}} />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="min-h-screen flex flex-row items-center gap-12 xl:gap-20">

            {/* Image Section - Left Side */}
            <div className="flex-1 relative animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              {/* Main Image Container */}
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-[3rem] blur-2xl opacity-60" />

                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border-4 border-white bg-gray-100">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/front-pic.jpeg"
                      alt="Prem Eye & Maternity Hospital - Modern Healthcare Facility in Barnala"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Hospital Name Badge on Image */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                          <Eye className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="font-bold text-gray-900 text-base">Prem Eye & Maternity</h2>
                          <p className="text-sm text-gray-500">Advanced Healthcare Center</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards - Desktop with enhanced animations */}
                <div className="absolute -top-6 -left-6 xl:-left-10 animate-fade-in-up floating" style={{animationDelay: '0.6s'}}>
                  <div className="tilt-card bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900">
                          <AnimatedCounter end={40} suffix="+" duration={1500} />
                        </p>
                        <p className="text-xs text-gray-500">Insurance Partners</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 xl:-left-10 animate-fade-in-up floating-delayed" style={{animationDelay: '0.7s'}}>
                  <div className="tilt-card bg-gradient-to-r from-primary to-primary-light rounded-2xl p-4 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                        <Microscope className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-white">ZEISS & ALCON</p>
                        <p className="text-xs text-white/80">Latest Technology</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative circles with glow */}
                <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-primary/20 rounded-full animate-spin-slow" />
                <div className="absolute -bottom-8 -right-8 w-24 h-24 border-2 border-secondary/20 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}} />
              </div>

            </div>

            {/* Right Content - Text Section */}
            <div className="flex-1 flex flex-col justify-center text-left py-12">
              {/* Trust Badge */}
              <div className="flex justify-start mb-6 animate-fade-in-up">
                <div className="animate-float-badge inline-flex items-center gap-2 bg-white shadow-lg shadow-primary/10 border border-primary/10 px-4 py-2 rounded-full hover:shadow-xl transition-shadow">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-gray-700 text-sm font-medium">Since 2012 • Barnala</span>
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
              </div>

              {/* Main Heading with gradient animation */}
              <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-[1.15] mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                Advanced{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary animate-gradient" style={{backgroundSize: '200% 200%'}}>Eye Care</span>
                {' '}&{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-light to-secondary animate-gradient" style={{backgroundSize: '200% 200%', animationDelay: '0.5s'}}>Maternity</span>
                {' '}Hospital
              </h1>

              {/* Subtitle */}
              <p className="text-gray-600 text-xl mb-8 max-w-xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                World-class eye care and maternity services with expert doctors and cutting-edge technology.
              </p>

              {/* CTA Buttons with ripple effect */}
              <div className="flex flex-row gap-4 justify-start mb-10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <Link href="/appointment" className="btn-ripple group bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 animate-glow-pulse">
                  <Calendar className="w-5 h-5" />
                  Book Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:+919877242893" className="btn-ripple group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Stats Grid - Desktop with animated counters */}
              <div className="grid grid-cols-4 gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="stat-card-shine bg-white rounded-2xl p-5 shadow-lg shadow-gray-100 border border-gray-100 text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" style={{'--shine-delay': '0s'} as React.CSSProperties}>
                  <div className="flex items-center justify-start gap-1 mb-1">
                    <span className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors">4.9</span>
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-gray-500 text-sm">Google Rating</p>
                </div>
                <div className="stat-card-shine bg-white rounded-2xl p-5 shadow-lg shadow-gray-100 border border-gray-100 text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" style={{'--shine-delay': '0.5s'} as React.CSSProperties}>
                  <div className="flex items-center justify-start gap-1 mb-1">
                    <span className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      <AnimatedCounter end={200000} suffix="+" duration={2000} />
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">Happy Patients</p>
                </div>
                <div className="stat-card-shine bg-white rounded-2xl p-5 shadow-lg shadow-gray-100 border border-gray-100 text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" style={{'--shine-delay': '1s'} as React.CSSProperties}>
                  <div className="flex items-center justify-start gap-1 mb-1">
                    <span className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      <AnimatedCounter end={60000} suffix="+" duration={2000} />
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">Surgeries</p>
                </div>
                <div className="stat-card-shine bg-white rounded-2xl p-5 shadow-lg shadow-gray-100 border border-gray-100 text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" style={{'--shine-delay': '1.5s'} as React.CSSProperties}>
                  <div className="flex items-center justify-start gap-1 mb-1">
                    <span className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      <AnimatedCounter end={16} suffix="+" duration={1500} />
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">Years Experience</p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-gray-200 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <a href="tel:+919877242893" className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">24/7 Emergency</p>
                    <p className="text-sm font-bold text-gray-900">+91 98772-42893</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm font-bold text-gray-900">Anaj Mandi Road, Barnala</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Working Hours</p>
                    <p className="text-sm font-bold text-gray-900">9 AM - 5 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      {/* Mobile About */}
      <section className="lg:hidden py-12 bg-gray-50">
        <div className="px-5">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              About Us
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Journey <span className="gradient-text">Since 2012</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Barnala&apos;s most trusted Eye & Maternity Hospital with world-class facilities.
            </p>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg">
            <div className="aspect-[16/10] relative">
              <Image
                src="/images/team.png"
                alt="Our Expert Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Key Points */}
          <div className="space-y-4 mb-8">
            {[
              { icon: Microscope, text: "State-of-the-art medical equipment" },
              { icon: Users, text: "Expert team of specialists" },
              { icon: Heart, text: "2,00,000+ satisfied patients" },
              { icon: Shield, text: "40+ insurance tie-ups" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link href="/about" className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="w-full bg-white border-2 border-primary text-primary py-4 rounded-full font-semibold flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Desktop About */}
      <section className="hidden lg:block py-28 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div>
              <div className="section-badge mb-6">
                <Award className="w-4 h-4" />
                About Us
              </div>

              <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our Journey <br />
                <span className="gradient-text">Since 2012</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Prem Eye & Maternity Hospital has been serving the people of Barnala and surrounding areas with world-class eye care and maternity services. Our commitment to excellence and patient-first approach has made us the most trusted healthcare destination in the region.
              </p>

              {/* Key Points */}
              <div className="space-y-4 mb-10">
                {[
                  { text: "State-of-the-art infrastructure with latest medical equipment" },
                  { text: "Team of highly qualified and experienced specialists" },
                  { text: "Over 2,00,000+ satisfied patients and counting" },
                  { text: "Empaneled with 20+ insurance companies for cashless treatment" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-outline inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/team.png"
                    alt="Our Expert Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ DOCTORS SECTION ============ */}
      {/* Mobile Doctors */}
      <section className="lg:hidden py-12 bg-white">
        <div className="px-5">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Expert Team
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Meet Our <span className="gradient-text">Specialists</span>
            </h2>
            <p className="text-gray-600 text-base">
              Highly qualified doctors delivering exceptional care
            </p>
          </div>

          {/* Doctors Cards */}
          <div className="space-y-4">
            {doctors.map((doctor, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-4 flex gap-4">
                {/* Image */}
                <div className="relative w-24 h-28 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className={`inline-flex items-center bg-gradient-to-r ${doctor.color} text-white text-[10px] font-semibold px-2 py-0.5 rounded-full mb-1`}>
                    {doctor.role}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base truncate">{doctor.name}</h3>
                  <p className="text-xs text-gray-500 truncate mb-1">{doctor.qualification}</p>
                  <p className="text-xs text-primary font-medium mb-2">{doctor.specialization}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span className="font-semibold">{doctor.experience} Yrs</span>
                    <span>•</span>
                    <span>{doctor.surgeries || doctor.timing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Link href="/appointment" className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg">
              <Calendar className="w-5 h-5" />
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Desktop Doctors */}
      <section className="hidden lg:block py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="section-badge mb-4">
              <Sparkles className="w-4 h-4" />
              Expert Medical Team
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Meet Our <span className="gradient-text">Specialists</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Highly qualified doctors with decades of combined experience delivering exceptional care
            </p>
          </div>

          {/* Doctors Display */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Featured Doctor Card */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${doctors[activeDoctor].color} rounded-[2.5rem] blur-2xl opacity-30 scale-95`} />
              <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-black/10">
                <div className="flex gap-8">
                  {/* Image */}
                  <div className="relative w-64 h-80 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={doctors[activeDoctor].image}
                      alt={doctors[activeDoctor].name}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${doctors[activeDoctor].color} opacity-20`} />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${doctors[activeDoctor].color} text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4`}>
                      {doctors[activeDoctor].role}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {doctors[activeDoctor].name}
                    </h3>
                    <p className="text-primary font-semibold mb-1">{doctors[activeDoctor].qualification}</p>
                    <p className="text-gray-600 mb-6">{doctors[activeDoctor].specialization}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-2xl font-bold text-gray-900">{doctors[activeDoctor].experience}</p>
                        <p className="text-sm text-gray-500">Years Exp.</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-2xl font-bold text-gray-900">{doctors[activeDoctor].surgeries || doctors[activeDoctor].timing}</p>
                        <p className="text-sm text-gray-500">{doctors[activeDoctor].surgeries ? 'Surgeries' : 'Availability'}</p>
                      </div>
                    </div>

                    <Link href="/appointment" className="btn-primary inline-flex items-center gap-2">
                      Book Appointment
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Selector */}
            <div className="space-y-4">
              {doctors.map((doctor, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDoctor(i)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 group ${
                    activeDoctor === i
                      ? 'bg-white shadow-xl shadow-black/10 scale-[1.02]'
                      : 'bg-gray-50 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${doctor.color} opacity-20`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 truncate">{doctor.name}</h4>
                    <p className="text-sm text-gray-600 truncate">{doctor.specialization}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    activeDoctor === i
                      ? `bg-gradient-to-r ${doctor.color} text-white`
                      : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                  }`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES SECTION ============ */}
      {/* Mobile Services */}
      <section className="lg:hidden py-12 bg-gray-50">
        <div className="px-5">
          {/* Eye Services */}
          <div className="mb-10">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
                <Eye className="w-4 h-4" />
                Eye Care
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Our Eye <span className="gradient-text">Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {services.map((service, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="w-12 h-12 mb-3">
                    <Image src={service.icon} alt={service.title} width={48} height={48} className="object-contain" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{service.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Maternity Services - Mobile */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-3 border border-secondary/20">
                <Baby className="w-4 h-4" />
                Mother & Baby Care
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Maternity <span className="text-secondary">Services</span>
              </h2>
              <p className="text-gray-500 text-sm mt-2">Expert care by Dr. Pallvi Singla</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=200&h=200&fit=crop", title: "Normal Delivery", desc: "Safe & natural birthing" },
                { icon: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&h=200&fit=crop", title: "C-Section", desc: "Expert surgical delivery" },
                { icon: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=200&h=200&fit=crop", title: "Prenatal Care", desc: "Pregnancy monitoring" },
                { icon: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=200&h=200&fit=crop", title: "Postnatal Care", desc: "Mother & baby care" },
              ].map((service, i) => (
                <div key={i} className="bg-white rounded-2xl p-3 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-xl overflow-hidden">
                    <Image src={service.icon} alt={service.title} width={96} height={96} className="object-cover w-full h-full" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{service.title}</h3>
                  <p className="text-gray-500 text-[10px]">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/services" className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg">
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Desktop Services */}
      <section className="hidden lg:block py-24 bg-white relative">
        <div className="container mx-auto px-4">
          {/* Eye Services Header */}
          <div className="text-center mb-12">
            <div className="section-badge mb-4">
              <Eye className="w-4 h-4" />
              Eye Care Services
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Advanced Eye <span className="gradient-text">Care</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive eye care with cutting-edge technology and expert specialists
            </p>
          </div>

          {/* Eye Services Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image src={service.icon} alt={service.title} width={64} height={64} className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.desc}</p>
                    <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Maternity Services Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-secondary/10 text-secondary px-6 py-3 rounded-full text-sm font-semibold border border-secondary/20 mb-6">
              <Baby className="w-5 h-5" />
              Maternity Services
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Mother & Baby <span className="text-secondary">Care</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Complete maternity care with experienced gynecologists and modern facilities
            </p>
          </div>

          {/* Maternity Services Grid - Redesigned with Large Images */}
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=200&h=200&fit=crop", title: "Normal Delivery", desc: "Safe and natural birthing experience with expert care and support throughout", doctor: "Dr. Pallvi Singla", bgGradient: "from-pink-50 to-rose-50" },
              { icon: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&h=200&fit=crop", title: "C-Section Delivery", desc: "Expert surgical delivery with advanced OT facilities when medically necessary", doctor: "Dr. Pallvi Singla", bgGradient: "from-purple-50 to-pink-50" },
              { icon: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=200&h=200&fit=crop", title: "Prenatal Care", desc: "Complete pregnancy monitoring, health checkups and guidance for expecting mothers", doctor: "Dr. Pallvi Singla", bgGradient: "from-teal-50 to-emerald-50" },
              { icon: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=200&h=200&fit=crop", title: "Postnatal Care", desc: "Mother and newborn wellness, recovery support and breastfeeding guidance", doctor: "Dr. Pallvi Singla", bgGradient: "from-emerald-50 to-teal-50" },
            ].map((service, i) => (
              <div
                key={i}
                className={`group bg-gradient-to-br ${service.bgGradient} rounded-3xl p-6 border border-secondary/10 hover:border-secondary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden text-center`}
              >
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full" />

                {/* Large Image */}
                <div className="relative w-36 h-36 mx-auto rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300 bg-white">
                  <Image src={service.icon} alt={service.title} fill className="object-contain p-2" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>

                {/* Doctor info */}
                <div className="flex items-center justify-center gap-2 pt-4 border-t border-secondary/10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PS</span>
                  </div>
                  <span className="text-secondary text-sm font-semibold">{service.doctor}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-light text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      {/* Mobile Why Choose Us */}
      <section className="lg:hidden py-12 bg-gray-900 text-white">
        <div className="px-5">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold mb-3">
              Trusted Healthcare in <span className="text-accent">Barnala</span>
            </h2>
            <p className="text-gray-400 text-base">
              12+ years of world-class medical care
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { icon: Award, title: "NABH Standards", desc: "Quality healthcare" },
              { icon: Microscope, title: "Latest Tech", desc: "ZEISS & ALCON" },
              { icon: Clock, title: "24/7 Emergency", desc: "Always available" },
              { icon: Shield, title: "Cashless", desc: "20+ insurances" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Equipment Showcase */}
          <div className="mb-6">
            <p className="text-center text-gray-400 text-sm mb-4">Our Advanced Equipment</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                "/images/Machine1.png",
                "/images/Machine2.png",
                "/images/Machine3.png",
              ].map((img, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-white/10">
                  <Image src={img} alt="Equipment" fill className="object-contain p-2" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link href="/about" className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2">
            Learn More About Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Desktop Why Choose Us */}
      <section className="hidden lg:block py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Why Choose Us
              </div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Trusted Healthcare Partner in <span className="text-accent">Barnala</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                For over 12 years, we have been providing world-class medical care with the latest technology and a patient-first approach.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Award, title: "NABH Standards", desc: "Quality care that meets national healthcare benchmarks" },
                  { icon: Microscope, title: "Latest Technology", desc: "Advanced equipment from ZEISS, ALCON & Topcon" },
                  { icon: Clock, title: "24/7 Emergency", desc: "Round-the-clock care for urgent medical needs" },
                  { icon: Shield, title: "100% Cashless", desc: "Empaneled with 20+ insurance companies" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Showcase */}
            <div>
              <p className="text-center text-gray-400 text-sm mb-6">Our State-of-the-Art Equipment</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { img: "/images/Machine1.png", name: "Phaco Machine" },
                  { img: "/images/Machine2.png", name: "ZEISS OCT" },
                  { img: "/images/Machine3.png", name: "Topcon Camera" },
                  { img: "/images/Machine4.png", name: "Auto Refractor" },
                  { img: "/images/Machine5.png", name: "Slit Lamp" },
                  { img: "/images/Machine6.png", name: "Laser System" },
                ].map((item, i) => (
                  <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all p-4">
                    <Image src={item.img} alt={item.name} fill className="object-contain p-2" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-xs text-center font-medium">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="section-badge mb-4">
              <Quote className="w-4 h-4" />
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Patient <span className="gradient-text">Stories</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">4.9 from 10,000+ Reviews</span>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-xl shadow-black/5 hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    {t.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://g.page/r/CeuCt2IH1DQ3EAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              View All Reviews <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/10 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to See<br />the World Clearly?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Book your appointment today and take the first step towards better vision and health with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/appointment" className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all shadow-2xl">
                <Calendar className="w-6 h-6" />
                Book Appointment
              </Link>
              <a href="tel:+919877242893" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-white hover:text-primary transition-all">
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
