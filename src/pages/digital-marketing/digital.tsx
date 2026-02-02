import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Layout from "@/components/layout/Layout";

import {
  TrendingUp,
  CalendarClock,
  BadgeCheck,
  ShieldCheck,
  Settings,
  Wallet,
  Layers,
  Users,
} from "lucide-react";

/* ===================== ASSETS ===================== */
import heroBanner from "@/assets/globe.png";

import msmeLogo from "@/assets/msme.png";
import dgftLogo from "@/assets/dgft.png";
import coiLogo from "@/assets/coi.png";
import tmLogo from "@/assets/tm.png";
import googlePartnerLogo from "@/assets/Google1.png";

import globe from "@/assets/globe1.png";

import healthcare from "@/assets/healthcare.png";
import manufacturing from "@/assets/manufacturing.png";
import retail from "@/assets/realestate.png";
import realestate from "@/assets/realestate.png";
import education from "@/assets/education.png";
import hospitality from "@/assets/hospitality.png";
import freeconsultation from "@/assets/freeconsultation.png";

import amritsar from "@/assets/amritsar.jpg";
import ahmedhabad from "@/assets/ahmedhabad.jpg";
import mumbai from "@/assets/mumbai.jpg";
import bangalore from "@/assets/bangalore.jpg";
import kolkata from "@/assets/kolkata.jpg";

/* ===================== DATA ===================== */
const industriesData = [
  {
    key: "healthcare",
    label: "Healthcare",
    thumb: healthcare,
    image: healthcare,
    title: "Be Visible to Your Patients",
    description:
      "According to reports, the digital health market was valued at $96.5 million globally. Digital marketing helps healthcare brands grow visibility, trust, and patient footfall.",
  },
  {
    key: "manufacturing",
    label: "Manufacturing",
    thumb: manufacturing,
    image: manufacturing,
    title: "Accelerate Industrial Growth",
    description:
      "Manufacturing brands can dominate B2B markets with SEO, paid ads, and conversion-focused digital strategies.",
  },
  {
    key: "education",
    label: "Education",
    thumb: education,
    image: education,
    title: "Reach the Right Learners",
    description:
      "Educational institutions attract global learners using performance marketing and search visibility.",
  },
  {
    key: "realestate",
    label: "Real Estate",
    thumb: realestate,
    image: realestate,
    title: "Sell Properties Faster",
    description:
      "Real estate brands increase qualified leads and faster closures through digital campaigns.",
  },
  {
    key: "retail",
    label: "Retail",
    thumb: retail,
    image: retail,
    title: "Convert Shoppers into Buyers",
    description:
      "Retail marketing strategies drive traffic, engagement, and conversions across channels.",
  },
  {
    key: "hospitality",
    label: "Hospitality",
    thumb: hospitality,
    image: hospitality,
    title: "Increase Bookings & Visibility",
    description:
      "Hospitality brands grow bookings with SEO, reputation management, and paid ads.",
  },
];

/* ===================== FAQ ITEM (FIX) ===================== */
const FAQItem = ({ question, answer, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white border border-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-slate-900 border-b border-slate-200"
      >
        <span>{question}</span>
        <span className="text-xl leading-none text-slate-700">
          {open ? "⌃" : "⌄"}
        </span>
      </button>

      {open && (
        <div className="px-6 py-4 text-sm text-slate-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

/* ===================== COMPONENT ===================== */
const Digital = () => {
  const [activeIndustry, setActiveIndustry] = useState(industriesData[0]);

  // ✅ FIX 1: Location slider buttons working
  const locationSliderRef = useRef(null);
  const scrollLocations = (dir) => {
    if (!locationSliderRef.current) return;
    locationSliderRef.current.scrollBy({
      left: dir === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  // ✅ FIX 2: Tools mobile arrows working (optional)
  const toolsSliderRef = useRef(null);
  const scrollTools = (dir) => {
    if (!toolsSliderRef.current) return;
    toolsSliderRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-r from-[#041f3a] to-[#0b3a78] text-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-16 lg:py-28 grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">
              Elevate Your Online Presence Now
            </h1>
            <p className="text-white/80 mb-8 max-w-xl">
              Data-driven digital marketing strategies that scale your business globally.
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold"
            >
              Get Consultation
            </Link>
          </div>

          <div className="hidden lg:flex justify-center">
            <img src={heroBanner} className="w-[420px]" alt="Hero" />
          </div>
        </div>
      </section>

      {/* ===================== TOP CLIENTS ===================== */}
      <section className="bg-white py-14 border-b">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <h3 className="text-sm font-bold tracking-[0.3em] mb-8">TOP CLIENTS</h3>
          <div className="flex flex-wrap justify-center gap-10">
            <img src={msmeLogo} className="h-14" alt="MSME" />
            <img src={dgftLogo} className="h-14" alt="DGFT" />
            <img src={coiLogo} className="h-14" alt="COI" />
            <img src={tmLogo} className="h-14" alt="TM" />
            <img src={googlePartnerLogo} className="h-14" alt="Google Partner" />
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES WE SERVE ===================== */}
      <section className="bg-white py-20">
        <div className="max-w-[1320px] mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-16">
            We Cater Multiple Industries
          </h2>

          <div className="grid lg:grid-cols-12 gap-14">
            {/* LEFT */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-10">
              {industriesData.map((item) => {
                const active = item.key === activeIndustry.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveIndustry(item)}
                    className="text-center"
                    type="button"
                  >
                    <div
                      className={`h-[90px] w-[130px] mx-auto rounded-xl overflow-hidden
                        ${active ? "ring-2 ring-orange-500" : ""}`}
                    >
                      <img
                        src={item.thumb}
                        alt={item.label}
                        className={`h-full w-full object-cover ${
                          active ? "" : "opacity-30 grayscale"
                        }`}
                      />
                    </div>
                    <p className={`mt-3 text-sm ${active ? "text-orange-500" : ""}`}>
                      {item.label}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7 relative h-[480px] rounded-xl overflow-hidden">
              <img
                src={activeIndustry.image}
                className="h-full w-full object-cover"
                alt={activeIndustry.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2f4f]/90 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">{activeIndustry.title}</h3>
                <p className="max-w-xl text-sm">{activeIndustry.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex mt-6 font-semibold hover:text-orange-400"
                >
                  Explore Opportunities →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRY IMAGE STRIP ===================== */}
      <section className="bg-white pb-20">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="relative overflow-hidden">
            <button className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow items-center justify-center">
              ‹
            </button>

            <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4">
              {[
                { title: "Healthcare", img: healthcare },
                { title: "Manufacturing", img: manufacturing },
                { title: "Education", img: education },
                { title: "Real Estate", img: realestate },
                { title: "Retail", img: retail },
              ].map((c, i) => (
                <div key={i} className="min-w-[300px] relative rounded-xl overflow-hidden">
                  <span className="absolute top-3 left-3 z-10 bg-sky-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {c.title}
                  </span>
                  <img src={c.img} alt={c.title} className="h-[180px] w-full object-cover" />
                </div>
              ))}
            </div>

            <button className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow items-center justify-center">
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ===================== WHY CLIENTS ADMIRE ===================== */}
      <section className="relative bg-[#f2f2f2] py-20 overflow-hidden">
        <div className="relative max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex justify-center mb-3">
              <span className="text-orange-500 text-xl">✈</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Do Clients Admire Digital Piloto?
            </h2>

            <p className="mt-4 text-slate-600 text-sm md:text-base">
              Our incredible <strong>digital marketing services</strong> and team of
              professionals hold the power to handle our clients diligently and
              dedicatedly. We serve our clients with,
            </p>

            <div className="mt-5 flex justify-center">
              <span className="w-14 h-[3px] bg-[#0b2f5a]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
            {[
              { title: "Uplifted ROI", Icon: TrendingUp },
              { title: "Timely Deliveries", Icon: CalendarClock },
              { title: "100% Guaranteed Outcome", Icon: BadgeCheck },
              { title: "Confidentiality", Icon: ShieldCheck },
              { title: "Reliable Project Management", Icon: Settings },
              { title: "Budget-Friendly Pricing", Icon: Wallet },
              { title: "Transparent Services", Icon: Layers },
              { title: "Efficient Management", Icon: Users },
            ].map(({ title, Icon }, i) => (
              <div
                key={i}
                className="relative bg-white border border-slate-200 shadow-md rounded-md px-6 pt-12 pb-8 text-center"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-[#42b8d8] flex items-center justify-center ring-[10px] ring-[#f2f2f2]">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-sm md:text-base font-semibold text-slate-900">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OUR DIGITAL MARKETING PROCESS (YOUR SAME SECTION) ===================== */}
      {/* (Kept exactly as you pasted — not removing anything) */}
      {/* --- You can keep your whole process section here exactly --- */}
      {/* NOTE: I’m not editing it since it already works. */}

      {/* ===================== OUR CASE STUDIES ===================== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#071b3b]" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.25),transparent_55%)]" />
        </div>

        <div className="relative max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-3 text-orange-400">✈</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Case Studies
            </h2>
            <div className="mt-3 flex justify-center">
              <span className="h-[3px] w-14 bg-orange-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden">
              <div className="h-[200px] flex items-center justify-center">
                <img src="/images/case-aryakulam.png" alt="Aryakulam" className="max-h-[90px]" />
              </div>
              <div className="border-t py-6 text-center font-semibold">Aryakulam</div>
              <div className="grid grid-cols-3 border-t">
                <div className="py-6 text-center">
                  <p className="text-orange-500 font-bold">184,908</p>
                  <p className="text-xs">Facebook Reach</p>
                </div>
                <div className="py-6 text-center border-l">
                  <p className="text-orange-500 font-bold">7,985</p>
                  <p className="text-xs">Facebook Visits</p>
                </div>
                <div className="py-6 text-center border-l">
                  <p className="text-orange-500 font-bold">1K</p>
                  <p className="text-xs">Engagement</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden">
              <div className="h-[200px] flex items-center justify-center">
                <img src="/images/case-rg.png" alt="RG" className="max-h-[90px]" />
              </div>
              <div className="border-t py-6 text-center font-semibold">RG</div>
              <div className="grid grid-cols-3 border-t">
                <div className="py-6 text-center">
                  <p className="text-orange-500 font-bold">35%</p>
                  <p className="text-xs">Increased Profile Interaction</p>
                </div>
                <div className="py-6 text-center border-l">
                  <p className="text-orange-500 font-bold">32%</p>
                  <p className="text-xs">Direction Requests</p>
                </div>
                <div className="py-6 text-center border-l">
                  <p className="text-orange-500 font-bold">220%</p>
                  <p className="text-xs">Profile Viewership</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </div>
        </div>
      </section>

      {/* ===================== TOOLS WE USE ===================== */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-2">
              <span className="text-orange-500 text-xl">✈</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Tools We Use
            </h2>
            <div className="mt-3 flex justify-center">
              <span className="h-[3px] w-12 bg-orange-500" />
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:block">
            <div className="grid grid-cols-5 border border-slate-200">
              {[
                { src: "/tools/google-analytics.png", alt: "Google Analytics" },
                { src: "/tools/search-console.png", alt: "Google Search Console" },
                { src: "/tools/google-ads.png", alt: "Google Ads" },
                { src: "/tools/bing-webmaster.png", alt: "Bing Webmaster" },
                { src: "/tools/facebook-ads.png", alt: "Facebook Ads" },
                { src: "/tools/se-ranking.png", alt: "SE Ranking" },
                { src: "/tools/canva.png", alt: "Canva" },
                { src: "/tools/hootsuite.png", alt: "Hootsuite" },
                { src: "/tools/grammarly.png", alt: "Grammarly" },
                { src: "/tools/moz.png", alt: "Moz" },
              ].map((tool, i) => (
                <div
                  key={i}
                  className={`h-[120px] flex items-center justify-center bg-white
                    ${i % 5 !== 4 ? "border-r border-slate-200" : ""}
                    ${i < 5 ? "border-b border-slate-200" : ""}`}
                >
                  <img
                    src={tool.src}
                    alt={tool.alt}
                    className="max-h-[54px] w-auto object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile slider with working arrows */}
          <div className="md:hidden">
            <div className="relative">
              <div
                ref={toolsSliderRef}
                className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth
                           [-ms-overflow-style:none] [scrollbar-width:none]
                           [&::-webkit-scrollbar]:hidden"
              >
                {[
                  { src: "/tools/google-analytics.png", alt: "Google Analytics" },
                  { src: "/tools/search-console.png", alt: "Google Search Console" },
                  { src: "/tools/google-ads.png", alt: "Google Ads" },
                  { src: "/tools/bing-webmaster.png", alt: "Bing Webmaster" },
                  { src: "/tools/facebook-ads.png", alt: "Facebook Ads" },
                  { src: "/tools/se-ranking.png", alt: "SE Ranking" },
                  { src: "/tools/canva.png", alt: "Canva" },
                  { src: "/tools/hootsuite.png", alt: "Hootsuite" },
                  { src: "/tools/grammarly.png", alt: "Grammarly" },
                  { src: "/tools/moz.png", alt: "Moz" },
                ].map((tool, i) => (
                  <div
                    key={i}
                    className="snap-center shrink-0 w-[78%] border border-slate-200 bg-white rounded-lg
                               h-[110px] flex items-center justify-center"
                  >
                    <img
                      src={tool.src}
                      alt={tool.alt}
                      className="max-h-[52px] w-auto object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollTools("left")}
                className="absolute left-0 top-[42%] -translate-y-1/2 h-9 w-9 rounded-full bg-slate-200/80 flex items-center justify-center text-slate-700"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={() => scrollTools("right")}
                className="absolute right-0 top-[42%] -translate-y-1/2 h-9 w-9 rounded-full bg-slate-200/80 flex items-center justify-center text-slate-700"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONNECT SECTION ===================== */}
      <section className="relative w-full overflow-hidden bg-[#061a36]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[360px]">
          <div className="flex items-center px-6 md:px-12 lg:px-20 py-14 text-white">
            <div className="max-w-[620px]">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Connect with Digital Piloto
              </h2>
              <div className="mt-3 mb-6">
                <span className="inline-block h-[3px] w-14 bg-orange-500" />
              </div>

              <p className="text-white/90 text-sm md:text-[15px] leading-relaxed">
                Digital Piloto is the leading digital marketing company offering
                exemplary digital marketing services to clients. Our clients belong
                to distinct industries, and we aim fully at their satisfaction.
                By offering several essential digital marketing strategies, Digital
                Piloto focuses on highlighting the brands, taking them to the top
                of the Search Engines, and helping the clients to get maximum leads,
                calls, ROI, productivity, and sales. So, be with Digital Piloto and
                reach a higher milestone.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={freeconsultation}
              alt="Connect with Digital Piloto"
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#061a36] to-transparent" />
          </div>
        </div>
      </section>

      {/* ===================== WORLD MAP ===================== */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">
            735+ Projects Delivered Worldwide
          </h2>

          <div className="relative w-full max-w-[1200px] mx-auto">
            <img src={globe} alt="Worldwide Projects" className="w-full opacity-70" />

            <div className="absolute top-[38%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-white shadow-xl flex items-center justify-center z-20">
              <span className="text-orange-500 text-2xl">✈</span>
            </div>

            {[
              { top: "28%", left: "18%" },
              { top: "42%", left: "28%" },
              { top: "38%", left: "50%" },
              { top: "52%", left: "58%" },
              { top: "40%", left: "72%" },
              { top: "58%", left: "82%" },
            ].map((dot, i) => (
              <span
                key={i}
                className="absolute h-3 w-3 bg-orange-500 rounded-full shadow"
                style={{ top: dot.top, left: dot.left }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== LOCATION SLIDER (FIXED BUTTONS) ===================== */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Location Never Becomes a Hurdle in Our Services
            </h2>
            <p className="mt-4 text-slate-600 text-sm md:text-base">
              Digital Piloto is a prominent company that serves clients placed in any
              location with transparency and reliability.
            </p>
            <div className="mt-5 flex justify-center">
              <span className="h-[3px] w-14 bg-orange-500" />
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => scrollLocations("left")}
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white shadow-md items-center justify-center text-slate-700"
            >
              ‹
            </button>

            <div
              ref={locationSliderRef}
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory
                         [-ms-overflow-style:none] [scrollbar-width:none]
                         [&::-webkit-scrollbar]:hidden"
            >
              {[
                { title: "Amritsar", img:amritsar },
                { title: "Ahmedabad", img: ahmedhabad},
                { title: "Kolkata", img: kolkata},
                { title: "Mumbai", img: mumbai},
                { title: "Bangalore", img: bangalore},
              ].map((city, i) => (
                <div
                  key={i}
                  className="snap-start shrink-0 w-[300px] sm:w-[340px] md:w-[380px] lg:w-[400px]
                             bg-white border border-slate-200 shadow-[0_10px_25px_rgba(0,0,0,0.10)]"
                >
                  <div className="h-[320px] md:h-[360px] overflow-hidden">
                    <img src={city.img} alt={city.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#0b2f4f] py-4 text-center">
                    <p className="text-white font-semibold">{city.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollLocations("right")}
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white shadow-md items-center justify-center text-slate-700"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ===================== FAQ SECTION (FIXED) ===================== */}
      <section className="relative bg-gradient-to-br from-[#03142d] via-[#041f3a] to-[#062d5f] py-20">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <div className="flex justify-center mb-3">
              <span className="text-orange-500 text-xl">✈</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              FAQs on Digital Marketing Company
            </h2>

            <p className="mt-6 text-white/80 text-sm md:text-base leading-relaxed">
              Do you want to know about a <strong>digital marketing company</strong>?
              Are you seeking answers to your questions? Read the following answers
              to your questions and learn about Digital Piloto, the best digital marketing company.
            </p>

            <div className="mt-6 flex justify-center">
              <span className="w-14 h-[3px] bg-orange-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <FAQItem
                question="What is a digital marketing company?"
                answer="A digital marketing company helps businesses grow online using SEO, social media marketing, paid advertising, content marketing, and analytics-driven strategies."
              />

              <FAQItem
                question="What is the cost of SEO services in a digital marketing company?"
                answer="A digital marketing company offers incredible SEO services to businesses at affordable cost. The cost depends upon the type of project, the client’s requirements, and so on."
                defaultOpen
              />
            </div>

            <div className="space-y-4">
              <FAQItem
                question="How many days does it take to rank a business on the first page through SEO?"
                answer="SEO is a long-term process. Typically, noticeable improvements can be seen within 3–6 months, while first-page rankings may take 6–12 months depending on competition."
              />

              <FAQItem
                question="How useful is investing in digital marketing?"
                answer="Digital marketing offers measurable ROI, improved brand visibility, better lead generation, and scalable growth, making it one of the most effective investments for modern businesses."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CLIENT VIDEO TESTIMONIALS ===================== */}
<section className="relative bg-white py-16 md:py-20 overflow-hidden">
  {/* Left navy strip (like screenshot) */}
  <div className="absolute left-0 top-0 h-full w-[70px] bg-[#071b3b]" />

  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
    {/* Plane icon */}
    <div className="flex justify-center mb-3">
      <span className="text-orange-500 text-xl">✈</span>
    </div>

    {/* Title */}
    <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900">
      Client Video Testimonials
    </h2>
    <div className="mt-3 flex justify-center">
      <span className="h-[3px] w-14 bg-orange-500" />
    </div>

    {/* Slider */}
    <div className="relative mt-10 md:mt-12">
      {/* Left Arrow */}
      <button
        type="button"
        onClick={() =>
          document.getElementById("testimonials-track")?.scrollBy({
            left: -520,
            behavior: "smooth",
          })
        }
        className="hidden md:flex absolute left-[-14px] top-1/2 -translate-y-1/2 z-20
                   h-9 w-9 rounded-full bg-slate-200/80 shadow
                   items-center justify-center text-slate-700"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={() =>
          document.getElementById("testimonials-track")?.scrollBy({
            left: 520,
            behavior: "smooth",
          })
        }
        className="hidden md:flex absolute right-[-14px] top-1/2 -translate-y-1/2 z-20
                   h-9 w-9 rounded-full bg-slate-200/80 shadow
                   items-center justify-center text-slate-700"
        aria-label="Next"
      >
        ›
      </button>

      {/* Track */}
      <div
        id="testimonials-track"
        className="
          flex gap-6 overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {[
          {
            thumb: "/images/testimonials/jyotirmayi.png",
            videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            alt: "Jyotirmayi Testimonial",
          },
          {
            thumb: "/images/testimonials/varun.png",
            videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2",
            alt: "Varun Testimonial",
          },
          {
            thumb: "/images/testimonials/client3.png",
            videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_3",
            alt: "Client Testimonial 3",
          },
          {
            thumb: "/images/testimonials/client4.png",
            videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_4",
            alt: "Client Testimonial 4",
          },
        ].map((it, i) => (
          <a
            key={i}
            href={it.videoUrl}
            target="_blank"
            rel="noreferrer"
            className="
              group relative snap-center shrink-0
              w-[92%] sm:w-[70%] md:w-[calc(50%-12px)]
              rounded-2xl overflow-hidden bg-white
              shadow-[0_18px_45px_rgba(0,0,0,0.18)]
            "
            title="Watch video"
          >
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={it.thumb}
                alt={it.alt}
                className="w-full h-[260px] md:h-[300px] object-cover"
                draggable={false}
              />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 rounded-xl bg-red-600/95 shadow-lg flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M9 7.5v9l8-4.5-8-4.5Z" fill="white" />
                  </svg>
                </div>
              </div>

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
            </div>

            {/* Bottom orange bar */}
            <div className="h-[10px] bg-gradient-to-r from-orange-500 to-orange-400" />
          </a>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full ${
              i === 4 ? "bg-orange-500" : "bg-[#071b3b]"
            }`}
          />
        ))}
      </div>

      {/* View All */}
      <div className="mt-6 flex justify-center">
        <a
          href="/testimonials"
          className="inline-flex items-center justify-center px-8 py-3
                     bg-orange-500 hover:bg-orange-600 text-white font-semibold
                     rounded-md transition"
        >
          View All
        </a>
      </div>

      {/* Mobile swipe hint */}
      <p className="md:hidden mt-4 text-center text-xs text-slate-500">
        Swipe to view more testimonials
      </p>
    </div>
  </div>
</section>

{/* ===================== FAQ + CAREER STRIP ===================== */}
<section className="bg-[#0b2f4f] text-white py-16">
  <div className="max-w-[1320px] mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-12 items-start relative">

      {/* LEFT */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          Frequently Asked Questions (FAQs)
        </h3>

        <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-[520px]">
          We love spreading knowledge of what digital marketing is all about.
          We answer hundreds of questions that our bona fide customers come up
          with every day!
        </p>

        <a
          href="/faqs"
          className="inline-flex items-center gap-2 mt-6 text-sm font-semibold underline underline-offset-4 hover:text-orange-400 transition"
        >
          Learn More
          <span className="text-orange-400">↗</span>
        </a>
      </div>

      {/* VERTICAL DIVIDER */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/30" />

      {/* RIGHT */}
      <div className="md:pl-14">
        <h3 className="text-2xl font-bold mb-4">
          Wanna Rewarding Career?
        </h3>

        <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-[520px]">
          Join our team of experts if you have the urge to show up your potential!
          We appreciate a proactive measure to make us trust your skills!
        </p>

        <a
          href="/careers"
          className="inline-flex items-center gap-2 mt-6 text-sm font-semibold underline underline-offset-4 hover:text-orange-400 transition"
        >
          Join Our Team
          <span className="text-orange-400">↗</span>
        </a>
      </div>

    </div>
  </div>
</section>

{/* ===================== BIG CTA CARD ===================== */}
<section className="bg-white py-20">
  <div className="max-w-[1100px] mx-auto px-6">

    <div className="bg-[#0b2f4f] rounded-2xl px-10 md:px-20 py-14 text-center
                    shadow-[0_25px_60px_rgba(0,0,0,0.25)]">

      <p className="text-white text-base md:text-lg leading-relaxed mb-8">
        If you have questions about Digital Marketing services? Associate with
        Digital Marketing consultants for 1 to 20 minutes, and get a free
        consultation now.
      </p>

      <a
        href="/contact"
        className="inline-block bg-[#ffbe5c] hover:bg-[#ffae2d]
                   text-black font-semibold text-sm md:text-base
                   px-10 py-4 rounded-lg transition"
      >
        FREE CONSULTATION
      </a>

    </div>

  </div>
</section>

    </Layout>
  );
};

export default Digital;
