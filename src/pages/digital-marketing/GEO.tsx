import { Link } from 'react-router-dom';

import { useState } from "react";


import {
  ArrowRight,
  Globe,
  MapPin,
  Users,
  CheckCircle,
  Cpu,
  BarChart3,
  FileText,
  Sliders,
  Megaphone,
  Lightbulb,
  Clock,
  Wallet,
  Brain,
  Bot,
  LineChart,
  Search,
  Image,
  PieChart,
} from "lucide-react";



import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import msmeImg from '@/assets/msme.png';
import DGFT from '@/assets/dgft.png';
import certificate from'@/assets/coi.png';
import Google from '@/assets/google.png';
import jyotirmai from '@/assets/jyotirmai.png';
import globe from '@/assets/globe.png';

import ranking from '@/assets/ranking.png';

import freeconsultation from '@/assets/freeconsultation.png';
import heroIllustration from '@/assets/ai-seo-hero.png'; // your illustration
import googlebusinessreview from '@/assets/googlebusinessreview.png';
import abhyanga from '@/assets/abhyanga.png';
import ballonpro from '@/assets/ballonpro.png';
import petals from '@/assets/petals.png';
import rajesh from '@/assets/rajesh.png';


const GEO = () => {
   const [activeFAQ, setActiveFAQ] = useState(null);
  const services = [
    { icon: Globe, title: 'International SEO', description: 'Optimize for global markets and multiple languages' },
    { icon: MapPin, title: 'Local SEO', description: 'Dominate local search results in your area' },
    { icon: Users, title: 'Multi-location SEO', description: 'Manage SEO for multiple business locations' },
  ];

  const stats = [
    { number: '500+', label: 'Global Clients' },
    { number: '50+', label: 'Countries Served' },
    { number: '100M+', label: 'Impressions Generated' },
    { number: '95%', label: 'Client Retention' },
  ];

  const team = [
    { name: 'James Wilson', role: 'GEO Strategist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Maria Garcia', role: 'International SEO Lead', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    { name: 'Alex Chen', role: 'Local SEO Expert', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Emma Thompson', role: 'Content Strategist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  ];

  const whyChooseUs = [
    'Global expertise with local understanding',
    'Multi-language content optimization',
    'Geo-targeted link building strategies',
    'Country-specific ranking improvements',
    'Comprehensive market research',
    'Real-time performance tracking',
  ];

  const faqs = [
    { question: 'What is GEO optimization?', answer: 'GEO (Geographic Optimization) focuses on improving your visibility in specific geographic locations, whether local, national, or international.' },
    { question: 'How does international SEO differ from local SEO?', answer: 'International SEO targets multiple countries/languages with hreflang tags and localized content, while local SEO focuses on specific geographic areas within a country.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      
      
{/* ===================== GEO HERO (AI SEO STYLE) ===================== */}
<section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-r from-[#0b0b0b] via-[#111111] to-[#1a0f2e]">

  {/* subtle world dots */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />

  <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-28 pb-20">
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* LEFT CONTENT */}
      <div>
        <p className="text-orange-400 font-semibold mb-3 tracking-wide">
          Your Generative AI SEO Agency is here!
        </p>

        <h1 className="text-white text-[36px] md:text-[46px] font-bold leading-tight mb-6">
          Generative AI <br />
          Search Engine Optimization
        </h1>

        <p className="text-white/80 text-[15px] max-w-[560px] leading-relaxed mb-5">
          Partner with the trusted full-service AI Search Engine Optimization (AI SEO)
          experts and experience measurable transformation.
        </p>

        <p className="text-white/70 text-[14px] max-w-[560px] leading-relaxed mb-8">
          Our AI-driven digital marketing strategies integrate Generative AI (Gen-AI),
          GEO (Generative Engine Optimization), and smart AI agents to help brands
          dominate search rankings, attract qualified leads, and accelerate growth.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-full"
        >
          Get a Proposal
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* RIGHT GLOBE VISUAL */}
      <div className="relative hidden lg:flex justify-center items-center">

        {/* orbit ring */}
        <div className="absolute w-[420px] h-[420px] rounded-full border border-white/20 animate-spin-slow" />

        {/* globe */}
        <div className="relative w-[320px] h-[320px] rounded-full border border-white/30 flex items-center justify-center">

          <div className="absolute inset-0 rounded-full border border-white/10" />

          {/* center badge */}
          <div className="bg-white rounded-full px-6 py-4 text-center shadow-xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google Partner"
              className="w-20 mx-auto mb-2"
            />
            <p className="text-sm font-semibold text-slate-700">
              Google Partner
            </p>
            <p className="text-xs text-orange-500 font-medium">
              ID: 898653424
            </p>
          </div>
        </div>

        {/* floating arrows */}
        <span className="absolute top-10 left-10 text-orange-400">➤</span>
        <span className="absolute bottom-16 right-12 text-orange-400">➤</span>

      </div>

    </div>
  </div>

  {/* Trusted partners */}
  <div className="relative z-10 border-t border-white/10 pt-10 pb-8">
    <p className="text-center text-white/70 mb-6">
      Trusted Partners of Our Generative AI SEO Agency
    </p>

    <div className="flex flex-wrap justify-center gap-8 items-center">
      {['Adept', 'Custacup', 'MisterPaint', 'CashUp', 'Arena', 'Petals'].map((name) => (
        <div
          key={name}
          className="bg-white px-6 py-3 rounded-md shadow text-sm font-semibold text-slate-700"
        >
          {name}
        </div>
      ))}
    </div>
  </div>

</section>


      

      {/* Services */}
      {/* ===================== OUR SERVICES ===================== */}
<section className="relative bg-gradient-to-br from-[#0c0c0f] via-[#14121a] to-[#1a0f2e] py-24 overflow-hidden">

  {/* soft glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff9f1c22,transparent_45%)]" />

  <div className="relative z-10 max-w-[1320px] mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-[900px] mx-auto mb-16">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 relative inline-block">
        Our Services
        <span className="block w-20 h-[3px] bg-orange-500 mx-auto mt-3 rounded-full" />
      </h2>

      <p className="text-white/70 text-sm md:text-[15px] leading-relaxed mt-6">
        Experience the power of AI Search Engine Optimization (AI SEO) with our full
        suite of AI-driven solutions. We blend AI-driven digital marketing,
        Generative AI (Gen-AI), GEO (Generative Engine Optimization), and smart AI
        agents to deliver measurable growth.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="service-card">
        <Cpu className="service-icon" />
        <h3>Programmatic SEO with AI</h3>
        <p>
          We scale and automate millions of optimized webpages using AI to
          enhance indexing speed, improve visibility, and boost search engine
          rankings.
        </p>
      </div>

      {/* Card 2 */}
      <div className="service-card">
        <BarChart3 className="service-icon" />
        <h3>AI Analytics Trend Forecasting</h3>
        <p>
          Our generative AI SEO experts leverage machine learning (ML) to predict
          customer behavior, market trends, and content performance for strategic
          planning.
        </p>
      </div>

      {/* Card 3 */}
      <div className="service-card">
        <FileText className="service-icon" />
        <h3>AI Blogging</h3>
        <p>
          We generate SEO-rich and high-quality content at scale with NLP models
          that understand semantic relevance and audience intent.
        </p>
      </div>

      {/* Card 4 */}
      <div className="service-card">
        <Sliders className="service-icon" />
        <h3>AI-Driven CRO</h3>
        <p>
          Our ChatGPT SEO specialists boost conversion rates by optimizing user
          journeys, personalizing CTAs, and analyzing user behavior.
        </p>
      </div>

      {/* Card 5 */}
      <div className="service-card">
        <Megaphone className="service-icon" />
        <h3>AI Optimized Ads</h3>
        <p>
          We create ads with AI-powered targeting, performance insights, and
          continuous A/B testing to maximize ROI across platforms.
        </p>
      </div>

      {/* Card 6 */}
      <div className="service-card">
        <Lightbulb className="service-icon" />
        <h3>AI Solutions for Businesses</h3>
        <p>
          From automation to recommendation engines, we build custom AI tools
          that increase operational efficiency and solve business challenges.
        </p>
      </div>

    </div>
  </div>
</section>

{/* ===================== AI SEO HERO ===================== */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c0f] via-[#14121a] to-[#1b0f2a]">

  {/* soft purple glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#6a3cff33,transparent_45%)]" />

  {/* orange curved shape */}
  <div className="absolute bottom-0 right-0 w-[55%] h-[160px] bg-gradient-to-r from-orange-400 to-orange-600 rotate-[-4deg] translate-y-20 rounded-tl-[100%]" />

  <div className="relative z-10 max-w-[1320px] mx-auto px-6 py-28">
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-white text-[36px] md:text-[44px] font-semibold leading-tight mb-6">
          Scalable SEO Solutions with AI for <br />
          Multiple Businesses
        </h1>

        <div className="w-24 h-[3px] bg-orange-500 mb-6 rounded-full" />

        <p className="text-white/75 text-[15px] leading-relaxed max-w-[560px] mb-6">
          Digital Piloto is a leading full-service AI SEO agency that offers
          exemplary generative AI SEO strategies for 2025. From startups to
          global enterprises we customize AI-driven SEO services that result
          in growth.
        </p>

        <p className="text-white/65 text-[14px] leading-relaxed max-w-[560px] mb-10">
          Our technical SEO specialists using AI help your business stand out
          among competitors and deliver scalable growth.
        </p>

        {/* STATS */}
        <div className="flex gap-12 mt-6">
          <div>
            <div className="text-white text-3xl font-semibold">9+</div>
            <div className="text-white/60 text-sm mt-1">Years of Business</div>
          </div>

          <div>
            <div className="text-white text-3xl font-semibold">60+</div>
            <div className="text-white/60 text-sm mt-1">Team Strength</div>
          </div>

          <div>
            <div className="text-white text-3xl font-semibold">150+</div>
            <div className="text-white/60 text-sm mt-1">Clients Worldwide</div>
          </div>
        </div>
      </div>

      {/* RIGHT ILLUSTRATION */}
      <div className="relative hidden lg:flex justify-end">
        <img
          src={heroIllustration}
          alt="AI SEO Illustration"
          className="w-[520px] xl:w-[580px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
        />
      </div>

    </div>
  </div>
</section>

{/* ===================== OUR CREDIBILITY ===================== */}
<section className="relative bg-gradient-to-b from-[#141414] to-[#1b1b1b] py-20">
  <div className="max-w-[1200px] mx-auto px-6 text-center">

    <h2 className="text-white text-3xl font-semibold mb-3">
      Our Credibility
    </h2>
    <div className="mx-auto w-20 h-[3px] bg-orange-500 rounded-full mb-12" />

    <div className="flex flex-wrap justify-center gap-8 items-center">

      {/* MSME */}
      <div className="bg-white rounded-xl px-6 py-4 shadow-md">
        <img
          src={msmeImg}
          alt="MSME"
          className="h-12 object-contain"
        />
      </div>

      {/* DGFT */}
      <div className="bg-[#2e2c6d] rounded-xl px-6 py-4 shadow-md">
        <img
          src={DGFT}
          alt="DGFT"
          className="h-12 object-contain"
        />
      </div>

      {/* Certificate */}
      <div className="bg-white rounded-xl px-6 py-4 shadow-md">
        <img
          src={certificate}
          alt="Certificate of Incorporation"
          className="h-12 object-contain"
        />
      </div>

      {/* Google Partner */}
      <div className="bg-white rounded-xl px-6 py-4 shadow-md">
        <img
          src={Google}
          alt="Google Partner"
          className="h-12 object-contain"
        />
      </div>

    </div>
  </div>
</section>

{/* ===================== TESTIMONIALS ===================== */}
<section className="relative bg-gradient-to-b from-[#1b1b1b] to-[#0f0f0f] py-24">
  <div className="max-w-[1320px] mx-auto px-6 text-center">

    <h2 className="text-white text-3xl font-semibold mb-3">
      Tales of Our Satisfied Clients
    </h2>
    <div className="mx-auto w-28 h-[3px] bg-orange-500 rounded-full mb-4" />

    <p className="text-white/70 text-sm max-w-[720px] mx-auto mb-14">
      The loyal clients of our generative AI SEO agency are pretty satisfied
      with our dedicated services.
    </p>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* CARD 1 */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
        <img
          src={jyotirmai}
          alt="Client Testimonial"
          className="w-full object-cover"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="ml-1 w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent" />
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
        <img
          src={jyotirmai}
          alt="Client Testimonial"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="ml-1 w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent" />
          </div>
        </div>
      </div>

    </div>

    {/* DOTS */}
    <div className="flex justify-center gap-2 mt-10">
      <span className="w-2 h-2 rounded-full bg-orange-500" />
      <span className="w-2 h-2 rounded-full bg-white/40" />
      <span className="w-2 h-2 rounded-full bg-white/40" />
      <span className="w-2 h-2 rounded-full bg-white/40" />
      <span className="w-2 h-2 rounded-full bg-white/40" />
    </div>

  </div>
</section>

{/* ===================== OUR ACHIEVEMENTS ===================== */}
<section className="relative bg-[#141414] text-white overflow-hidden">

  {/* TOP ACHIEVEMENTS BAR */}
  <div className="max-w-[1400px] mx-auto px-6 py-16">
    <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-center">

      {/* LEFT TITLE */}
      <div>
        <h2 className="inline-block text-3xl font-semibold relative">
          <span className="relative z-10 bg-[#1e4ed8] px-3 py-1">
            Our Achievements
          </span>
        </h2>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-l border-white/10 pl-10">

        {/* ITEM */}
        <div>
          <p className="text-sm text-white/70 mb-2">Successful Projects</p>
          <div className="text-4xl font-bold">
            92<span className="text-orange-500">%</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-white/70 mb-2">Client Retention Rate</p>
          <div className="text-4xl font-bold">
            90<span className="text-orange-500">%</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-white/70 mb-2">Projects Delivered</p>
          <div className="text-4xl font-bold">
            250<span className="text-orange-500">+</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-white/70 mb-2">Google Ratings</p>
          <div className="text-4xl font-bold">
            4.9<span className="text-orange-500">+</span>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* DIVIDER */}
  <div className="h-px bg-white/10" />

  {/* ===================== CTA + GLOBE ===================== */}
  <div className="relative max-w-[1400px] mx-auto px-6 py-24">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT GLOBE */}
      <div className="flex justify-center relative">
        <img
          src={globe}
          alt="Global Network"
          className="w-[380px] md:w-[440px] opacity-90"
        />

        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
            <img
              src={globe}
              alt="Logo"
              className="w-7"
            />
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h3 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
          Ready to Grow with Generative Engine <br />
          Optimization Specialist? Contact <br />
          Today!
        </h3>

        <div className="w-20 h-[3px] bg-orange-500 rounded-full mb-6" />

        <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-[560px]">
          Welcome to the most prominent and the best generative engine optimization
          agency, and experience scalable growth. Our generative AI SEO experts,
          consultants, strategists will turn your regular project into a productive
          one. Our generative AI SEO driven by foundational technologies will shape
          the digital future of your business.
        </p>

        <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-[560px]">
          Our professionals perform data-driven decision making with AI and ML,
          and help your business grow with end-to-end marketing applications backed
          by automation. So, what are you waiting for?
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-semibold px-6 py-3 rounded-full">
          Get a Proposal
        </button>
      </div>

    </div>
  </div>

<section className="bg-[#0f0f0f] py-24">
  <div className="max-w-[1400px] mx-auto px-6">

    <div className="bg-[#3a3a3a] rounded-2xl px-10 py-20 text-center shadow-2xl">

      <p className="text-white/80 text-sm mb-3">
        Enhance Online Visibility with One of the
      </p>

      <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
        Best Generative Engine Optimization Agencies
      </h2>

      <p className="text-white/70 text-sm max-w-[720px] mx-auto mb-10">
        The Best Generative Engine Optimization Agency is Here to Deliver
        You the Best Results!
      </p>

      {/* SEARCH */}
      <div className="flex justify-center mb-14">
        <input
          type="text"
          placeholder="Search your city..."
          className="w-full max-w-[520px] px-6 py-4 rounded-lg bg-white text-sm outline-none shadow-md"
        />
      </div>

      {/* LOCATIONS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-6 gap-x-10 text-left max-w-[1200px] mx-auto">

        {[
          'USA', 'India', 'Australia', 'UAE', 'UK', 'Canada', 'Brazil',
          'Philippines', 'France', 'Mexico', 'New Zealand', 'Qatar',
          'South Africa', 'Spain', 'Nepal'
        ].map((country, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-white/90 text-sm font-medium"
          >
            <span className="text-orange-500">📍</span>
            {country}
          </div>
        ))}

      </div>

    </div>
  </div>
</section>

  {/* BOTTOM CURVE */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[120px]">
      <path
        d="M0,40 C240,100 480,120 720,100 960,80 1200,40 1440,20 L1440,120 L0,120 Z"
        fill="#141414"
      />
    </svg>
  </div>

</section>

<section className="relative py-24 bg-gradient-to-b from-[#1a0d2e] via-[#1f1236] to-[#0b0614]">
  <div className="max-w-[1320px] mx-auto px-6">

    {/* SECTION TITLE */}
    <div className="text-center mb-16">
      <h2 className="text-white text-3xl md:text-4xl font-semibold">
        Our Generative AI SEO Experts
      </h2>
      <div className="mx-auto mt-4 w-24 h-[3px] bg-orange-500 rounded-full" />
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 text-center border border-white/10 shadow-xl">
        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-white">
          <img
            src={rajesh}
            alt="Amlan Malti"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-white text-xl font-semibold mb-3">
          Amlan Malti
        </h3>

        <p className="text-white/80 text-sm leading-relaxed">
          Founder of Digital Piloto Pvt. Ltd., leads innovation in
          AI-driven digital marketing, GEO, and smart AI agents—
          delivering ROI-focused websites and cutting-edge solutions
          for business growth.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 text-center border border-white/10 shadow-xl">
        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-white">
          <img
            src={rajesh}
            alt="Sanjay Dhar"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-white text-xl font-semibold mb-3">
          Sanjay Dhar
        </h3>

        <p className="text-white/80 text-sm leading-relaxed">
          Founder of Digital Piloto Pvt. Ltd., is a seasoned digital
          marketing strategist with 25 years of experience, helping
          businesses accelerate revenue and build impactful brand
          identities that drive growth.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 text-center border border-white/10 shadow-xl">
        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-white">
          <img
            src={rajesh}
            alt="Jayanta Sen"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-white text-xl font-semibold mb-3">
          Jayanta Sen
        </h3>

        <p className="text-white/80 text-sm leading-relaxed">
          Fractional Chief AI and Technical Advisor at Digital Piloto
          brings deep expertise in enterprise AI, Gen-AI, MLOps,
          and data architecture—guiding startups and enterprises with
          scalable, governance-driven AI solutions.
        </p>
      </div>

    </div>
  </div>
</section>



<section className="relative py-24 bg-gradient-to-b from-[#151515] via-[#1a1a1a] to-[#0f0f0f]">
  <div className="max-w-[1320px] mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-white text-3xl md:text-4xl font-semibold">
        Why Businesses Choose Our Best Generative Engine Optimization Agency?
      </h2>

      <p className="mt-4 text-white/70 text-sm max-w-[820px] mx-auto">
        Being the top AI SEO consulting firms, we provide personalized services
        to our clients. Let’s explore the reasons of why businesses find us the best!
      </p>
    </div>

    {/* CARDS GRID */}
    <div className="grid md:grid-cols-3 gap-10">

      {[
        { title: "Competitor Analysis with AI", icon: BarChart3 },
        { title: "AI-Powered Keyword Research", icon: Search },
        { title: "AI-Driven On-Page Optimization", icon: LineChart },
        { title: "Content Optimization Using AI", icon: FileText },
        { title: "AI-Powered Image & Video SEO", icon: Image },
        { title: "Automated SEO Reporting & Analytics", icon: PieChart },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-[#1f1a29] to-[#171320] rounded-2xl border border-white/10 p-10 text-center shadow-lg hover:shadow-xl transition"
        >
          {/* ICON CIRCLE */}
          <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#3b2b5a] to-[#241a3a] flex items-center justify-center border border-white/10">
            <div className="w-12 h-12 rounded-full bg-[#1b132b] flex items-center justify-center">
              <item.icon className="w-6 h-6 text-orange-400" />
            </div>
          </div>

          {/* TITLE */}
          <h3 className="text-white font-medium text-lg leading-snug">
            {item.title}
          </h3>
        </div>
      ))}

    </div>
  </div>
</section>

{/* ===================== OUR RANKING RESULTS ===================== */}
<section className="relative py-24 bg-gradient-to-b from-[#2a143f] via-[#1a0d2e] to-[#12081f]">

  <div className="max-w-[1400px] mx-auto px-6 text-center">

    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-3">
      Our Ranking Results
    </h2>
    <div className="mx-auto w-24 h-[3px] bg-orange-500 rounded-full mb-14" />

    {/* SLIDES */}
    <div className="grid md:grid-cols-3 gap-8">

      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-xl p-4"
        >
          <img
            src={ranking}
            alt="Ranking Result"
            className="rounded-xl w-full"
          />
        </div>
      ))}

    </div>

    {/* DOTS */}
    <div className="flex justify-center gap-2 mt-10">
      <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
    </div>

  </div>
</section>

{/* ===================== WHY CHOOSE DIGITAL PILOTO ===================== */}
{/* ===================== WHY CHOOSE DIGITAL PILOTO ===================== */}
<section className="relative py-24 bg-[#141414] overflow-hidden">

  <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
        Why Choose Digital <br /> Piloto?
      </h2>

      <div className="w-24 h-[3px] bg-orange-500 rounded-full mb-10" />

      {/* dotted arrow decoration */}
      <div className="relative w-40 h-40 opacity-40">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M20,180 C80,40 140,160 180,20"
            stroke="#ffffff"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          />
        </svg>
        <span className="absolute top-0 right-0 text-orange-500 text-xl">➤</span>
      </div>
    </div>

    {/* RIGHT CARDS */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

      {[
        { title: "150+ Satisfied Clients", icon: Users },
        { title: "24/7 Availability", icon: Clock },
        { title: "Cost-Effective Solutions", icon: Wallet },
        { title: "Dedicated Generative AI SEO Experts", icon: Brain },
        { title: "50+ ChatGPT SEO Specialists", icon: Bot },
        { title: "Performance Monitoring", icon: LineChart },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-[#2b1b45] to-[#1b122e]
                     rounded-2xl p-8 text-center border border-white/10
                     shadow-lg hover:shadow-xl transition"
        >
          {/* ICON */}
          <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center
                          rounded-full bg-[#3b2b5a] border border-white/10">
            <item.icon className="w-7 h-7 text-orange-400" />
          </div>

          {/* TEXT */}
          <p className="text-white text-sm font-medium leading-snug">
            {item.title}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>


{/* ===================== CASE STUDIES ===================== */}
<section className="relative py-24 bg-[#141414] overflow-hidden">
  <div className="max-w-[1400px] mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-white text-3xl md:text-4xl font-semibold">
        Case Studies
      </h2>
      <div className="mx-auto mt-4 w-24 h-[3px] bg-orange-500 rounded-full" />
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="bg-gradient-to-br from-[#1f1a29] to-[#171320]
                      rounded-2xl border border-white/10 p-10
                      text-center shadow-lg">
        <img
          src={abhyanga}
          alt="Abhyanga"
          className="h-20 mx-auto mb-6 object-contain"
        />

        <h3 className="text-white text-xl font-semibold mb-6">
          Abhyanga
        </h3>

        <button className="bg-orange-500 hover:bg-orange-600 transition
                           text-white text-sm font-semibold px-8 py-3 rounded-full">
          Request Now
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-br from-[#1f1a29] to-[#171320]
                      rounded-2xl border border-white/10 p-10
                      text-center shadow-lg">
        <img
          src={ballonpro}
          alt="Balloonpro"
          className="h-20 mx-auto mb-6 object-contain"
        />

        <h3 className="text-white text-xl font-semibold mb-6">
          Balloonpro
        </h3>

        <button className="bg-orange-500 hover:bg-orange-600 transition
                           text-white text-sm font-semibold px-8 py-3 rounded-full">
          Request Now
        </button>
      </div>

      {/* Card 3 */}
      <div className="bg-gradient-to-br from-[#1f1a29] to-[#171320]
                      rounded-2xl border border-white/10 p-10
                      text-center shadow-lg">
        <img
          src={petals}
          alt="Petals Health"
          className="h-20 mx-auto mb-6 object-contain"
        />

        <h3 className="text-white text-xl font-semibold mb-6">
          Petals
        </h3>

        <button className="bg-orange-500 hover:bg-orange-600 transition
                           text-white text-sm font-semibold px-8 py-3 rounded-full">
          Request Now
        </button>
      </div>

    </div>
  </div>
</section>

{/* ===================== FREE CONSULTATION ===================== */}
<section className="relative bg-gradient-to-r from-[#2a143f] to-[#1a0d2e] overflow-hidden">

  <div className="grid lg:grid-cols-2 items-center min-h-[360px]">

    {/* LEFT IMAGE */}
    <div className="hidden lg:block relative h-full">
      <img
        src={freeconsultation}
        alt="Consultation"
        className="w-full h-full object-cover clip-consult"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="px-10 md:px-20 py-20 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Free Consultation
      </h2>

      <p className="text-white/80 text-sm md:text-[15px] max-w-[520px] leading-relaxed mb-8">
        Do you want to enquire about generative AI search engine optimization?
        Click on “Join Now”, and get an opportunity to connect with our experts
        and receive accurate information right now.
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 transition
                         text-white text-sm font-semibold px-8 py-3 rounded-full">
        Join Now
      </button>
    </div>

  </div>
</section>

{/* ===================== SEO TOOLS STACK ===================== */}
<section className="relative bg-[#141414] py-24 overflow-hidden">

  <div className="max-w-[1400px] mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-white text-3xl md:text-4xl font-semibold">
        We use the Most Scalable SEO Solutions with AI
      </h2>
      <div className="mx-auto mt-4 w-36 h-[3px] bg-orange-500 rounded-full" />
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">

      {/* Google Analytics */}
      <div className="flex items-center justify-center py-20 border-r border-white/10">
        <div className="flex items-center gap-4 opacity-40">
          <svg width="42" height="42" fill="currentColor" className="text-white">
            <rect x="4" y="22" width="6" height="16" rx="2" />
            <rect x="18" y="10" width="6" height="28" rx="2" />
            <rect x="32" y="4" width="6" height="34" rx="2" />
          </svg>
          <span className="text-white text-xl font-medium">
            Google <br /> Analytics
          </span>
        </div>
      </div>

      {/* Google Search Console */}
      <div className="flex items-center justify-center py-20 border-r border-white/10">
        <span className="text-white text-3xl font-medium opacity-40">
          Google <br />
          <span className="text-xl">Search Console</span>
        </span>
      </div>

      {/* Google Trends */}
      <div className="flex items-center justify-center py-20">
        <span className="text-white text-3xl font-medium opacity-40">
          Google Trends
        </span>
      </div>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">

      {/* SE Ranking */}
      <div className="flex items-center justify-center py-20 border-r border-white/10">
        <span className="text-white text-2xl font-semibold opacity-40">
          SE Ranking
        </span>
      </div>

      {/* SEMrush */}
      <div className="flex items-center justify-center py-20 border-r border-white/10">
        <span className="text-white text-3xl font-semibold opacity-40">
          SEMRUSH
        </span>
      </div>

      {/* MOZ */}
      <div className="flex items-center justify-center py-20">
        <span className="text-white text-4xl font-bold opacity-40">
          MOZ
        </span>
      </div>

    </div>

  </div>
</section>

{/* LEFT : Google Business Profile Screenshot */}

<section className="relative bg-[#0f0f0f] py-24 overflow-hidden">

  <div className="max-w-[1400px] mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-16">
      <h2 className="text-white text-3xl md:text-4xl font-semibold">
        Our Client Reviews
      </h2>

      {/* orange underline */}
      <div className="mx-auto mt-4 w-32 h-[3px] bg-orange-500 rounded-full" />
    </div>

    {/* IMAGE */}
    <img
      src={googlebusinessreview}
      alt="Our Client Reviews"
      className="w-full h-auto object-cover rounded-xl shadow-2xl"
    />

  </div>
</section>

{/* ===================== FAQ + CONTACT FORM ===================== */}
<section className="relative bg-[#0f0f0f] py-24 overflow-hidden">

  <div className="max-w-[1400px] mx-auto px-6">

    {/* ================= FAQ ================= */}

    {/* ================= FAQ ================= */}
<div className="grid lg:grid-cols-2 gap-16 mb-24 border-b border-white/10 pb-16">

  {/* LEFT */}
  <div>
    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
      Frequently Asked Questions
    </h2>
    <div className="w-32 h-[3px] bg-orange-500 rounded-full" />
  </div>

  {/* RIGHT */}
  <div className="space-y-6">

    {[
      {
        q: "Are there any benefits of Generative AI in SEO?",
        a: "Yes. Generative AI improves keyword research, content scalability, SERP understanding, and automation while maintaining relevance and intent."
      },
      {
        q: "Do you offer your generative AI SEO expert for hire?",
        a: "Yes. We provide dedicated AI SEO experts, consultants, and strategists based on your project requirements."
      },
      {
        q: "Which tools you use for SEO optimization using ChatGPT?",
        a: "We use ChatGPT with SEMrush, Ahrefs, Screaming Frog, Google Search Console, and custom AI workflows."
      },
      {
        q: "Which is the top AI SEO consulting firm?",
        a: "Digital Piloto is recognized as a leading AI SEO consulting firm delivering data-driven and scalable SEO solutions."
      }
    ].map((item, index) => (
      <div
        key={index}
        className="border-b border-white/20 pb-4"
      >
        {/* QUESTION */}
        <button
          onClick={() =>
            setActiveFAQ(activeFAQ === index ? null : index)
          }
          className="w-full flex justify-between items-center text-left"
        >
          <span className="text-white/90 text-sm md:text-[15px]">
            {item.q}
          </span>

          <span className="text-white text-xl">
            {activeFAQ === index ? "−" : "+"}
          </span>
        </button>

        {/* ANSWER */}
        {activeFAQ === index && (
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            {item.a}
          </p>
        )}
      </div>
    ))}


  </div>
</div>

   

    {/* ================= FORM ================= */}
    <div className="bg-gradient-to-br from-[#171320] to-[#0f0f14]
                    border border-white/10 rounded-2xl p-10 md:p-16 shadow-2xl">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h3 className="text-white text-2xl md:text-3xl font-semibold flex justify-center items-center gap-2">
          <span className="w-2 h-2 bg-orange-500 rounded-full" />
          Experience AI-Powered SEO Now!
        </h3>

        <div className="mx-auto mt-4 w-28 h-[3px] bg-orange-500 rounded-full" />
      </div>

      {/* FORM */}
      <form className="space-y-6 max-w-[1000px] mx-auto">

        {/* Full Name */}
        <div>
          <label className="block text-white/80 text-sm mb-2">
            Full Name*
          </label>
          <input
            type="text"
            className="w-full bg-transparent border border-white/30
                       rounded-md px-4 py-3 text-white outline-none
                       focus:border-orange-500"
          />
        </div>

        {/* Email + Phone */}
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block text-white/80 text-sm mb-2">
              Email*
            </label>
            <input
              type="email"
              className="w-full bg-transparent border border-white/30
                         rounded-md px-4 py-3 text-white outline-none
                         focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm mb-2">
              Phone*
            </label>
            <div className="flex items-center gap-3 border border-white/30
                            rounded-md px-4 py-3">
              <span className="text-white">🇮🇳 +91</span>
              <input
                type="tel"
                className="bg-transparent w-full text-white outline-none"
              />
            </div>
          </div>

        </div>

        {/* Website */}
        <div>
          <label className="block text-white/80 text-sm mb-2">
            Website URL / Company Name*
          </label>
          <input
            type="text"
            className="w-full bg-transparent border border-white/30
                       rounded-md px-4 py-3 text-white outline-none
                       focus:border-orange-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-white/80 text-sm mb-2">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full bg-transparent border border-white/30
                       rounded-md px-4 py-3 text-white outline-none
                       focus:border-orange-500 resize-none"
          />
        </div>

        {/* SUBMIT */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition
                       text-white text-sm font-semibold px-10 py-3 rounded-full"
          >
            Submit
          </button>
        </div>

      </form>
    </div>

  </div>
</section>


     
    </Layout>
  );
};

export default GEO;
