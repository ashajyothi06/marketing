import { Link } from 'react-router-dom';
import { ArrowRight, MousePointer, Target, Zap, LineChart, ArrowUpRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import ContactForm from '@/components/shared/ContactForm';
import CTASection from '@/components/shared/CTASection';

const CRO = () => {
  const scenarios = [
    {
      title: 'High Traffic, Low Conversions',
      description: 'You\'re getting visitors but they\'re not converting into leads or customers.',
      solution: 'We analyze user behavior and optimize conversion paths to turn visitors into customers.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    },
    {
      title: 'High Cart Abandonment',
      description: 'Customers add to cart but leave before completing purchase.',
      solution: 'We optimize checkout flow, add trust signals, and implement recovery strategies.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    },
    {
      title: 'Low Form Submissions',
      description: 'Your forms aren\'t generating the leads you expected.',
      solution: 'We redesign forms, reduce friction, and improve form placement for better conversions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
    {
      title: 'Poor Landing Page Performance',
      description: 'Your landing pages have high bounce rates.',
      solution: 'We A/B test elements, improve copy, and optimize for user engagement.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?w=400&h=300&fit=crop',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="navy-gradient min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Conversion Rate Optimization
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
            Turn your website visitors into paying customers with data-driven optimization strategies
          </p>
          <Link to="/contact" className="btn-orange inline-flex items-center gap-2">
            Boost Your Conversions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Scenarios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Common Conversion Challenges We Solve"
            subtitle="Recognize any of these scenarios?"
          />
          <div className="space-y-12">
            {scenarios.map((scenario, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <img
                    src={scenario.image}
                    alt={scenario.title}
                    className="rounded-2xl shadow-card w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <div className="flex items-center gap-2 text-accent mb-4">
                    <span className="text-sm font-semibold">SCENARIO {index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{scenario.title}</h3>
                  <p className="text-muted-foreground mb-4">{scenario.description}</p>
                  <div className="bg-accent/10 rounded-xl p-4">
                    <p className="text-primary font-medium">
                      <span className="text-accent">Our Solution:</span> {scenario.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: MousePointer, stat: '150%', label: 'Conversion Increase' },
              { icon: Target, stat: '2x', label: 'Lead Generation' },
              { icon: Zap, stat: '40%', label: 'Bounce Rate Reduction' },
              { icon: LineChart, stat: '200%', label: 'ROI Improvement' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <div className="text-muted-foreground">{item.label}</div>
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
                Get Your Free CRO Audit
              </h2>
              <p className="text-muted-foreground mb-8">
                Discover hidden opportunities to increase your conversion rates. Our experts will analyze your website and provide actionable recommendations.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default CRO;
