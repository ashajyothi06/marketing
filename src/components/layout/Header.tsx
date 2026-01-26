import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, Menu, X, Send } from "lucide-react";

// OPTIONAL: if you have a real logo image like in screenshot, import it and use below
// import dpLogo from "@/assets/digitalpiloto-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const aboutDropdown = [
    { label: "Company Info", path: "/about/company-info" },
    { label: "Team", path: "/about/team" },
    {
      label: "Testimonials",
      submenu: [
        { label: "Video Testimonials", path: "/about/testimonials/video" },
        { label: "Text Testimonials", path: "/about/testimonials/text" },
      ],
    },
  ];

  const digitalMarketingDropdown = [
    { label: "SEO", path: "/digital-marketing/seo" },
    { label: "GEO", path: "/digital-marketing/geo" },
    { label: "SMO", path: "/digital-marketing/smo" },
    { label: "Paid Ads", path: "/digital-marketing/paid-ads" },
    { label: "CRO", path: "/digital-marketing/cro" },
    { label: "Content", path: "/digital-marketing/content" },
  ];

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        // gradient like screenshot
        "bg-gradient-to-r from-[#051a2f] via-[#082a4a] to-[#0a3b78]",
        isScrolled ? "shadow-md" : "",
        "border-b border-white/10",
      ].join(" ")}
    >
      {/* exact height feel */}
      <div className={["w-full", isScrolled ? "py-3" : "py-4"].join(" ")}>
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* LEFT: Logo */}
            <Link to="/" className="flex items-center gap-2">
              {/* If you have logo image: uncomment below and remove text */}
              {/* <img src={dpLogo} alt="digitalpiloto" className="h-9 w-auto" /> */}

              <div className="flex items-center gap-1">
                <span className="text-white font-extrabold italic tracking-tight text-2xl">
                  digitalpiloto
                </span>
                <span className="text-white/80 text-xs font-semibold align-top -mt-2">
                  ®
                </span>
              </div>
            </Link>

            {/* CENTER: Desktop nav */}
            <nav className="hidden lg:flex items-center gap-12">
              {/* About dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-white/90 hover:text-white font-medium flex items-center gap-1">
                  About <ChevronDown className="w-4 h-4 opacity-90" />
                </button>

                {activeDropdown === "about" && (
                  <div className="absolute top-full left-0 pt-3">
                    <div className="bg-white rounded-md shadow-xl py-2 min-w-[210px] border border-slate-100">
                      {aboutDropdown.map((item, index) => (
                        <div key={index}>
                          {item.submenu ? (
                            <div className="relative group">
                              <button className="w-full px-4 py-2.5 text-left text-slate-700 hover:bg-slate-50 flex items-center justify-between">
                                {item.label}
                                <ChevronDown className="w-4 h-4 -rotate-90" />
                              </button>
                              <div className="absolute left-full top-0 ml-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                <div className="bg-white rounded-md shadow-xl py-2 min-w-[200px] border border-slate-100">
                                  {item.submenu.map((sub, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      to={sub.path}
                                      className="block px-4 py-2.5 text-slate-700 hover:bg-slate-50"
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
                              className="block px-4 py-2.5 text-slate-700 hover:bg-slate-50"
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

              {/* Digital Marketing dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("digital")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-white/90 hover:text-white font-medium flex items-center gap-1">
                  Digital Marketing <ChevronDown className="w-4 h-4 opacity-90" />
                </button>

                {activeDropdown === "digital" && (
                  <div className="absolute top-full left-0 pt-3">
                    <div className="bg-white rounded-md shadow-xl py-2 min-w-[220px] border border-slate-100">
                      {digitalMarketingDropdown.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-4 py-2.5 text-slate-700 hover:bg-slate-50"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/design-development"
                className="text-white/90 hover:text-white font-medium"
              >
                Design &amp; Development
              </Link>

              <Link to="/blog" className="text-white/90 hover:text-white font-medium">
                Blog
              </Link>

              <Link
                to="/contact"
                className="text-white/90 hover:text-white font-medium"
              >
                Contact Us
              </Link>
            </nav>

            {/* RIGHT: Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* orange phone square like screenshot */}
              <button
                aria-label="Call"
                className="h-11 w-11 rounded-md bg-[#f58220] flex items-center justify-center hover:opacity-95 transition"
              >
                <Phone className="w-5 h-5 text-white" />
              </button>

              {/* orange button with paper-plane */}
              <Link
                to="/contact"
                className="h-11 inline-flex items-center gap-2 rounded-md bg-[#f58220] px-5 font-semibold text-white hover:opacity-95 transition"
              >
                Get a Proposal
                <Send className="w-4 h-4 text-white" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden h-10 w-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg border-t border-slate-100">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 py-4 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">
                  About
                </p>
                {aboutDropdown.map((item, index) => (
                  <div key={index}>
                    {item.submenu ? (
                      item.submenu.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sub.path}
                          className="block px-2 py-2 text-slate-700"
                        >
                          {sub.label}
                        </Link>
                      ))
                    ) : (
                      <Link to={item.path} className="block px-2 py-2 text-slate-700">
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">
                  Digital Marketing
                </p>
                {digitalMarketingDropdown.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-2 py-2 text-slate-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link to="/design-development" className="block px-2 py-2 text-slate-700 font-medium">
                Design &amp; Development
              </Link>
              <Link to="/blog" className="block px-2 py-2 text-slate-700 font-medium">
                Blog
              </Link>
              <Link to="/contact" className="block px-2 py-2 text-slate-700 font-medium">
                Contact Us
              </Link>

              <div className="pt-2 flex gap-3">
                <button
                  aria-label="Call"
                  className="h-11 w-11 rounded-md bg-[#f58220] flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 text-white" />
                </button>

                <Link
                  to="/contact"
                  className="flex-1 h-11 inline-flex items-center justify-center gap-2 rounded-md bg-[#f58220] font-semibold text-white"
                >
                  Get a Proposal <Send className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
