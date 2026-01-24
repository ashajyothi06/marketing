import { Play } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const VideoTestimonials = () => {
  const testimonials = [
    { name: 'Robert Johnson', company: 'Tech Startup CEO', thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' },
    { name: 'Amanda Lee', company: 'E-commerce Owner', thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop' },
    { name: 'Mark Williams', company: 'Healthcare Director', thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop' },
    { name: 'Jennifer Chen', company: 'Finance Manager', thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop' },
    { name: 'David Brown', company: 'Restaurant Owner', thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop' },
    { name: 'Lisa Martinez', company: 'Real Estate Agent', thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop' },
  ];

  const faqs = [
    { question: 'How do you ensure ROI for your clients?', answer: 'We use data-driven strategies and provide detailed analytics reports to track and optimize your ROI continuously.' },
    { question: 'What industries do you specialize in?', answer: 'We work across various industries including tech, healthcare, e-commerce, finance, and hospitality.' },
    { question: 'How long before I see results?', answer: 'While timelines vary, most clients see significant improvements within 3-6 months of our engagement.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Clients <span className="text-accent">Say</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch real success stories from businesses that transformed their digital presence with Digital Piloto
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4 shadow-card">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/40 flex items-center justify-center group-hover:bg-primary/60 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-accent-foreground fill-current ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary">{testimonial.name}</h3>
                <p className="text-muted-foreground">{testimonial.company}</p>
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

export default VideoTestimonials;
