import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Import images
import aboutFamily from '@/assets/about-family.jpg';
import aboutOneness from '@/assets/about-oneness.jpg';
import aboutSatisfaction from '@/assets/about-satisfaction.jpg';
import aboutRevenue from '@/assets/about-revenue.jpg';
import aboutNetwork from '@/assets/about-network.jpg';
import aboutImprovement from '@/assets/about-improvement.jpg';
import missionBg from '@/assets/about-mission-bg.jpg';
import visionBg from '@/assets/about-vision-bg.jpg';

const CompanyInfo = () => {
  const aboutUsItems = [
    { image: aboutFamily, text: 'Feeling of one-family under the same roof' },
    { image: aboutOneness, text: 'Employees feel oneness in the company' },
    { image: aboutSatisfaction, text: 'Client satisfaction is the key' },
    { image: aboutRevenue, text: 'Assured revenue growth for everyone' },
    { image: aboutNetwork, text: 'The GxPify network grows stronger' },
    { image: aboutImprovement, text: 'Continuous improvement culture' },
  ];

  const numberedPoints = [
    'Passion drives our work',
    'Pace ensures timely delivery',
    'Precision guarantees quality',
    'Transparency builds trust',
    'Innovation leads growth',
    'Excellence defines us',
  ];

  return (
    <Layout>
      {/* About Us Section - 6 Image Grid */}
      {/* About Us Section – EXACT IMAGE MATCH */}

  <section className="pt-24 pb-20 bg-background">

  <div className="container-custom">

    <h2 className="text-center text-3xl font-medium mb-10">
      About Us
    </h2>

    {/* Purple Wrapper */}
    <div className="bg-[#d8d2ff] rounded-2xl p-6 shadow-xl">

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {aboutUsItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden">

            {/* IMAGE */}
            <div className="h-48">
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-full object-cover"
              />
            </div>

            {/* YELLOW STRIP */}
            <div className="bg-[#ffe0b2] px-4 py-3 text-sm font-medium flex items-center gap-2">
              <span className="w-6 h-6 rounded-full border border-red-500 text-red-500 flex items-center justify-center text-xs font-semibold">
                {index + 1}
              </span>
              <span>{item.text}</span>
            </div>

          </div>
        ))}

      </div>
    </div>

  </div>
</section>


      {/* Our Belief + Mission Section */}
      
        <section className="pt-0 pb-20 bg-background">

  <div className="container-custom">
    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
      Our Belief
    </h2>

    <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
      We believe that every business deserves to be seen and heard in the digital world.
      Our mission is to bridge the gap between your brand and your audience through
      innovative digital strategies that drive real results.
    </p>

    {/* Mission Banner with Overlay */}
    <div className="relative">

      {/* Background Image - sharp edges */}
      <div className="ml-auto w-full lg:w-[70%] aspect-[16/9] overflow-hidden">
        <img
          src={missionBg}
          alt="Our Mission Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Overlay Card - sharp edges */}
      <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 lg:w-[45%]">
        <div className="bg-background p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Our Mission
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            We consider Passion, Pace, and Precision as our pillars to serve our clients.
            Our mission is to deliver data-driven digital marketing strategies that
            maximize ROI and help businesses achieve sustainable growth in the
            competitive online landscape.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Our Vision Section */}
     <section className="section-padding bg-background">
  <div className="container-custom">

    {/* Vision Banner with Overlay */}
    <div className="relative">

      {/* Background Image - sharp edges */}
      <div className="mr-auto w-full lg:w-[70%] aspect-[16/9] overflow-hidden">
        <img
          src={visionBg}
          alt="Our Vision Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Overlay Card - sharp edges */}
      <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 lg:w-[45%]">
        <div className="bg-background p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Our Vision
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            At Digital Piloto, our vision is to be the most trusted digital marketing
            partner for businesses worldwide — through innovative strategies,
            transparent practices, and results-driven campaigns that transform
            brands and accelerate growth.
          </p>
        </div>
      </div>

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

export default CompanyInfo;
