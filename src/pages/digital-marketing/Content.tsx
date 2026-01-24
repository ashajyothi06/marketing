import { Link } from 'react-router-dom';
import { ArrowRight, FileText, PenTool, BookOpen, Search, Edit, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import ContactForm from '@/components/shared/ContactForm';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const Content = () => {
  const features = [
    { icon: FileText, title: 'Blog Writing', description: 'Engaging blog posts that drive traffic and establish authority' },
    { icon: PenTool, title: 'Copywriting', description: 'Persuasive copy that converts visitors into customers' },
    { icon: BookOpen, title: 'Content Strategy', description: 'Comprehensive content plans aligned with your goals' },
  ];

  const processSteps = [
    { icon: Search, title: 'Research', description: 'Deep dive into your audience and competitors' },
    { icon: Edit, title: 'Strategy', description: 'Develop a content roadmap' },
    { icon: PenTool, title: 'Creation', description: 'Craft compelling content' },
    { icon: CheckCircle, title: 'Optimization', description: 'SEO and performance tuning' },
    { icon: FileText, title: 'Distribution', description: 'Multi-channel content delivery' },
    { icon: BookOpen, title: 'Analysis', description: 'Measure and refine' },
  ];

  const facts = [
    { stat: '72%', label: 'Marketers Say Content Increases Engagement' },
    { stat: '3x', label: 'More Leads from Content Marketing' },
    { stat: '62%', label: 'Lower Cost Than Traditional Marketing' },
    { stat: '6x', label: 'Higher Conversion Rate' },
  ];

  const faqs = [
    { question: 'What types of content do you create?', answer: 'We create blog posts, articles, whitepapers, case studies, social media content, email newsletters, website copy, and more.' },
    { question: 'How do you ensure content quality?', answer: 'Our content goes through multiple rounds of editing and is reviewed by subject matter experts before publication.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Content Dominance
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create compelling content that attracts, engages, and converts your target audience.
              </p>
              <Link to="/contact" className="btn-orange inline-flex items-center gap-2">
                Start Content Strategy
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-accent rounded-full w-3/4" />
                    </div>
                    <span className="text-accent font-bold">95%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <PenTool className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-primary rounded-full w-2/3" />
                    </div>
                    <span className="text-primary font-bold">87%</span>
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

      {/* Process */}
      <section className="navy-gradient section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Our Content Creation Process"
            subtitle="A systematic approach to creating content that performs"
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

      {/* Facts */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle title="Content Marketing Facts" subtitle="Why content matters for your business" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="stat-number mb-2">{fact.stat}</div>
                <div className="text-muted-foreground">{fact.label}</div>
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
                Let's Create Content That Converts
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to elevate your content game? Get in touch with our content strategists.
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

export default Content;
