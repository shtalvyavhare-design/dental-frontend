// import React from "react";

// const cases = [
//   {
//     title: "All-on-4 Full Mouth Implants",
//     problem: "Missing teeth & difficulty eating",
//     treatment: "All-on-4 dental implants",
//     before: "src/assests/B&A/Case 1 before.jpeg",
//     after: "src/assests/B&A/case 1 after.jpeg",
//   },
//   {
//     title: "All-on-4 Dental Implants",
//     problem: "Missing teeth & difficulty eating",
//     treatment: "All-on-6 implants",
//     before: "src/assests/B&A/Case 2 before.jpeg",
//     after: "src/assests/B&A/Case 2 after.jpeg",
//   },  
//   {
//     title: "Orthodontic Treatment",
//     problem: "Misaligned teeth",
//     treatment: "Missing teeth & difficulty eating",
//     before: "src/assests/B&A/Case 3 before.jpeg",
//     after: "src/assests/B&A/Case 3 after.jpeg",
//   },
//   {
//     title: "Orthodontic Treatment",
//     problem: "Misaligned teeth",
//     treatment: "Missing teeth & difficulty eating",
//     before: "src/assests/B&A/Case 4 before.jpeg",
//     after: "src/assests/B&A/Case 4 after.jpeg",
//   },
// ];

// const ResultsSection = () => {
//   return (
//     <section className="container my-5">
//       {/* Header */}
//       <div className="text-center mb-5">
//         <h2 className="fw-bold">Before & After Results That Speak for Themselves</h2>
//         <p className="text-muted">
//           Real patient transformations based on their dental condition and treatment plan.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="row">
//         {cases.map((item, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <div className="card shadow-sm h-100">
              
//               {/* Image Comparison */}
//               <div className="d-flex">
//                 <img src={item.before} alt="Before" className="img-fluid w-50" />
//                 <img src={item.after} alt="After" className="img-fluid w-50" />
//               </div>

//               {/* Content */}
//               <div className="card-body">
//                 <h5 className="fw-bold">{item.title}</h5>
//                 <p className="mb-1"><strong>Problem:</strong> {item.problem}</p>
//                 <p className="mb-1"><strong>Treatment:</strong> {item.treatment}</p>
//                 <p className="mb-3"><strong>Duration:</strong> {item.duration}</p>

//                 <button className="btn btn-primary w-100">
//                   Check Eligibility
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-5 p-4 bg-light rounded">
//         <h4 className="fw-bold">Want Results Like This?</h4>
//         <p>Upload your X-ray or dental history and get a professional assessment.</p>
//         <button className="btn btn-success px-4">
//           Get Free Assessment
//         </button>
//         <p className="small text-muted mt-2">
//           Results may vary depending on individual conditions.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default ResultsSection;

import SectionContainer from "../common/SectionContainer";

const cases = [
  {
    title: "All-on-4 Full Mouth Implants",
    problem: "Missing teeth & difficulty eating",
    treatment: "All-on-4 dental implants",
    before: "/assests/B&A/Case 1 before.jpeg",
    after: "/assests/B&A/case 1 after.jpeg",
  },
  {
    title: "All-on-6 Dental Implants",
    problem: "Severe tooth loss",
    treatment: "All-on-6 implants",
    before: "/assests/B&A/Case 2 before.jpeg",
    after: "/assests/B&A/Case 2 after.jpeg",
  },
  {
    title: "Orthodontic Treatment",
    problem: "Misaligned teeth",
    treatment: "Braces / Smile correction",
    before: "/assests/B&A/Case 3 before.jpeg",
    after: "/assests/B&A/Case 3 after.jpeg",
  },
  {
    title: "Smile Makeover",
    problem: "Aesthetic concerns",
    treatment: "Veneers & alignment",
    before: "/assests/B&A/Case 4 before.jpeg",
    after: "/assests/B&A/Case 4 after.jpeg",
  },
];

function ResultsSection() {
  return (
    <SectionContainer id="before-after">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">
          Real Patient Transformations
        </h2>
        <p className="mt-3 text-slate-600">
          See how patients restored their smile, confidence, and quality of life.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {cases.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            {/* BEFORE AFTER */}
            <div className="grid grid-cols-2">
              <div className="relative">
                <img
                  src={item.before}
                  alt="Before"
                  className="h-40 w-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-xs bg-black/70 text-white px-2 py-1 rounded">
                  Before
                </span>
              </div>

              <div className="relative">
                <img
                  src={item.after}
                  alt="After"
                  className="h-40 w-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-xs bg-green-600 text-white px-2 py-1 rounded">
                  After
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="font-bold text-slate-900 text-sm md:text-base">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 mt-2">
                <strong>Problem:</strong> {item.problem}
              </p>

              <p className="text-xs text-slate-600">
                <strong>Treatment:</strong> {item.treatment}
              </p>

              {/* CTA */}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=permanentsmilecare@gmail.com&su=${encodeURIComponent(
                  "Eligibility Check Request",
                )}&body=${encodeURIComponent(
                  "Hi,\n\nI saw your patient results and want to check my eligibility for dental implants.\n\nPlease guide me.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="block mt-4 text-center bg-brand-600 hover:bg-brand-700 text-white text-sm py-2 rounded-lg font-semibold transition"
              >
                Check Eligibility
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* FINAL CTA */}
      <div className="mt-14 bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-2xl p-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900">
          Want Results Like This?
        </h3>

        <p className="text-slate-600 mt-2">
          Send your X-ray or dental history and get a professional assessment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          
          {/* EMAIL */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=permanentsmilecare@gmail.com&su=${encodeURIComponent(
              "Dental Consultation Request",
            )}&body=${encodeURIComponent(
              "Hi,\n\nI want to get a treatment plan for dental implants.\n\nPlease guide me.",
            )}`}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Email for Assessment
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20check%20my%20eligibility%20for%20dental%20implants"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-300 hover:border-green-500 px-6 py-3 rounded-xl font-semibold"
          >
            WhatsApp Us
          </a>
        </div>

        <p className="text-xs text-slate-500 mt-4">
          Results may vary depending on individual conditions.
        </p>
      </div>
    </SectionContainer>
  );
}

export default ResultsSection;