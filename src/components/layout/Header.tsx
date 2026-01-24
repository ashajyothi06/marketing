import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const aboutDropdown = [
    { label: 'Company Info', path: '/about/company-info' },
    { label: 'Team', path: '/about/team' },
    {
      label: 'Testimonials',
      submenu: [
        { label: 'Video Testimonials', path: '/about/testimonials/video' },
        { label: 'Text Testimonials', path: '/about/testimonials/text' },
      ],
    },
  ];

  const digitalMarketingDropdown = [
    { label: 'SEO', path: '/digital-marketing/seo' },
    { label: 'GEO', path: '/digital-marketing/geo' },
    { label: 'SMO', path: '/digital-marketing/smo' },
    { label: 'Paid Ads', path: '/digital-marketing/paid-ads' },
    { label: 'CRO', path: '/digital-marketing/cro' },
    { label: 'Content', path: '/digital-marketing/content' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-xl">D</span>
          </div>
          <span className="text-xl font-bold text-primary">
            Digital <span className="text-accent">Piloto</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link flex items-center gap-1 py-2">
              About <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 pt-2 animate-slide-down">
                <div className="bg-card rounded-xl dropdown-shadow py-2 min-w-[200px]">
                  {aboutDropdown.map((item, index) => (
                    <div key={index}>
                      {item.submenu ? (
                        <div className="relative group">
                          <button className="w-full px-4 py-2.5 text-left text-foreground/80 hover:text-primary hover:bg-secondary/50 flex items-center justify-between transition-colors">
                            {item.label}
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                          </button>
                          <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <div className="bg-card rounded-xl dropdown-shadow py-2 min-w-[180px]">
                              {item.submenu.map((sub, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={sub.path}
                                  className="block px-4 py-2.5 text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className="block px-4 py-2.5 text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Digital Marketing Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('digital')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link flex items-center gap-1 py-2">
              Digital Marketing <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'digital' && (
              <div className="absolute top-full left-0 pt-2 animate-slide-down">
                <div className="bg-card rounded-xl dropdown-shadow py-2 min-w-[180px]">
                  {digitalMarketingDropdown.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2.5 text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/design-development" className="nav-link py-2">
            Design & Development
          </Link>
          <Link to="/blog" className="nav-link py-2">
            Blog
          </Link>
          <Link to="/contact" className="nav-link py-2">
            Contact Us
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
            <Phone className="w-5 h-5 text-primary" />
          </button>
          <Link to="/contact" className="btn-orange">
            Get a Proposal
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-lg animate-slide-down">
          <div className="container-custom py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground px-2">About</p>
              {aboutDropdown.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <>
                      {item.submenu.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sub.path}
                          className="block px-4 py-2 text-foreground/80 hover:text-primary"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-foreground/80 hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground px-2">Digital Marketing</p>
              {digitalMarketingDropdown.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block px-4 py-2 text-foreground/80 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link to="/design-development" className="block px-4 py-2 text-foreground/80 hover:text-primary font-medium">
              Design & Development
            </Link>
            <Link to="/blog" className="block px-4 py-2 text-foreground/80 hover:text-primary font-medium">
              Blog
            </Link>
            <Link to="/contact" className="block px-4 py-2 text-foreground/80 hover:text-primary font-medium">
              Contact Us
            </Link>
            <Link to="/contact" className="btn-orange block text-center mt-4">
              Get a Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
