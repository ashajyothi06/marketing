import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, Menu, X, Send } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // MOBILE STATES
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [mobileSubSection, setMobileSubSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSection(null);
    setMobileSubSection(null);
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
      className={`fixed top-0 left-0 right-0 z-50
      bg-gradient-to-r from-[#051a2f] via-[#082a4a] to-[#0a3b78]
      border-b border-white/10 transition-all
      ${isScrolled ? "shadow-md" : ""}`}
    >
      {/* TOP BAR */}
      <div className={`px-4 sm:px-6 ${isScrolled ? "py-3" : "py-4"}`}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="text-white font-extrabold italic text-2xl">
            digitalpiloto<span className="text-xs align-top">®</span>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-10">

            {/* ABOUT */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-white flex items-center gap-1">
                About <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 pt-3">
                  <div className="bg-white rounded-md shadow-xl py-2 min-w-[220px]">
                    {aboutDropdown.map((item, i) =>
                      item.submenu ? (
                        <div key={i} className="relative group">
                          <button className="w-full px-4 py-2 text-left flex justify-between">
                            {item.label}
                            <ChevronDown className="-rotate-90 w-4 h-4" />
                          </button>

                          <div className="absolute left-full top-0 ml-2 opacity-0 invisible group-hover:visible group-hover:opacity-100">
                            <div className="bg-white rounded-md shadow-xl py-2 min-w-[200px]">
                              {item.submenu.map((sub, j) => (
                                <Link
                                  key={j}
                                  to={sub.path}
                                  className="block px-4 py-2 hover:bg-slate-50"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={i}
                          to={item.path}
                          className="block px-4 py-2 hover:bg-slate-50"
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* DIGITAL MARKETING (CLICKABLE + DROPDOWN) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("digital")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/digital-marketing"
                className="text-white flex items-center gap-1"
              >
                Digital Marketing <ChevronDown className="w-4 h-4" />
              </Link>

              {activeDropdown === "digital" && (
                <div className="absolute top-full left-0 pt-3">
                  <div className="bg-white rounded-md shadow-xl py-2 min-w-[220px]">
                    {digitalMarketingDropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        className="block px-4 py-2 hover:bg-slate-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/design-development" className="text-white">
              Design & Development
            </Link>
            <Link to="/blog" className="text-white">
              Blog
            </Link>
            <Link to="/contact" className="text-white">
              Contact Us
            </Link>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex gap-3">
            <button className="h-11 w-11 bg-[#f58220] rounded-md flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </button>

            <Link
              to="/contact"
              className="h-11 px-5 bg-[#f58220] rounded-md text-white flex items-center gap-2 font-semibold"
            >
              Get a Proposal <Send className="w-4 h-4" />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">

            {/* ABOUT */}
            <button
              onClick={() =>
                setMobileSection(mobileSection === "about" ? null : "about")
              }
              className="w-full flex justify-between font-semibold"
            >
              About
              <ChevronDown
                className={`transition-transform ${
                  mobileSection === "about" ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileSection === "about" && (
              <div className="pl-4 space-y-2 text-sm">
                <Link to="/about/company-info" className="block py-1">
                  Company Info
                </Link>
                <Link to="/about/team" className="block py-1">
                  Team
                </Link>

                {/* TESTIMONIALS */}
                <button
                  onClick={() =>
                    setMobileSubSection(
                      mobileSubSection === "testimonials" ? null : "testimonials"
                    )
                  }
                  className="w-full flex justify-between items-center py-1"
                >
                  Testimonials
                  <ChevronDown
                    className={`transition-transform ${
                      mobileSubSection === "testimonials" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileSubSection === "testimonials" && (
                  <div className="pl-4 space-y-2">
                    <Link to="/about/testimonials/video" className="block py-1">
                      Video Testimonials
                    </Link>
                    <Link to="/about/testimonials/text" className="block py-1">
                      Text Testimonials
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* DIGITAL MARKETING */}
            <button
              onClick={() =>
                setMobileSection(mobileSection === "digital" ? null : "digital")
              }
              className="w-full flex justify-between font-semibold"
            >
              Digital Marketing
              <ChevronDown
                className={`transition-transform ${
                  mobileSection === "digital" ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileSection === "digital" && (
              <div className="pl-4 space-y-2 text-sm">
                <Link to="/digital-marketing" className="block py-1 font-medium">
                  Overview
                </Link>

                {digitalMarketingDropdown.map((item, i) => (
                  <Link key={i} to={item.path} className="block py-1">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/design-development" className="block font-semibold">
              Design & Development
            </Link>
            <Link to="/blog" className="block font-semibold">
              Blog
            </Link>
            <Link to="/contact" className="block font-semibold">
              Contact Us
            </Link>

            {/* MOBILE CTA */}
            <div className="pt-4 flex gap-3">
              <button className="h-11 w-11 bg-[#f58220] rounded-md flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </button>

              <Link
                to="/contact"
                className="flex-1 h-11 bg-[#f58220] rounded-md text-white flex items-center justify-center gap-2 font-semibold"
              >
                Get a Proposal <Send className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
