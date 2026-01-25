import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Users,
  CheckCircle,
  MessageSquare,
  UserCheck,
  Code,
  Palette,
  ShoppingCart,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Import images
import heroBg from '@/assets/gxpify-hero-bg.jpg';
import portfolioGrid from '@/assets/gxpify-portfolio-grid.jpg';
import landingCollage from '@/assets/gxpify-landing-collage.jpg';
import sanjayPortrait from '@/assets/gxpify-sanjay-portrait.jpg';

import brochure1 from "@/assets/1.png";
import brochure2 from "@/assets/2.png";
import brochure3 from "@/assets/111.png";


const DesignDevelopment = () => {
  // ✅ PORTFOLIO SLIDER (working arrows)
  const portfolioImages = useMemo(
    () => [
      // Replace / add your real portfolio images here (screenshots)
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
    ],
    []
  );

  const chunkArray = (arr: string[], size: number) => {
    const result: string[][] = [];
    for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
    return result;
  };

  const portfolioSlides = useMemo(() => chunkArray(portfolioImages, 4), [portfolioImages]);
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  const handleNextPortfolio = () => {
    setPortfolioIndex((prev) => (prev === portfolioSlides.length - 1 ? 0 : prev + 1));
  };

  const handlePrevPortfolio = () => {
    setPortfolioIndex((prev) => (prev === 0 ? portfolioSlides.length - 1 : prev - 1));
  };

  const uspItems = [
    { icon: Users, title: 'Dedicated Team Of Developers' },
    { icon: CheckCircle, title: 'In-Depth Quality Check' },
    { icon: UserCheck, title: 'Teams Lead By Expert Project Manager' },
    { icon: MessageSquare, title: 'Daily Communication' },
  ];

  const platforms = [
    { icon: Code, name: 'WORDPRESS' },
    { icon: Code, name: 'CUSTOM PHP' },
    { icon: ShoppingCart, name: 'SHOPIFY' },
  ];

  const designModes = [
    { icon: Palette, name: 'CUSTOM BASED' },
    { icon: Palette, name: 'THEME BASED' },
  ];

  const capabilities = [
    'Strategic Landing Page Planning',
    'User Experience (UX) Design',
    'Conversion Rate Optimization',
    'Responsive Web Development',
    'Brand Identity Integration',
    'Performance Optimization',
    'SEO-Friendly Structure',
    'Analytics & Tracking Setup',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <Layout>
      {/* ✅ HERO — updated to match screenshot (center text + scroll + smooth wave, no bottom line) */}
      <section className="relative min-h-[78vh] md:min-h-[82vh] flex items-center overflow-hidden">
        {/* Background Image + Strong Blue Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Digital Piloto Web Design & Development"
            className="w-full h-full object-cover object-center"
          />
          {/* blue overlay like screenshot (top darker, bottom lighter) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#061a33]/70 via-[#0a2b55]/70 to-[#0b3a78]/75" />
        </div>

        {/* Center Content */}
        <div className="container-custom relative z-10 text-center py-24">
          <p className="text-white/60 text-xs md:text-sm tracking-[0.45em] uppercase mb-6">
            W E L C O M E &nbsp; T O
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 font-serif">
            Digital Piloto
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#f4b41a]">
            Web Design &amp; Development
          </h2>

          {/* Scroll indicator (small rounded pill) */}
          <div className="mt-10 flex justify-center">
            <div className="w-10 h-14 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center">
              <div className="w-1.5 h-4 rounded-full bg-white/60" />
            </div>
          </div>
        </div>

        {/* Curved Wave Separator (curve only, no shading/line) */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 110"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 95C240 110 480 110 720 96C960 82 1200 55 1440 70V110H0V95Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* ✅ OUR PORTFOLIO — updated to match screenshot + WORKING arrows + multiple images */}
      <section className="relative bg-background overflow-hidden">
        {/* Right light bar behind vertical text */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[110px] bg-slate-100/70" />

        <div className="container-custom relative pt-16 pb-20">
          {/* Keep content away from the right bar */}
          <div className="pr-[140px]">
            {/* Title row + arrows */}
            <div className="flex items-start justify-between">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Portfolio</h2>

              <div className="flex gap-2 mt-1">
                <button
                  aria-label="Previous"
                  onClick={handlePrevPortfolio}
                  className="w-9 h-9 rounded-full bg-[#0b2f5a] text-white flex items-center justify-center hover:opacity-90 transition"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  aria-label="Next"
                  onClick={handleNextPortfolio}
                  className="w-9 h-9 rounded-full bg-[#0b2f5a] text-white flex items-center justify-center hover:opacity-90 transition"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slider */}
            <div className="mt-10 overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${portfolioIndex * 100}%)` }}
              >
                {portfolioSlides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      {slide.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-100 hover:shadow-md transition"
                        >
                          <img
                            src={img}
                            alt={`Portfolio ${slideIndex}-${imgIndex}`}
                            className="w-full h-[230px] object-cover"
                            draggable={false}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vertical PORTFOLIO text */}
        <div className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2">
          <span
            className="text-[92px] md:text-[110px] font-extrabold tracking-[0.22em] uppercase text-slate-300/90"
            style={{ writingMode: 'vertical-rl' as any }}
          >
            PORTFOLIO
          </span>
        </div>
      </section>

      {/* Key USP Strip - Dark Blue Rounded Pill */}
      <section className="py-12">
  {/* Full width strip like screenshot */}
  <div className="w-full">
    <div
      className="
        bg-primary
        py-12
        pl-10 sm:pl-14 lg:pl-16
        pr-10 sm:pr-14 lg:pr-20
        rounded-r-[999px]
        rounded-l-none
        shadow-xl
        relative
      "
    >
      {/* Title row with left line */}
      <div className="flex items-center gap-5 mb-10">
        <span className="h-[2px] w-12 bg-primary-foreground/90" />
        <h3 className="text-primary-foreground text-2xl md:text-3xl font-bold">
          Key USPs DP Promises:
        </h3>
      </div>

      {/* Icons row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">
        {uspItems.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
              <item.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <p className="text-primary-foreground font-semibold text-sm md:text-[15px] leading-snug">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Platforms + Design Modes Section */}
      <section className="bg-background py-20">
  <div className="container-custom">
    {/* top dotted line (center) */}
    <div className="flex justify-center mb-10">
      <div className="h-12 border-l-2 border-dashed border-slate-300" />
    </div>

    {/* Platforms */}
    <div className="text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-[#1f3b6a] mb-12">
        Platform DP Loves To Work:
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-14 md:gap-28">
        {platforms.map((platform, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Double ring */}
            <div className="w-28 h-28 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                {/* icon */}
                <platform.icon className="w-10 h-10 text-[#1f3b6a]" />
              </div>
            </div>

            <div className="mt-6 text-sm font-extrabold tracking-wide text-slate-900 uppercase">
              {platform.name}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* middle dotted line */}
    <div className="flex justify-center my-14">
      <div className="h-14 border-l-2 border-dashed border-slate-300" />
    </div>

    {/* Design Modes */}
    <div className="text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-[#1f3b6a] mb-12">
        Design Modes DP Recommends
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-14 md:gap-40">
        {designModes.map((mode, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Double ring */}
            <div className="w-28 h-28 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                {/* icon */}
                <mode.icon className="w-10 h-10 text-[#1f3b6a]" />
              </div>
            </div>

            <div className="mt-6 text-sm font-extrabold tracking-wide text-slate-900 uppercase">
              {mode.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Landing Page Brief Section - Image Right, Card Left */}
      <section className="bg-background py-20">
  <div className="container-custom">
    <div className="relative min-h-[420px] lg:min-h-[520px]">
      {/* RIGHT SIDE: Brochure Collage Background */}
      <div className="absolute right-0 top-0 w-full lg:w-[74%] h-[420px] lg:h-[520px] overflow-hidden">
        {/* big base image */}
        <img
          src={landingCollage}
          alt="Brochure collage"
          className="w-full h-full object-cover"
        />

        {/* subtle overlay (like screenshot) */}
        <div className="absolute inset-0 bg-white/10" />

        {/* dotted decoration (right side) */}
        <div className="absolute right-6 top-10 grid grid-cols-4 gap-2 opacity-60">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 bg-slate-900/20" />
          ))}
        </div>

        {/* extra brochure images layered (like screenshot) */}
        <img
          src={brochure1}
          alt="Brochure 1"
          className="hidden lg:block absolute left-[16%] top-[12%] w-[38%] shadow-xl"
        />
        <img
          src={brochure2}
          alt="Brochure 2"
          className="hidden lg:block absolute left-[42%] top-[18%] w-[38%] shadow-xl"
        />
        <img
          src={brochure3}
          alt="Brochure 3"
          className="hidden lg:block absolute left-[58%] top-[10%] w-[34%] shadow-xl"
        />
      </div>

      {/* LEFT CARD: Sharp edges + heavy shadow */}
      <div className="relative z-10 w-full lg:w-[46%] pt-10 lg:pt-0">
        <div
          className="bg-white border border-slate-200 shadow-[0_18px_45px_rgba(0,0,0,0.25)] p-10"
          style={{ borderRadius: 0 }} // ✅ sharp edges like screenshot
        >
          <h3 className="text-4xl font-extrabold text-[#1f3b6a] leading-tight mb-6">
            Landing Page Brief and <br />
            Ideation
          </h3>

          <p className="text-slate-700 leading-relaxed text-[15px] mb-8">
            Both landing page briefing and ideation are two integral parts of the designing
            procedure. The designers at Digital Piloto are extremely careful about completing
            all the basics related to designs. They have in-depth knowledge of all the necessary
            tools and designing software that helps them create the best quality of designs.
            Their expertise makes us a leading{" "}
            <span className="text-blue-600 underline">website development company</span>.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* keeps left card aligned vertically like screenshot */}
      <div className="hidden lg:block h-[520px]" />
    </div>
  </div>
</section>


      {/* Capabilities Section - Content Left, Portrait Right */}
      {/* <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 uppercase tracking-wide">
                Know Sanjay&apos;s Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-10 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-md"
              >
                Work With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-background">
                <img src={sanjayPortrait} alt="Sanjay - Project Lead" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Dark Blue Split Band - FAQs + Career */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2">
            <div className="text-primary-foreground pr-0 md:pr-12 pb-8 md:pb-0 md:border-r md:border-primary-foreground/20">
              <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQs)</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                We enjoy educating people on the intricacies of web design and development. Every day, we
                receive questions from clients about our process and capabilities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold underline underline-offset-4 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="text-primary-foreground pl-0 md:pl-12 pt-8 md:pt-0 border-t md:border-t-0 border-primary-foreground/20">
              <h3 className="text-2xl font-bold mb-4">Wanna Rewarding Career?</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                Join our team of creative experts if you value innovative design and structured development.
                We appreciate a proactive mindset and strong technical skills.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold underline underline-offset-4 transition-colors"
              >
                Join Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA Card */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 leading-tight">
              Looking for The Assistance Of Industry-Best Professionals?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold underline underline-offset-4 text-lg transition-colors"
            >
              Reach us Online or Schedule An Appointment To A Live Call!
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section - Logo + Newsletter + Links + Social */}
     
    </Layout>
  );
};

export default DesignDevelopment;
