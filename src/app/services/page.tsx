import { Eye, Baby, CheckCircle } from "lucide-react";

const eyeServices = [
  {
    title: "Cataract Services",
    description: "Advanced cataract treatment solutions with premium lens options",
    features: ["Phacoemulsification", "Premium IOL Implantation", "Femtosecond Laser Surgery", "Multifocal IOL", "Toric IOL for Astigmatism"],
  },
  {
    title: "Refractive Surgery Services",
    description: "Vision correction procedures for freedom from glasses",
    features: ["LASIK Surgery", "PRK/LASEK", "SMILE Procedure", "ICL Surgery", "Refractive Lens Exchange"],
  },
  {
    title: "Vitreo-Retinal & Uveitis Services",
    description: "Specialized care for retinal conditions",
    features: ["Retinal Detachment Surgery", "Diabetic Retinopathy Treatment", "Macular Degeneration Care", "Uveitis Management", "Intravitreal Injections"],
  },
  {
    title: "Pediatric Ophthalmology & Strabismus",
    description: "Specialized eye care for children",
    features: ["Child Eye Examination", "Squint Treatment", "Amblyopia Management", "Pediatric Cataract", "Developmental Eye Care"],
  },
  {
    title: "Glaucoma Services",
    description: "Comprehensive glaucoma diagnosis and treatment",
    features: ["Glaucoma Screening", "Medical Management", "Laser Treatment", "Surgical Procedures", "Pressure Monitoring"],
  },
  {
    title: "Contact Lens & Low Vision Aids",
    description: "Vision enhancement solutions for all needs",
    features: ["Specialty Contact Lenses", "Low Vision Devices", "Custom Contact Lenses", "Visual Rehabilitation", "Assistive Technology"],
  },
  {
    title: "Neuro Ophthalmology",
    description: "Treatment for neurological eye conditions",
    features: ["Optic Nerve Disorders", "Visual Field Testing", "Double Vision Treatment", "Visual Pathway Disorders", "Neuro-ophthalmic Emergencies"],
  },
  {
    title: "Orbit & Oculoplasty Services",
    description: "Cosmetic and reconstructive eye procedures",
    features: ["Eyelid Surgery", "Orbital Tumors", "Thyroid Eye Disease", "Cosmetic Procedures", "Trauma Reconstruction"],
  },
  {
    title: "Cornea & External Diseases",
    description: "Specialized corneal care and treatment",
    features: ["Corneal Transplantation", "Dry Eye Treatment", "Corneal Infections", "Keratoconus Management", "Corneal Dystrophies"],
  },
  {
    title: "LASIK Eye Services",
    description: "Advanced vision correction with LASIK",
    features: ["Custom LASIK", "Wavefront LASIK", "Bladeless LASIK", "Topography Guided LASIK", "LASIK Enhancement"],
  },
];

const maternityServices = [
  {
    title: "Pregnancy Care",
    description: "Complete care for expectant mothers throughout pregnancy",
    features: ["Regular Check-ups", "Pregnancy Monitoring", "Nutrition Counseling", "High-Risk Pregnancy Care", "Pregnancy Exercise Classes"],
  },
  {
    title: "Diagnostic Services",
    description: "Advanced diagnostic facilities for comprehensive monitoring",
    features: ["Ultrasound Scans", "Blood Tests", "Genetic Screening", "Fetal Monitoring", "Growth Scans"],
  },
  {
    title: "Delivery & Postnatal Care",
    description: "Safe and comfortable delivery services",
    features: ["Normal Delivery", "Cesarean Section", "Postnatal Care", "Newborn Care", "Breastfeeding Support"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our Specialized Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive healthcare solutions for your eyes and family with state-of-the-art facilities
          </p>
        </div>
      </section>

      {/* Eye Care Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Eye size={40} className="text-primary" />
            <h2 className="text-3xl font-heading font-bold text-gray-800">Eye Care Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eyeServices.map((service, index) => (
              <div key={index} className="card border border-gray-100 hover:border-primary/30">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Eye size={28} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maternity Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Baby size={40} className="text-secondary" />
            <h2 className="text-3xl font-heading font-bold text-gray-800">Maternity Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {maternityServices.map((service, index) => (
              <div key={index} className="card border border-gray-100 hover:border-secondary/30">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Baby size={28} className="text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Need a Consultation?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Book an appointment with our specialists today for personalized care
          </p>
          <a href="/appointment" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Book Appointment
          </a>
        </div>
      </section>
    </>
  );
}
