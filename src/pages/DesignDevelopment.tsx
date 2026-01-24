import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Users, CheckCircle, MessageSquare, UserCheck, Code, Palette, ShoppingCart, Send, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Import images
import heroBg from '@/assets/gxpify-hero-bg.jpg';
import portfolioGrid from '@/assets/gxpify-portfolio-grid.jpg';
import landingCollage from '@/assets/gxpify-landing-collage.jpg';
import sanjayPortrait from '@/assets/gxpify-sanjay-portrait.jpg';

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

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <Layout>
      {/* Hero Section with Blue Overlay and Wave */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Blue Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="GxPify Web Design & Development" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/80 to-primary/90" />
        </div>

        {/* Content - Center Aligned */}
        <div className="container-custom relative z-10 text-center py-20">
          <p className="text-primary-foreground/60 text-sm tracking-[0.4em] uppercase mb-6">
            W E L C O M E &nbsp; T O
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 font-serif">
            GxPify
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent">
            Web Design & Development
          </h2>
        </div>

        {/* Curved Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 60C240 100 480 120 720 100C960 80 1200 40 1440 60V120H0V60Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Our Portfolio
          </h2>

          <div className="relative">
            {/* Navigation Arrows - Top Right */}
            <div className="absolute -top-12 right-0 flex gap-2 z-10">
              <button className="w-10 h-10 bg-background border border-border shadow-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-background border border-border shadow-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
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

            {/* Vertical PORTFOLIO Text - Right Side */}
            <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 pointer-events-none">
              <span 
                className="text-[120px] font-bold text-muted/10 tracking-wider uppercase"
                style={{ writingMode: 'vertical-rl' }}
              >
                PORTFOLIO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key USP Strip - Dark Blue Rounded Pill */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-primary rounded-[50px] py-10 px-8 md:px-16 shadow-xl">
            <p className="text-primary-foreground/70 text-center text-sm mb-8 tracking-wide">
              Key USPs DP Promises:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {uspItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground text-sm font-medium leading-tight">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms + Design Modes Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Platforms Row */}
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-primary mb-10">
              Platform DP Loves To Work:
            </h3>
            <div className="flex justify-center items-center gap-16 md:gap-28">
              {platforms.map((platform, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-secondary border border-border rounded-full flex items-center justify-center mb-4 shadow-sm hover:shadow-md transition-shadow">
                    <platform.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary tracking-wide">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dotted Vertical Divider */}
          <div className="flex justify-center my-12">
            <div className="border-l-2 border-dashed border-muted h-20" />
          </div>

          {/* Design Modes Row */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-primary mb-10">
              Design Modes DP Recommends
            </h3>
            <div className="flex justify-center items-center gap-16 md:gap-28">
              {designModes.map((mode, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-secondary border border-border rounded-full flex items-center justify-center mb-4 shadow-sm hover:shadow-md transition-shadow">
                    <mode.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary tracking-wide">{mode.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Landing Page Brief Section - Image Right, Card Left */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="relative">
            {/* Background Image - Right Side 70% */}
            <div className="ml-auto w-full lg:w-[70%] aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={landingCollage} 
                alt="Landing Page Portfolio" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating White Card - Left Side */}
            <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 lg:w-[45%]">
              <div className="bg-background rounded-2xl p-8 md:p-10 shadow-xl border border-border">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-5">Landing Page Brief and Ideation</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We specialize in creating high-converting landing pages that capture your audience's attention and drive measurable results. Our strategic approach combines compelling design with data-driven optimization to maximize your ROI and business growth.
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

      {/* Capabilities Section - Content Left, Portrait Right */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 uppercase tracking-wide">
                Know Sanjay's Capabilities
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

            {/* Right - Portrait Frame */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-background">
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
          <div className="grid md:grid-cols-2">
            {/* Left Column - FAQs */}
            <div className="text-primary-foreground pr-0 md:pr-12 pb-8 md:pb-0 md:border-r md:border-primary-foreground/20">
              <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQs)</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                We enjoy educating people on the intricacies of web design and development. Every day, we receive questions from clients about our process and capabilities.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold underline underline-offset-4 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column - Career */}
            <div className="text-primary-foreground pl-0 md:pl-12 pt-8 md:pt-0 border-t md:border-t-0 border-primary-foreground/20">
              <h3 className="text-2xl font-bold mb-4">Wanna Rewarding Career?</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                Join our team of creative experts if you value innovative design and structured development. We appreciate a proactive mindset and strong technical skills.
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
      <section className="bg-background py-16 border-t border-border">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Logo + Newsletter */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-md">
                  <Send className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-2xl font-bold text-primary">
                  digital<span className="text-accent">piloto</span>
                </span>
              </Link>
              
              <p className="text-primary font-semibold text-lg mb-2">Subscribe To Our Newsletter!</p>
              <p className="text-muted-foreground text-sm mb-6">Stay updated with the latest web design trends, development insights, and exclusive offers.</p>
              
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-3 rounded-l-xl bg-secondary border border-r-0 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent flex-1"
                />
                <button className="px-6 py-3 bg-accent text-accent-foreground rounded-r-xl hover:bg-accent/90 transition-colors flex items-center gap-2 font-semibold shadow-md">
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            </div>

            {/* Right Side - Links + Social */}
            <div className="lg:text-right">
              {/* Footer Links Row */}
              <div className="flex flex-wrap gap-6 lg:justify-end mb-8">
                <Link to="/disclaimer" className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium">Disclaimer</Link>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium">Contact Us</Link>
                <Link to="/sitemap" className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium">Sitemap</Link>
                <Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium">Knowledge Hub</Link>
                <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium">Privacy Policy</Link>
              </div>

              {/* Social Icons Row */}
              <div className="flex items-center gap-3 lg:justify-end">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider + Copyright */}
          <div className="border-t border-border mt-12 pt-8 text-center">
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
