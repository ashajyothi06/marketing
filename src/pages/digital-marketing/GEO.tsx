import { Link } from 'react-router-dom';
import { ArrowRight, Globe, MapPin, Users, Award, Star, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const GEO = () => {
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
      <section className="navy-gradient min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] bg-cover" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Geographic Search Optimization
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Reach your target audience wherever they are with our specialized geographic optimization services.
              </p>
              <Link to="/contact" className="btn-orange inline-flex items-center gap-2">
                Expand Your Reach
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border-4 border-accent/30 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-4 border-accent/50 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-accent flex items-center justify-center">
                    <Globe className="w-16 h-16 text-accent-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <p className="text-center text-muted-foreground mb-6">Trusted by leading brands worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-24 h-12 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs">
                Partner {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our GEO Services"
            subtitle="Comprehensive geographic optimization solutions"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="feature-card text-center">
                <div className="icon-circle mx-auto">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Our GEO Experts" subtitle="Meet the team behind your global success" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-card">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-bold text-primary">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding navy-gradient">
        <div className="container-custom">
          <SectionTitle title="Why Choose Digital Piloto for GEO?" subtitle="Industry-leading expertise that delivers results" light />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-primary-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection />
    </Layout>
  );
};

export default GEO;
