import { Eye, Heart, Users, Award, School, Stethoscope, HandHeart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              About <span className="text-primary">Prem Eye</span> & Maternity Hospital
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your trusted healthcare partner providing comprehensive eye care and maternity services
              with advanced technology and compassionate care since 2012.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-800 mb-6">
                Welcome to Prem Eye & Maternity Hospital
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Located in the heart of Barnala, our hospital is dedicated to providing comprehensive
                healthcare services. We combine years of medical expertise with state-of-the-art
                diagnostic and surgical equipment to ensure the best possible outcomes for our patients.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of highly qualified specialists is committed to delivering personalized care
                with a focus on patient comfort and satisfaction. From routine eye check-ups to complex
                surgeries, from prenatal care to delivery, we are here to support you at every step.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "100K+", label: "Happy Patients" },
                  { number: "10+", label: "Years Experience" },
                  { number: "5", label: "Expert Doctors" },
                  { number: "24/7", label: "Emergency Service" },
                ].map((stat, index) => (
                  <div key={index} className="bg-primary/5 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{stat.number}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[Eye, Heart, Stethoscope, Users].map((Icon, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                      <Icon size={40} className="text-primary mx-auto mb-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Community Services</h2>
            <p className="section-subtitle">
              Serving the community with care and compassion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card border-t-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Eye Checkup Camps</h3>
              <p className="text-gray-600 mb-4">
                We regularly organize free eye checkup camps across Barnala and surrounding areas,
                providing essential eye care services to underprivileged communities.
              </p>
              <ul className="space-y-2">
                {["Free vision screening", "Basic eye examinations", "Free spectacles distribution", "Advanced treatment referral"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card border-t-4 border-secondary">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <School size={32} className="text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">School Checkup Programs</h3>
              <p className="text-gray-600 mb-4">
                Our dedicated team conducts comprehensive eye checkups in schools to ensure early
                detection of vision problems in children.
              </p>
              <ul className="space-y-2">
                {["Regular school visits", "Child-friendly examinations", "Vision screening for all ages", "Parent awareness programs"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card border-t-4 border-accent">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <HandHeart size={32} className="text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Charity Work</h3>
              <p className="text-gray-600 mb-4">
                As part of our commitment to social responsibility, we actively participate in
                various charitable initiatives.
              </p>
              <ul className="space-y-2">
                {["Free cataract surgeries", "Subsidized treatment", "Medical aid distribution", "Health awareness programs"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary text-white rounded-2xl p-8">
              <h3 className="font-heading font-bold text-2xl mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To provide world-class eye care and maternity services accessible to all, combining
                advanced medical technology with compassionate care to improve the quality of life
                for our patients and community.
              </p>
            </div>
            <div className="bg-secondary text-white rounded-2xl p-8">
              <h3 className="font-heading font-bold text-2xl mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be the most trusted healthcare destination in the region, known for excellence
                in patient care, medical innovation, and community service, while maintaining the
                highest ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
