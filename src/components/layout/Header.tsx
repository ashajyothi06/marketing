import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, Menu, X, Send } from "lucide-react";

// ✅ Replace with your real logo if you have it:
// import dpLogo from "@/assets/digitalpiloto/dp_logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        "bg-[#082B4A] text-white",
        "transition-all duration-300",
        isScrolled ? "py-3 shadow-md" : "py-4",
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* ✅ LEFT LOGO (like screenshot) */}
          <Link to="/" className="flex items-center gap-3">
            {/* If you have image logo, use it (preferred for exact look) */}
            {/* <img src={dpLogo} alt="digitalpiloto" className="h-10 w-auto" /> */}

            {/* Text fallback close to screenshot */}
            <div className="leading-none">
              <div className="flex items-end gap-2">
                <span className="text-3xl font-extrabold italic tracking-tight">
                  digital<span className="text-orange-500">piloto</span>
                </span>
                <span className="text-xs opacity-80 mb-1">®</span>
              </div>
            </div>
          </Link>

          {/* ✅ DESKTOP NAV CENTER */}
          <nav className="hidden lg:flex items-center gap-10">
            {/* About */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-white/90">
                About <ChevronDown className="h-4 w-4 opacity-80" />
              </button>

              {activeDropdown === "about" && (
                <div className="absolute left-0 top-full mt-3">
                  <div className="min-w-[220px] rounded-md bg-white py-2 text-slate-900 shadow-xl">
                    {aboutDropdown.map((item, idx) => (
                      <div key={idx}>
                        {"submenu" in item && item.submenu ? (
                          <div className="group relative">
                            <button className="flex w-full items-center justify-between px-4 py-2.5 text-sm hover:bg-slate-100">
                              {item.label}
                              <ChevronDown className="h-4 w-4 -rotate-90 opacity-70" />
                            </button>
                            <div className="invisible absolute left-full top-0 ml-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                              <div className="min-w-[220px] rounded-md bg-white py-2 shadow-xl">
                                {item.submenu.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    to={sub.path}
                                    className="block px-4 py-2.5 text-sm hover:bg-slate-100"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            to={(item as any).path}
                            className="block px-4 py-2.5 text-sm hover:bg-slate-100"
                          >
                            {(item as any).label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Digital Marketing */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("digital")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-white/90">
                Digital Marketing <ChevronDown className="h-4 w-4 opacity-80" />
              </button>

              {activeDropdown === "digital" && (
                <div className="absolute left-0 top-full mt-3">
                  <div className="min-w-[220px] rounded-md bg-white py-2 text-slate-900 shadow-xl">
                    {digitalMarketingDropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2.5 text-sm hover:bg-slate-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/design-development" className="text-sm font-medium hover:text-white/90">
              Design &amp; Development
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:text-white/90">
              Blog
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-white/90">
              Contact Us
            </Link>
          </nav>

          {/* ✅ RIGHT ACTIONS (phone square + orange button + paper plane icon) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              aria-label="Call"
              className="h-11 w-11 rounded-md bg-orange-500/95 hover:bg-orange-500 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 text-white" />
            </button>

            <Link
              to="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-orange-500/95 px-5 text-sm font-semibold text-white hover:bg-orange-500"
            >
              Get a Proposal <Send className="h-4 w-4" />
            </Link>
          </div>

          {/* ✅ MOBILE */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/15"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#082B4A]">
          <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 py-4 space-y-3">
            <div className="text-xs uppercase tracking-wider text-white/60">About</div>
            {aboutDropdown.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {"submenu" in item && item.submenu ? (
                  <>
                    <div className="text-sm font-semibold text-white/90">{item.label}</div>
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block pl-3 text-sm text-white/80 hover:text-white"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link to={(item as any).path} className="block text-sm text-white/80 hover:text-white">
                    {(item as any).label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-2 text-xs uppercase tracking-wider text-white/60">Digital Marketing</div>
            {digitalMarketingDropdown.map((item) => (
              <Link key={item.path} to={item.path} className="block text-sm text-white/80 hover:text-white">
                {item.label}
              </Link>
            ))}

            <Link to="/design-development" className="block pt-2 text-sm text-white/90 font-medium">
              Design &amp; Development
            </Link>
            <Link to="/blog" className="block text-sm text-white/90 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="block text-sm text-white/90 font-medium">
              Contact Us
            </Link>

            <div className="pt-3 flex gap-3">
              <button
                type="button"
                aria-label="Call"
                className="h-11 w-11 rounded-md bg-orange-500/95 hover:bg-orange-500 flex items-center justify-center"
              >
                <Phone className="h-5 w-5 text-white" />
              </button>

              <Link
                to="/contact"
                className="flex-1 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-orange-500/95 text-sm font-semibold text-white hover:bg-orange-500"
              >
                Get a Proposal <Send className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
