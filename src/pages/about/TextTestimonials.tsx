import { Quote, Star } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const TextTestimonials = () => {
  const testimonials = [
    {
      name: 'Robert Johnson',
      company: 'Tech Startup',
      rating: 5,
      text: 'Digital Piloto transformed our online presence completely. Our organic traffic increased by 300% in just 6 months. Highly recommend their SEO services!',
    },
    {
      name: 'Amanda Lee',
      company: 'E-commerce Store',
      rating: 5,
      text: 'The team at Digital Piloto is incredibly professional and results-driven. They helped us achieve first-page rankings for all our target keywords.',
    },
    {
      name: 'Mark Williams',
      company: 'Healthcare Provider',
      rating: 5,
      text: 'Working with Digital Piloto has been a game-changer for our practice. New patient inquiries have doubled since we started working with them.',
    },
    {
      name: 'Jennifer Chen',
      company: 'Finance Advisory',
      rating: 5,
      text: 'The transparency and communication from the Digital Piloto team is exceptional. They keep us informed every step of the way.',
    },
    {
      name: 'David Brown',
      company: 'Restaurant Chain',
      rating: 5,
      text: 'Our local SEO results have been phenomenal. Each of our locations now ranks in the top 3 for local searches.',
    },
    {
      name: 'Lisa Martinez',
      company: 'Real Estate Agency',
      rating: 5,
      text: 'Digital Piloto understands our industry perfectly. Their targeted strategies have generated quality leads consistently.',
    },
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
            Read success stories from businesses that achieved remarkable growth with Digital Piloto
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <Quote className="w-10 h-10 text-accent/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
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

export default TextTestimonials;
