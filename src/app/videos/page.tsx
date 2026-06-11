"use client";

import { Play, ExternalLink } from "lucide-react";

// YouTube videos from Prem Eye and Maternity Hospital channel
const youtubeVideos = [
  {
    videoId: "cCs-i69yGGA",
    title: "Patient Review - Prem Eye Hospital",
  },
  {
    videoId: "jZ-jz2C0FiE",
    title: "Eye Care Success Story",
  },
  {
    videoId: "H3ax947NMQU",
    title: "Hospital Tour & Facilities",
  },
  {
    videoId: "lGiSGgya9gM",
    title: "Patient Testimonial",
  },
  {
    videoId: "hkpyAI_Ax3o",
    title: "Eye Treatment Experience",
  },
];

export default function Videos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-sm mb-6">
            <Play className="w-4 h-4" />
            Video Gallery
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Watch Our Videos
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Patient testimonials, hospital tours, and educational content about eye care and maternity services.
          </p>
        </div>
      </section>

      {/* YouTube Videos Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Watch Our <span className="text-red-600">YouTube</span> Videos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on any video to watch on YouTube
            </p>
          </div>

          {/* YouTube Videos Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {youtubeVideos.map((video, i) => (
              <a
                key={i}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                {/* YouTube Thumbnail */}
                <div className="relative aspect-video bg-gray-200">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to hqdefault if maxresdefault doesn't exist
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                    }}
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* YouTube Badge */}
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <ExternalLink className="w-4 h-4" />
                    <span>Watch on YouTube</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Subscribe Button */}
          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/@premeyeandmaternityhospital?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe to Our Channel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
