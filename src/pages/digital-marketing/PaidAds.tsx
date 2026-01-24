import { Link } from 'react-router-dom';
import { ArrowRight, Target, DollarSign, BarChart3, Facebook, Instagram, Linkedin, Chrome, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import ContactForm from '@/components/shared/ContactForm';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

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
      <section className="hero-gradient min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Paid Advertising Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Drive immediate results with strategic paid advertising campaigns that deliver measurable ROI.
              </p>
              <Link to="/contact" className="btn-orange inline-flex items-center gap-2">
                Launch Your Campaign
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <div className="bg-card rounded-3xl p-8 shadow-card">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">+150%</div>
                    <div className="text-sm text-muted-foreground">ROAS Increase</div>
                  </div>
                  <div className="bg-secondary rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">-40%</div>
                    <div className="text-sm text-muted-foreground">Cost Per Lead</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card text-center">
                <div className="icon-circle mx-auto">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle
            title="Social Media Advertising Platforms"
            subtitle="Expert campaign management across all major ad platforms"
          />
          <div className="space-y-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <platform.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{platform.name}</h3>
                  <p className="text-muted-foreground">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="section-padding navy-gradient">
        <div className="container-custom">
          <SectionTitle title="Paid Ads Fact Checks" subtitle="Why paid advertising delivers results" light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{fact.stat}</div>
                <div className="text-primary-foreground/80">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Start Your Paid Campaign
              </h2>
              <p className="text-muted-foreground mb-8">
                Get a free audit of your current campaigns or start fresh with our expert team.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection />
    </Layout>
  );
};

export default PaidAds;
