import Layout from "@/components/layout/Layout";
import worldMap from "@/assets/globe1.png";
import contactImg1 from "@/assets/contact-1.png";
import contactImg2 from "@/assets/contact-2.png";

const Contact = () => {
  return (
    <Layout>

      {/* ================= HERO / CONTACT INTRO ================= */}
      <section className="relative bg-white py-20 overflow-hidden">

        {/* World Map */}
        <img
          src={worldMap}
          alt="World Map"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Floating Images */}
        <img
          src={contactImg1}
          className="hidden lg:block absolute left-24 top-40 w-28 rounded-full shadow-lg"
        />
        <img
          src={contactImg2}
          className="hidden lg:block absolute right-24 top-32 w-36 rounded-lg shadow-lg"
        />

        <div className="relative max-w-[1320px] mx-auto px-6 text-center">
          <h2 className="text-xl font-semibold mb-6">Contact Us</h2>

          {/* Center DP Logo Text */}
          <div className="text-[72px] font-extrabold text-sky-300 opacity-80 mb-10">
            dp
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto text-sm">

            <div>
              <div className="mb-2 font-semibold">Schedule a Call with Us</div>
              <p className="text-blue-600">Sales: +91 70085 41401</p>
              <p className="text-blue-600">HR: +91 70085 68882</p>
            </div>

            <div>
              <div className="mb-2 font-semibold">Office Address</div>
              <p>113, Regent Place, Ground Floor, Near Juba</p>
              <p>Kolkata – 700040, West Bengal</p>
              <p className="mt-1 font-semibold">
                USA, Canada, India, New Zealand, Australia, Nepal
              </p>
            </div>

            <div>
              <div className="mb-2 font-semibold">Email Us</div>
              <p className="text-blue-600">info@digitalpiloto.com</p>
              <p className="text-blue-600">hr@digitalpiloto.com</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="bg-white py-20">
        <div className="max-w-[900px] mx-auto px-6">

          <h3 className="text-center text-xl font-semibold mb-8">
            Send Us a Message
          </h3>

          <div className="space-y-8">

            {/* Your Details */}
            <div className="border rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-4 text-sm">YOUR DETAILS</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <input className="border p-3 rounded" placeholder="Name*" />
                <input className="border p-3 rounded" placeholder="Phone*" />
                <input className="border p-3 rounded" placeholder="Email*" />
                <input className="border p-3 rounded" placeholder="Website" />
              </div>
            </div>

            {/* Type of Project */}
            <div className="border rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-4 text-sm">TYPE OF PROJECT</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <label className="border p-3 rounded flex gap-2 items-center">
                  <input type="checkbox" /> Digital Marketing
                </label>
                <label className="border p-3 rounded flex gap-2 items-center">
                  <input type="checkbox" /> Web Development
                </label>
                <label className="border p-3 rounded flex gap-2 items-center">
                  <input type="checkbox" /> Other
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="border rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-4 text-sm">BRIEF DESCRIPTION</h4>
              <textarea
                rows={5}
                className="w-full border p-3 rounded"
                placeholder="Message"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button className="bg-[#0b2f4f] text-white px-8 py-3 font-semibold">
                YES, SUBMIT THIS
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ + CAREER STRIP ================= */}
      <section className="bg-[#0b2f4f] py-20">
        <div className="max-w-[1320px] mx-auto px-6 grid md:grid-cols-2 gap-16 text-white">

          <div className="md:border-r md:border-white/30 pr-0 md:pr-16">
            <h3 className="text-2xl font-bold mb-4">
              Frequently Asked Questions (FAQs)
            </h3>
            <p className="text-white/80 mb-6">
              We enjoy educating people on the intricacies of digital marketing.
              Every day, we receive hundreds of questions from our real customers.
            </p>
            <a href="/contact" className="underline">
              Learn More ↗
            </a>
          </div>

          <div className="pl-0 md:pl-16">
            <h3 className="text-2xl font-bold mb-4">
              Wanna Rewarding Career?
            </h3>
            <p className="text-white/80 mb-6">
              Join our team of experts if you have the urge to show up your potential!
            </p>
            <a href="/careers" className="underline">
              Join Our Team ↗
            </a>
          </div>

        </div>
      </section>

      {/* ================= BIG CTA ================= */}
      <section className="bg-white py-24">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-[#0b2f4f] text-center py-16 rounded-xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Looking for The Assistance Of Industry-Best Professionals?
            </h3>
            <a
              href="/contact"
              className="text-white underline text-lg"
            >
              Reach us Online or Schedule An Appointment To A Live Call!
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
