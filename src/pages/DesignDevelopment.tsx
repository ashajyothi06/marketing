import { useMemo, useState, useEffect } from 'react';
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
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Images
import heroBg from '@/assets/hero-design.png';
import portfolioGrid from '@/assets/gxpify-portfolio-grid.jpg';
import landingCollage from '@/assets/gxpify-landing-collage.jpg';
import wordpressIcon from '@/assets/wordpress.png';
import phpIcon from '@/assets/php.png';
import shopifyIcon from '@/assets/shopify.png';
import cssIcon from '@/assets/css3.png';
import paintIcon from '@/assets/paint.png';

import brochure1 from '@/assets/brochure1.png';
import brochure2 from '@/assets/brochure2.png';




const DesignDevelopment = () => {
  /* ===================== PORTFOLIO DATA ===================== */

  const portfolioImages = useMemo(
    () => [
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
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
      portfolioGrid,
    ],
    []
  );

  const ITEMS_PER_SLIDE = 9; // 3 x 3 grid

  const chunkArray = (arr: string[], size: number) => {
    const result: string[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const portfolioSlides = useMemo(
    () => chunkArray(portfolioImages, ITEMS_PER_SLIDE),
    [portfolioImages]
  );

  const [portfolioIndex, setPortfolioIndex] = useState(0);

  /* ✅ AUTO SCROLL */
  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioIndex((prev) =>
        prev === portfolioSlides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [portfolioSlides.length]);

  const handleNextPortfolio = () => {
    setPortfolioIndex((prev) =>
      prev === portfolioSlides.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevPortfolio = () => {
    setPortfolioIndex((prev) =>
      prev === 0 ? portfolioSlides.length - 1 : prev - 1
    );
  };
  

  /* ===================== OTHER DATA ===================== */

  const uspItems = [
    { icon: Users, title: 'Dedicated Team Of Developers' },
    { icon: CheckCircle, title: 'In-Depth Quality Check' },
    { icon: UserCheck, title: 'Teams Led By Expert Project Manager' },
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

  return (
    <Layout>
      {/* ===================== HERO ===================== */}
      <section className="relative w-full min-h-screen overflow-hidden bg-[#061a33]">
  {/* Background */}
  <div className="absolute inset-0">
    <img
      src={heroBg}
      alt="Digital Piloto"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#061a33]/85 via-[#0a2a52]/80 to-[#0b3a78]/85" />
  </div>

  {/* CENTERED CONTENT */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

    <p className="text-white/70 text-xs tracking-[0.45em] uppercase mb-6">
      W E L C O M E &nbsp; T O
    </p>

    {/* LOGO + CIRCLES */}
    <div className="relative mb-6 flex items-center justify-center">
      <svg
        width="260"
        height="260"
        viewBox="0 0 260 260"
        className="absolute -z-10"
      >
        <circle
          cx="130"
          cy="130"
          r="95"
          stroke="white"
          strokeOpacity="0.25"
          fill="none"
        />
        <circle
          cx="130"
          cy="130"
          r="80"
          stroke="white"
          strokeOpacity="0.15"
          fill="none"
        />
      </svg>

      <h1 className="text-[44px] md:text-[60px] lg:text-[68px] font-serif font-semibold text-white">
        Digital Piloto
      </h1>
    </div>

    <h2 className="text-[20px] md:text-[26px] lg:text-[30px] font-semibold text-[#f4b41a]">
      Web Design &amp; Development
    </h2>

  </div>
</section>


      {/* ===================== PORTFOLIO ===================== */}
      <section className="relative bg-background overflow-hidden py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[110px] bg-slate-100/70" />
        

        <div className="container-custom relative pr-[140px]">
          <div className="flex items-start justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Our Portfolio
            </h2>

            <div className="flex gap-2">
              <button
                onClick={handlePrevPortfolio}
                className="w-9 h-9 rounded-full bg-[#0b2f5a] text-white flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextPortfolio}
                className="w-9 h-9 rounded-full bg-[#0b2f5a] text-white flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${portfolioIndex * 100}%)` }}
            >
              {portfolioSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {slide.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="rounded-xl overflow-hidden bg-white shadow-sm border"
                      >
                        <img
                          src={img}
                          alt={`Portfolio ${imgIndex}`}
                          className="w-full h-[260px] object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ===================== KEY USPs STRIP ===================== */}
<section className="relative w-full overflow-hidden py-20">
  <div className="w-full">
    <div
  className="
    relative
    bg-[#223f73]
    py-16
    pl-16
    pr-14
    rounded-r-[200px]
    shadow-xl
    flex
    flex-col
    gap-14
    max-w-[92%]
    mr-auto
  "
>

      {/* Title */}
      <div className="flex items-center gap-6">
        <span className="h-[2px] w-16 bg-white" />
        <h3 className="text-white text-3xl font-bold">
          Key USPs DP Promises:
        </h3>
      </div>

      {/* USP Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
            <Users className="w-9 h-9 text-white" />
          </div>
          <p className="text-white font-semibold text-lg">
            Dedicated Team Of Developers
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
            <CheckCircle className="w-9 h-9 text-white" />
          </div>
          <p className="text-white font-semibold text-lg">
            In-Depth Quality Check
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
            <UserCheck className="w-9 h-9 text-white" />
          </div>
          <p className="text-white font-semibold text-lg">
            Teams Lead By Expert Project Manager
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
            <MessageSquare className="w-9 h-9 text-white" />
          </div>
          <p className="text-white font-semibold text-lg">
            Daily Communication
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===================== PLATFORMS & DESIGN MODES ===================== */}
{/* ===================== PLATFORMS & DESIGN MODES (TIGHT SPACING) ===================== */}
<section className="py-14 bg-white">
  <div className="max-w-[1100px] mx-auto px-6 text-center">

    {/* Top dashed divider */}
    <div className="flex justify-center my-10">
  <div className="border-l-4 border-dashed border-slate-300 h-24" />
</div>


    {/* Platforms title */}
    <h3 className="text-[26px] md:text-[28px] font-semibold text-[#243E73] mb-10">
      Platform DP Loves To Work:
    </h3>

    {/* Platforms row */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">

      {/* WORDPRESS */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-[96px] h-[96px] rounded-full border-[3px] border-[#E6E8ED] flex items-center justify-center">
          <div className="w-[68px] h-[68px] rounded-full bg-[#EEF1F5] flex items-center justify-center">
            <img src={wordpressIcon} alt="WordPress" className="w-10 h-10" />
          </div>
        </div>
        <p className="text-[13px] font-semibold tracking-wide text-[#1F2937]">
          WORDPRESS
        </p>
      </div>

      {/* CUSTOM PHP */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-[96px] h-[96px] rounded-full border-[3px] border-[#E6E8ED] flex items-center justify-center">
          <div className="w-[68px] h-[68px] rounded-full bg-[#EEF1F5] flex items-center justify-center">
            <img src={phpIcon} alt="PHP" className="w-12 h-12" />
          </div>
        </div>
        <p className="text-[13px] font-semibold tracking-wide text-[#1F2937]">
          CUSTOM PHP
        </p>
      </div>

      {/* SHOPIFY */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-[96px] h-[96px] rounded-full border-[3px] border-[#E6E8ED] flex items-center justify-center">
          <div className="w-[68px] h-[68px] rounded-full bg-[#EEF1F5] flex items-center justify-center">
            <img src={shopifyIcon} alt="Shopify" className="w-12 h-12" />
          </div>
        </div>
        <p className="text-[13px] font-semibold tracking-wide text-[#1F2937]">
          SHOPIFY
        </p>
      </div>

    </div>

    {/* Middle dashed divider */}
    <div className="flex justify-center my-10">
  <div className="border-l-4 border-dashed border-slate-300 h-24" />
</div>

    {/* Design modes title */}
    <h3 className="text-[26px] md:text-[28px] font-semibold text-[#243E73] mb-10">
      Design Modes DP Recommends
    </h3>

    {/* Design modes row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

      {/* CUSTOM BASED */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-[96px] h-[96px] rounded-full border-[3px] border-[#E6E8ED] flex items-center justify-center">
          <div className="w-[68px] h-[68px] rounded-full bg-[#EEF1F5] flex items-center justify-center">
            <img src={cssIcon} alt="Custom Based" className="w-10 h-10" />
          </div>
        </div>
        <p className="text-[13px] font-semibold tracking-wide text-[#1F2937]">
          CUSTOM BASED
        </p>
      </div>

      {/* THEME BASED */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-[96px] h-[96px] rounded-full border-[3px] border-[#E6E8ED] flex items-center justify-center">
          <div className="w-[68px] h-[68px] rounded-full bg-[#EEF1F5] flex items-center justify-center">
            <img src={paintIcon} alt="Theme Based" className="w-10 h-10" />
          </div>
        </div>
        <p className="text-[13px] font-semibold tracking-wide text-[#1F2937]">
          THEME BASED
        </p>
      </div>

    </div>
  </div>
</section>



        {/* Vertical text */}
       {/* Vertical PORTFOLIO text */}
<div className="pointer-events-none absolute right-[10px] top-6">
  <span
    className="text-[92px] md:text-[110px] font-extrabold tracking-[0.22em] uppercase text-slate-300/90"
    style={{ writingMode: 'vertical-rl' }}
  >
    PORTFOLIO
  </span>
</div>

      </section>
      

      {/* ===================== LANDING PAGE BRIEF & IDEATION ===================== */}

      {/* ===================== LANDING PAGE BRIEF & IDEATION ===================== */}

      <section className="relative bg-[#f4f5f7] py-28">
  <div className="max-w-[1500px] mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-8 items-center">

      {/* LEFT BROCHURE (UNCHANGED SIZE) */}
      <div className="relative h-[520px] shadow-[0_25px_60px_rgba(0,0,0,0.18)] overflow-hidden">

        {/* Background brochure */}
        <img
          src={brochure2}
          alt="Landing page brochure"
          className="w-full h-full object-cover"
        />

        {/* CONTENT OVERLAY (FLOATING, DOES NOT AFFECT IMAGE SIZE) */}
        <div className="absolute top-0 left-0 h-full w-[65%] bg-white px-12 py-14 flex flex-col justify-center shadow-lg">

          <h2 className="text-[34px] font-bold text-[#1f3c72] leading-tight mb-6">
            Landing Page Brief and <br /> Ideation
          </h2>

          <p className="text-[15px] text-slate-600 leading-relaxed">
            Both landing page briefing and ideation are two integral parts of the
            designing procedure. The designers at Digital Piloto are extremely
            careful about completing all the basics related to designs.
          </p>

          <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">
            They have in-depth knowledge of all the necessary tools and designing
            software that helps them create the best quality of designs. Their
            expertise makes us a leading{" "}
            <span className="text-blue-600 underline underline-offset-2 cursor-pointer">
              website development company
            </span>.
          </p>

        </div>
      </div>

      {/* RIGHT BROCHURE (SAME SIZE AS LEFT) */}
      <div className="h-[520px] shadow-[0_25px_60px_rgba(0,0,0,0.18)] overflow-hidden">
        <img
          src={brochure1}
          alt="Landing page brochure showcase"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>





      {/* ===================== FAQ & CAREER STRIP ===================== */}
<section className="w-full bg-[#0b2f4f] py-16">
  <div className="max-w-[1320px] mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-14">

      {/* LEFT */}
      <div className="text-white pr-0 md:pr-14 md:border-r md:border-white/20">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Frequently Asked Questions (FAQs)
        </h3>

        <p className="text-white/80 leading-relaxed text-sm md:text-[15px] max-w-[500px]">
          We enjoy educating people on the intricacies of digital marketing.
          Every day, we receive hundreds of questions from our real customers.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-orange-400 transition"
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
        </Link>
      </div>

      {/* RIGHT */}
      <div className="text-white pl-0 md:pl-14">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Wanna Rewarding Career?
        </h3>

        <p className="text-white/80 leading-relaxed text-sm md:text-[15px] max-w-[500px]">
          Join our team of experts if you have the urge to show up your
          potential! We appreciate a proactive measure to make us trust your
          skills!
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-orange-400 transition"
        >
          Join Our Team
          <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
        </Link>
      </div>

    </div>
  </div>
</section>

      
      {/* ===================== BIG CTA CARD ===================== */}
      {/* ===================== BIG CTA CARD ===================== */}
<section className="relative bg-white py-24">
  <div className="max-w-[1100px] mx-auto px-6">

    <div className="bg-[#0b2f4f] rounded-2xl px-10 md:px-20 py-14 text-center shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
      
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
        Looking for The Assistance Of Industry-Best Professionals?
      </h2>

      <Link
  to="/contact"
  className="inline-flex items-center gap-2 text-sm md:text-base font-semibold underline underline-offset-4 text-white hover:text-white transition"
>
  Reach us Online or Schedule An Appointment To A Live Call!
  <ArrowRight className="w-4 h-4 text-orange-400" />
</Link>


    </div>

  </div>
</section>

    </Layout>
  );
};

export default DesignDevelopment;
