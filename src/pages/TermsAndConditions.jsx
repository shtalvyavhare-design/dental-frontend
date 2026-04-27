import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Terms & Conditions | Dental India Care";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50/40 to-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link to="/" className="text-base font-extrabold text-slate-900 md:text-lg">
            Dental India Care
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold text-brand-700 underline decoration-brand-600 underline-offset-2 transition hover:text-brand-800"
          >
            Back to home
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-2xl px-4 pb-14 pt-24 text-sm leading-relaxed text-slate-700 md:px-6 md:pb-20 md:pt-28">
        <h1 className="text-xl font-bold text-slate-900 md:text-2xl">Terms & Conditions</h1>

        <p className="mt-2 text-xs text-slate-500 md:text-sm">Last Updated: April 10, 2026</p>

        <div className="mt-8 space-y-7 md:space-y-8">
          <section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">1. Our Role</h2>
            <p className="mt-2 text-sm text-slate-700">
              We act as a facilitator connecting patients with qualified dental professionals and clinics in India. We do
              not provide medical advice, diagnosis, or treatment. All medical services are provided directly by licensed
              dental practitioners.
            </p>
          </section>

          <section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">2. Medical Disclaimer</h2>
            <p className="mt-2 text-sm text-slate-700">
              Any information shared on this website or through consultation is for informational purposes only and
              does not constitute medical advice. Final diagnosis, treatment plans, and procedures are determined solely
              by the consulting dentist or healthcare provider.
            </p>
          </section>

          <section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">3. No Guarantee of Results</h2>
            <p className="mt-2 text-sm text-slate-700">
              Medical and dental treatment outcomes may vary depending on individual conditions. We do not guarantee
              specific results or outcomes from any treatment or procedure.
            </p>
          </section>

          <section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">4. Patient Responsibility</h2>
            <p className="mt-2 text-sm text-slate-700">
              Patients are responsible for providing accurate and complete medical history, reports, and other relevant
              information. Failure to provide accurate information may affect diagnosis and treatment outcomes.
            </p>
          </section>

          <section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">5. Consent to Share Information</h2>
            <p className="mt-2 text-sm text-slate-700">
              By submitting your information through our website or communication channels, you consent to share your
              personal and medical details for the purpose of consultation, coordination, and treatment planning.
            </p>
          </section>

          <section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">6. Data Privacy</h2>
            <p className="mt-2 text-sm text-slate-700">
              We respect your privacy and take reasonable measures to protect your personal information. Your data will
              only be used for consultation, coordination, and communication purposes and will not be shared with
              unauthorized third parties.
            </p>
          </section>

          <section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">7. Travel & Accommodation</h2>
            <p className="mt-2 text-sm text-slate-700">
              We may assist with travel, accommodation, and logistics arrangements. However, we are not responsible for
              services provided by third-party providers such as airlines, hotels, or transport services.
            </p>
          </section>

          <section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">8. Limitation of Liability</h2>
            <p className="mt-2 text-sm text-slate-700">
              We act solely as a facilitator and shall not be held liable for any medical outcomes, complications,
              delays, or disputes arising from treatments provided by dental professionals or third-party service
              providers.
            </p>
          </section>

          <section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">9. Payments</h2>
            <p className="mt-2 text-sm text-slate-700">
              Any booking or consultation fees paid are for coordination and service purposes and may be adjusted
              against final treatment costs as communicated. Payment terms and refund policies, if applicable, will be
              shared separately.
            </p>
          </section>

          <section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">10. Communication</h2>
            <p className="mt-2 text-sm text-slate-700">
              By submitting your details, you agree to be contacted via phone, WhatsApp, or email for consultation and
              coordination purposes.
            </p>
          </section>

          <section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">11. Governing Law & Jurisdiction</h2>
            <p className="mt-2 text-sm text-slate-700">
              These terms shall be governed by and interpreted in accordance with the laws of India. Any disputes
              arising out of or related to the use of this service shall be subject to the exclusive jurisdiction of the
              courts located in Pune, Maharashtra, India.
            </p>
          </section>

          <section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">12. Changes to Terms</h2>
            <p className="mt-2 text-sm text-slate-700">
              We reserve the right to update or modify these Terms & Conditions at any time without prior notice.
              Continued use of our services constitutes acceptance of the updated terms.
            </p>
          </section>

<section className="scroll-mt-28">
            <h2 className="text-sm font-semibold text-slate-900 md:text-base">
13. Cancellation & Refund Policy</h2>
            <p className="mt-2 text-sm text-slate-700">
             
Any advance payment made is primarily for coordination, scheduling, and securing appointments with partner clinics and service providers.

Once appointments, treatment slots, or travel-related arrangements are confirmed, the advance payment may become non-refundable.

In the event that a patient cancels their travel or treatment after confirmation, including flight cancellation or personal reasons, the advance amount will not be refunded, as it covers administrative, coordination, and booking commitments already made.

However, in certain cases, the amount may be adjusted against future treatment if the patient chooses to reschedule within a reasonable timeframe, subject to approval.

Any specific refund terms, if applicable, will be communicated at the time of booking.
    
              </p>
          </section>



        </div>
      </main>
    </div>
  );
}
