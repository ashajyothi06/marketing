import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/shared/ContactForm';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const Contact = () => {
  const faqs = [
    { question: 'What are your working hours?', answer: 'We are available Monday to Friday, 9 AM to 6 PM IST. For urgent matters, you can reach us via email anytime.' },
    { question: 'How quickly can you start on my project?', answer: 'Typically, we can begin within 1-2 weeks after the initial consultation and agreement signing.' },
    { question: 'Do you work with international clients?', answer: 'Yes! We work with clients from all over the world and can accommodate different time zones for meetings.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 navy-gradient" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&h=600&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Contact <span className="text-accent">Us</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Let's discuss how we can help grow your business
              </p>
            </div>
            <div className="hidden lg:flex justify-center gap-4">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face"
                  alt="Customer Support"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Address</h3>
                    <p className="text-muted-foreground">123 Digital Avenue, Tech City, IN 400001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@digitalpiloto.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 9 AM - 6 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                <ContactForm showProjectType showServices />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection />
    </Layout>
  );
};

export default Contact;
