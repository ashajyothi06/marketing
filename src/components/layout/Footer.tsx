import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

// ✅ If you have the actual logo image, use this:
// import dpLogo from "@/assets/digitalpiloto/logo.png";

const Footer = () => {
  const footerLinks = [
    { label: "Disclaimer", path: "/disclaimer" },
    { label: "Contact Us", path: "/contact" },
    { label: "Sitemap", path: "/sitemap" },
    { label: "Knowledge Hub", path: "/blog" },
    { label: "Privacy Policy", path: "/privacy" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-white text-slate-900">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        {/* TOP ROW (matches screenshot layout) */}
        <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-12 md:gap-6">
          {/* LEFT: Logo + Newsletter */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center">
              {/* ✅ Use your real logo image for exact look */}
              {/* <img src={dpLogo} alt="digitalpiloto" className="h-10 w-auto" /> */}

              {/* Fallback text-logo (remove if using image) */}
              <div className="text-3xl font-extrabold tracking-tight">
                <span className="italic text-slate-700">digital</span>
                <span className="italic text-orange-500">piloto</span>
              </div>
            </Link>

            <div className="mt-6 space-y-1 text-sm text-slate-700">
              <p>Subscribe To Our Newsletter!</p>
              <p>Stay updated with the latest happenings in the digital world.</p>
              <p>Subscribe now for Free!</p>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="h-9 w-[210px] rounded-none border border-slate-300 px-3 text-sm outline-none focus:border-slate-500"
              />
              <button className="h-9 rounded-none bg-[#0B3A5A] px-6 text-sm font-semibold text-white hover:opacity-95">
                Subscribe
              </button>
            </div>

            <p className="mt-4 text-[11px] text-slate-500">
              CIN: U73100WB2023PTC264567
            </p>
          </div>

          {/* CENTER: Links (top centered like screenshot) */}
          <div className="md:col-span-4 md:flex md:items-start md:justify-center">
            <nav className="flex flex-wrap items-center justify-start gap-x-8 gap-y-3 text-sm text-slate-600 md:justify-center">
              {footerLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="hover:text-slate-900"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* RIGHT: Social icons (right side) */}
          <div className="md:col-span-3 md:flex md:items-start md:justify-end">
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider line (thin grey like screenshot) */}
        <div className="h-px w-full bg-slate-300/70" />

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 items-center gap-3 py-4 md:grid-cols-12">
          {/* Right-side disclaimer text */}
          <div className="md:col-span-8 md:order-2 md:flex md:justify-end">
            <p className="text-[11px] text-slate-500">
              Please read the{" "}
              <Link to="/disclaimer" className="text-orange-500 hover:underline">
                Disclaimer
              </Link>{" "}
              carefully before you take any action.
            </p>
          </div>

          {/* Center copyright line */}
          <div className="md:col-span-4 md:order-1">
            <p className="text-center text-[11px] text-slate-500 md:text-left">
              © 2017 - {new Date().getFullYear()} | Digital Piloto Pvt Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
