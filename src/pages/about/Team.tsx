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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${worldMapBg})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container-custom relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Partnering with Businesses<br />across the <span className="text-accent">Globe</span>
          </h1>
        </div>
      </section>

      {/* Directors Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Orange wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-accent/10 rounded-t-[100%] transform translate-y-16" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              The Masterminds behind the Successful<br />Digital Marketing Outcomes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our leadership team combines decades of experience in digital marketing, technology, and business strategy to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {directors.map((director, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden shadow-card transition-transform duration-300 hover:-translate-y-2 ${
                  director.isHighlighted ? 'bg-accent/10 border-2 border-accent/30' : 'bg-card'
                }`}
              >
                <div className="relative">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-80 object-cover object-top"
                  />
                  {director.isHighlighted && (
                    <div className="absolute inset-0 bg-accent/20" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">{director.name}</h3>
                  <p className="text-accent font-medium mb-4">{director.role}</p>
                  <p className="text-muted-foreground text-sm">{director.bio}</p>
                </div>
              </div>
            ))}
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

      {/* FAQ + Career Strip */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-0">
            {/* FAQ Column */}
            <div className="md:border-r border-primary-foreground/20 md:pr-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Frequently Asked Questions (FAQs)
              </h3>
              <p className="text-primary-foreground/70 mb-6">
                We enjoy educating people on the intricacies of governed audit execution. Every day, we receive questions from sponsors and audit firms.
              </p>
              <Link 
                to="/faq" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Career Column */}
            <div className="md:pl-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Wanna Rewarding Career?
              </h3>
              <p className="text-primary-foreground/70 mb-6">
                Join our team of experts if you value disciplined audit judgment and structured execution. We appreciate a proactive mindset and strong ethical independence.
              </p>
              <Link 
                to="/careers" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
              >
                Join Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Looking for The Assistance Of<br />Industry-Best Professionals?
            </h2>
            <Link 
              to="/contact" 
              className="text-accent hover:text-accent/80 underline underline-offset-4 font-medium text-lg transition-colors"
            >
              Reach us Online or Schedule An Appointment To A Live Call!
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Footer */}
      <footer className="bg-background border-t border-border shadow-sm">
        <div className="container-custom py-12">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-8 border-b border-border">
            {/* Logo & Newsletter */}
            <div className="flex-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Send className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-2xl font-bold text-primary">
                  digital<span className="text-accent">piloto</span>
                </span>
              </Link>

              <div className="mb-4">
                <p className="font-semibold text-primary mb-2">Subscribe To Our Newsletter!</p>
                <p className="text-sm text-muted-foreground mb-1">Stay updated with audit governance perspectives.</p>
                <p className="text-sm text-muted-foreground mb-4">Subscribe now for Free!</p>
              </div>

              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-l-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
                />
                <button className="px-6 py-2.5 bg-accent text-accent-foreground rounded-r-lg hover:bg-accent/90 transition-colors font-medium">
                  Subscribe
                </button>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                CIN: U74999WB2023PTC123456
              </p>
            </div>

            {/* Links & Social */}
            <div className="flex-1 lg:text-right">
              <div className="flex flex-wrap gap-4 lg:justify-end mb-6">
                {footerLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3 lg:justify-end">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Digital Piloto. All rights reserved. | 
              <span className="ml-1">Your trusted partner in digital marketing excellence.</span>
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Team;
