import SectionContainer from "../common/SectionContainer";
import trustBadges from "../../data/trustBadges";

function TrustBadges() {
  return (
    <SectionContainer id="trust">
      
      <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6 shadow-sm">
        
        {/* Heading */}
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
          Why Choose Us
        </p>

        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
          Trusted by International Patients for Advanced Dental Care
        </h2>

        {/* Grid */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.title}
              className="rounded-xl border border-white bg-white p-4 hover:shadow-md transition"
            >
              <h4 className="text-sm font-bold text-slate-900">
                {badge.title}
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <p className="mt-5 text-sm text-slate-700">
          All treatments performed by experienced specialists using modern technology and international safety protocols.
        </p>

      </div>

    </SectionContainer>
  );
}

export default TrustBadges;