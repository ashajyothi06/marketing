import { Link } from 'react-router-dom';
import { ArrowRight, Share2, Heart, MessageCircle, Facebook, Instagram, Linkedin, Twitter, Youtube, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import ContactForm from '@/components/shared/ContactForm';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const SMO = () => {
  const features = [
    { icon: Share2, title: 'Content Strategy', description: 'Engaging content that resonates with your audience' },
    { icon: Heart, title: 'Community Building', description: 'Build loyal communities around your brand' },
    { icon: MessageCircle, title: 'Engagement Management', description: 'Active engagement to boost visibility' },
  ];

  const platforms = [
    { icon: Facebook, name: 'Facebook', color: 'bg-blue-600' },
    { icon: Instagram, name: 'Instagram', color: 'bg-gradient-to-r from-purple-600 to-pink-600' },
    { icon: Linkedin, name: 'LinkedIn', color: 'bg-blue-700' },
    { icon: Twitter, name: 'Twitter', color: 'bg-sky-500' },
    { icon: Youtube, name: 'YouTube', color: 'bg-red-600' },
  ];

  const facts = [
    { stat: '4.8B+', label: 'Social Media Users Worldwide' },
    { stat: '2.5hrs', label: 'Average Daily Time on Social' },
    { stat: '54%', label: 'Use Social for Product Research' },
    { stat: '71%', label: 'Recommend Brands After Positive Experience' },
  ];

  const faqs = [
    { question: 'What platforms do you manage?', answer: 'We manage all major platforms including Facebook, Instagram, LinkedIn, Twitter, YouTube, Pinterest, and TikTok.' },
    { question: 'How do you measure SMO success?', answer: 'We track engagement rates, follower growth, reach, website traffic from social, and conversions to measure success.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Social Media Optimization
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Build a powerful social media presence that engages your audience and drives business growth.
              </p>
              <Link to="/contact" className="btn-orange inline-flex items-center gap-2">
                Boost Your Social Presence
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg animate-float">
                  <Facebook className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                  <Instagram className="w-10 h-10 text-accent-foreground" />
                </div>
                <div className="bg-card rounded-3xl p-8 shadow-card">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-accent mb-2">10M+</div>
                    <div className="text-muted-foreground">Social Impressions Generated</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <Linkedin className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-destructive rounded-2xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                  <Youtube className="w-10 h-10 text-destructive-foreground" />
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
            title="Social Media Channels Where We Excel"
            subtitle="Expert management across all major platforms"
          />
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className={`${platform.color} rounded-2xl p-6 text-white flex flex-col items-center gap-3 min-w-[140px] hover:scale-105 transition-transform cursor-pointer`}>
                <platform.icon className="w-10 h-10" />
                <span className="font-semibold">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMO Facts */}
      <section className="section-padding navy-gradient">
        <div className="container-custom">
          <SectionTitle title="SMO Fact Checks" subtitle="Why social media matters for your business" light />
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
                Ready to Go Viral?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's create a social media strategy that puts your brand in front of millions.
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

export default SMO;
