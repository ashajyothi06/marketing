import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Send } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { label: 'Disclaimer', path: '/disclaimer' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Sitemap', path: '/sitemap' },
    { label: 'Knowledge Hub', path: '/blog' },
    { label: 'Privacy Policy', path: '/privacy' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-primary-foreground/20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-bold">
              Digital <span className="text-accent">Piloto</span>
            </span>
          </Link>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-primary-foreground/80 text-sm">Subscribe to our newsletter</span>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-l-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent w-64"
              />
              <button className="px-4 py-2.5 bg-accent text-accent-foreground rounded-r-lg hover:bg-accent/90 transition-colors flex items-center gap-2">
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Digital Piloto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
