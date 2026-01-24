import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, TrendingUp, Search, Target, FileText, BarChart3, Zap, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import FeatureCard from '@/components/shared/FeatureCard';
import ContactForm from '@/components/shared/ContactForm';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';
import CareerBanner from '@/components/shared/CareerBanner';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Indomitable Transparency',
      description: 'We believe in complete transparency in all our processes and communications with clients.',
    },
    {
      icon: Award,
      title: 'SEO Excellence You Must Trust',
      description: 'Our proven SEO strategies deliver measurable results that boost your online visibility.',
    },
    {
      icon: TrendingUp,
      title: 'Most Acknowledged SEO Services',
      description: 'Industry-leading SEO services recognized for driving exceptional business growth.',
    },
  ];

  const processSteps = [
    { icon: Search, title: 'Research & Analysis', description: 'Deep dive into your market and competitors' },
    { icon: Target, title: 'Strategy Development', description: 'Custom strategies tailored to your goals' },
    { icon: FileText, title: 'Content Optimization', description: 'Engaging content that converts visitors' },
    { icon: BarChart3, title: 'Technical SEO', description: 'Backend optimizations for search engines' },
    { icon: Zap, title: 'Performance Tracking', description: 'Real-time monitoring and reporting' },
    { icon: Users, title: 'Continuous Improvement', description: 'Ongoing optimization and scaling' },
  ];

  const faqs = [
    {
      question: 'What makes Digital Piloto different from other SEO agencies?',
      answer: 'We combine data-driven strategies with creative solutions, offering complete transparency and measurable results. Our team has helped hundreds of businesses achieve top rankings.',
    },
    {
      question: 'How long does it take to see SEO results?',
      answer: 'SEO is a long-term investment. While some improvements can be seen within 3-6 months, significant results typically appear after 6-12 months of consistent effort.',
    },
    {
      question: 'Do you offer customized SEO packages?',
      answer: 'Yes! We understand every business is unique. We create tailored SEO strategies based on your specific goals, industry, and budget.',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We work with businesses across various industries including e-commerce, healthcare, technology, finance, education, and more.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Elevate Your Digital Presence with{' '}
                <span className="text-accent">Expert SEO</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We help businesses achieve sustainable growth through data-driven digital marketing strategies. Our team of experts delivers measurable results that transform your online visibility.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-orange flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about/company-info"
                  className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative animate-float hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />
                <div className="relative bg-gradient-to-br from-purple-soft to-white rounded-3xl p-8 shadow-card">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-accent mb-1">95%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-primary mb-1">500+</div>
                      <div className="text-sm text-muted-foreground">Projects Done</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-teal mb-1">10+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-primary mb-1">#1</div>
                      <div className="text-sm text-muted-foreground">Ranking Agency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Digital Piloto?"
            subtitle="We deliver excellence through innovation, transparency, and results-driven strategies"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mid Section - Text + Image */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Your Partner in Digital Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Digital Piloto, we understand that every business is unique. That's why we don't believe in one-size-fits-all solutions. Our team of experienced digital marketers works closely with you to understand your goals and create customized strategies that deliver real results.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From SEO and content marketing to social media management and paid advertising, we offer comprehensive digital marketing services that help you connect with your target audience and grow your business.
              </p>
              <Link to="/about/company-info" className="btn-orange inline-flex items-center gap-2">
                About Our Company
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <TrendingUp className="w-10 h-10 text-accent mb-4" />
                    <h4 className="font-bold text-primary mb-2">Growth Focused</h4>
                    <p className="text-sm text-muted-foreground">Strategies that scale</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md mt-8">
                    <Shield className="w-10 h-10 text-primary mb-4" />
                    <h4 className="font-bold text-primary mb-2">Trusted Partner</h4>
                    <p className="text-sm text-muted-foreground">Reliable & transparent</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <Award className="w-10 h-10 text-teal mb-4" />
                    <h4 className="font-bold text-primary mb-2">Award Winning</h4>
                    <p className="text-sm text-muted-foreground">Industry recognized</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md mt-8">
                    <Users className="w-10 h-10 text-accent mb-4" />
                    <h4 className="font-bold text-primary mb-2">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">Dedicated professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Blue Section */}
      <section className="navy-gradient section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
              Do You Feel Strong Displeasure When You Find Your Competitors Ahead Of You On Google?
            </h2>
          </div>
          <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-purple-soft to-secondary rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent mb-2">#1</div>
                  <div className="text-primary font-semibold">Ranking Goal</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Let Us Help You Dominate Search Results
                </h3>
                <p className="text-muted-foreground mb-6">
                  Don't let your competitors steal your customers. Our proven SEO strategies will help you climb to the top of search results and stay there.
                </p>
                <Link to="/digital-marketing/seo" className="btn-orange inline-flex items-center gap-2">
                  Explore SEO Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </section>

      {/* Process Section */}
      <section className="navy-gradient section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Get On the First Page of Google with Our SEO Process"
            subtitle="Our systematic approach ensures consistent results for every client"
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <step.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
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

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to Collaborate? Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Take the first step towards digital success. Fill out the form and our team will get back to you within 24 hours to discuss how we can help grow your business.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">100% Confidential</h4>
                    <p className="text-sm text-muted-foreground">Your data is safe with us</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Career Banner */}
      <CareerBanner />

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Home;
