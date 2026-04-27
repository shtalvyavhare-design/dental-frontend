import SectionContainer from "../common/SectionContainer";

function PricingWithPhases() {
  return (
    <SectionContainer id="pricing">

      {/* HEADER */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Full Mouth Dental Implants
        </h2>

        <p className="mt-2 text-slate-600">
          Transparent pricing with medically structured treatment phases
        </p>

        {/* Price Anchor */}
        <p className="mt-4 text-3xl font-extrabold text-emerald-600">
          $15,000 – $20,000
        </p>

        <p className="text-sm text-slate-500">
          (Complete treatment: Upper + Lower jaw)
        </p>
      </div>

      {/* COMPARISON STRIP */}
      <div className="mt-6 text-center bg-red-50 border border-red-100 rounded-xl p-4">
        <p className="text-sm text-slate-700">
          Same treatment in USA:{" "}
          <span className="line-through text-red-500">$40,000 – $70,000</span>
        </p>
        <p className="font-semibold text-emerald-600 mt-1">
          Save up to $50,000 without compromising on quality
        </p>
      </div>

      {/* PHASES */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">

        {/* PHASE 1 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-brand-700">
            Phase 1
          </p>

          <h3 className="mt-2 text-lg font-bold text-slate-900">
            Implants Placement & Temporary Teeth
          </h3>

          <p className="mt-3 text-sm text-slate-600">
            Surgical placement of implants with fixed temporary teeth for immediate function and aesthetics.
          </p>

          <p className="mt-4 text-xl font-bold text-slate-900">
            $10,000 – $12,000
          </p>

          <ul className="mt-4 text-sm text-slate-600 space-y-1">
            <li>✔ Implant surgery (All-on-4 / All-on-6)</li>
            <li>✔ Temporary fixed teeth</li>
            <li>✔ 5–7 days stay</li>
          </ul>
        </div>

        {/* PHASE 2 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-brand-700">
            Phase 2
          </p>

          <h3 className="mt-2 text-lg font-bold text-slate-900">
            Final Zirconia Crowns
          </h3>

          <p className="mt-3 text-sm text-slate-600">
            After healing (3–6 months), permanent crowns are placed for long-term durability and aesthetics.
          </p>

          <p className="mt-4 text-xl font-bold text-slate-900">
            $5,000 – $8,000
          </p>

          <ul className="mt-4 text-sm text-slate-600 space-y-1">
            <li>✔ Final zirconia/acrylic teeth</li>
            <li>✔ Bite correction & finishing</li>
            <li>✔ 5–7 days visit</li>
          </ul>
        </div>

      </div>

      {/* TIMELINE */}
      <div className="mt-10 rounded-xl bg-slate-50 p-5 text-center">
        <p className="text-sm font-semibold text-slate-800">
          Treatment Timeline
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Phase 1 → Healing (3–6 months) → Phase 2 (Final teeth)
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <button className="bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition">
          Get Your Personalized Treatment Plan
        </button>

        <p className="mt-2 text-xs text-slate-500">
          Free consultation • No obligation
        </p>
      </div>

    </SectionContainer>
  );
}

export default PricingWithPhases;