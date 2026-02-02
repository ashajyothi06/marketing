import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import ContactForm from '@/components/shared/ContactForm';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';
import socialmedia from '@/assets/socialmedia.png';
import marketing from '@/assets/marketing.png';

import {
  Megaphone,
  Heart,
  Users,
  Share2,
  MessageCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const SMO = () => {
  const features = [
    {
      icon: Share2,
      title: 'Content Strategy',
      description: 'Engaging content that resonates with your audience',
    },
    {
      icon: Heart,
      title: 'Community Building',
      description: 'Build loyal communities around your brand',
    },
    {
      icon: MessageCircle,
      title: 'Engagement Management',
      description: 'Active engagement to boost visibility',
    },
  ];

  const platforms = [
    { icon: Facebook, name: 'Facebook', color: 'bg-blue-600' },
    { icon: Instagram, name: 'Instagram', color: 'bg-gradient-to-r from-purple-600 to-pink-600' },
    { icon: Linkedin, name: 'LinkedIn', color: 'bg-blue-700' },
    { icon: Twitter, name: 'Twitter', color: 'bg-sky-500' },
    { icon: Youtube, name: 'YouTube', color: 'bg-red-600' },
  ];

  const facts = [
    { stat: '4.8B+', label: 'Social Media Users Worldwide' },
    { stat: '2.5hrs', label: 'Average Daily Time on Social' },
    { stat: '54%', label: 'Use Social for Product Research' },
    { stat: '71%', label: 'Recommend Brands After Positive Experience' },
  ];

  const faqs = [
    {
      question: 'What platforms do you manage?',
      answer:
        'We manage all major platforms including Facebook, Instagram, LinkedIn, Twitter, YouTube, Pinterest, and TikTok.',
    },
    {
      question: 'How do you measure SMO success?',
      answer:
        'We track engagement rates, follower growth, reach, website traffic from social, and conversions to measure success.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#f5f6ff] py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 items-center gap-20">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Dominate Social Media Platforms
            </h1>
            <p className="text-3xl md:text-4xl text-gray-800 mb-10">
              Boost Chances for Reaching Top <br /> Clients Across The Globe!
            </p>
            <button className="bg-[#001f5c] hover:bg-[#001640] text-white px-8 py-4 rounded-md font-semibold">
              Get a Free Consultation
            </button>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src={socialmedia}
              alt="Social Media Marketing"
              className="max-w-[520px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            {
              icon: Megaphone,
              title: 'Brand Identity Is Incomplete Without Social Media Presence',
              text:
                'Want to build a robust brand identity? You can’t do it without leading social media platforms!',
            },
            {
              icon: Heart,
              title: 'Because We Love Social Media',
              text:
                'Our affinity with social media tactics & techniques brings your business a notable identity.',
            },
            {
              icon: Users,
              title: 'Think, Explore, Meet',
              text:
                'A social media profile helps you connect with top clients across the globe.',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-lg p-10 text-center hover:shadow-2xl transition"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <card.icon className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>


<section className="bg-white py-24">
  <div className="max-w-[1200px] mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
      Social Media Channels Where We Excel
    </h2>

    <div className="grid md:grid-cols-2 gap-8 mb-14">

      {/* FACEBOOK */}
      <div className="flex items-center rounded-lg shadow-md overflow-hidden">
        <div className="bg-[#3b5998] w-24 h-24 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">f</span>
        </div>
        <div className="p-6 bg-[#e9edf5] flex-1">
          <h4 className="font-semibold mb-2">FACEBOOK</h4>
          <p className="text-gray-700 text-sm">
            Reach, Impression, Engagement, Page Like, Lead, Traffic Redirection, Share
          </p>
        </div>
      </div>

      {/* INSTAGRAM */}
      <div className="flex items-center rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-br from-pink-500 to-yellow-400 w-24 h-24 flex items-center justify-center">
          <span className="text-white text-3xl">📷</span>
        </div>
        <div className="p-6 bg-[#fff2ec] flex-1">
          <h4 className="font-semibold mb-2">INSTAGRAM</h4>
          <p className="text-gray-700 text-sm">
            Comment, Reach, Impression, Follow, Like
          </p>
        </div>
      </div>

      {/* LINKEDIN */}
      <div className="flex items-center rounded-lg shadow-md overflow-hidden">
        <div className="bg-[#0077b5] w-24 h-24 flex items-center justify-center">
          <span className="text-white text-3xl font-bold">in</span>
        </div>
        <div className="p-6 bg-[#e6f4fb] flex-1">
          <h4 className="font-semibold mb-2">LINKEDIN</h4>
          <p className="text-gray-700 text-sm">
            Comment, Reach, Impression, Follow, Like, Share
          </p>
        </div>
      </div>

      {/* TWITTER */}
      <div className="flex items-center rounded-lg shadow-md overflow-hidden">
        <div className="bg-[#1da1f2] w-24 h-24 flex items-center justify-center">
          <span className="text-white text-3xl">🐦</span>
        </div>
        <div className="p-6 bg-[#e9f7fe] flex-1">
          <h4 className="font-semibold mb-2">TWITTER</h4>
          <p className="text-gray-700 text-sm">
            Like, Tweet, Retweet, Follow
          </p>
        </div>
      </div>

    </div>

    {/* YOUTUBE */}
    <div className="max-w-[700px] mx-auto mb-10 flex items-center rounded-lg shadow-md overflow-hidden">
      <div className="bg-red-600 w-24 h-24 flex items-center justify-center">
        <span className="text-white text-3xl">▶</span>
      </div>
      <div className="p-6 bg-[#ffe5e5] flex-1">
        <h4 className="font-semibold mb-2">YOUTUBE</h4>
        <p className="text-gray-700 text-sm">
          Like, Share, Comment, Monetisation
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center">
      <button className="bg-[#001f5c] hover:bg-[#001640] transition text-white px-8 py-4 rounded-md text-sm font-semibold">
        Call Us to Know More
      </button>
    </div>

  </div>
</section>

      {/* Features */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="feature-card text-center">
              <div className="icon-circle mx-auto">
                <f.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{f.title}</h3>
              <p className="text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Platforms */}
      {/* <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle
            title="Social Media Channels Where We Excel"
            subtitle="Expert management across all major platforms"
          />
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((p, i) => (
              <div
                key={i}
                className={`${p.color} rounded-2xl p-6 text-white flex flex-col items-center gap-3 min-w-[140px] hover:scale-105 transition`}
              >
                <p.icon className="w-10 h-10" />
                <span className="font-semibold">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      

     <section className="relative w-full bg-white py-24 overflow-hidden">
  <div className="relative max-w-[1400px] mx-auto">

    <div className="grid lg:grid-cols-2 items-stretch">

      {/* LEFT IMAGE */}
      <div className="h-full">
        <img
          src={marketing}
          alt="Social Media Marketing"
          className="w-full h-full object-cover min-h-[520px]"
        />
      </div>

      {/* RIGHT PLACEHOLDER (keeps grid balance) */}
      <div className="hidden lg:block" />
    </div>

    {/* OVERLAPPED USP CARD */}
    <div
      className="
        relative lg:absolute
        lg:top-1/2 lg:right-24
        lg:-translate-y-1/2
        z-20
        flex justify-center lg:justify-start
        px-6 lg:px-0
      "
    >
      <div
        className="
          bg-white
          border border-orange-400
          shadow-2xl
          p-12
          w-full
          max-w-[620px]   /* increased width */
        "
      >
        <h2 className="text-3xl font-bold text-[#143a5c] mb-6">
          KEY DP USPs
        </h2>

        <ul className="space-y-4 text-sm text-slate-700">
          <li className="flex gap-3">👥 Separate Team for SMO</li>
          <li className="flex gap-3">🧑‍💼 Dedicated Project Manager</li>
          <li className="flex gap-3">⭐ 5+ Years of SMO Experience</li>
          <li className="flex gap-3">
            🎨 Separate curated team of Graphic Designers, Visualizers & Content experts
          </li>
          <li className="flex gap-3">📈 Over 130+ Years of Experience</li>
          <li className="flex gap-3">✅ 100+ Projects Handled</li>
        </ul>
      </div>
    </div>

  </div>
</section>


<section className="relative w-full overflow-hidden">

  {/* TOP GRADIENT AREA */}
  <div className="bg-gradient-to-r from-[#021b33] to-[#003a8f] pt-24 pb-40">
    <h2 className="text-center text-white text-4xl font-semibold">
      SMO - FACT Checks
    </h2>
  </div>

  {/* WHITE BACKGROUND */}
  <div className="bg-white pb-24" />

  {/* OVERLAPPING FACT CARD */}
  <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-full px-6">
    <div className="max-w-[1100px] mx-auto bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] p-12">

      <ul className="space-y-4 text-sm text-slate-800">

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>The latest social media statistics show that there are 3.78 billion social media users worldwide</span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>On average, people have 7.6 social media accounts</span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>With over 2.32 billion monthly users, Facebook becomes the top-rated used social media platform</span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>Facebook and WhatsApp together handle 60 billion messages in a day</span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>Social media subscribers grew by more than 328 million from October 2018 to October 2019</span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>The latest statistics show that a user spends 2 hours and 25 minutes on social media every day</span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="w-2 h-2 mt-2 bg-blue-600 rounded-sm" />
          <span>91% of top retail brands use accounts on 2 or more social media channels</span>
        </li>

      </ul>
    </div>
  </div>

</section>


<section className="relative bg-white py-24">
  <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT */}
    <div>
      <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 mb-4">
        LET'S STRATEGIZE
      </span>

      <h2 className="text-4xl font-semibold mb-6">
        Ready to Collaborate? <br /> Get in Touch
      </h2>

      <p className="text-slate-600 leading-relaxed max-w-[520px]">
        At Digital Piloto, we have a superb team of self-motivated SMO professionals
        with a proven track record of handling 100+ successful projects.
        We focus on delivering the right value for your money.
      </p>
    </div>

    {/* RIGHT FORM */}
    <div className="bg-white rounded-xl shadow-[0_0_30px_rgba(0,150,255,0.2)] p-10 border border-blue-200">

      <h3 className="text-xl font-bold mb-6">
        MAKE POTENTIAL <span className="text-blue-500">10X GROWTH</span> POSSIBLE
      </h3>

      <form className="space-y-4">

        <div className="grid grid-cols-2 gap-4">
          <input placeholder="First Name*" className="input" />
          <input placeholder="Last Name*" className="input" />
        </div>

        <input placeholder="Email*" className="input" />

        <input placeholder="📞 Phone Number*" className="input" />

        <input placeholder="Website URL / Company name*" className="input" />

        <textarea rows="4" placeholder="Message" className="input resize-none" />

        <div className="flex items-center gap-3 border p-3 rounded">
          <input type="checkbox" />
          <span className="text-sm">I'm not a robot</span>
        </div>

        <button className="bg-[#002a5c] text-white px-8 py-3 mt-4">
          Get in Touch
        </button>

      </form>
    </div>

  </div>
</section>

<section className="w-full bg-[#0b2f4f] py-16">
  <div className="max-w-[1320px] mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-14 relative">

      {/* LEFT : FAQ */}
      <div className="text-white pr-0 md:pr-14 md:border-r md:border-white/30">
        <h3 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions (FAQs)
        </h3>

        <p className="text-white/90 leading-relaxed text-[15px] max-w-[520px]">
          We enjoy educating people on the intricacies of digital marketing.
          Every day, we receive hundreds of questions from our real customers.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium underline underline-offset-4 hover:text-orange-400 transition"
        >
          Learn More
          <span className="text-orange-400 text-lg">↗</span>
        </a>
      </div>

      {/* RIGHT : CAREER */}
      <div className="text-white pl-0 md:pl-14">
        <h3 className="text-2xl font-semibold mb-4">
          Wanna Rewarding Career?
        </h3>

        <p className="text-white/90 leading-relaxed text-[15px] max-w-[520px]">
          Join our team of experts if you have the urge to show up your potential!
          We appreciate a proactive measure to make us trust your skills!
        </p>

        <a
          href="/careers"
          className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium underline underline-offset-4 hover:text-orange-400 transition"
        >
          Join Our Team
          <span className="text-orange-400 text-lg">↗</span>
        </a>
      </div>

    </div>
  </div>
</section>

<section className="relative bg-white py-24">
  <div className="max-w-[1200px] mx-auto px-6">

    <div
      className="bg-[#0b2f4f] rounded-xl text-center
                 px-10 md:px-20 py-16
                 shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
    >
      <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
        Looking for The Assistance Of Industry-Best Professionals?
      </h2>

      <a
        href="/contact"
        className="inline-block text-white text-[17px] font-medium
                   underline underline-offset-4
                   hover:text-orange-400 transition"
      >
        Reach us Online or Schedule An Appointment To A Live Call!
      </a>
    </div>

  </div>
</section>



    </Layout>
  );
};

export default SMO;
