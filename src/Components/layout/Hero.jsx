import SectionContainer from "../common/SectionContainer";

function Hero() {
  const whatsappLink =
    "https://wa.me/919503481627?text=Hi%2C%20I%E2%80%99m%20interested%20in%20dental%20treatment%20in%20India.%20Can%20you%20guide%20me%3F";

  return (
    <div className="bg-gradient-to-b from-brand-50 to-white">
      <SectionContainer id="hero">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft md:p-12">
          <p className="mb-4 inline-flex rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700">
            Trusted by International Patients from USA & UK
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Premium Dental Implants in India — Save Up to 70% Compared to USA,
            NZ, AU & UK
          </h1>
          <p className="mt-3 text-base font-medium text-slate-700">
            Trusted by patients seeking affordable dental care in India
          </p>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            32+ Years Experienced Implant Surgeons | Advanced All-on-4 &
            All-on-6 Treatments
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-brand-600 px-7 py-3 text-center font-semibold text-white transition hover:bg-brand-700"
            >
              Get Treatment Plan
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=permanentsmilecare@gmail.com&su=${encodeURIComponent(
                "Consultation Request",
              )}&body=${encodeURIComponent(
                "Hi,\n\nI’m interested in dental treatment in India.\n\nPlease guide me.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white px-7 py-3 text-center font-semibold text-slate-800 transition hover:border-brand-200 hover:text-brand-700"
            >
              Email Us
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white px-7 py-3 text-center font-semibold text-slate-800 transition hover:border-brand-200 hover:text-brand-700"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-sm font-medium text-slate-600">
            WhatsApp: +91 9503481627
          </p>
          <p className="mt-4 text-xs text-slate-500 text-center">
            For faster response and personalized care, consultations are
            currently handled directly via{" "}
            <span className="font-semibold">Email & WhatsApp</span>. Our team
            will guide you step-by-step.
          </p>
        </div>
      </SectionContainer>
    </div>
  );
}

export default Hero;
