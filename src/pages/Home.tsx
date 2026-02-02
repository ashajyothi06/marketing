

import { useMemo, useState, useEffect } from "react";



import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";


// Import images
import heroBanner from "@/assets/hero-cube.png";
import aboutMeeting from "@/assets/home-about-meeting.jpg";
import verticalsHealthcare from "@/assets/home-verticals-healthcare.jpg";
import globalMap from "@/assets/home-global-map.jpg";

// ✅ OPTIONAL: if you have real credential logos, import them and put below
import msmeLogo from "@/assets/msme.png";
import dgftLogo from "@/assets/dgft.png";
import coiLogo from "@/assets/coi.png";
import tmLogo from "@/assets/tm.png";
import googlePartnerLogo from "@/assets/Google1.png";


const heroSlides = [
  {
    title: "Top-Notch Digital Consultants\nFor All B-2-B Marketing Needs!!",
    description:
      "We understand marketing principles better than others do. You may always trust our years-long experience for ground-breaking success for your business!",
  },
  {
    title: "Let’s Rule The Digital World!\nDo it in style with Digital Piloto!",
    description:
      "Making your business scale higher ranks on search result pages is a time-taking task but not impossible! We bring your business a long-term online identity!",
  },
  {
    title: "Build Your Brand’s Voice\nWith Robust Digital Strategies!",
    description:
      "Our team of innovative, flexible, & dynamic digital marketing experts leaves no stone unturned to bring your business the desired results. Trust us to make your business grow!",
  },
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  }, 5000); // ⏱️ change every 5 seconds

  return () => clearInterval(interval);
}, []);

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
      {/* ===================== HERO SLIDER ===================== */}
<section className="relative w-full overflow-hidden bg-[#041f3a]">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={heroBanner}
      alt="Hero"
      className="h-full w-full object-cover"
      draggable={false}
    />
    <div className="absolute inset-0 bg-[#041f3a]/40" />
  </div>

  <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6">
    <div className="min-h-[520px] lg:min-h-[560px] grid lg:grid-cols-2 items-center">
      
      {/* LEFT IMAGE SPACE (cube already in banner image) */}
      <div className="hidden lg:block" />

      {/* RIGHT CONTENT */}
      
        <div className="text-white transition-all duration-700">

        <h1 className="text-[34px] md:text-[40px] lg:text-[44px] font-extrabold leading-tight whitespace-pre-line">
          {heroSlides[activeSlide].title}
        </h1>

        <p className="mt-6 max-w-[620px] text-white/80 text-[14px] md:text-[15px] leading-relaxed">
          {heroSlides[activeSlide].description}
        </p>

        <Link
          to="/about/company-info"
          className="mt-8 inline-flex items-center gap-2 text-white/90 hover:text-white font-medium"
        >
          Explore Opportunities
          <ArrowRight className="h-4 w-4 text-orange-400" />
        </Link>

        {/* SLIDER DASHES */}
        <div className="mt-16 flex justify-end gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-[3px] w-10 transition-all duration-300 ${
                activeSlide === index
                  ? "bg-orange-400"
                  : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
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
      {/* ===================== CREDENTIALS STRIP (EXACT LIKE IMAGE) ===================== */}
      {/* ===================== CREDENTIALS STRIP ===================== */}
<section className="w-full bg-white border-t border-slate-200">
  <div className="flex w-full items-stretch">

    {/* LEFT ORANGE RIBBON */}
    <div className="relative bg-[#F58220] text-white flex items-center px-12 w-[520px] h-[120px]">
      <h3 className="text-3xl font-extrabold whitespace-nowrap">
        Our Credentials
      </h3>

      {/* Orange Arrow */}
      <div
        className="absolute right-[-48px] top-0 h-full w-[48px] bg-[#F58220]"
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
      />

      {/* Dark Blue Border Arrow */}
      <div
        className="absolute right-[-60px] top-0 h-full w-[60px] bg-[#041f3a]"
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
      />
    </div>

    {/* LOGOS ROW */}
    <div className="flex flex-1 items-center gap-12 pl-20 pr-10 py-6">
      <img src={msmeLogo} alt="MSME" className="h-24 w-auto object-contain" />
      <img src={dgftLogo} alt="DGFT" className="h-24 w-auto object-contain" />
      <img src={coiLogo} alt="Certificate of Incorporation" className="h-24 w-auto object-contain" />
      <img src={tmLogo} alt="Trademark" className="h-24 w-auto object-contain" />
      <img src={googlePartnerLogo} alt="Google Partner" className="h-24 w-auto object-contain" />
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

      {/* ===================== TRUSTED BY OUR CLIENTS ===================== */}

<section className="w-full bg-white py-20">
  <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
    <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">
      Trusted by our Clients
    </h2>

    {(() => {
      const logos = [
        { src: msmeLogo, alt: "MSME" },
        { src: dgftLogo, alt: "DGFT" },
        { src: coiLogo, alt: "COI" },
        { src: tmLogo, alt: "Trademark" },
        { src: googlePartnerLogo, alt: "Google Partner" },
        { src: msmeLogo, alt: "MSME 2" },
        { src: dgftLogo, alt: "DGFT 2" },
        { src: coiLogo, alt: "COI 2" },
        { src: tmLogo, alt: "Trademark 2" },
      ];

      const getPerPage = () => {
        if (typeof window === "undefined") return 6;
        const w = window.innerWidth;
        if (w < 640) return 2;
        if (w < 1024) return 4;
        return 6;
      };

      const [perPage, setPerPage] = useState(getPerPage());
      const [page, setPage] = useState(0);

      useEffect(() => {
        const onResize = () => {
          setPerPage(getPerPage());
          setPage(0);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
      }, []);

      const totalPages = Math.ceil(logos.length / perPage);
      const visible = logos.slice(page * perPage, page * perPage + perPage);

      return (
        <>
          <div className="flex items-center justify-center gap-6">
            {/* Left */}
            <button
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow"
            >
              ‹
            </button>

            {/* Logos */}
            <div className="flex items-center gap-6 overflow-hidden">
              {visible.map((logo, i) => (
                <div
                  key={i}
                  className="h-[80px] w-[190px] bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-center px-6"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-[56px] w-auto object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Right */}
            <button
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 w-2 rounded-full ${
                  i === page ? "bg-slate-700" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </>
      );
    })()}
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
      {/*FAQ'S*/}

       {/* ===================== FAQ & CAREER STRIP ===================== */}
<section className="w-full bg-[#0b2f4f] py-20">
  <div className="max-w-[1320px] mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-16">

      {/* LEFT */}
      <div className="text-white pr-0 md:pr-16 md:border-r md:border-white/20">
        <h3 className="text-3xl font-bold mb-6">
          Frequently Asked Questions (FAQs)
        </h3>

        <p className="text-white/80 leading-relaxed max-w-[520px]">
          We enjoy educating people on the intricacies of digital marketing.
          Every day, we receive hundreds of questions from our real customers.
        </p>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 text-white font-semibold underline underline-offset-4 hover:text-orange-400 transition"
        >
          Learn More
          <ArrowRight className="w-4 h-4 text-orange-400" />
        </Link>
      </div>

      {/* RIGHT */}
      <div className="text-white pl-0 md:pl-16">
        <h3 className="text-3xl font-bold mb-6">
          Wanna Rewarding Career?
        </h3>

        <p className="text-white/80 leading-relaxed max-w-[520px]">
          Join our team of experts if you have the urge to show up your
          potential! We appreciate a proactive measure to make us trust your
          skills!
        </p>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 text-white font-semibold underline underline-offset-4 hover:text-orange-400 transition"
        >
          Join Our Team
          <ArrowRight className="w-4 h-4 text-orange-400" />
        </Link>
      </div>

    </div>
  </div>
</section>

{/* ===================== BIG CTA CARD ===================== */}
<section className="relative bg-white py-28">
  <div className="max-w-[1100px] mx-auto px-6">

    <div className="bg-[#0b2f4f] rounded-2xl px-10 md:px-20 py-16 text-center shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
      
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Looking for The Assistance Of Industry-Best Professionals?
      </h2>

      <Link
        to="/contact"
        className="inline-flex items-center gap-2 text-white text-lg font-semibold underline underline-offset-4 hover:text-orange-400 transition"
      >
        Reach us Online or Schedule An Appointment To A Live Call!
        <ArrowRight className="w-5 h-5 text-orange-400" />
      </Link>

    </div>

  </div>
</section>


    </Layout>
  );
};

export default Home;
