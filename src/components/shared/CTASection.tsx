import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  title = "Ready to Grow Your Business?",
  subtitle = "Partner with us to unlock your digital potential and achieve remarkable results.",
  buttonText = "Get Started Today",
  buttonLink = "/contact"
}: CTASectionProps) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="cta-box">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            {title}
          </h2>
          <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:gap-4"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
