"use client";

import { BookOpen, Calendar, ArrowRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    slug: "understanding-cataract-surgery",
    title: "Understanding Cataract Surgery: What to Expect",
    excerpt: "Learn about the modern cataract surgery process, from diagnosis to recovery. Our experts explain the procedure step by step.",
    image: "/images/Cataract.png",
    author: "Dr. Rupesh Singla",
    date: "June 5, 2026",
    category: "Eye Care"
  },
  {
    slug: "lasik-vs-prk",
    title: "LASIK vs PRK: Which is Right for You?",
    excerpt: "Comparing two popular vision correction surgeries. Find out which procedure might be best suited for your eyes.",
    image: "/images/lasik eye.png",
    author: "Dr. Rupesh Singla",
    date: "May 28, 2026",
    category: "LASIK"
  },
  {
    slug: "protecting-eyes-digital-age",
    title: "Protecting Your Eyes in the Digital Age",
    excerpt: "Tips for reducing eye strain from screens and maintaining healthy vision in our technology-driven world.",
    image: "/images/contactlens.png",
    author: "Dr. Amanjot Kaur",
    date: "May 20, 2026",
    category: "Eye Health"
  },
  {
    slug: "pregnancy-first-trimester-guide",
    title: "Pregnancy Care: First Trimester Guide",
    excerpt: "Essential tips and checkups for the first three months of pregnancy. What every expecting mother should know.",
    image: "/images/pregnancy.png",
    author: "Dr. Pallvi Singla",
    date: "May 15, 2026",
    category: "Maternity"
  },
  {
    slug: "glaucoma-silent-thief-of-sight",
    title: "Glaucoma: The Silent Thief of Sight",
    excerpt: "Understanding glaucoma, its risk factors, and why regular eye exams are crucial for early detection.",
    image: "/images/glacoma.png",
    author: "Dr. David Aggarwal",
    date: "May 10, 2026",
    category: "Eye Care"
  },
  {
    slug: "childrens-eye-health",
    title: "Children's Eye Health: When to See a Doctor",
    excerpt: "Signs that your child might need an eye exam and how to protect their vision from an early age.",
    image: "/images/squit and pediatric.png",
    author: "Dr. Amit Gupta",
    date: "May 5, 2026",
    category: "Pediatric"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            Our Blog
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Health Tips & Insights
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Expert articles on eye care, maternity health, and wellness from our specialist doctors.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
                {/* Image */}
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
