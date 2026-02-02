import { Link } from 'react-router-dom';
import { ArrowRight, MousePointer, Target, Zap, LineChart, ArrowUpRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';

import scenario from '@/assets/scenario.png';
import cro from '@/assets/CRO.png';

const CRO = () => {
  const scenarios = [
    {
      title: 'High Traffic, Low Conversions',
      description: 'You\'re getting visitors but they\'re not converting into leads or customers.',
      solution: 'We analyze user behavior and optimize conversion paths to turn visitors into customers.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    },
    {
      title: 'High Cart Abandonment',
      description: 'Customers add to cart but leave before completing purchase.',
      solution: 'We optimize checkout flow, add trust signals, and implement recovery strategies.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    },
    {
      title: 'Low Form Submissions',
      description: 'Your forms aren\'t generating the leads you expected.',
      solution: 'We redesign forms, reduce friction, and improve form placement for better conversions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
    {
      title: 'Poor Landing Page Performance',
      description: 'Your landing pages have high bounce rates.',
      solution: 'We A/B test elements, improve copy, and optimize for user engagement.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?w=400&h=300&fit=crop',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
     <section className="relative bg-gradient-to-r from-[#021b33] to-[#003a8f] py-24">
  <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

    {/* LEFT ILLUSTRATION */}
    <div className="flex justify-center">
      <img
        src={scenario}
        alt="Scenarios Illustration"
        className="max-w-[420px] w-full"
      />
    </div>

    {/* RIGHT TITLE */}
    <div>
      <h2 className="text-white text-5xl font-semibold relative inline-block">
        Scenarios
        <span className="block w-20 h-[3px] bg-white mt-4" />
      </h2>
    </div>

  </div>
</section>

<section className="bg-gradient-to-r from-[#021b33] to-[#003a8f]">
  <div className="grid lg:grid-cols-2 items-stretch">

    {/* LEFT IMAGE */}
    <div>
      <img
        src={cro}
        alt="No Leads Issue"
        className="w-full h-full object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex items-center px-10 lg:px-20 py-20 text-white">
      <div className="max-w-[560px]">

        <h3 className="text-3xl font-semibold mb-6 leading-snug">
          Getting a lot of inbound website traffic but you are not receiving any
          Leads in terms of calls or messages!!
        </h3>

        <p className="text-white/90 leading-relaxed mb-10">
          Don’t worry you are not the only business owner who has been facing such
          a situation. There exist some technical defects that prevent you from
          getting the advantages of receiving a large traffic. Our expert CRO can
          find the right remedy that can get you rid of such a situation!
        </p>

        <button className="border border-white px-8 py-3 rounded text-sm font-semibold hover:bg-white hover:text-[#003a8f] transition">
          GET ASSISTANCE
        </button>

      </div>
    </div>

  </div>
</section>


<section className="bg-gradient-to-r from-[#021b33] to-[#003a8f]">
  <div className="grid lg:grid-cols-2 items-stretch">

    {/* LEFT CONTENT */}
    <div className="flex items-center px-10 lg:px-20 py-20 text-white">
      <div className="max-w-[560px]">

        <h3 className="text-3xl font-semibold mb-6 leading-snug">
          A lot of Leads are getting garnered via Social media handles but none
          of them are Valid / or of No utility?
        </h3>

        <p className="text-white/90 leading-relaxed mb-10">
          It is a matter of concern as converting such leads is easier. With the
          expert CRO services at Digital Piloto, you can see the difference in how
          these leads get converted into potential customers.
        </p>

        <button className="border border-white px-8 py-3 rounded text-sm font-semibold hover:bg-white hover:text-[#003a8f] transition">
          GET ASSISTANCE
        </button>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src={cro}
        alt="Invalid Leads Issue"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>


<section className="bg-gradient-to-r from-[#021b33] to-[#003a8f]">
  <div className="grid lg:grid-cols-2 items-stretch">

    {/* LEFT IMAGE */}
    <div>
      <img
        src={cro}
        alt="No Leads Issue"
        className="w-full h-full object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex items-center px-10 lg:px-20 py-20 text-white">
      <div className="max-w-[560px]">

        <h3 className="text-3xl font-semibold mb-6 leading-snug">
          Getting a lot of inbound website traffic but you are not receiving any
          Leads in terms of calls or messages!!
        </h3>

        <p className="text-white/90 leading-relaxed mb-10">
          Don’t worry you are not the only business owner who has been facing such
          a situation. There exist some technical defects that prevent you from
          getting the advantages of receiving a large traffic. Our expert CRO can
          find the right remedy that can get you rid of such a situation!
        </p>

        <button className="border border-white px-8 py-3 rounded text-sm font-semibold hover:bg-white hover:text-[#003a8f] transition">
          GET ASSISTANCE
        </button>

      </div>
    </div>

  </div>
</section>


<section className="bg-gradient-to-r from-[#021b33] to-[#003a8f]">
  <div className="grid lg:grid-cols-2 items-stretch">

    {/* LEFT CONTENT */}
    <div className="flex items-center px-10 lg:px-20 py-20 text-white">
      <div className="max-w-[560px]">

        <h3 className="text-3xl font-semibold mb-6 leading-snug">
          A lot of Leads are getting garnered via Social media handles but none
          of them are Valid / or of No utility?
        </h3>

        <p className="text-white/90 leading-relaxed mb-10">
          It is a matter of concern as converting such leads is easier. With the
          expert CRO services at Digital Piloto, you can see the difference in how
          these leads get converted into potential customers.
        </p>

        <button className="border border-white px-8 py-3 rounded text-sm font-semibold hover:bg-white hover:text-[#003a8f] transition">
          GET ASSISTANCE
        </button>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src={cro}
        alt="Invalid Leads Issue"
        className="w-full h-full object-cover"
      />
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




      {/* Stats */}
     

      {/* Contact Form */}
      
    </Layout>
  );
};

export default CRO;
