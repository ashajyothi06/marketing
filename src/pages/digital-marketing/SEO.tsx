import { Link } from 'react-router-dom';
import { ArrowRight, Search, BarChart3, TrendingUp, FileText, Target, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import FeatureCard from '@/components/shared/FeatureCard';
import ContactForm from '@/components/shared/ContactForm';
import seoGrowth from '@/assets/seoGrowth.png';

import seoIllustration from '@/assets/full.png';





const SEO = () => {
  const features = [
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'Deep analysis to identify the most valuable keywords for your business growth.',
    },
    {
      icon: BarChart3,
      title: 'Technical SEO',
      description: 'Optimize your website structure and performance for search engine crawlers.',
    },
    {
      icon: TrendingUp,
      title: 'Link Building',
      description: 'Build high-quality backlinks that boost your domain authority.',
    },
  ];

  const processSteps = [
    { icon: Search, title: 'Website Audit', description: 'Comprehensive analysis of your current SEO status' },
    { icon: Target, title: 'Competitor Analysis', description: 'Understand what works in your industry' },
    { icon: FileText, title: 'Content Strategy', description: 'Create content that ranks and converts' },
    { icon: BarChart3, title: 'On-Page Optimization', description: 'Optimize every element of your pages' },
    { icon: TrendingUp, title: 'Off-Page SEO', description: 'Build authority through quality backlinks' },
    { icon: Zap, title: 'Monitoring & Reporting', description: 'Track progress and refine strategies' },
  ];

  const faqs = [
    { question: 'How long does SEO take to show results?', answer: 'SEO is a long-term strategy. You can expect to see initial improvements in 3-6 months, with significant results typically appearing after 6-12 months.' },
    { question: 'Do you guarantee first page rankings?', answer: 'While we cannot guarantee specific rankings (no ethical SEO company can), our track record shows consistent success in improving rankings and organic traffic.' },
    { question: 'What SEO tools do you use?', answer: 'We use industry-leading tools including SEMrush, Ahrefs, Moz, Google Search Console, and proprietary analysis tools.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      {/* ===================== SEO HERO (IMAGE MATCHED) ===================== */}
<section className="relative bg-[#f5f4ff] overflow-hidden">
  <div className="relative z-10 max-w-[1320px] mx-auto px-6 py-28">
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-[34px] md:text-[40px] font-bold text-[#1f2937] mb-6">
          We Show Up Your Business
        </h1>

        <p className="text-[16px] text-slate-600 max-w-[520px] leading-relaxed mb-8">
          Teaming up with the best and most successful SEO agency can keep the
          options of growing up open always! We help you grow timelessly!
        </p>

        <Link
          to="/contact"
          className="inline-block bg-[#001f5b] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#002b7a] transition"
        >
          Get a Free Consultation
        </Link>
      </div>

      {/* RIGHT ILLUSTRATION */}
      <div className="relative hidden lg:flex justify-end">
        <img
          src={seoIllustration}
          alt="SEO Illustration"
          className="w-[420px] xl:w-[480px]"
        />
      </div>

    </div>
  </div>
</section>


      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our SEO Services"
            subtitle="Comprehensive solutions to improve your search visibility"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
  <div className="max-w-[1320px] mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>
        <p className="text-[13px] uppercase tracking-widest text-slate-500 mb-4">
          We Guarantee Overall Growth Of Your Business!
        </p>

        <h2 className="text-[34px] md:text-[38px] font-semibold text-[#1f2937] leading-tight mb-6">
          Our SEO Services Assure Topmost <br />
          Performance For Your Business!
        </h2>

        <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
          Digital Piloto is an accomplished provider of SEO Services to all
          clients. We are working with the ultimate aptitude and brilliance
          to approve businesses across the online platform.
        </p>

        <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
          We have years of knowledge under the best leadership of the most
          seasoned SEO Consultants who can bring your business the advantages
          of customized SEO services and facilities.
        </p>

        <p className="text-[15px] text-slate-600 leading-relaxed">
          We take care of all the basic and advanced requirements that guarantee
          superior returns for your business. We make no compromise on finding
          the best practices that your business looks for!
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src={seoGrowth}
          alt="SEO Growth Illustration"
          className="w-[460px] xl:w-[520px] object-contain"
        />
      </div>

    </div>

  </div>
</section>


      {/* Process */}
      <section className="relative w-full bg-gradient-to-r from-[#02152a] via-[#052b5f] to-[#053a8c] py-24">

  {/* TOP TEXT */}
  <div className="max-w-[1200px] mx-auto px-6 text-center mb-14">
    <h2 className="text-white text-[28px] md:text-[36px] font-light leading-tight">
      Do You Feel Strong Displeasure When You Find Your <br />
      Competitors Ahead Of You On Google?
    </h2>

    <p className="mt-4 text-[13px] tracking-widest uppercase text-white/80">
      DP AGREES WITH YOU IF YOUR ANSWER IS ‘YES’
    </p>
  </div>

  {/* WHITE CARD */}
  <div className="max-w-[1100px] mx-auto px-6">
    <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden grid md:grid-cols-[420px_1fr]">

      {/* LEFT IMAGE PANEL */}
      <div className="bg-[#3a86c6] flex items-center justify-center p-10">
        <img
          src={seoIllustration} // import seoImage from assets
          alt="SEO Concept"
          className="w-full max-w-[300px] object-contain"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="p-10 md:p-14">
        <h3 className="text-[26px] md:text-[30px] font-medium text-[#1f2937] mb-6">
          SEO is tedious and technical. We know it takes time and effort to
          maintain rankings.
        </h3>

        <p className="text-[15px] leading-relaxed text-slate-600">
          Our readiness to serve your business can bring you ultimate success.
          You can always rely on us as we have the most trusted digital
          marketing experience that can always bring your business the right
          strategies. Our SEO experts can create customized strategies that can
          always bring your business the right advantages.
        </p>

        <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
          We aim at making your business get the top spot on the Google Search
          Engine Result Pages (SERPs). We certainly succeed as it is the only
          thing we work for!
        </p>
      </div>

    </div>
  </div>

</section>

<section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Get Your Free SEO Consultation
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to improve your search rankings? Contact us for a free SEO audit and strategy consultation.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>



      <section className="w-full bg-[#0b2f4f] py-16">
  <div className="max-w-[1320px] mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-14">

      {/* LEFT */}
      <div className="text-white pr-0 md:pr-14 md:border-r md:border-white/20">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Frequently Asked Questions (FAQs)
        </h3>

        <p className="text-white/80 leading-relaxed text-sm md:text-[15px] max-w-[500px]">
          We enjoy educating people on the intricacies of digital marketing.
          Every day, we receive hundreds of questions from our real customers.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-orange-400 transition"
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
        </Link>
      </div>

      {/* RIGHT */}
      <div className="text-white pl-0 md:pl-14">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Wanna Rewarding Career?
        </h3>

        <p className="text-white/80 leading-relaxed text-sm md:text-[15px] max-w-[500px]">
          Join our team of experts if you have the urge to show up your
          potential! We appreciate a proactive measure to make us trust your
          skills!
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-orange-400 transition"
        >
          Join Our Team
          <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
        </Link>
      </div>

    </div>
  </div>
</section>

      
      {/* ===================== BIG CTA CARD ===================== */}
      {/* ===================== BIG CTA CARD ===================== */}
<section className="relative bg-white py-24">
  <div className="max-w-[1100px] mx-auto px-6">

    <div className="bg-[#0b2f4f] rounded-2xl px-10 md:px-20 py-14 text-center shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
      
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
        Looking for The Assistance Of Industry-Best Professionals?
      </h2>

      <Link
  to="/contact"
  className="inline-flex items-center gap-2 text-sm md:text-base font-semibold underline underline-offset-4 text-white hover:text-white transition"
>
  Reach us Online or Schedule An Appointment To A Live Call!
  <ArrowRight className="w-4 h-4 text-orange-400" />
</Link>


    </div>

  </div>
</section>

    
     

      
    </Layout>
  );
};

export default SEO;
