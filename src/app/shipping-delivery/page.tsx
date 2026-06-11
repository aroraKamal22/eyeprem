"use client";

import { Truck, Package, Clock, MapPin, Phone, Mail } from "lucide-react";

export default function ShippingDelivery() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-sm mb-6">
            <Truck className="w-4 h-4" />
            Shipping & Delivery
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Shipping & Delivery Policy
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Information about medicine and product delivery services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Info Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8">
            <p className="text-blue-800 text-center">
              <strong>Note:</strong> Prem Eye & Maternity Hospital primarily provides in-person medical services. Shipping applies only to prescribed medicines and optical products.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Products We Ship */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Products We Deliver</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Prescribed eye drops and medications</li>
                <li>• Contact lenses (with valid prescription)</li>
                <li>• Spectacles and frames</li>
                <li>• Post-surgery care kits</li>
                <li>• Optical accessories</li>
              </ul>
            </div>

            {/* Delivery Areas */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Delivery Areas</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p><strong>Barnala City:</strong> Same day or next day delivery</p>
                <p><strong>Nearby Towns (within 30 km):</strong> 1-2 business days</p>
                <p><strong>Punjab State:</strong> 2-4 business days</p>
                <p><strong>Rest of India:</strong> 5-7 business days</p>
              </div>
            </div>

            {/* Delivery Charges */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Delivery Charges</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p><strong>Barnala City:</strong> FREE delivery</p>
                <p><strong>Orders above ₹500:</strong> FREE delivery across Punjab</p>
                <p><strong>Standard Delivery:</strong> ₹50 - ₹100 based on location</p>
                <p><strong>Express Delivery:</strong> Additional ₹100</p>
              </div>
            </div>

            {/* Delivery Time */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Processing Time</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Orders are processed within 24 hours</li>
                <li>• Custom spectacles may take 3-5 days to prepare</li>
                <li>• Tracking information will be shared via SMS/WhatsApp</li>
                <li>• Delivery attempts: Up to 3 attempts will be made</li>
              </ul>
            </div>

            {/* Important Notes */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Valid prescription required for medicines and contact lenses</li>
                <li>• Check package upon delivery for any damage</li>
                <li>• Refrigerated items available for local delivery only</li>
                <li>• COD (Cash on Delivery) available for orders under ₹2000</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Delivery Queries?</h3>
            <p className="text-white/80 mb-6">Contact us for any shipping-related questions.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919877242893" className="flex items-center gap-2 bg-white/20 px-4 py-3 rounded-full hover:bg-white/30 transition-colors">
                <Phone className="w-5 h-5" />
                +91 98772-42893
              </a>
              <a href="mailto:pharmacy@premeyehospital.com" className="flex items-center gap-2 bg-white/20 px-4 py-3 rounded-full hover:bg-white/30 transition-colors">
                <Mail className="w-5 h-5" />
                pharmacy@premeyehospital.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
