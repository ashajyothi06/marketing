import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout as LayoutIcon, Smartphone, Palette, ShoppingCart, Layers } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';

const DesignDevelopment = () => {
  const portfolioItems = [
    { title: 'E-commerce Platform', category: 'Web Development', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
    { title: 'Corporate Website', category: 'Web Design', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop' },
    { title: 'Mobile App', category: 'App Development', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop' },
    { title: 'SaaS Dashboard', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
    { title: 'Landing Page', category: 'Web Design', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop' },
    { title: 'Brand Identity', category: 'Branding', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop' },
  ];

  const usps = [
    { icon: Code, title: 'Clean Code', description: 'Well-structured, maintainable code' },
    { icon: LayoutIcon, title: 'Responsive Design', description: 'Perfect on all devices' },
    { icon: Smartphone, title: 'Mobile First', description: 'Optimized for mobile users' },
    { icon: Palette, title: 'Custom Design', description: 'Unique to your brand' },
  ];

  const platforms = [
    { name: 'WordPress', icon: '🔵' },
    { name: 'Custom PHP', icon: '🟣' },
    { name: 'Shopify', icon: '🟢' },
    { name: 'React', icon: '🔷' },
    { name: 'Next.js', icon: '⚫' },
    { name: 'Webflow', icon: '🔶' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 navy-gradient" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Welcome to Digital Piloto Web Design & Development
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              We create stunning, high-performance websites that captivate visitors and drive conversions.
            </p>
            <Link to="/contact" className="btn-orange inline-flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Portfolio"
            subtitle="A showcase of our best work"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4 shadow-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <p className="text-accent text-sm font-medium mb-1">{item.category}</p>
                      <h3 className="text-primary-foreground text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Us?"
            subtitle="What sets our development apart"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <usp.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{usp.title}</h3>
                <p className="text-sm text-muted-foreground">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Platforms DP Loves to Work With"
            subtitle="We're experts in these technologies"
          />
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-secondary rounded-2xl px-8 py-6 flex items-center gap-3 hover:shadow-md transition-shadow">
                <span className="text-2xl">{platform.icon}</span>
                <span className="font-semibold text-primary">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding navy-gradient">
        <div className="container-custom">
          <SectionTitle
            title="Our Design Process"
            subtitle="How we bring your vision to life"
            light
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs' },
              { step: '02', title: 'Design', description: 'Creating visual concepts' },
              { step: '03', title: 'Development', description: 'Building your solution' },
              { step: '04', title: 'Launch', description: 'Going live with support' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-accent/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default DesignDevelopment;
