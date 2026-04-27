// import { useState, useRef, useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import TermsAndConditions from "./pages/TermsAndConditions";
// import LeadsPage from "./pages/LeadsPage";

// /* ❌ FIX: You cannot have a loose JSX element at the top level of a file. 
//   This must be placed inside your main App router component like this:
  
//   function App() {
//     return (
//       <Routes>
//         <Route path="/admin/leads" element={<LeadsPage />} />
//       </Routes>
//     )
//   } 
// */
// // <Route path="/admin/leads" element={<LeadsPage />} />;

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import LeadsPage from "./pages/LeadsPage";
// import TermsAndConditions from "./pages/TermsAndConditions";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/admin/leads" element={<LeadsPage />} />
//       <Route path="/terms" element={<TermsAndConditions />} />
//     </Routes>
//   );
// }

// export default App;





// function App() {
  
//   // Example logic (Keep your 900+ lines of logic here)
 




// const steps = [
//   "Submit your reports",
//   "Get treatment plan",
//   "Travel to India",
//   "Get treatment completed",
// ];


// const trustBadges = [
//   {
//     title: "32+ Years Implant Expertise",
//     description:
//       "Senior surgeons with decades of full-mouth implant experience.",
//   },
//   {
//     title: "4.9 International Rating",
//     description: "Highly rated treatment outcomes from USA and UK patients.",
//   },
//   {
//     title: "Up to 70% Cost Savings",
//     description:
//       "Transparent pricing with premium quality and no hidden costs.",
//   },
//   {
//     title: "End-to-End Travel Support",
//     description:
//       "Assistance with planning, airport pickup, and treatment coordination.",
//   },
// ];

// const faqItems = [
//   {
//     question: "How much can I save on dental implants in India?",
//     answer:
//       "International patients often save between 50% and 70% compared to USA and UK pricing, depending on the treatment complexity.",
//   },
//   {
//     question: "How long do I need to stay in India for implant treatment?",
//     answer:
//       "Typical stays range from 5 to 10 days for consultation and key procedures, with follow-up timelines shared in your personalized treatment plan.",
//   },
//   {
//     question: "Is the treatment quality comparable to USA and UK clinics?",
//     answer:
//       "Yes. Partner clinics use advanced imaging, guided implant systems, and internationally accepted sterilization protocols.",
//   },
//   {
//     question: "Will I receive a treatment plan before I travel?",
//     answer:
//       "Yes. After reviewing your reports, the team shares a provisional treatment roadmap, timeline, and estimated cost before travel.",
//   },
// ];

// const sectionTitleStyle = "text-2xl md:text-3xl font-bold text-slate-900";

// const formLabelClass =
//   "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500";
// const formInputBase =
//   "w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400";
// const formInputNormal =
//   "border-slate-200 hover:border-slate-300 focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10";
// const formInputError =
//   "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100";
// const navItems = [
//   { label: "Pricing", href: "#pricing" },
//   { label: "Doctors", href: "#doctors" },
//   { label: "Treatments", href: "#treatments" },
//   { label: "Results", href: "#before-after" },
//   { label: "Testimonials", href: "#testimonials" },
//   { label: "Process", href: "#process" },
//   { label: "FAQs", href: "#faqs" },
// ];

// function SectionContainer({ children, id }) {
//   return (
//     <section
//       id={id}
//       className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14 md:px-6"
//     >
//       {children}
//     </section>
//   );
// }




// function TrustBadges() {
//   return (
//     <SectionContainer id="trust">
//       <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6 shadow-soft">
//         <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
//           Why patients choose us
//         </p>
//         <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//           {trustBadges.map((badge) => (
//             <article
//               key={badge.title}
//               className="rounded-xl border border-white bg-white p-4"
//             >
//               <p className="text-sm font-bold text-slate-900">{badge.title}</p>
//               <p className="mt-2 text-sm text-slate-600">{badge.description}</p>
//             </article>
//           ))}
//         </div>
//         <p className="mt-4 text-sm text-slate-700">
//           All treatments performed by experienced dental specialists using
//           modern equipment
//         </p>
//       </div>
//     </SectionContainer>
//   );
// }

// function PriceComparison() {
//   return (
//     <SectionContainer id="pricing">
//       <h2 className={sectionTitleStyle}>Price Comparison: USA vs India</h2>
//       <p className="mt-2 text-slate-600">
//         Get premium treatment quality with significant cost savings for
//         international care.
//       </p>
//       <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
//         <div className="grid grid-cols-3 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
//           <p>Treatment</p>
//           <p className="text-center">USA</p>
//           <p className="text-center">India</p>
//         </div>
//         <div className="grid grid-cols-3 border-t border-slate-100 p-4 text-slate-700">
//           <p className="font-medium">Full Mouth Implants</p>
//           <p className="text-center text-red-600">$40,000</p>
//           <p className="text-center font-semibold text-emerald-600">$8,000</p>
//         </div>
//         <div className="grid grid-cols-3 border-t border-slate-100 p-4 text-slate-700">
//           <p className="font-medium">Single Implant</p>
//           <p className="text-center text-red-600">$3,000</p>
//           <p className="text-center font-semibold text-emerald-600">$800</p>
//         </div>
//       </div>
//     </SectionContainer>
//   );
// }

// function Doctors() {
//   return (
//     <SectionContainer id="doctors">
//       <h2 className={sectionTitleStyle}>Meet Our Implant Specialists</h2>
//       <p className="mt-2 text-slate-600">
//         Combined 1000+ successful implant procedures
//       </p>
//       <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
//         {doctors.map((doctor) => (
//           <article
//             key={doctor.name}
//             className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft"
//           >
//             <div className="mb-4 h-24 rounded-xl bg-gradient-to-br from-brand-100 to-slate-100" />
//             <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
//             <p className="mt-1 text-sm font-semibold text-brand-700">
//               {doctor.experience}
//             </p>
//             <p className="mt-3 text-sm text-slate-600">{doctor.description}</p>
//           </article>
//         ))}
//       </div>
//     </SectionContainer>
//   );
// }

// function Treatments() {
//   return (
//     <SectionContainer id="treatments">
//       <h2 className={sectionTitleStyle}>Treatments We Offer</h2>
//       <div className="mt-7 grid gap-5 md:grid-cols-2">
//         {treatments.map((item) => (
//           <article
//             key={item.title}
//             className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
//           >
//             <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
//             <p className="mt-3 text-slate-600">{item.description}</p>
//             <p className="mt-4 font-semibold text-brand-700">{item.price}</p>
//           </article>
//         ))}
//       </div>
//     </SectionContainer>
//   );
// }

// function BeforeAfter() {
//   return (
//     <SectionContainer id="before-after">
//       <h2 className={sectionTitleStyle}>Before & After Results</h2>
//       <p className="mt-2 text-slate-600">
//         Real smile transformations from our international patients.
//       </p>
//       <div className="mt-7 grid gap-5 md:grid-cols-2">
//         {beforeAfterCases.map((item) => (
//           <article
//             key={item.id}
//             className="rounded-2xl border border-slate-100 bg-white p-4 shadow-soft"
//           >
//             <p className="mb-3 text-sm font-semibold text-brand-700">
//               {item.title}
//             </p>
//             <div className="grid gap-3 sm:grid-cols-2">
//               <figure className="overflow-hidden rounded-xl border border-slate-200">
//                 <img
//                   src={item.before}
//                   alt={`${item.title} before treatment`}
//                   loading="lazy"
//                   className="h-44 w-full object-cover"
//                 />
//                 <figcaption className="bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
//                   Before
//                 </figcaption>
//               </figure>
//               <figure className="overflow-hidden rounded-xl border border-slate-200">
//                 <img
//                   src={item.after}
//                   alt={`${item.title} after treatment`}
//                   loading="lazy"
//                   className="h-44 w-full object-cover"
//                 />
//                 <figcaption className="bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
//                   After
//                 </figcaption>
//               </figure>
//             </div>
//           </article>
//         ))}
//       </div>
//     </SectionContainer>
//   );
// }

// function Testimonials() {
//   return (
//     <SectionContainer id="testimonials">
//       <h2 className={sectionTitleStyle}>Patient Testimonials</h2>
//       <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
//         {testimonials.map((item) => (
//           <article
//             key={item.name}
//             className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft"
//           >
//             <p className="text-sm font-semibold text-brand-700">
//               Rating: {item.rating}
//             </p>
//             <p className="mt-3 text-slate-700">"{item.text}"</p>
//             <p className="mt-4 text-sm font-bold text-slate-900">{item.name}</p>
//           </article>
//         ))}
//       </div>
//     </SectionContainer>
//   );
// }

// function HowItWorks() {
//   return (
//     <SectionContainer id="process">
//       <h2 className={sectionTitleStyle}>How It Works</h2>
//       <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//         {steps.map((step, index) => (
//           <div
//             key={step}
//             className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft"
//           >
//             <p className="text-sm font-semibold text-brand-700">
//               Step {index + 1}
//             </p>
//             <p className="mt-2 font-medium text-slate-800">{step}</p>
//           </div>
//         ))}
//       </div>
//     </SectionContainer>
//   );
// }

// function FaqSection() {
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqItems.map((item) => ({
//       "@type": "Question",
//       name: item.question,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: item.answer,
//       },
//     })),
//   };

//   return (
//     <SectionContainer id="faqs">
//       <h2 className={sectionTitleStyle}>Frequently Asked Questions</h2>
//       <p className="mt-2 text-slate-600">
//         Clear answers for international patients planning dental treatment in
//         India.
//       </p>
//       <div className="mt-7 space-y-3">
//         {faqItems.map((item) => (
//           <details
//             key={item.question}
//             className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft"
//           >
//             <summary className="cursor-pointer list-none font-semibold text-slate-900">
//               {item.question}
//             </summary>
//             <p className="mt-3 text-slate-600">{item.answer}</p>
//           </details>
//         ))}
//       </div>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />
//     </SectionContainer>
//   );
// }

// const DENTAL_REPORTS_FORM_URL =
//   "https://docs.google.com/forms/d/e/1FAIpQLScPHlfshXbNgPVVf6c51nH5eu1-3jlKu418USNL4-Dpq2c_OQ/viewform?usp=publish-editor";

// const CONSULTATION_API_URL =
//   import.meta.env.VITE_CONSULTATION_API_URL ?? "http://localhost:5000/submit-form";
  
// const WHATSAPP_DIAL_CODES = [
//   { label: "India", value: "+91" },
//   { label: "UK", value: "+44" },
//   { label: "USA", value: "+1" },
//   { label: "UAE", value: "+971" },
//   /** Same dial as USA; separate value so the dropdown has two entries */
//   { label: "Canada", value: "+1-ca" },
//   { label: "Custom code…", value: "custom" },
// ];

// /** Map select value to the real dial prefix (e.g. "+1-ca" → "+1"). */
// function dialPrefixFromValue(stored) {
//   if (stored === "+1-ca") return "+1";
//   return stored;
// }

// /** User-typed dial code: accepts +91, 91, 0091 → "+91". */
// function normalizeCustomDial(raw) {
//   const s = String(raw ?? "").trim();
//   if (!s) return "";
//   let digits = s.replace(/\D/g, "");
//   if (s.replace(/\s/g, "").startsWith("00") && digits.length >= 2) {
//     digits = digits.replace(/^00/, "");
//   }
//   if (!digits) return "";
//   return `+${digits}`;
// }

// /** Preset dropdown or custom input → dial string like "+91". */
// function dialPrefixForForm(selectValue, customDialRaw) {
//   if (selectValue === "custom") {
//     return normalizeCustomDial(customDialRaw);
//   }
//   return dialPrefixFromValue(selectValue);
// }

// /** Combine dial code + local number, then keep digits only (no +, spaces, dashes). */
// function cleanWhatsappDigits(countryCodeSelectValue, customDial, localNumber) {
//   const prefix = dialPrefixForForm(countryCodeSelectValue, customDial);
//   if (countryCodeSelectValue === "custom" && !prefix) {
//     return "";
//   }
//   const combined = `${prefix}${localNumber}`;
//   return combined.replace(/\D/g, "");
// }

 

// export default App



import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LeadsPage from "./pages/LeadsPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import OfferSection from "./Components/sections/OfferSection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/leads" element={<LeadsPage />} />
      <Route path="/terms" element={<TermsAndConditions />} />
    </Routes>
  );  
}

export default App;