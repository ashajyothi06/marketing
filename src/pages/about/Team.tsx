import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Send, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Import images
import worldMapBg from '@/assets/team-world-map.jpg';
import director1 from '@/assets/team-director-1.jpg';
import director2 from '@/assets/team-director-2.jpg';
import advisor1 from '@/assets/team-advisor-1.jpg';
import advisor2 from '@/assets/team-advisor-2.jpg';
import partner1 from '@/assets/team-partner-1.jpg';
import partner2 from '@/assets/team-partner-2.jpg';
import partner3 from '@/assets/team-partner-3.jpg';
import partner4 from '@/assets/team-partner-4.jpg';
import partner5 from '@/assets/team-partner-5.jpg';
import partner6 from '@/assets/team-partner-6.jpg';
import globeImage from '@/assets/globe.png';
import rajesh from '@/assets/rajesh.png';

const Team = () => {
  const directors = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      bio: 'With over 15 years in digital marketing, Rajesh leads our team with vision and innovation. His expertise in strategic planning and client relations has helped Digital Piloto become a leader in the industry.',
      image: director1,
      isHighlighted: false,
    },
    {
      name: 'Priya Sharma',
      role: 'Co-Founder & COO',
      bio: 'Priya brings operational excellence and client-focused strategies to Digital Piloto. Her background in business development and team leadership ensures seamless project delivery and client satisfaction.',
      image: director2,
      isHighlighted: true,
    },
  ];

  const advisoryBoard = [
    { name: 'Suresh Menon', role: 'Strategic Advisor', country: 'India', flag: '🇮🇳', image: advisor1 },
    { name: 'Anita Reddy', role: 'Marketing Advisor', country: 'India', flag: '🇮🇳', image: advisor2 },
  ];

  const partners = [
    { name: 'Arjun Patel', country: 'India', flag: '🇮🇳', image: partner1 },
    { name: 'Sneha Gupta', country: 'India', flag: '🇮🇳', image: partner2 },
    { name: 'Michael Johnson', country: 'USA', flag: '🇺🇸', image: partner3 },
    { name: 'Emma Williams', country: 'UK', flag: '🇬🇧', image: partner4 },
    { name: 'James Wilson', country: 'Australia', flag: '🇦🇺', image: partner5 },
    { name: 'Sarah Chen', country: 'Canada', flag: '🇨🇦', image: partner6 },
  ];

  const footerLinks = [
    { label: 'Disclaimer', path: '/disclaimer' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Sitemap', path: '/sitemap' },
    { label: 'Knowledge Hub', path: '/blog' },
    { label: 'Privacy Policy', path: '/privacy' },
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
      {/* Hero Section with World Map */}
      <section className="relative min-h-[60vh] overflow-hidden">

  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${worldMapBg})` }}
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-primary/80" />

  {/* CENTERED CONTENT */}
  <div className="relative z-10 w-full min-h-[60vh] flex items-center justify-center text-center">
    <div className="container-custom">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
        Partnering with Businesses <br />
        across the <span className="text-accent">Globe</span>
      </h1>
    </div>
  </div>

</section>


      {/* Directors Section */}
      <section className="relative bg-white py-24 overflow-hidden">

  {/* HEADING */}
  <div className="max-w-5xl mx-auto text-center mb-20 px-6">
    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
      The Masterminds behind the Successful Digital Marketing Outcomes
    </h2>

    <p className="text-slate-600 text-sm leading-relaxed max-w-4xl mx-auto">
      As a top Digital Marketing Agency, we pledge to work with perseverance,
      honesty and wit to strengthen client relationships. Our expert team
      delivers innovative strategies across Digital Marketing, SEO, Social Media,
      Website Design & Development.
    </p>
  </div>

  {/* YELLOW WAVE */}
  <div className="absolute inset-x-0 top-[55%] -z-10">
    <svg viewBox="0 0 1440 320" className="w-full h-48" preserveAspectRatio="none">
      <path
        fill="#FDBA4D"
        d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,149.3C1120,128,1280,128,1360,128L1440,128L1440,320L0,320Z"
      />
    </svg>
  </div>

  {/* TEAM CARDS */}
  <div className="max-w-4xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-14">

      {/* CARD 1 */}
      <div className="text-center">
        <div className="relative group rounded-2xl overflow-hidden shadow-xl">
          <img
            src={rajesh}
            alt="Amlan Maiti"
            className="w-full h-[420px] object-cover"
          />

          {/* HOVER CONTENT */}
          <div className="absolute inset-0 bg-[#0b2f4f]/90 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center px-6">
            <p className="text-white text-sm leading-relaxed">
              Amlan Maiti is a strategic digital leader with expertise in SEO,
              performance marketing, and brand growth, driving innovation
              with a results-focused approach.
            </p>
          </div>
        </div>

        <h4 className="mt-6 text-blue-600 font-semibold">
          Amlan Maiti
        </h4>
        <p className="text-orange-500 text-xs font-semibold uppercase">
          Founder & Director
        </p>
      </div>

      {/* CARD 2 */}
      <div className="text-center">
        <div className="relative group rounded-2xl overflow-hidden shadow-xl">
          <img
            src={rajesh}
            alt="Sanjay Dhar"
            className="w-full h-[420px] object-cover"
          />

          {/* HOVER CONTENT */}
          <div className="absolute inset-0 bg-[#0b2f4f]/90 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center px-6">
            <p className="text-white text-sm leading-relaxed">
              Sanjay Dhar leads with strong business strategy, client success,
              and operational excellence to ensure scalable and sustainable growth.
            </p>
          </div>
        </div>

        <h4 className="mt-6 text-blue-600 font-semibold">
          Sanjay Dhar
        </h4>
        <p className="text-orange-500 text-xs font-semibold uppercase">
          Founder & Director
        </p>
      </div>

    </div>
  </div>

</section>


      {/* Advisory Board Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block">
              Advisory <span className="relative">
                Board
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent rounded-full" />
              </span> (Non-Profit)
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="text-center group">
                <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden shadow-card border-4 border-background">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold text-primary text-lg">{advisor.name}</h4>
                <p className="text-accent text-sm font-medium">{advisor.role}</p>
                <p className="text-muted-foreground text-sm flex items-center justify-center gap-1 mt-1">
                  <span>{advisor.flag}</span> {advisor.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block">
              Our <span className="relative">
                Partners
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent rounded-full" />
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-card border-4 border-secondary">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold text-primary">{partner.name}</h4>
                <p className="text-muted-foreground text-sm flex items-center justify-center gap-1 mt-1">
                  <span>{partner.flag}</span> {partner.country}
                </p>
              </div>
            ))}
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

export default Team;
