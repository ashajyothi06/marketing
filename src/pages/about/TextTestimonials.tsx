import { Quote, Star } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const TextTestimonials = () => {
  const testimonials = [
    {
      name: 'Samreen',
      company: 'Myra Store',
      text: `Digital Piloto should be appreciated for their wonderful work.
      3 months ago I hired them after going through the Google reviews.
      My conversation with Sanjay was impressive and he guided me with the
      right plan. Results were visible within 3 months.`,
    },
    {
      name: 'Sudip',
      company: 'OM, Webamet',
      text: `Extremely thankful to Sanjay and his team for their excellent
      work on content writing. I have been working with them for the past
      3 months and undoubtedly they have the finest team providing quality content.`,
    },
    {
      name: 'Shabrish',
      company: 'Balloon Pro',
      text: `Really thankful to Amlan, Sanjay and their team who helped my
      business rank on Google within a short period of time. Their team
      consists of experts capable of delivering fruitful results.`,
    },
    {
      name: 'Ajay Rohilla',
      company: 'FIDA',
      text: `Boosting business during the pandemic is not easy, but Digital
      Piloto helped me achieve outstanding results in 2020. Truly reliable
      and dependable company.`,
    },
    {
      name: 'Ratan Patel',
      company: 'Street Investment',
      text: `I reached out during the pandemic when business was badly hit.
      Digital Piloto took over my project and proved their capabilities
      within a very short span of time. Extremely satisfied.`,
    },
    {
      name: 'Sudip',
      company: 'OM, Webamet',
      text: `Extremely thankful to Sanjay and his team for their excellent
      work on content writing. I have been working with them for the past
      3 months and undoubtedly they have the finest team providing quality content.`,
    },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-center text-4xl md:text-5xl font-semibold mb-20">
            What Our Clients Say
          </h1>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-10">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-[#bfeaff] rounded-lg p-8 relative shadow-md"
              >
                {/* QUOTE ICON */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-black" />

                {/* HEADER */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-700">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* TEXT */}
                <p className="text-slate-800 text-sm leading-relaxed mb-10">
                  {item.text}
                </p>

                {/* DIVIDER */}
                <div className="h-px bg-black/70 mb-4" />

                {/* STARS */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-black text-black"
                    />
                  ))}
                </div>
              </div>
            ))}

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

export default TextTestimonials;
