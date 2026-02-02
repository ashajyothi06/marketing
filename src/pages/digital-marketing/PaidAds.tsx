import { Link } from 'react-router-dom';
import { ArrowRight, Target, DollarSign, BarChart3, Facebook, Instagram, Linkedin, Chrome, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import paidAD from '@/assets/paidAd.png';
import keyUSP from '@/assets/keyUSP.png';

import icon1 from '@/assets/icon1.png';
import icon2 from '@/assets/icon2.png';
import icon3 from '@/assets/icon3.png';

const PaidAds = () => {
  const features = [
    { icon: Target, title: 'Targeted Campaigns', description: 'Reach your ideal customers with precision targeting' },
    { icon: DollarSign, title: 'Budget Optimization', description: 'Maximize ROI with smart budget allocation' },
    { icon: BarChart3, title: 'Performance Tracking', description: 'Real-time analytics and conversion tracking' },
  ];

  const platforms = [
    { icon: Facebook, name: 'Facebook Ads', description: 'Reach billions of users with precise targeting options' },
    { icon: Instagram, name: 'Instagram Ads', description: 'Visual storytelling that converts followers to customers' },
    { icon: Linkedin, name: 'LinkedIn Ads', description: 'B2B advertising to decision-makers and professionals' },
    { icon: Chrome, name: 'Google Ads', description: 'Capture high-intent search traffic and display reach' },
    { icon: Phone, name: 'Call Campaigns', description: 'Drive direct calls to your business' },
  ];

  const facts = [
    { stat: '$2', label: 'Average Return per $1 Spent' },
    { stat: '65%', label: 'Clicks from Paid Ads' },
    { stat: '50%', label: 'Higher Conversion Rate' },
    { stat: '200%', label: 'Average ROI Improvement' },
  ];

  const faqs = [
    { question: 'How much should I budget for paid ads?', answer: 'Budget depends on your goals, industry, and competition. We recommend starting with a test budget and scaling based on performance.' },
    { question: 'Which platform is best for my business?', answer: 'The best platform depends on your target audience. B2B businesses often see great results on LinkedIn, while B2C may prefer Facebook/Instagram.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#f5f6ff] py-28 overflow-hidden">
  <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 items-center gap-20">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
        Let The Paid Ad Campaigns Work for You
      </h1>

      <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-10 leading-tight">
        It’s Time To Grab More Potential <br /> Customers
      </h2>

      <button className="bg-[#001f5c] hover:bg-[#001640] transition text-white px-8 py-4 rounded-md font-semibold">
        Get a Free Consultation
      </button>
    </div>

    {/* RIGHT ILLUSTRATION */}
    <div className="flex justify-center">
      <img
        src={paidAD}
        alt="Paid Ads Illustration"
        className="max-w-[520px] w-full"
      />
    </div>

  </div>
</section>

<section className="bg-white py-24">
  <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-12">

    {/* CARD 1 */}
    <div className="bg-white shadow-xl rounded-lg p-10 text-center">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
        <img src={icon1} className="w-14" />
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Attract Potential Customers To Your Network!
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Enhance brand awareness by reaching potential customers within and outside
        of your networks. We can make it happen! Reach us now!
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-white shadow-xl rounded-lg p-10 text-center">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
        <img src={icon2} className="w-14" />
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Understand Customer Behavior Before You Reach!
      </h3>

      <p className="text-gray-600 leading-relaxed">
        A better knowledge of your audiences by leveraging the targeting and analytics
        of the ads platforms. Trust our expertise right now!
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-white shadow-xl rounded-lg p-10 text-center">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
        <img src={icon3} className="w-14" />
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Engaging Content Can Turn Round The Tables!
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Creation of higher-performing content by understanding what ad content
        helps you achieve your business goals and what doesn't.
      </p>
    </div>

  </div>
</section>

<section className="bg-white py-24">
  <div className="max-w-[1100px] mx-auto px-6 text-center">

    <p className="text-xs tracking-widest text-gray-500 mb-2">
      KINDS OF ADS DP IS INTO
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold mb-14">
      Social Media Advertising <br />
      FB, Instagram, and LinkedIn
    </h2>

    <div className="space-y-6">

      {/* FACEBOOK */}
      <div className="flex rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#3b5998] w-20 flex items-center justify-center text-white text-3xl font-bold">
          f
        </div>
        <div className="p-6 bg-[#eef1f7] text-left">
          <h4 className="font-semibold mb-1">FACEBOOK</h4>
          <p className="text-sm text-gray-700">
            Facebook paid ads are productive and yield high ROI with precise targeting
            and scalable reach.
          </p>
        </div>
      </div>

      {/* INSTAGRAM */}
      <div className="flex rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-br from-pink-500 to-yellow-400 w-20 flex items-center justify-center text-white text-2xl">
          📷
        </div>
        <div className="p-6 bg-[#f6f0ff] text-left">
          <h4 className="font-semibold mb-1">INSTAGRAM</h4>
          <p className="text-sm text-gray-700">
            High-impact visual advertising with precise audience targeting and analytics.
          </p>
        </div>
      </div>

      {/* LINKEDIN */}
      <div className="flex rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#0077b5] w-20 flex items-center justify-center text-white text-2xl font-bold">
          in
        </div>
        <div className="p-6 bg-[#e9f4fb] text-left">
          <h4 className="font-semibold mb-1">LINKEDIN</h4>
          <p className="text-sm text-gray-700">
            Professional targeting to generate B2B leads and high-quality conversions.
          </p>
        </div>
      </div>

      {/* GOOGLE SEARCH */}
      <div className="flex rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#4285f4] w-20 flex items-center justify-center text-white text-2xl font-bold">
          G
        </div>
        <div className="p-6 bg-[#eef5ff] text-left">
          <h4 className="font-semibold mb-1">GOOGLE SEARCH</h4>
          <p className="text-sm text-gray-700">
            Intent-driven ads that deliver quick and measurable business results.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-10">
        <button className="bg-[#001f5c] hover:bg-[#001640] transition text-white px-8 py-4 rounded-md font-semibold">
          Call Us to Know More
        </button>
      </div>

    </div>
  </div>
</section>

      <section className="relative w-full bg-white">

  {/* IMAGE */}
  <div className="w-full h-[260px] sm:h-[340px] md:h-[420px]">
    <img
      src={keyUSP}
      alt="Paid Ads Team"
      className="w-full h-full object-cover"
      draggable={false}
    />
  </div>

  {/* USP CARD */}
  <div
    className="
      relative md:absolute
      md:top-16 md:right-16
      max-w-[520px]
      mx-auto md:mx-0
      bg-white border-2 border-orange-400
      p-6 sm:p-8 md:p-10
      shadow-xl
      -mt-10 sm:-mt-14 md:mt-0
    "
  >
    <h2 className="text-xl sm:text-2xl font-bold text-[#143a5c] mb-5">
      KEY DP USPs
    </h2>

    <ul className="space-y-4 text-sm sm:text-[15px] text-slate-700">

      <li className="flex gap-3 items-start">
        <span className="text-cyan-500">📊</span>
        <span>100% Assured Results</span>
      </li>

      <li className="flex gap-3 items-start">
        <span className="text-cyan-500">⚡</span>
        <span>Rapid Results</span>
      </li>

      <li className="flex gap-3 items-start">
        <span className="text-cyan-500">💰</span>
        <span>Affordability Measurement</span>
      </li>

      <li className="flex gap-3 items-start">
        <span className="text-cyan-500">🎯</span>
        <span>Specific and granular targeting as per requirements</span>
      </li>

    </ul>
  </div>

</section>



      {/* Facts */}
     <section className="relative w-full overflow-hidden">

  {/* TOP GRADIENT AREA */}
  <div className="bg-gradient-to-r from-[#021b33] to-[#003a8f] pt-24 pb-40">
    <h2 className="text-center text-white text-4xl font-semibold">
      Paid Ads – FACT Checks
    </h2>
  </div>

  {/* WHITE BACKGROUND */}
  <div className="bg-white pb-24" />

  {/* OVERLAPPING FACT CARD */}
  <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-full px-6">
    <div className="max-w-[1100px] mx-auto bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] p-12">

      <ul className="space-y-4 text-sm text-slate-800">

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>Google was the most visited website globally, receiving over 74 billion visits in a single month</span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>Google Ads account for more than 90% of Google’s total revenue worldwide</span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>Businesses earn an average of $2 for every $1 spent on Google Ads</span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>Paid search ads can increase brand awareness by up to 80%</span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>Mobile devices contribute to more than 65% of total paid ad clicks</span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>Facebook and Instagram ads reach over 3 billion active users combined</span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>Businesses using paid ads see faster lead generation compared to organic-only strategies</span>
        </li>

      </ul>
    </div>
  </div>

</section>



      <section className="relative bg-white py-24">
  <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT */}
    <div>
      <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 mb-4">
        LET'S STRATEGIZE
      </span>

      <h2 className="text-4xl font-semibold mb-6">
        Ready to Collaborate? <br /> Get in Touch
      </h2>

      <p className="text-slate-600 leading-relaxed max-w-[520px]">
        At Digital Piloto, we have a superb team of self-motivated SMO professionals
        with a proven track record of handling 100+ successful projects.
        We focus on delivering the right value for your money.
      </p>
    </div>

    {/* RIGHT FORM */}
    <div className="bg-white rounded-xl shadow-[0_0_30px_rgba(0,150,255,0.2)] p-10 border border-blue-200">

      <h3 className="text-xl font-bold mb-6">
        MAKE POTENTIAL <span className="text-blue-500">10X GROWTH</span> POSSIBLE
      </h3>

      <form className="space-y-4">

        <div className="grid grid-cols-2 gap-4">
          <input placeholder="First Name*" className="input" />
          <input placeholder="Last Name*" className="input" />
        </div>

        <input placeholder="Email*" className="input" />

        <input placeholder="📞 Phone Number*" className="input" />

        <input placeholder="Website URL / Company name*" className="input" />

        <textarea rows="4" placeholder="Message" className="input resize-none" />

        <div className="flex items-center gap-3 border p-3 rounded">
          <input type="checkbox" />
          <span className="text-sm">I'm not a robot</span>
        </div>

        <button className="bg-[#002a5c] text-white px-8 py-3 mt-4">
          Get in Touch
        </button>

      </form>
    </div>

  </div>
</section>

<section className="w-full bg-[#0b2f4f] py-16">
  <div className="max-w-[1320px] mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-14 relative">

      {/* LEFT : FAQ */}
      <div className="text-white pr-0 md:pr-14 md:border-r md:border-white/30">
        <h3 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions (FAQs)
        </h3>

        <p className="text-white/90 leading-relaxed text-[15px] max-w-[520px]">
          We enjoy educating people on the intricacies of digital marketing.
          Every day, we receive hundreds of questions from our real customers.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium underline underline-offset-4 hover:text-orange-400 transition"
        >
          Learn More
          <span className="text-orange-400 text-lg">↗</span>
        </a>
      </div>

      {/* RIGHT : CAREER */}
      <div className="text-white pl-0 md:pl-14">
        <h3 className="text-2xl font-semibold mb-4">
          Wanna Rewarding Career?
        </h3>

        <p className="text-white/90 leading-relaxed text-[15px] max-w-[520px]">
          Join our team of experts if you have the urge to show up your potential!
          We appreciate a proactive measure to make us trust your skills!
        </p>

        <a
          href="/careers"
          className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium underline underline-offset-4 hover:text-orange-400 transition"
        >
          Join Our Team
          <span className="text-orange-400 text-lg">↗</span>
        </a>
      </div>

    </div>
  </div>
</section>

<section className="relative bg-white py-24">
  <div className="max-w-[1200px] mx-auto px-6">

    <div
      className="bg-[#0b2f4f] rounded-xl text-center
                 px-10 md:px-20 py-16
                 shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
    >
      <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
        Looking for The Assistance Of Industry-Best Professionals?
      </h2>

      <a
        href="/contact"
        className="inline-block text-white text-[17px] font-medium
                   underline underline-offset-4
                   hover:text-orange-400 transition"
      >
        Reach us Online or Schedule An Appointment To A Live Call!
      </a>
    </div>

  </div>
</section>


     
    </Layout>
  );
};

export default PaidAds;
