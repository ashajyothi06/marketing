import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight } from 'lucide-react';

const CareerBanner = () => {
  return (
    <section className="bg-primary py-6">
      <div className="container-custom">
        <Link
          to="/careers"
          className="flex items-center justify-center gap-4 group"
        >
          <Briefcase className="w-6 h-6 text-accent" />
          <span className="text-primary-foreground text-lg font-medium">
            Want a rewarding career?{' '}
            <span className="text-accent">Join our team</span>
          </span>
          <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default CareerBanner;
