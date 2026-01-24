import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CompanyInfo from "./pages/about/CompanyInfo";
import Team from "./pages/about/Team";
import VideoTestimonials from "./pages/about/VideoTestimonials";
import TextTestimonials from "./pages/about/TextTestimonials";
import SEO from "./pages/digital-marketing/SEO";
import GEO from "./pages/digital-marketing/GEO";
import SMO from "./pages/digital-marketing/SMO";
import PaidAds from "./pages/digital-marketing/PaidAds";
import CRO from "./pages/digital-marketing/CRO";
import Content from "./pages/digital-marketing/Content";
import DesignDevelopment from "./pages/DesignDevelopment";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About Routes */}
          <Route path="/about/company-info" element={<CompanyInfo />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/testimonials/video" element={<VideoTestimonials />} />
          <Route path="/about/testimonials/text" element={<TextTestimonials />} />
          
          {/* Digital Marketing Routes */}
          <Route path="/digital-marketing/seo" element={<SEO />} />
          <Route path="/digital-marketing/geo" element={<GEO />} />
          <Route path="/digital-marketing/smo" element={<SMO />} />
          <Route path="/digital-marketing/paid-ads" element={<PaidAds />} />
          <Route path="/digital-marketing/cro" element={<CRO />} />
          <Route path="/digital-marketing/content" element={<Content />} />
          
          {/* Other Pages */}
          <Route path="/design-development" element={<DesignDevelopment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
