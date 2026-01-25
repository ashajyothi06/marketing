import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import FAQSection from "@/components/shared/FAQSection";
import CTASection from "@/components/shared/CTASection";
import CareerBanner from "@/components/shared/CareerBanner";

// Import images
import heroBanner from "@/assets/home-hero-banner.jpg";
import aboutMeeting from "@/assets/home-about-meeting.jpg";
import verticalsHealthcare from "@/assets/home-verticals-healthcare.jpg";
import globalMap from "@/assets/home-global-map.jpg";

// ✅ OPTIONAL: if you have real credential logos, import them and put below
// import msmeLogo from "@/assets/credentials/msme.png";
// import dgftLogo from "@/assets/credentials/dgft.png";
// import coiLogo from "@/assets/credentials/coi.png";
// import tmLogo from "@/assets/credentials/tm.png";
// import googlePartnerLogo from "@/assets/credentials/google.png";

const Home = () => {
  const [activeVertical, setActiveVertical] = useState("Healthcare");

  const verticals = [
    {
      name: "Healthcare",
      description:
        "The global healthcare IT market is projected to reach USD 821.1 billion by 2026 from USD 326.1 billion in 2021, at a CAGR of 20.3% during the forecast period. Join hands with us to get your share from this huge market turnover.",
    },
    {
      name: "Manufacturing",
      description:
        "The manufacturing sector is rapidly adopting digital transformation. Partner with us to leverage Industry 4.0 technologies and boost your market presence.",
    },
    {
      name: "Education",
      description:
        "EdTech is revolutionizing learning worldwide. Our digital marketing strategies help educational institutions reach students across the globe.",
    },
    {
      name: "Real Estate",
      description:
        "Real estate marketing requires targeted strategies. We help property developers and agents maximize their online visibility and lead generation.",
    },
    {
      name: "Retail",
      description:
        "E-commerce and retail marketing demand innovative approaches. Our strategies drive traffic and conversions for retail businesses.",
    },
    {
      name: "Hospitality",
      description:
        "The hospitality industry thrives on visibility. We help hotels, restaurants, and travel companies attract more guests online.",
    },
  ];

  const countries = [
    { name: "USA", code: "US" },
    { name: "NEW ZEALAND", code: "NZ" },
    { name: "UAE", code: "AE" },
    { name: "MEXICO", code: "MX" },
    { name: "SPAIN", code: "ES" },
    { name: "CANADA", code: "CA" },
    { name: "INDIA", code: "IN" },
    { name: "BRAZIL", code: "BR" },
    { name: "QATAR", code: "QA" },
    { name: "NEPAL", code: "NP" },
    { name: "AUSTRALIA", code: "AU" },
    { name: "UK", code: "GB" },
    { name: "FRANCE", code: "FR" },
    { name: "SOUTH AFRICA", code: "ZA" },
    { name: "PHILIPPINES", code: "PH" },
  ];

  const resourceBoxItems = [
    {
      title: "Trade Shows Are Back: Integrate Digital Marketing for Maximum ROI",
      author: "Sanjay Dhar",
      date: "12 Jan 2026",
    },
    {
      title: "Top 7 Social Media Strategies That Actually Work for Schools",
      author: "Sanjay Dhar",
      date: "02 Jan 2026",
    },
    {
      title: "The Hidden Power of Healthcare Branding: More than Just a Logo",
      author: "Sanjay Dhar",
      date: "25 Dec 2025",
    },
    {
      title: "Personalised Marketing in EdTech: Meeting Learners Where They Are",
      author: "Amlan Maiti",
      date: "12 Dec 2025",
    },
    {
      title: "LinkedIn for Manufacturers: Turning Connections Into Contracts",
      author: "Sanjay Dhar",
      date: "02 Dec 2025",
    },
    {
      title:
        "Designing for the Algorithm: How to Make Your Interior Design Work Go Viral",
      author: "Sanjay Dhar",
      date: "25 Nov 2025",
    },
  ];

  const faqs = [
    {
      question: "What makes Digital Piloto different from other SEO agencies?",
      answer:
        "We combine data-driven strategies with creative solutions, offering complete transparency and measurable results. Our team has helped hundreds of businesses achieve top rankings.",
    },
    {
      question: "How long does it take to see SEO results?",
      answer:
        "SEO is a long-term investment. While some improvements can be seen within 3-6 months, significant results typically appear after 6-12 months of consistent effort.",
    },
    {
      question: "Do you offer customized SEO packages?",
      answer:
        "Yes! We understand every business is unique. We create tailored SEO strategies based on your specific goals, industry, and budget.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We work with businesses across various industries including e-commerce, healthcare, technology, finance, education, and more.",
    },
  ];

  return (
    <Layout>
      {/* ===================== HERO (TOP BANNER) ===================== */}
      <section className="relative w-full overflow-hidden bg-[#041f3a]">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Hero Banner"
            className="h-full w-full object-cover object-center"
            draggable={false}
          />
          <div className="absolute inset-0 bg-[#041f3a]/35" />
        </div>

        <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6">
          <div className="min-h-[520px] lg:min-h-[540px] grid lg:grid-cols-2 items-center">
            <div className="hidden lg:block" />

            <div className="text-white pt-28 lg:pt-0">
              <h1 className="text-[34px] md:text-[40px] lg:text-[44px] font-extrabold leading-tight">
                Build Your Brand&apos;s Voice
                <br />
                With Robust Digital Strategies!
              </h1>

              <p className="mt-6 max-w-[620px] text-white/80 text-[14px] md:text-[15px] leading-relaxed">
                Our team of innovative, flexible, &amp; dynamic digital marketing
                experts leaves no stone unturned to bring your business the
                desired results. Trust us to make your business grow!
              </p>

              <Link
                to="/about/company-info"
                className="mt-8 inline-flex items-center gap-2 text-white/90 hover:text-white font-medium"
              >
                Explore Opportunities{" "}
                <ArrowRight className="h-4 w-4 text-orange-400" />
              </Link>

              <div className="mt-16 flex justify-end gap-2">
                <span className="h-[2px] w-10 bg-white/25" />
                <span className="h-[2px] w-10 bg-white/25" />
                <span className="h-[2px] w-10 bg-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT STRIP ===================== */}
      <section className="w-full">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gradient-to-r from-[#041f3a] to-[#0b3a78] text-white">
            <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:py-20">
              <div className="max-w-[680px]">
                <div className="text-[11px] tracking-widest uppercase text-white/70 mb-3">
                  ABOUT US
                </div>

                <h2 className="text-[30px] md:text-[36px] lg:text-[40px] font-semibold leading-tight">
                  Bespoke Digital Marketing Services And Consultancy
                  <br />
                  To Get Your Business Covered!
                </h2>

                <Link
                  to="/about/company-info"
                  className="mt-10 inline-flex items-center justify-center h-10 px-6 border border-white/60 text-white text-[12px] font-semibold tracking-wide hover:bg-white hover:text-[#041f3a] transition"
                >
                  KNOW MORE
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-[360px] md:h-[420px] lg:h-[520px]">
            <img
              src={aboutMeeting}
              alt="Business Meeting"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* ===================== VERTICALS ===================== */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Verticals Digital Piloto Caters With Grace And Guarantee!
          </h2>
          <p className="text-center text-muted-foreground mb-12 uppercase text-sm tracking-wider">
            ADDING VALUE TO YOUR BRAND AND BUSINESS!
          </p>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3">
              {verticals.map((vertical) => (
                <button
                  key={vertical.name}
                  onClick={() => setActiveVertical(vertical.name)}
                  className={`block w-full text-left px-4 py-3 border-l-4 transition-all ${
                    activeVertical === vertical.name
                      ? "border-accent bg-accent/5 text-primary font-semibold"
                      : "border-transparent text-muted-foreground hover:text-primary hover:border-accent/50"
                  }`}
                >
                  {activeVertical === vertical.name && "■ "}
                  {vertical.name}
                </button>
              ))}
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={verticalsHealthcare}
                  alt={`${activeVertical} Team`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <h3 className="text-accent font-bold text-lg mb-4 uppercase">
                WE TARGET THE TOP-SPOT FOR YOU
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {verticals.find((v) => v.name === activeVertical)?.description}
              </p>
              <Link
                to="/about/company-info"
                className="inline-flex items-center gap-2 text-primary font-semibold underline hover:text-accent transition-colors"
              >
                Explore Opportunities <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GLOBAL MAP (LEFT FULL + FLAGS) ===================== */}
      <section className="relative bg-background py-16 overflow-hidden">
        <div className="relative min-h-[520px]">
          <div className="relative w-full lg:w-[72%] h-[420px] md:h-[500px] bg-[#041f3a] overflow-hidden">
            <img
              src={globalMap}
              alt="Global Coverage"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <div className="mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[56%] pr-4 md:pr-10">
            <div
              className="bg-white border border-orange-500 shadow-md p-8 md:p-10"
              style={{ borderRadius: 0 }}
            >
              <h3 className="text-sm font-extrabold tracking-wide text-[#0b2f5a] mb-2 uppercase">
                SERVING THE GLOBAL COMMUNITY!
              </h3>

              <p className="text-[#0b2f5a] text-xs md:text-sm leading-relaxed mb-6">
                Digital Piloto has earned confidence via prowess, R&amp;D, and
                technical know-how that can benefit top businesses covering any
                geographic location! Our cross-industry knowledge is our
                strength that we enforce while we work for our global clients!
              </p>

              <div className="grid grid-cols-3 gap-x-10 gap-y-3">
                {countries.map((country) => (
                  <div
                    key={country.name}
                    className="flex items-center gap-2 text-[12px]"
                  >
                    <img
                      src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                      alt={country.name}
                      className="w-5 h-4 object-cover border border-slate-200"
                    />
                    <span className="text-slate-700 font-medium">
                      {country.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== RESOURCE BOX ===================== */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Resource Box
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our box is no less than Pandora&apos;s Box as it contains valuable
            information that can serve every business before it goes for
            promoting their business online.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceBoxItems.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="relative aspect-[16/10] bg-gradient-to-br from-primary to-primary/80">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-primary-foreground text-center">
                      <div className="text-xs font-semibold text-accent mb-2">
                        digital<span className="text-primary-foreground">piloto</span>*
                      </div>
                      <h4 className="font-bold text-sm leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-background rounded-lg p-2 shadow">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-accent-foreground text-xs font-bold">
                          {item.author.charAt(0)}
                        </span>
                      </div>
                      <div className="text-xs">
                        <p className="text-muted-foreground">Presented by</p>
                        <p className="font-semibold text-primary">
                          {item.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <span>📅 {item.date}</span>
                    <span>👤 by Digital Piloto</span>
                  </div>
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CareerBanner />
      <CTASection />
    </Layout>
  );
};

export default Home;
