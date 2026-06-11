"use client";

import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const blogData: Record<string, {
  title: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
}> = {
  "understanding-cataract-surgery": {
    title: "Understanding Cataract Surgery: What to Expect",
    image: "/images/Cataract.png",
    author: "Dr. Rupesh Singla",
    date: "June 5, 2026",
    category: "Eye Care",
    readTime: "8 min read",
    content: [
      "Cataract surgery is one of the most common and successful surgical procedures performed worldwide. A cataract occurs when the natural lens of your eye becomes cloudy, leading to blurred vision, difficulty seeing at night, and sensitivity to light. This condition typically develops gradually and is most common in people over the age of 60.",

      "## What Causes Cataracts?",
      "Cataracts form when proteins in the eye's lens break down and clump together, creating cloudy areas. Several factors can contribute to cataract development including aging, diabetes, smoking, excessive alcohol use, prolonged exposure to sunlight, and certain medications like corticosteroids.",

      "## Signs You May Need Cataract Surgery",
      "Common symptoms include cloudy or blurry vision, colors appearing faded, poor night vision, double vision in one eye, frequent prescription changes in glasses, and seeing halos around lights. If these symptoms interfere with your daily activities, it may be time to consider surgery.",

      "## The Surgery Process",
      "Modern cataract surgery is a quick, outpatient procedure that typically takes only 15-30 minutes. The surgeon makes a tiny incision in the eye, uses ultrasound waves to break up the cloudy lens (phacoemulsification), removes the lens fragments, and inserts an artificial intraocular lens (IOL). The incision is self-sealing and usually requires no stitches.",

      "## Types of Intraocular Lenses (IOLs)",
      "Patients can choose from several types of IOLs: Monofocal lenses provide clear vision at one distance, Multifocal lenses allow clear vision at multiple distances, Toric lenses correct astigmatism, and Extended depth of focus lenses provide a continuous range of vision.",

      "## Recovery After Surgery",
      "Most patients notice improved vision within a few days. Complete healing takes about 4-6 weeks. During recovery, you should avoid rubbing your eyes, wear protective eyewear, use prescribed eye drops, avoid strenuous activities for a few weeks, and attend all follow-up appointments.",

      "## Success Rate and Results",
      "Cataract surgery has a success rate of over 95%. Most patients experience significantly improved vision and can resume normal activities within a few days. At Prem Eye Hospital, we use the latest phacoemulsification technology and premium IOLs to ensure the best possible outcomes for our patients."
    ]
  },

  "lasik-vs-prk": {
    title: "LASIK vs PRK: Which is Right for You?",
    image: "/images/lasik eye.png",
    author: "Dr. Rupesh Singla",
    date: "May 28, 2026",
    category: "LASIK",
    readTime: "10 min read",
    content: [
      "If you're tired of wearing glasses or contact lenses, you've probably considered laser vision correction. LASIK and PRK are the two most popular procedures for correcting refractive errors like myopia (nearsightedness), hyperopia (farsightedness), and astigmatism. Understanding the differences between these procedures can help you make an informed decision.",

      "## What is LASIK?",
      "LASIK (Laser-Assisted In Situ Keratomileusis) involves creating a thin flap in the cornea using a femtosecond laser. The flap is lifted, and an excimer laser reshapes the underlying corneal tissue to correct vision. The flap is then repositioned, acting as a natural bandage. LASIK offers quick recovery, with most patients seeing clearly within 24 hours.",

      "## What is PRK?",
      "PRK (Photorefractive Keratectomy) was the first laser vision correction procedure. Instead of creating a flap, the surgeon removes the outer layer of the cornea (epithelium) entirely. The excimer laser then reshapes the cornea. The epithelium regenerates naturally over several days. PRK recovery takes longer than LASIK but produces equally excellent results.",

      "## Key Differences",
      "Recovery time differs significantly: LASIK patients often see well within a day, while PRK recovery takes 3-5 days for functional vision and several weeks for optimal vision. PRK may cause more discomfort initially but eliminates flap-related complications. PRK is often preferred for patients with thin corneas or those in contact sports.",

      "## Who is a Good Candidate for LASIK?",
      "Ideal LASIK candidates are over 18 years old, have stable vision for at least one year, have adequate corneal thickness, have no eye diseases like glaucoma or keratoconus, and are not pregnant or nursing.",

      "## Who Should Consider PRK?",
      "PRK may be better for individuals with thin corneas, people in professions with risk of eye trauma (military, athletes), those with previous eye surgery, and patients with certain corneal conditions that make flap creation risky.",

      "## Results and Success Rates",
      "Both LASIK and PRK have excellent success rates, with over 96% of patients achieving 20/20 vision or better. The long-term visual outcomes are virtually identical. At Prem Eye Hospital, our experienced surgeons will evaluate your eyes thoroughly and recommend the procedure best suited for your unique situation.",

      "## Making Your Decision",
      "During your consultation at Prem Eye Hospital, we'll perform comprehensive eye exams including corneal mapping, thickness measurements, and tear film analysis. Our experts will discuss your lifestyle, occupation, and visual goals to help determine whether LASIK or PRK is the right choice for you."
    ]
  },

  "protecting-eyes-digital-age": {
    title: "Protecting Your Eyes in the Digital Age",
    image: "/images/contactlens.png",
    author: "Dr. Amanjot Kaur",
    date: "May 20, 2026",
    category: "Eye Health",
    readTime: "7 min read",
    content: [
      "In today's digital world, we spend an average of 7-10 hours daily looking at screens - computers, smartphones, tablets, and televisions. This prolonged screen time can lead to a condition called Digital Eye Strain or Computer Vision Syndrome, affecting millions of people worldwide.",

      "## Understanding Digital Eye Strain",
      "Digital eye strain encompasses a range of eye and vision-related problems resulting from prolonged screen use. Symptoms include eye fatigue, dryness, blurred vision, headaches, neck and shoulder pain, and difficulty focusing. The blue light emitted by screens and reduced blinking while staring at screens contribute to these issues.",

      "## The 20-20-20 Rule",
      "One of the most effective ways to reduce eye strain is following the 20-20-20 rule: Every 20 minutes, take a 20-second break and look at something 20 feet away. This simple practice helps relax the focusing muscles in your eyes and reduces fatigue.",

      "## Proper Screen Setup",
      "Position your computer screen 20-26 inches from your eyes and slightly below eye level. Adjust screen brightness to match your surroundings. Increase text size if needed to reduce squinting. Use anti-glare screens if working in bright environments.",

      "## Blinking and Eye Lubrication",
      "We normally blink about 15-20 times per minute, but this rate decreases significantly when using screens. Make a conscious effort to blink more often. Use artificial tears or lubricating eye drops if you experience dryness. Consider a humidifier in your workspace to maintain moisture in the air.",

      "## Blue Light Protection",
      "Blue light from screens can disrupt sleep patterns and may contribute to eye strain. Consider using blue light filtering glasses or screen protectors. Many devices now have built-in blue light reduction modes. Limit screen time in the hours before bedtime.",

      "## Regular Eye Exams",
      "Even if you don't wear glasses, regular eye exams are important for detecting early signs of eye problems. If you work extensively with computers, inform your eye doctor so they can recommend appropriate solutions like computer glasses or special lens coatings.",

      "## Lifestyle Tips for Healthy Eyes",
      "Maintain a healthy diet rich in omega-3 fatty acids, vitamins A, C, and E. Stay hydrated by drinking plenty of water. Get adequate sleep to allow your eyes to rest and recover. Exercise regularly to improve blood circulation to the eyes. At Prem Eye Hospital, we offer comprehensive digital eye strain assessments and personalized solutions."
    ]
  },

  "pregnancy-first-trimester-guide": {
    title: "Pregnancy Care: First Trimester Guide",
    image: "/images/pregnancy.png",
    author: "Dr. Pallvi Singla",
    date: "May 15, 2026",
    category: "Maternity",
    readTime: "12 min read",
    content: [
      "The first trimester of pregnancy (weeks 1-12) is a crucial period of rapid development for your baby. During this time, all major organs begin to form, making proper prenatal care essential. Understanding what to expect and how to take care of yourself can help ensure a healthy pregnancy.",

      "## Early Signs of Pregnancy",
      "Common early pregnancy symptoms include missed period, nausea (morning sickness), breast tenderness, fatigue, frequent urination, mood swings, and food aversions or cravings. Not all women experience all symptoms, and their intensity varies.",

      "## Essential First Trimester Checkups",
      "Your first prenatal visit typically occurs around 8 weeks and includes confirmation of pregnancy, medical history review, physical examination, blood tests (blood type, Rh factor, hemoglobin, infections), urine tests, and first ultrasound to confirm due date.",

      "## Nutrition During First Trimester",
      "Proper nutrition is vital for your baby's development. Focus on folic acid (400-800 mcg daily) to prevent neural tube defects, iron-rich foods to support increased blood volume, calcium for bone development, protein for tissue growth, and prenatal vitamins as recommended by your doctor.",

      "## Foods to Avoid",
      "Certain foods pose risks during pregnancy: raw or undercooked meat and eggs, unpasteurized dairy products, high-mercury fish (shark, swordfish, king mackerel), raw sprouts, excessive caffeine (limit to 200mg daily), and alcohol (completely avoid).",

      "## Managing Morning Sickness",
      "Nausea affects up to 80% of pregnant women. To manage it: eat small, frequent meals, keep crackers by your bedside, stay hydrated, avoid strong smells, try ginger tea or supplements, and get plenty of rest. Consult your doctor if vomiting is severe.",

      "## Exercise and Rest",
      "Light to moderate exercise is generally safe and beneficial during pregnancy. Walking, swimming, and prenatal yoga are excellent choices. However, avoid contact sports, activities with fall risk, and exercises lying flat on your back after the first trimester. Listen to your body and rest when needed.",

      "## Emotional Well-being",
      "Hormonal changes can affect your mood. It's normal to feel excited, anxious, or overwhelmed. Talk to your partner and loved ones about your feelings. Consider joining a pregnancy support group. Seek professional help if you experience persistent sadness or anxiety.",

      "## When to Call Your Doctor",
      "Contact your healthcare provider immediately if you experience heavy bleeding, severe abdominal pain, high fever, severe headaches, or signs of dehydration. At Prem Eye and Maternity Hospital, our experienced obstetricians provide comprehensive prenatal care throughout your pregnancy journey."
    ]
  },

  "glaucoma-silent-thief-of-sight": {
    title: "Glaucoma: The Silent Thief of Sight",
    image: "/images/glacoma.png",
    author: "Dr. David Aggarwal",
    date: "May 10, 2026",
    category: "Eye Care",
    readTime: "9 min read",
    content: [
      "Glaucoma is often called the 'silent thief of sight' because it typically develops without noticeable symptoms until significant vision loss has occurred. It is one of the leading causes of irreversible blindness worldwide, affecting over 80 million people. Early detection and treatment are crucial for preserving vision.",

      "## What is Glaucoma?",
      "Glaucoma is a group of eye conditions that damage the optic nerve, which transmits visual information from the eye to the brain. This damage is often caused by abnormally high pressure inside the eye (intraocular pressure), though glaucoma can occur with normal eye pressure as well.",

      "## Types of Glaucoma",
      "Primary Open-Angle Glaucoma is the most common form, developing gradually without symptoms. Angle-Closure Glaucoma occurs suddenly when drainage canals are blocked, causing rapid pressure increase - this is a medical emergency. Normal-Tension Glaucoma causes optic nerve damage despite normal eye pressure. Secondary Glaucoma results from other conditions like injury, inflammation, or medications.",

      "## Risk Factors",
      "You may be at higher risk if you are over 60 years old, have a family history of glaucoma, are of African, Asian, or Hispanic descent, have high eye pressure, have thin corneas, have diabetes, heart disease, or high blood pressure, or have had eye injuries.",

      "## Symptoms and Warning Signs",
      "Open-angle glaucoma usually has no early symptoms. As it progresses, you may notice gradual loss of peripheral vision and tunnel vision in advanced stages. Acute angle-closure glaucoma causes severe headache, eye pain, nausea, vomiting, blurred vision, halos around lights, and eye redness - seek immediate medical attention.",

      "## Diagnosis",
      "Regular comprehensive eye exams are essential for early detection. Tests include tonometry (measuring eye pressure), ophthalmoscopy (examining the optic nerve), perimetry (visual field test), gonioscopy (examining drainage angle), and pachymetry (measuring corneal thickness).",

      "## Treatment Options",
      "While glaucoma damage cannot be reversed, treatment can prevent further vision loss. Options include prescription eye drops to reduce eye pressure, oral medications in some cases, laser treatment (trabeculoplasty) to improve fluid drainage, conventional surgery (trabeculectomy) to create new drainage channels, and minimally invasive glaucoma surgery (MIGS).",

      "## Living with Glaucoma",
      "Managing glaucoma requires lifelong commitment. Take medications as prescribed, attend all follow-up appointments, protect your eyes from injury, maintain a healthy lifestyle, and inform your eye doctor of any changes in vision. At Prem Eye Hospital, we offer advanced diagnostic tools and treatment options for glaucoma management."
    ]
  },

  "childrens-eye-health": {
    title: "Children's Eye Health: When to See a Doctor",
    image: "/images/squit and pediatric.png",
    author: "Dr. Amit Gupta",
    date: "May 5, 2026",
    category: "Pediatric",
    readTime: "8 min read",
    content: [
      "Good vision is essential for a child's development, learning, and overall well-being. Many eye conditions in children can be corrected if detected early, but left untreated, they may lead to permanent vision problems. Understanding when to seek professional help can make a significant difference in your child's eye health.",

      "## Importance of Early Eye Exams",
      "Children should have their first comprehensive eye exam at 6 months of age, then at 3 years, before starting school, and every 1-2 years thereafter. Early detection of vision problems is crucial because 80% of learning is visual, and untreated conditions can affect academic performance and social development.",

      "## Common Eye Problems in Children",
      "Amblyopia (Lazy Eye) occurs when one eye doesn't develop proper vision, and the brain favors the other eye. Strabismus (Crossed Eyes) is misalignment of the eyes. Refractive Errors include myopia (nearsightedness), hyperopia (farsightedness), and astigmatism. Color Blindness affects about 8% of boys and 0.5% of girls.",

      "## Warning Signs to Watch For",
      "Seek an eye exam if your child frequently rubs their eyes, has excessive tearing, squints or closes one eye, tilts their head to see better, holds objects very close to their face, complains of headaches or tired eyes, has difficulty reading or loses place while reading, or avoids activities requiring near or distance vision.",

      "## Signs of Vision Problems in Infants",
      "In babies, watch for eyes that don't track objects by 3 months, excessive tearing, red or crusty eyes, extreme sensitivity to light, a white pupil instead of black, or eyes that appear crossed or misaligned after 4 months of age.",

      "## Screen Time Guidelines",
      "The American Academy of Pediatrics recommends no screen time for children under 18 months (except video calls), limited high-quality content for ages 18-24 months with parental guidance, 1 hour per day of quality programming for ages 2-5, and consistent limits for children 6 and older. Encourage outdoor play, which has been shown to reduce the risk of myopia.",

      "## Protecting Children's Eyes",
      "Ensure your child wears sunglasses with UV protection outdoors. Use protective eyewear during sports and activities with eye injury risk. Keep harmful chemicals and sharp objects out of reach. Encourage a balanced diet rich in fruits, vegetables, and omega-3 fatty acids.",

      "## Treatment Options",
      "Many childhood eye conditions are highly treatable. Glasses or contact lenses correct refractive errors. Patching therapy treats amblyopia by strengthening the weaker eye. Vision therapy improves eye coordination and focusing. Surgery may be needed for certain conditions like strabismus. At Prem Eye Hospital, our pediatric eye specialists provide gentle, comprehensive care for children of all ages."
    ]
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogData[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <div className="relative h-64 md:h-96 bg-white rounded-2xl overflow-hidden shadow-lg mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-contain p-8"
              />
            </div>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </article>

            {/* Author Box */}
            <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Written by</p>
                  <p className="font-bold text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-600">Prem Eye & Maternity Hospital</p>
                </div>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
