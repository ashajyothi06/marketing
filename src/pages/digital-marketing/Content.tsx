import { Link } from 'react-router-dom';
import { ArrowRight, FileText, PenTool, BookOpen, Search, Edit, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';

import content1 from  '@/assets/contenthero.png';
import content2 from '@/assets/content2.png';
import icon1 from '@/assets/icon1.png';
import icon2 from '@/assets/icon2.png';
import icon3 from '@/assets/icon3.png';

const Content = () => {
  const features = [
    { icon: FileText, title: 'Blog Writing', description: 'Engaging blog posts that drive traffic and establish authority' },
    { icon: PenTool, title: 'Copywriting', description: 'Persuasive copy that converts visitors into customers' },
    { icon: BookOpen, title: 'Content Strategy', description: 'Comprehensive content plans aligned with your goals' },
  ];

  const processSteps = [
    { icon: Search, title: 'Research', description: 'Deep dive into your audience and competitors' },
    { icon: Edit, title: 'Strategy', description: 'Develop a content roadmap' },
    { icon: PenTool, title: 'Creation', description: 'Craft compelling content' },
    { icon: CheckCircle, title: 'Optimization', description: 'SEO and performance tuning' },
    { icon: FileText, title: 'Distribution', description: 'Multi-channel content delivery' },
    { icon: BookOpen, title: 'Analysis', description: 'Measure and refine' },
  ];

  const facts = [
    { stat: '72%', label: 'Marketers Say Content Increases Engagement' },
    { stat: '3x', label: 'More Leads from Content Marketing' },
    { stat: '62%', label: 'Lower Cost Than Traditional Marketing' },
    { stat: '6x', label: 'Higher Conversion Rate' },
  ];

  const faqs = [
    { question: 'What types of content do you create?', answer: 'We create blog posts, articles, whitepapers, case studies, social media content, email newsletters, website copy, and more.' },
    { question: 'How do you ensure content quality?', answer: 'Our content goes through multiple rounds of editing and is reviewed by subject matter experts before publication.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
     <section className="relative bg-[#f4f5ff] py-28 overflow-hidden">
  <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 items-center gap-20">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Content Dominance
      </h2>

      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-10">
        A Game Changer For Modern Businesses
      </h1>

      <button className="bg-[#001f5c] hover:bg-[#001640] text-white px-8 py-4 rounded-md font-semibold">
        Get a Free Consultation
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <img
        src={content1}
        alt="Content Dominance"
        className="max-w-[520px] w-full"
      />
    </div>

  </div>
</section>

<section className="bg-white py-28">
  <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-12">

    {/* CARD 1 */}
    <div className="bg-white shadow-xl rounded-lg p-12 text-center">
      <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gray-100 flex items-center justify-center">
  <img src={icon1} alt="" className="w-16 h-16" />
</div>

      <h3 className="text-2xl font-semibold mb-4">
        Pinpointed Content To Boost SEO Performance
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Influencing search engines is possible with powerful pinpointed content.
        We do it with a team of self-motivated content writers.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-white shadow-xl rounded-lg p-12 text-center">
      <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gray-100 flex items-center justify-center">
        <img src={icon2} alt="" className="w-16 h-16" />
      </div>
      <h3 className="text-2xl font-semibold mb-4">
        Researched Content to Boost Conversion Rate
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Writers conduct strong research work to come up with SEO-friendly content
        to make the conversion rate more favorable.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-white shadow-xl rounded-lg p-12 text-center">
      <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gray-100 flex items-center justify-center">
        <img src={icon3} alt="" className="w-16 h-16" />
      </div>
      <h3 className="text-2xl font-semibold mb-4">
        Authoritative Content to Help Brand Become Industry Leader
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Content is King! It builds strong brand identity and boosts business growth.
      </p>
    </div>

  </div>
</section>

<section className="bg-white py-28">
  <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT TEXT */}
    <div>
      <span className="uppercase tracking-widest text-sm text-gray-500">
        We Trust Our Team Of Content Writers!!
      </span>

      <h2 className="text-4xl font-semibold mt-4 mb-8">
        Our Writing Team Is An Asset That We Value A Lot!
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        When it comes to achieving SEO targets, content writers play a decisive role.
        Our highly skilled writers create content that influences search engines and
        strengthens brand identity.
      </p>

      <p className="text-gray-600 leading-relaxed">
        With 50+ years of combined experience, we deliver 100% original, grammatically
        perfect content — always on time.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <img
        src={content2}
        alt="Content Writing Team"
        className="max-w-[520px] w-full"
      />
    </div>

  </div>
</section>

<section className="bg-gradient-to-b from-[#041c2c] to-[#031321] py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
      Get On the First Page of Google with Our Content Process
    </h2>

    <p className="text-white/80 max-w-4xl mx-auto text-sm mb-14">
      We believe that SEO is an ongoing process that needs consistent efforts. Here,
      you cannot separate Content Writing from the overall SEO activities.
      Our top content writing team is 100% capable of delivering the best content
      that matches the SEO technicalities.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

      {[
        {
          title: "Select & Draft Content For Targeted Audience",
          desc: "Our content writing is capable of delivering customer-centric content. The parameters vary from one location to another that our writers can maintain!"
        },
        {
          title: "Make Super Trendy Punch-Packed Headlines To Grab Attention",
          desc: "Our content writers know the techniques to make the content attractive so that it grabs the attention of every reader."
        },
        {
          title: "Utilize Keyword-Rich Phrases",
          desc: "Keywords are intimate parts of SEO activities. Using them in the content is a flawless art that our content writing can do with perfection."
        },
        {
          title: "Structuring Posts Tagging Headlines (H1, H2, Etc.)",
          desc: "Providing various title tags is 100% needed. Our content writers have the ability to write the best headers!"
        },
        {
          title: "Promotion Of Natural Link Building",
          desc: "Backlinks extend your visibility. Our experts create the highest quality content to earn natural links."
        },
        {
          title: "Monitoring Results",
          desc: "Content writers monitor growth trends and updates to continuously enhance their skills."
        }
      ].map((item, i) => (
        <div key={i} className="bg-white text-left p-6 shadow-lg">
          <h4 className="font-semibold text-sm mb-3">{item.title}</h4>
          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
        </div>
      ))}

    </div>

    <button className="border border-white text-white px-6 py-2 text-sm rounded hover:bg-white hover:text-[#041c2c] transition">
      Get a Free Consultation
    </button>

  </div>
</section>

<section className="bg-white py-24">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-medium mb-12">
      Facts Highlighting Importance Of Content
    </h2>

    <div className="bg-white rounded-2xl shadow-xl p-10 text-left">
      <ul className="space-y-3 text-sm text-slate-700">

        {[
          "Majority of people aged 14–70 use search engines to get news and information online.",
          "79% of online shoppers spend at least 50% of their shopping time researching products.",
          "80% of people appreciate learning about a business through custom content marketing.",
          "68% of people spend time reading about brands that interest them.",
          "Content marketing has driven success for over 80% of businesses globally.",
          "75% of Americans aged 12+ are familiar with podcasting.",
          "Around 4 million blog posts are published daily.",
          "Only 32% of content teams regularly evaluate content effectiveness."
        ].map((fact, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
            <span>{fact}</span>
          </li>
        ))}

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

export default Content;
