import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';
import CareerBanner from '@/components/shared/CareerBanner';

// Import images
import heroBanner from '@/assets/home-hero-banner.jpg';
import aboutMeeting from '@/assets/home-about-meeting.jpg';
import verticalsHealthcare from '@/assets/home-verticals-healthcare.jpg';
import globalMap from '@/assets/home-global-map.jpg';

const Home = () => {
  const [activeVertical, setActiveVertical] = useState('Healthcare');

  const verticals = [
    { name: 'Healthcare', description: 'The global healthcare IT market is projected to reach USD 821.1 billion by 2026 from USD 326.1 billion in 2021, at a CAGR of 20.3% during the forecast period. Join hands with us to get your share from this huge market turnover.' },
    { name: 'Manufacturing', description: 'The manufacturing sector is rapidly adopting digital transformation. Partner with us to leverage Industry 4.0 technologies and boost your market presence.' },
    { name: 'Education', description: 'EdTech is revolutionizing learning worldwide. Our digital marketing strategies help educational institutions reach students across the globe.' },
    { name: 'Real Estate', description: 'Real estate marketing requires targeted strategies. We help property developers and agents maximize their online visibility and lead generation.' },
    { name: 'Retail', description: 'E-commerce and retail marketing demand innovative approaches. Our strategies drive traffic and conversions for retail businesses.' },
    { name: 'Hospitality', description: 'The hospitality industry thrives on visibility. We help hotels, restaurants, and travel companies attract more guests online.' },
  ];

  const credentials = [
    { name: 'Ministry of MSME, Govt. of India', short: 'MSME' },
    { name: 'DIRECTORATE GENERAL OF FOREIGN TRADE', short: 'DGFT' },
    { name: 'Certificate of Incorporation', short: 'COI' },
    { name: 'Registered Trademark', short: 'TM' },
    { name: 'Google Partner', short: 'Google' },
  ];

  const countries = [
    { name: 'USA', flag: '🇺🇸' },
    { name: 'CANADA', flag: '🇨🇦' },
    { name: 'AUSTRALIA', flag: '🇦🇺' },
    { name: 'NEW ZEALAND', flag: '🇳🇿' },
    { name: 'INDIA', flag: '🇮🇳' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'BRAZIL', flag: '🇧🇷' },
    { name: 'FRANCE', flag: '🇫🇷' },
    { name: 'MEXICO', flag: '🇲🇽' },
    { name: 'QATAR', flag: '🇶🇦' },
    { name: 'SOUTH AFRICA', flag: '🇿🇦' },
    { name: 'SPAIN', flag: '🇪🇸' },
    { name: 'NEPAL', flag: '🇳🇵' },
    { name: 'PHILIPPINES', flag: '🇵🇭' },
  ];

  const clientLogos = [
    'Adept Electrical',
    'Custacup',
    'CashUp',
    'Signature Styles',
    'MisterPaint',
    'Petals Health',
    'Swarnim',
  ];

  const resourceBoxItems = [
    { title: 'Trade Shows Are Back: Integrate Digital Marketing for Maximum ROI', author: 'Sanjay Dhar', date: '12 Jan 2026' },
    { title: 'Top 7 Social Media Strategies That Actually Work for Schools', author: 'Sanjay Dhar', date: '02 Jan 2026' },
    { title: 'The Hidden Power of Healthcare Branding: More than Just a Logo', author: 'Sanjay Dhar', date: '25 Dec 2025' },
    { title: 'Personalised Marketing in EdTech: Meeting Learners Where They Are', author: 'Amlan Maiti', date: '12 Dec 2025' },
    { title: 'LinkedIn for Manufacturers: Turning Connections Into Contracts', author: 'Sanjay Dhar', date: '02 Dec 2025' },
    { title: 'Designing for the Algorithm: How to Make Your Interior Design Work Go Viral', author: 'Sanjay Dhar', date: '25 Nov 2025' },
  ];

  const faqs = [
    { question: 'What makes Digital Piloto different from other SEO agencies?', answer: 'We combine data-driven strategies with creative solutions, offering complete transparency and measurable results. Our team has helped hundreds of businesses achieve top rankings.' },
    { question: 'How long does it take to see SEO results?', answer: 'SEO is a long-term investment. While some improvements can be seen within 3-6 months, significant results typically appear after 6-12 months of consistent effort.' },
    { question: 'Do you offer customized SEO packages?', answer: 'Yes! We understand every business is unique. We create tailored SEO strategies based on your specific goals, industry, and budget.' },
    { question: 'What industries do you serve?', answer: 'We work with businesses across various industries including e-commerce, healthcare, technology, finance, education, and more.' },
  ];

  return (
    <Layout>
      {/* ✅ HERO SECTION — Updated to match screenshot */}
      <section className="relative min-h-[82vh] overflow-hidden bg-[#062a48]">
        {/* Background image (the banner that contains cube + diagonal pattern) */}
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Digital Piloto Hero"
            className="w-full h-full object-cover object-left"
          />
          {/* Dark overlay (keep image visible like screenshot) */}
          <div className="absolute inset-0 bg-[#062a48]/40" />
        </div>

        {/* Top-center paper plane icon (like screenshot) */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white text-lg">✈️</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="container-custom h-full">
            <div className="grid lg:grid-cols-2 h-full items-center gap-12 py-20">
              {/* Left side kept empty because banner image already has cube */}
              <div className="hidden lg:block" />

              {/* Right side text (aligned like screenshot) */}
              <div className="text-white max-w-xl ml-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Build Your Brand’s Voice
                  <br />
                  With Robust Digital Strategies!
                </h1>

                <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed">
                  Our team of innovative, flexible, &amp; dynamic digital marketing experts leaves no stone unturned to bring your business the desired results. Trust us to make your business grow!
                </p>

                <Link
                  to="/about/company-info"
                  className="mt-8 inline-flex items-center gap-2 text-white font-medium hover:text-orange-400 transition-colors"
                >
                  Explore Opportunities
                  <ArrowRight className="w-5 h-5 text-orange-400" />
                </Link>

                {/* Slider lines (bottom-right like screenshot) */}
                <div className="absolute bottom-12 right-10 hidden md:flex items-center gap-2">
                  <span className="w-8 h-[3px] rounded bg-white/40" />
                  <span className="w-8 h-[3px] rounded bg-white/40" />
                  <span className="w-8 h-[3px] rounded bg-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4 block">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Bespoke Digital Marketing Services And Consultancy To Get Your Business Covered!
              </h2>
              <Link
                to="/about/company-info"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                KNOW MORE
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                <img
                  src={aboutMeeting}
                  alt="Business Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Credentials Banner */}
      <section className="bg-accent py-8">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="bg-accent-foreground text-accent px-8 py-4 rounded-r-full lg:rounded-r-full lg:rounded-l-none rounded-full lg:-ml-8">
              <h3 className="text-2xl font-bold whitespace-nowrap">Our Credentials</h3>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 lg:gap-12 flex-1">
              {credentials.map((cred, index) => (
                <div key={index} className="flex items-center gap-3 text-accent-foreground">
                  <div className="w-12 h-12 bg-accent-foreground rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">{cred.short}</span>
                  </div>
                  <span className="text-sm font-medium max-w-[120px] leading-tight">{cred.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verticals Section */}
      <section className="section-padding bg-background">
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
                      ? 'border-accent bg-accent/5 text-primary font-semibold'
                      : 'border-transparent text-muted-foreground hover:text-primary hover:border-accent/50'
                  }`}
                >
                  {activeVertical === vertical.name && '■ '}{vertical.name}
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
                {verticals.find(v => v.name === activeVertical)?.description}
              </p>
              <Link
                to="/about/company-info"
                className="inline-flex items-center gap-2 text-primary font-semibold underline hover:text-accent transition-colors"
              >
                Explore Opportunities
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Global Community Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={globalMap}
            alt="Global Coverage"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block" />

            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-2">SERVING THE GLOBAL COMMUNITY!</h3>
              <p className="text-accent text-sm mb-6 leading-relaxed">
                Digital Piloto has earned confidence via prowess, R&amp;D, and technical know-how that can benefit top businesses covering any geographic location! Our cross-industry knowledge is our strength that we enforce while we work for our global clients!
              </p>
              <div className="grid grid-cols-3 gap-3">
                {countries.map((country) => (
                  <div key={country.name} className="flex items-center gap-2 text-sm">
                    <span>{country.flag}</span>
                    <span className="text-muted-foreground">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Our Clients */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Trusted by our Clients
          </h2>

          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background shadow-md rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-8 overflow-hidden px-12">
              {clientLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-32 h-16 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground text-center px-2">{logo}</span>
                </div>
              ))}
            </div>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background shadow-md rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <span className="w-2 h-2 bg-muted rounded-full" />
            <span className="w-2 h-2 bg-accent rounded-full" />
          </div>
        </div>
      </section>

      {/* Resource Box */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Resource Box
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our box is no less than Pandora&apos;s Box as it contains valuable information that can serve every business before it goes for promoting their business online.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceBoxItems.map((item, index) => (
              <div key={index} className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-primary to-primary/80">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-primary-foreground text-center">
                      <div className="text-xs font-semibold text-accent mb-2">digital<span className="text-primary-foreground">piloto</span>*</div>
                      <h4 className="font-bold text-sm leading-snug">{item.title}</h4>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-background rounded-lg p-2 shadow">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-accent-foreground text-xs font-bold">{item.author.charAt(0)}</span>
                      </div>
                      <div className="text-xs">
                        <p className="text-muted-foreground">Presented by</p>
                        <p className="font-semibold text-primary">{item.author}</p>
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

      <FAQSection faqs={faqs} />
      <CareerBanner />
      <CTASection />
    </Layout>
  );
};

export default Home;
