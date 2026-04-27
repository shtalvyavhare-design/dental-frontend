import { doctors } from "../../data/doctors";
import SectionContainer from "../common/SectionContainer";

function Doctors() {
  return (
    <SectionContainer id="doctors">
      
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Meet Our Implant Specialists
        </h2>
        <p className="mt-2 text-slate-600">
          Experienced doctors with thousands of successful implant procedures
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doc) => (
          <div
            key={doc.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            
            {/* Image Placeholder */}
            <div className="h-24 w-24 mx-auto rounded-full bg-slate-200 mb-4" />

            {/* Name */}
            <h3 className="text-lg font-bold text-slate-900 text-center">
              {doc.name}
            </h3>

            {/* Experience */}
            <p className="text-sm text-brand-600 font-semibold text-center mt-1">
              {doc.experience}
            </p>

            {/* Description (optional) */}
            {doc.description && (
              <p className="text-sm text-slate-600 mt-3 text-center">
                {doc.description}
              </p>
            )}

            {/* Trust Tag */}
            <p className="text-xs text-slate-500 mt-4 text-center">
              ✔ Implant Specialist
            </p>
          </div>
        ))}
      </div>

    </SectionContainer>
  );
}

export default Doctors;