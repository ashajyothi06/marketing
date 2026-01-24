import { Target, Eye, Heart, Award } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CTASection from '@/components/shared/CTASection';

const CompanyInfo = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                About <span className="text-accent">Digital Piloto</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We are a team of passionate digital marketers, strategists, and creatives dedicated to helping businesses thrive in the digital landscape.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 shadow-card">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-accent mb-2">10+</div>
                    <div className="text-primary font-semibold mb-4">Years of Excellence</div>
                    <p className="text-muted-foreground text-sm">Delivering digital success stories since 2014</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Belief Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Belief</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that every business deserves to be seen and heard in the digital world. Our mission is to bridge the gap between your brand and your audience through innovative digital strategies that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-soft to-secondary rounded-3xl p-8 md:p-12">
              <Heart className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">What We Stand For</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, innovation, and client success are at the core of everything we do. We don't just deliver services; we build lasting partnerships that help businesses grow sustainably.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-orange/10 rounded-3xl p-8 md:p-12">
              <Award className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to delivering measurable results through transparent processes, continuous learning, and a deep understanding of the ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative">
        {/* Mission */}
        <div className="relative min-h-[400px] flex items-center">
          <div className="absolute inset-0 navy-gradient" />
          <div className="container-custom relative z-10 py-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-10 h-10 text-accent" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Our Mission</h2>
              </div>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                To empower businesses of all sizes with cutting-edge digital marketing solutions that drive growth, increase visibility, and create meaningful connections with their target audience.
              </p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="relative min-h-[400px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-orange" />
          <div className="container-custom relative z-10 py-16">
            <div className="max-w-2xl ml-auto text-right">
              <div className="flex items-center gap-4 mb-6 justify-end">
                <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">Our Vision</h2>
                <Eye className="w-10 h-10 text-accent-foreground" />
              </div>
              <p className="text-xl text-accent-foreground/90 leading-relaxed">
                To be the most trusted digital marketing partner for businesses worldwide, known for our innovative strategies, exceptional results, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '200+', label: 'Happy Clients' },
              { number: '50+', label: 'Team Members' },
              { number: '15+', label: 'Industry Awards' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default CompanyInfo;
