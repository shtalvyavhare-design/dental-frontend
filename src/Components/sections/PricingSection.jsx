import { useState } from "react";
import SectionContainer from "../common/SectionContainer";

function PricingSection() {
  const [mode, setMode] = useState("full"); // full | arch
  const [type, setType] = useState("standard"); // standard | zirconia

  const pricing = {
    full: {
      standard: {
        price: "$16,000 – $18,000",
        desc: "Acrylic / Hybrid Teeth",
      },
      zirconia: {
        price: "$21,000 – $24,000",
        desc: "Premium Zirconia Teeth",
      },
    },
    arch: {
      standard: {
        price: "$11,000 – $13,000",
        desc: "Acrylic / Hybrid Teeth",
      },
      zirconia: {
        price: "$13,000 – $15,000",
        desc: "Premium Zirconia Teeth",
      },
    },
  };

  const current = pricing[mode][type];

  const email = "permanentsmilecare@gmail.com";

  const subject = encodeURIComponent("Treatment Plan Request");

  const body = encodeURIComponent(`Hello,

I would like to get a treatment plan.

Please guide me.

Thank you.`);

  return (
    <SectionContainer id="pricing">
      {/* HEADER */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Transparent Implant Pricing
        </h2>

        <p className="mt-2 text-slate-600">
          Choose your treatment type and see exact pricing instantly
        </p>
      </div>

      {/* TOGGLES */}
      <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
        {/* FULL / ARCH */}
        <div className="flex bg-slate-100 rounded-xl p-1">
          <button
            onClick={() => setMode("full")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              mode === "full"
                ? "bg-white shadow text-slate-900"
                : "text-slate-600"
            }`}
          >
            Full Mouth
          </button>
          <button
            onClick={() => setMode("arch")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              mode === "arch"
                ? "bg-white shadow text-slate-900"
                : "text-slate-600"
            }`}
          >
            Per Arch
          </button>
        </div>

        {/* TYPE */}
        <div className="flex bg-slate-100 rounded-xl p-1">
          <button
            onClick={() => setType("standard")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              type === "standard"
                ? "bg-white shadow text-slate-900"
                : "text-slate-600"
            }`}
          >
            Standard
          </button>
          <button
            onClick={() => setType("zirconia")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              type === "zirconia"
                ? "bg-white shadow text-slate-900"
                : "text-slate-600"
            }`}
          >
            Zirconia
          </button>
        </div>
      </div>

      {/* PRICE CARD */}
      <div className="mt-10 max-w-xl mx-auto rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft">
        <p className="text-sm text-brand-700 font-semibold">
          {mode === "full" ? "Full Mouth Treatment" : "Single Arch Treatment"}
        </p>

        <h3 className="mt-3 text-3xl font-extrabold text-slate-900">
          {current.price}
        </h3>

        <p className="mt-2 text-sm text-slate-600">{current.desc}</p>

        <div className="mt-6 text-sm text-slate-600 space-y-1">
          <p>✔ Implants placement (All-on-4 / All-on-6)</p>
          <p>✔ Temporary teeth included</p>
          <p>✔ Final prosthesis after healing</p>
          <p>✔ Airport pickup & coordinator support</p>
        </div>

        {/* TRUST LINE */}
        <p className="mt-5 text-xs text-slate-500">
          15,000+ implants done • 25+ years experience • Premium implant systems
        </p>

        {/* CTA */}
        {/* <button className="mt-6 w-full bg-brand-600 text-white py-3 rounded-xl font-semibold hover:bg-brand-700 transition">
          Get Treatment Plan
        </button>
         */}
        <button
          onClick={() => {
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
          }}
          className="mt-6 w-full bg-brand-600 text-white py-3 rounded-xl font-semibold hover:bg-brand-700 transition"
        >
          Get Treatment Plan
        </button>

        <a
          href="https://wa.me/919503481627?text=I%20want%20treatment%20plan"
          target="_blank"
          className="mt-3 block w-full border border-green-500 text-green-600 py-3 rounded-xl font-semibold text-center hover:bg-green-50 transition"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* FOOTNOTE */}
      <p className="mt-6 text-center text-xs text-slate-500">
        *Final cost may vary based on bone condition, extractions, and case
        complexity
      </p>
    </SectionContainer>
  );
}

export default PricingSection;
