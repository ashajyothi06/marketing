import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Users, CheckCircle, MessageSquare, UserCheck, Code, Palette, ShoppingCart, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Import images
import heroBg from '@/assets/design-hero-bg.jpg';
import portfolioGrid from '@/assets/design-portfolio-grid.jpg';
import landingBg from '@/assets/design-landing-bg.jpg';
import sanjayPortrait from '@/assets/design-sanjay-portrait.jpg';

const DesignDevelopment = () => {
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image with Blue Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Design & Development Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center py-20">
          <p className="text-primary-foreground/70 text-sm tracking-[0.3em] uppercase mb-4">
            WELCOME TO
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 font-serif">
            Digital Piloto
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-accent">
            Web Design & Development
          </h2>
        </div>

        {/* Curved Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-background relative">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Our Portfolio
          </h2>

          <div className="relative">
            {/* Navigation Arrows */}
            <div className="absolute -top-8 right-0 flex gap-2 z-10">
              <button className="w-10 h-10 bg-background shadow-md rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-background shadow-md rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Portfolio Grid Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={portfolioGrid} 
                alt="Our Portfolio" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Vertical PORTFOLIO Text */}
            <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2">
              <span className="text-8xl font-bold text-muted/20 tracking-wider" style={{ writingMode: 'vertical-rl' }}>
                PORTFOLIO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key USP Strip */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-primary rounded-full py-8 px-8 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {uspItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-3">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground text-sm font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms + Design Modes Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Platforms */}
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-primary mb-8">
              Platform DP Loves To Work:
            </h3>
            <div className="flex justify-center items-center gap-12 md:gap-24">
              {platforms.map((platform, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-3 shadow-md">
                    <platform.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dotted Divider */}
          <div className="flex justify-center my-12">
            <div className="border-l-2 border-dashed border-border h-16" />
          </div>

          {/* Design Modes */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-primary mb-8">
              Design Modes DP Recommends
            </h3>
            <div className="flex justify-center items-center gap-12 md:gap-24">
              {designModes.map((mode, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-3 shadow-md">
                    <mode.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary">{mode.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Landing Page Brief Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="relative">
            {/* Background Image - Right Side */}
            <div className="ml-auto w-full lg:w-[70%] aspect-[16/9] rounded-2xl overflow-hidden">
              <img 
                src={landingBg} 
                alt="Landing Page Portfolio" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card - Left Side */}
            <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 lg:w-[45%]">
              <div className="bg-background rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-4">Landing Page Brief and Ideation</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We specialize in creating high-converting landing pages that capture your audience's attention and drive measurable results. Our strategic approach combines compelling design with data-driven optimization to maximize your ROI.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                KNOW SANJAY'S CAPABILITIES
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
                className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Work With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right - Portrait */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={sanjayPortrait} 
                  alt="Sanjay - Project Lead" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Blue Split Band - FAQs + Career */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - FAQs */}
            <div className="text-primary-foreground pr-0 md:pr-8 md:border-r md:border-primary-foreground/20">
              <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQs)</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                We enjoy educating people on the intricacies of governed audit execution. Every day, we receive questions from sponsors and audit firms.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold underline transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column - Career */}
            <div className="text-primary-foreground pl-0 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">Wanna Rewarding Career?</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                Join our team of experts if you value disciplined audit judgment and structured execution. We appreciate a proactive mindset and strong ethical independence.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold underline transition-colors"
              >
                Join Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA Box */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl p-12 text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Looking for The Assistance Of Industry-Best Professionals?
            </h2>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold underline text-lg transition-colors"
            >
              Reach us Online or Schedule An Appointment To A Live Call!
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section (Newsletter + Links) */}
      <section className="bg-background py-12 border-t border-border">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Logo + Newsletter */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-xl font-bold text-primary">
                  digital<span className="text-accent">piloto</span>
                </span>
              </Link>
              <p className="text-primary font-semibold mb-2">Subscribe To Our Newsletter!</p>
              <p className="text-muted-foreground text-sm mb-4">Stay updated with the latest web design trends and insights.</p>
              
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2.5 rounded-l-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent flex-1"
                />
                <button className="px-4 py-2.5 bg-accent text-accent-foreground rounded-r-lg hover:bg-accent/90 transition-colors flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link to="/disclaimer" className="text-muted-foreground hover:text-accent transition-colors text-sm">Disclaimer</Link>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors text-sm">Contact Us</Link>
                <Link to="/sitemap" className="text-muted-foreground hover:text-accent transition-colors text-sm">Sitemap</Link>
                <Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors text-sm">Knowledge Hub</Link>
                <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors text-sm">Privacy Policy</Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={social}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors group"
                  >
                    <span className="text-muted-foreground group-hover:text-accent-foreground text-xs font-bold">
                      {social.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider + Copyright */}
          <div className="border-t border-border mt-8 pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Digital Piloto. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DesignDevelopment;
