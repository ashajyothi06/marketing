import { Linkedin, Twitter, Globe } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CTASection from '@/components/shared/CTASection';

const Team = () => {
  const founders = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      bio: 'With over 15 years in digital marketing, John leads our team with vision and innovation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Sarah Johnson',
      role: 'Co-Founder & COO',
      bio: 'Sarah brings operational excellence and client-focused strategies to Digital Piloto.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    },
  ];

  const advisoryBoard = [
    { name: 'Michael Chen', role: 'Strategic Advisor', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Emily Davis', role: 'Marketing Advisor', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
    { name: 'David Wilson', role: 'Tech Advisor', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Lisa Brown', role: 'Growth Advisor', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face' },
  ];

  const partners = [
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="navy-gradient min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cpath d='M0 250 Q250 100 500 250 T1000 250' stroke='%23ffffff' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
          }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Meet Our <span className="text-accent">Team</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            A passionate team of digital experts dedicated to your success
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Our Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-accent transition-colors">
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-accent transition-colors">
                        <Twitter className="w-5 h-5 text-white" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-accent transition-colors">
                        <Globe className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1">{founder.name}</h3>
                <p className="text-accent font-medium mb-3">{founder.role}</p>
                <p className="text-muted-foreground">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Advisory Board
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-card">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold text-primary">{advisor.name}</h4>
                <p className="text-sm text-muted-foreground">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Our Partners
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partners.map((_, index) => (
              <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center text-muted-foreground text-sm">
                  Partner {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Team;
