import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Import images
import aboutFamily from '@/assets/about-family.jpg';
import aboutOneness from '@/assets/about-oneness.jpg';
import aboutSatisfaction from '@/assets/about-satisfaction.jpg';
import aboutRevenue from '@/assets/about-revenue.jpg';
import aboutNetwork from '@/assets/about-network.jpg';
import aboutImprovement from '@/assets/about-improvement.jpg';
import missionBg from '@/assets/about-mission-bg.jpg';
import visionBg from '@/assets/about-vision-bg.jpg';

const CompanyInfo = () => {
  const aboutUsItems = [
    { image: aboutFamily, text: 'Feeling of one-family under the same roof' },
    { image: aboutOneness, text: 'Employees feel oneness in the company' },
    { image: aboutSatisfaction, text: 'Client satisfaction is the key' },
    { image: aboutRevenue, text: 'Assured revenue growth for everyone' },
    { image: aboutNetwork, text: 'The GxPify network grows stronger' },
    { image: aboutImprovement, text: 'Continuous improvement culture' },
  ];

  const numberedPoints = [
    'Passion drives our work',
    'Pace ensures timely delivery',
    'Precision guarantees quality',
    'Transparency builds trust',
    'Innovation leads growth',
    'Excellence defines us',
  ];

  return (
    <Layout>
      {/* About Us Section - 6 Image Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            About Us
          </h2>

          {/* Main White Container with Lavender Border */}
          <div className="bg-background border-2 border-purple-soft rounded-3xl p-8 md:p-12 shadow-lg">
            {/* First Row - 3 Images */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {aboutUsItems.slice(0, 3).map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-background rounded-xl shadow-md overflow-hidden mb-4 aspect-[4/3]">
                    <img 
                      src={item.image} 
                      alt={item.text} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Numbered Points Strip */}
            <div className="flex flex-wrap justify-center gap-4 py-6 my-8 border-y border-border">
              {numberedPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2"
                >
                  <span className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-sm text-primary font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Second Row - 3 Images */}
            <div className="grid md:grid-cols-3 gap-6">
              {aboutUsItems.slice(3, 6).map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-background rounded-xl shadow-md overflow-hidden mb-4 aspect-[4/3]">
                    <img 
                      src={item.image} 
                      alt={item.text} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Belief + Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Our Belief
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We believe that every business deserves to be seen and heard in the digital world. Our mission is to bridge the gap between your brand and your audience through innovative digital strategies that drive real results.
          </p>

          {/* Mission Banner with Overlay */}
          <div className="relative">
            {/* Background Image - 70% width */}
            <div className="ml-auto w-full lg:w-[70%] aspect-[16/9] rounded-2xl overflow-hidden">
              <img 
                src={missionBg} 
                alt="Our Mission Background" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Overlay Card - Left Side */}
            <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 lg:w-[45%]">
              <div className="bg-background rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We consider Passion, Pace, and Precision as our pillars to serve our clients. Our mission is to deliver data-driven digital marketing strategies that maximize ROI and help businesses achieve sustainable growth in the competitive online landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Vision Banner with Overlay */}
          <div className="relative">
            {/* Background Image - 70% width on left */}
            <div className="mr-auto w-full lg:w-[70%] aspect-[16/9] rounded-2xl overflow-hidden">
              <img 
                src={visionBg} 
                alt="Our Vision Background" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Overlay Card - Right Side */}
            <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 lg:w-[45%]">
              <div className="bg-background rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Digital Piloto, our vision is to be the most trusted digital marketing partner for businesses worldwide — through innovative strategies, transparent practices, and results-driven campaigns that transform brands and accelerate growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Blue Split Band - FAQs + Career */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - FAQs */}
            <div className="text-primary-foreground pr-0 md:pr-8 md:border-r md:border-primary-foreground/20">
              <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQs)</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                We enjoy educating people on the intricacies of digital marketing. Every day, we receive questions from businesses looking to grow their online presence.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold underline transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column - Career */}
            <div className="text-primary-foreground pl-0 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">Wanna Rewarding Career?</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                Join our team of digital marketing experts who are passionate about creativity and innovation. We appreciate a proactive mindset and a drive to deliver exceptional results.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold underline transition-colors"
              >
                Join Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA Box */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl p-12 text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Looking for the Assistance of Industry-Best Professionals?
            </h2>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold underline text-lg transition-colors"
            >
              Reach us Online or Schedule an Appointment To A Live Call!
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section (Newsletter + Links) - This supplements the main footer */}
      <section className="bg-background py-12 border-t border-border">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Logo + Newsletter */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xl">D</span>
                </div>
                <span className="text-xl font-bold text-primary">
                  Digital <span className="text-accent">Piloto</span>
                </span>
              </Link>
              <p className="text-primary font-semibold mb-2">Subscribe to our Newsletter!</p>
              <p className="text-muted-foreground text-sm mb-2">Stay updated with the latest digital marketing trends and tips.</p>
              <p className="text-accent text-sm font-medium mb-4">Subscribe now for Free!</p>
              
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2.5 rounded-l-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent flex-1"
                />
                <button className="px-4 py-2.5 bg-accent text-accent-foreground rounded-r-lg hover:bg-accent/90 transition-colors flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link to="/disclaimer" className="text-muted-foreground hover:text-accent transition-colors text-sm">Disclaimer</Link>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors text-sm">Contact Us</Link>
                <Link to="/sitemap" className="text-muted-foreground hover:text-accent transition-colors text-sm">Sitemap</Link>
                <Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors text-sm">Knowledge Hub</Link>
                <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors text-sm">Privacy Policy</Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={social}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors group"
                  >
                    <span className="text-muted-foreground group-hover:text-accent-foreground text-xs font-bold">
                      {social.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyInfo;
