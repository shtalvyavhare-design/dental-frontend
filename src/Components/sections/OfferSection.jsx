import SectionContainer from "../common/SectionContainer";
import { Link } from "react-router-dom";

function OfferSection() {
  const email = "permanentsmilecare@gmail.com";
  const phoneNumber = "919503481627"; // replace with your WhatsApp number

  const subject = encodeURIComponent("Implant Eligibility Check");

  const body = encodeURIComponent(`Hello,

I want to start my implant eligibility check.

Please guide me with next steps.

Thank you.`);

  const whatsappMessage = encodeURIComponent(
    "Hello, I want to start my implant eligibility check. Please guide me."
  );

  return (
    <SectionContainer id="offer">
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10 shadow-soft">

        {/* 🔥 HEADLINE */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
          Get a Permanent, Natural Smile —{" "}
          <span className="text-brand-600">
            Without Paying $40,000+
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 text-slate-600 max-w-2xl">
          Advanced full mouth dental implants performed by experienced specialists 
          using globally trusted implant systems — with complete travel and treatment support.
        </p>

        {/* 💎 VALUE POINTS */}
        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="flex gap-3"><span>✔</span><p>15,000+ implants placed by senior implant surgeon</p></div>
          <div className="flex gap-3"><span>✔</span><p>Global implant systems: Straumann & Nobel Biocare</p></div>
          <div className="flex gap-3"><span>✔</span><p>Medically safe 2-stage treatment (no rushed shortcuts)</p></div>
          <div className="flex gap-3"><span>✔</span><p>Transparent treatment plan before you travel</p></div>
          <div className="flex gap-3"><span>✔</span><p>Dedicated coordinator from arrival to completion</p></div>
          <div className="flex gap-3"><span>✔</span><p>Airport pickup, hotel stay & full assistance included</p></div>

        </div>

        {/* ⚔️ COMPARISON */}
        <div className="mt-10 bg-white border border-slate-200 rounded-xl p-6">
          <p className="font-semibold text-slate-900 mb-4">
            Why Patients Choose Us Over Turkey / Mexico
          </p>

          <div className="grid md:grid-cols-3 text-sm gap-4">
            <div>
              <p className="font-bold text-red-500">Typical Clinics</p>
              <ul className="mt-2 space-y-2 text-slate-600">
                <li>❌ Rushed same-day treatments</li>
                <li>❌ Limited follow-up care</li>
                <li>❌ Assembly-line approach</li>
              </ul>
            </div>

            <div className="flex items-center justify-center text-xl font-bold text-slate-400">
              VS
            </div>

            <div>
              <p className="font-bold text-green-600">Our Approach</p>
              <ul className="mt-2 space-y-2 text-slate-700">
                <li>✔ Medically correct 2-stage protocol</li>
                <li>✔ Personalized treatment planning</li>
                <li>✔ Long-term success focused</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 💰 PRICING */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Full Mouth Implants Starting From
          </p>

          <p className="text-4xl font-extrabold text-brand-600 mt-2">
            $16,000
          </p>

          <p className="text-sm text-slate-600 mt-2">
            Save up to 60% compared to USA / UK pricing
          </p>
        </div>

        {/* 🔥 CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* <Link
            to="/#contact"
            className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold text-center"
          >
            Get Consultation
          </Link> */}
{/* 
          <Link
            to="/#before-after"
            className="border border-slate-300 hover:border-brand-600 px-6 py-3 rounded-xl font-semibold text-center"
          >
            View Results
          </Link> */}
<button
  onClick={() => {
    const section = document.getElementById("before-after");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="border border-slate-300 hover:border-brand-600 px-6 py-3 rounded-xl font-semibold text-center"
>
  View Results
</button>



        </div>

        <p className="mt-6 text-xs text-slate-500 text-center">
          No obligation. Get your treatment plan before making any decision.
        </p>
      </div>

      {/* 💡 ELIGIBILITY CHECK CARD */}
      <div className="bg-white border rounded-xl p-6 mt-6 text-center shadow">

        <h3 className="text-xl font-bold text-slate-900">
          Start with Your Implant Eligibility Check
        </h3>

        <p className="text-slate-600 mt-2">
          Get a personalized treatment plan reviewed by experienced implant specialists.
        </p>

        <p className="text-3xl font-extrabold text-brand-600 mt-4">
          $79 <span className="text-sm text-slate-500">(Adjusted later)</span>
        </p>

        <p className="text-sm text-slate-500 mt-1">
          Fully adjusted in your treatment cost if you proceed
        </p>

        <ul className="text-left mt-5 space-y-2 text-sm text-slate-700">
          <li>✔ Implant eligibility confirmation</li>
          <li>✔ Personalized treatment plan</li>
          <li>✔ Cost estimate before travel</li>
          <li>✔ Reviewed by experienced implant doctor</li>
        </ul>

        {/* EMAIL CTA */}
        <a
          href={`mailto:${email}?subject=${subject}&body=${body}`}
          className="mt-6 block w-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Start via Email
        </a>



        {/* WHATSAPP CTA */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block w-full border border-green-500 text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition"
        >
          Chat on WhatsApp
        </a>

        {/* TRUST NOTE */}
        <p className="mt-4 text-xs text-slate-500">
          Secure • Reviewed by experienced specialists • No obligation
        </p>

      </div>

    </SectionContainer>
  );
}

export default OfferSection;  