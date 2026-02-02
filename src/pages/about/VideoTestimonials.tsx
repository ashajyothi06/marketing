import { Play } from 'lucide-react';
import Layout from '@/components/layout/Layout';


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
      
        <section className="pt-0 pb-24 bg-white">

        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-5 shadow-card h-[260px] md:h-[300px]">
  <img
    src={testimonial.thumbnail}
    alt={testimonial.name}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

      <section className="w-full bg-[#0b2f4f] py-16">
  <div className="max-w-[1320px] mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-14 relative">

      {/* LEFT : FAQ */}
      <div className="text-white pr-0 md:pr-14 md:border-r md:border-white/30">
        <h3 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions (FAQs)
        </h3>

        <p className="text-white/90 leading-relaxed text-[15px] max-w-[520px]">
          We enjoy educating people on the intricacies of digital marketing.
          Every day, we receive hundreds of questions from our real customers.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium underline underline-offset-4 hover:text-orange-400 transition"
        >
          Learn More
          <span className="text-orange-400 text-lg">↗</span>
        </a>
      </div>

      {/* RIGHT : CAREER */}
      <div className="text-white pl-0 md:pl-14">
        <h3 className="text-2xl font-semibold mb-4">
          Wanna Rewarding Career?
        </h3>

        <p className="text-white/90 leading-relaxed text-[15px] max-w-[520px]">
          Join our team of experts if you have the urge to show up your potential!
          We appreciate a proactive measure to make us trust your skills!
        </p>

        <a
          href="/careers"
          className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium underline underline-offset-4 hover:text-orange-400 transition"
        >
          Join Our Team
          <span className="text-orange-400 text-lg">↗</span>
        </a>
      </div>

    </div>
  </div>
</section>

<section className="relative bg-white py-24">
  <div className="max-w-[1200px] mx-auto px-6">

    <div
      className="bg-[#0b2f4f] rounded-xl text-center
                 px-10 md:px-20 py-16
                 shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
    >
      <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
        Looking for The Assistance Of Industry-Best Professionals?
      </h2>

      <a
        href="/contact"
        className="inline-block text-white text-[17px] font-medium
                   underline underline-offset-4
                   hover:text-orange-400 transition"
      >
        Reach us Online or Schedule An Appointment To A Live Call!
      </a>
    </div>

  </div>
</section>

      
    </Layout>
  );
};

export default VideoTestimonials;
