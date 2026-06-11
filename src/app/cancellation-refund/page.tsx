"use client";

import { RefreshCcw, Clock, CreditCard, Phone, Mail, AlertCircle } from "lucide-react";

export default function CancellationRefund() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-sm mb-6">
            <RefreshCcw className="w-4 h-4" />
            Cancellation & Refund
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Cancellation & Refund Policy
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our transparent policy for appointment cancellations and refunds.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Important Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 mb-1">Important Notice</h3>
              <p className="text-amber-700 text-sm">
                Please read this policy carefully before booking appointments or making payments. By using our services, you agree to these terms.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Appointment Cancellation */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Appointment Cancellation</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p><strong>24+ Hours Before:</strong> Full refund of any advance payment, or free rescheduling.</p>
                <p><strong>12-24 Hours Before:</strong> 50% refund or rescheduling with nominal fee.</p>
                <p><strong>Less than 12 Hours:</strong> No refund, but one-time rescheduling may be allowed.</p>
                <p><strong>No Show:</strong> No refund and may affect future bookings.</p>
              </div>
            </div>

            {/* Payment Refunds */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Payment Refunds</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p><strong>Advance Payments:</strong> Refundable as per cancellation policy above.</p>
                <p><strong>Consultation Fees:</strong> Non-refundable once consultation is completed.</p>
                <p><strong>Surgery/Procedure Deposits:</strong> Refundable minus administrative charges if cancelled 48+ hours before.</p>
                <p><strong>Medicine/Products:</strong> Non-refundable once dispensed.</p>
                <p><strong>Diagnostic Tests:</strong> Refundable only if test not yet conducted.</p>
              </div>
            </div>

            {/* Refund Process */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Refund Process</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                  <p>Submit refund request at reception or via email with booking details.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                  <p>Request will be reviewed within 2-3 business days.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                  <p>Approved refunds will be processed within 7-10 business days.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                  <p>Refund will be credited to original payment method.</p>
                </div>
              </div>
            </div>

            {/* Exceptions */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Exceptions</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Medical emergencies will be handled on case-by-case basis</li>
                <li>• Hospital-initiated cancellations will receive full refund</li>
                <li>• Insurance-related refunds follow insurance company policies</li>
                <li>• Government scheme patients follow respective scheme guidelines</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Need Help with Refund?</h3>
            <p className="text-white/80 mb-6">Contact our billing department for assistance.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919877242893" className="flex items-center gap-2 bg-white/20 px-4 py-3 rounded-full hover:bg-white/30 transition-colors">
                <Phone className="w-5 h-5" />
                +91 98772-42893
              </a>
              <a href="mailto:billing@premeyehospital.com" className="flex items-center gap-2 bg-white/20 px-4 py-3 rounded-full hover:bg-white/30 transition-colors">
                <Mail className="w-5 h-5" />
                billing@premeyehospital.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
