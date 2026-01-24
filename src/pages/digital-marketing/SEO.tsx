import { Link } from 'react-router-dom';
import { ArrowRight, Search, BarChart3, TrendingUp, FileText, Target, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import FeatureCard from '@/components/shared/FeatureCard';
import ContactForm from '@/components/shared/ContactForm';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const SEO = () => {
  const features = [
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'Deep analysis to identify the most valuable keywords for your business growth.',
    },
    {
      icon: BarChart3,
      title: 'Technical SEO',
      description: 'Optimize your website structure and performance for search engine crawlers.',
    },
    {
      icon: TrendingUp,
      title: 'Link Building',
      description: 'Build high-quality backlinks that boost your domain authority.',
    },
  ];

  const processSteps = [
    { icon: Search, title: 'Website Audit', description: 'Comprehensive analysis of your current SEO status' },
    { icon: Target, title: 'Competitor Analysis', description: 'Understand what works in your industry' },
    { icon: FileText, title: 'Content Strategy', description: 'Create content that ranks and converts' },
    { icon: BarChart3, title: 'On-Page Optimization', description: 'Optimize every element of your pages' },
    { icon: TrendingUp, title: 'Off-Page SEO', description: 'Build authority through quality backlinks' },
    { icon: Zap, title: 'Monitoring & Reporting', description: 'Track progress and refine strategies' },
  ];

  const faqs = [
    { question: 'How long does SEO take to show results?', answer: 'SEO is a long-term strategy. You can expect to see initial improvements in 3-6 months, with significant results typically appearing after 6-12 months.' },
    { question: 'Do you guarantee first page rankings?', answer: 'While we cannot guarantee specific rankings (no ethical SEO company can), our track record shows consistent success in improving rankings and organic traffic.' },
    { question: 'What SEO tools do you use?', answer: 'We use industry-leading tools including SEMrush, Ahrefs, Moz, Google Search Console, and proprietary analysis tools.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="navy-gradient min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Search Engine Optimization
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Dominate search results and drive qualified organic traffic to your website with our proven SEO strategies.
              </p>
              <Link to="/contact" className="btn-orange inline-flex items-center gap-2">
                Get Free SEO Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">300%</div>
                    <div className="text-sm text-muted-foreground">Traffic Increase</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">#1</div>
                    <div className="text-sm text-muted-foreground">Page Rankings</div>
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
          <SectionTitle
            title="Our SEO Services"
            subtitle="Comprehensive solutions to improve your search visibility"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="navy-gradient section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Our SEO Process"
            subtitle="A systematic approach to achieving top rankings"
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-accent font-bold text-2xl">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70">{step.description}</p>
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
                Get Your Free SEO Consultation
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to improve your search rankings? Contact us for a free SEO audit and strategy consultation.
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

export default SEO;
