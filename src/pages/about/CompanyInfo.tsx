import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

// ✅ Import your images (replace with your actual paths)
import aboutFamily from "@/assets/about-family.jpg";
import aboutOneness from "@/assets/about-oneness.jpg";
import aboutSatisfaction from "@/assets/about-satisfaction.jpg";
import aboutRevenue from "@/assets/about-revenue.jpg";
import aboutNetwork from "@/assets/about-network.jpg";
import aboutImprovement from "@/assets/about-improvement.jpg";
import missionBg from "@/assets/about-mission-bg.jpg";
import visionBg from "@/assets/about-vision-bg.jpg";

const CompanyInfo = () => {
  // ✅ EXACT ORDER (as you said): About Us → Our Mission → Our Vision → Dark Blue Band → CTA → Footer Strip
  const aboutUsItems = [
    { image: aboutFamily, text: "Feeling Of One-Family Under The Same Roof!" },
    { image: aboutOneness, text: "Employees Feel Oneness In The Company" },
    { image: aboutSatisfaction, text: "Client Satisfaction Is The Key!" },
    { image: aboutRevenue, text: "Assured Revenue Growth For Everyone!" },
    { image: aboutNetwork, text: "The DP Family Grows As Well!" },
    { image: aboutImprovement, text: "...The Party Continues!" },
  ];

  return (
    <Layout>
      {/* =========================
          1) ABOUT US (6 Image Grid)
         ========================= */}
      <section className="bg-background py-14 md:py-16">
        <div className="container-custom">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-semibold text-foreground mb-10">
            About Us
          </h2>

          {/* White Container + Lavender border + shadow */}
          <div className="bg-background border-[6px] border-[#cbbcff] rounded-[28px] shadow-[0_18px_45px_rgba(0,0,0,0.08)] p-6 md:p-10">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutUsItems.slice(0, 3).map((item, i) => (
                <div key={i} className="text-center">
                  <div className="overflow-hidden rounded-xl bg-white shadow-md">
                    <div className="aspect-[16/9]">
                      <img
                        src={item.image}
                        alt={item.text}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Number strip label style */}
                  <div className="mt-3 inline-flex items-center gap-3 bg-[#f6d8a9] px-4 py-2 rounded-full shadow-sm">
                    <span className="w-7 h-7 rounded-full border border-[#8b4b00] text-[#8b4b00] font-semibold text-sm flex items-center justify-center bg-[#ffe6bf]">
                      {i + 1}
                    </span>
                    <span className="text-[#8b1a1a] font-semibold text-sm">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle divider line (like screenshot) */}
            <div className="my-7 h-[2px] bg-[#cbbcff]" />

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutUsItems.slice(3, 6).map((item, i) => (
                <div key={i} className="text-center">
                  <div className="overflow-hidden rounded-xl bg-white shadow-md">
                    <div className="aspect-[16/9]">
                      <img
                        src={item.image}
                        alt={item.text}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="mt-3 inline-flex items-center gap-3 bg-[#f6d8a9] px-4 py-2 rounded-full shadow-sm">
                    <span className="w-7 h-7 rounded-full border border-[#8b4b00] text-[#8b4b00] font-semibold text-sm flex items-center justify-center bg-[#ffe6bf]">
                      {i + 4}
                    </span>
                    <span className="text-[#8b1a1a] font-semibold text-sm">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2) OUR MISSION (Our Belief heading on top)
         ========================================== */}
      <section className="bg-background py-14 md:py-16">
        <div className="container-custom">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Our Belief
          </h2>

          <p className="text-center text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
            Professionally, we are versatile when it comes to managing all the technicalities. We
            believe nothing is impossible till you trust the technology we work with.
          </p>

          {/* Mission banner layout: image on right, card on left overlapping */}
          <div className="relative">
            {/* background image block (right aligned like screenshot) */}
            <div className="w-full lg:w-[74%] ml-auto overflow-hidden">
              <div className="aspect-[21/9] w-full">
                <img
                  src={missionBg}
                  alt="Mission background"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* overlay card on left */}
            <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 w-full lg:w-[38%]">
              <div className="bg-white shadow-[0_18px_45px_rgba(0,0,0,0.15)] rounded-sm p-7 md:p-8">
                <h3 className="text-3xl font-medium text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  We consider Passion, Pace, and Precision as our pillars to serve our customers.
                  Our mission is to bring the right advantages you anticipate from us and deliver
                  consistently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          3) OUR VISION (card right)
         ========================= */}
      <section className="bg-background py-14 md:py-16">
        <div className="container-custom">
          <div className="relative">
            {/* background image block (left aligned like screenshot) */}
            <div className="w-full lg:w-[74%] mr-auto overflow-hidden">
              <div className="aspect-[21/9] w-full">
                <img
                  src={visionBg}
                  alt="Vision background"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* overlay card on right */}
            <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 w-full lg:w-[40%]">
              <div className="bg-white shadow-[0_18px_45px_rgba(0,0,0,0.15)] rounded-sm p-7 md:p-8">
                <h3 className="text-3xl font-medium text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Our vision is to bring clients the right value so that expectations are fulfilled,
                  and to become a trusted provider by anticipating what businesses look for and
                  demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          4) DARK BLUE SPLIT BAND (FAQs + Career)
         ====================================== */}
      <section className="bg-primary py-14">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left */}
            <div className="text-primary-foreground px-0 md:pr-10 md:border-r md:border-primary-foreground/20">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                Frequently Asked Questions (FAQs)
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-sm md:text-base mb-6 max-w-xl">
                We enjoy educating people on the intricacies of digital services. Every day, we
                receive hundreds of questions from our real customers.
              </p>
              <Link
                to="/faqs"
                className="inline-flex items-center gap-2 text-primary-foreground underline underline-offset-4 hover:text-accent transition-colors font-medium"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right */}
            <div className="text-primary-foreground mt-10 md:mt-0 md:pl-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                Wanna Rewarding Career?
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-sm md:text-base mb-6 max-w-xl">
                Join our team of experts if you have the urge to show up your potential! We
                appreciate a proactive measure to make us trust your skills!
              </p>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 text-primary-foreground underline underline-offset-4 hover:text-accent transition-colors font-medium"
              >
                Join Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================
          5) BIG CTA BOX
         ================== */}
      <section className="bg-background py-14 md:py-16">
        <div className="container-custom">
          <div className="bg-primary rounded-md shadow-[0_18px_45px_rgba(0,0,0,0.25)] px-6 md:px-10 py-10 text-center max-w-5xl mx-auto">
            <h2 className="text-primary-foreground text-2xl md:text-3xl font-semibold mb-4">
              Looking for The Assistance Of Industry-Best Professionals?
            </h2>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-primary-foreground underline underline-offset-4 hover:text-accent transition-colors font-medium"
            >
              Reach us Online or Schedule An Appointment To A Live Call!
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          6) FOOTER STRIP (like screenshot: newsletter + links)
          (If you already have a global footer, you can REMOVE this section)
         ===================================================== */}
      
    </Layout>
  );
};

export default CompanyInfo;
