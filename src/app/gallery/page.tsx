"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/images/media1.JPG", title: "Hospital Staff Team", category: "Team" },
  { src: "/images/media3.JPG", title: "Maternity Care Team", category: "Team" },
  { src: "/images/media4.JPG", title: "Eye Testing Room", category: "Facilities" },
  { src: "/images/media5.JPG", title: "Hospital Building", category: "Hospital" },
  { src: "/images/media6.JPG", title: "Auto Refractometer", category: "Equipment" },
  { src: "/images/media8.JPG", title: "Topcon 3D OCT Maestro", category: "Equipment" },
  { src: "/images/media9.JPG", title: "Sirius Cornea Topographer", category: "Equipment" },
  { src: "/images/media10.JPG", title: "Anesthesia Machine", category: "Equipment" },
  { src: "/images/media1111.JPG", title: "Patient Waiting Area", category: "Hospital" },
  { src: "/images/media12.JPG", title: "Optical Shop Team", category: "Team" },
  { src: "/images/media13.JPG", title: "Pharmacy", category: "Facilities" },
  { src: "/images/media14.JPG", title: "Hospital Staff", category: "Team" },
  { src: "/images/media15.JPG", title: "Auto Refracto Keratometer", category: "Equipment" },
  { src: "/images/media16.JPG", title: "Appasamy YAG Laser", category: "Equipment" },
  { src: "/images/media17.JPG", title: "Slit Lamp with Display", category: "Equipment" },
  { src: "/images/media18.JPG", title: "Cornea Topographer", category: "Equipment" },
  { src: "/images/media19.JPG", title: "OPD Room", category: "Facilities" },
  { src: "/images/media20.jpg", title: "Operation Theatre Team", category: "Team" },
  { src: "/images/media21.jpg", title: "Eye Surgery in Progress", category: "Facilities" },
  { src: "/images/media23.JPG", title: "Reception Desk", category: "Hospital" },
];

const technologies = [
  { name: "Constellation (ALCON USA)", desc: "Advanced vitrectomy machine" },
  { name: "Zeiss Microscope", desc: "High-end surgical microscope" },
  { name: "Appasamy Green Laser", desc: "Precision laser system" },
  { name: "Optical Biometer (ZEISS)", desc: "Accurate eye measurements" },
  { name: "Visual Field Analyzer", desc: "Automatic perimetry system" },
  { name: "Non-contact Tonometer", desc: "Pressure measurement" },
  { name: "ND-YAG Laser", desc: "Advanced laser treatment" },
  { name: "Topcon 3D OCT", desc: "Retinal imaging system" },
  { name: "Cornea Topographer", desc: "Corneal mapping device" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter(img => img.category === filter);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex = direction === "prev"
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    setSelectedImage(newIndex);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our modern facilities, advanced equipment, and the caring environment we provide
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="font-semibold text-lg">{image.title}</p>
                    <p className="text-sm text-white/80">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Advanced Technologies</h2>
            <p className="section-subtitle">
              State-of-the-art equipment for precise diagnosis and treatment
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full z-10"
          >
            <X size={32} />
          </button>
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 text-white p-2 hover:bg-white/20 rounded-full z-10"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 text-white p-2 hover:bg-white/20 rounded-full z-10"
          >
            <ChevronRight size={32} />
          </button>
          <div className="max-w-4xl w-full">
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>
            <div className="text-center text-white mt-4">
              <p className="text-2xl font-semibold mb-2">{filteredImages[selectedImage].title}</p>
              <p className="text-white/60">{filteredImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
