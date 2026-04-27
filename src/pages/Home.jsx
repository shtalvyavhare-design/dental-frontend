import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";

import TrustBadges from "../components/sections/TrustBadges";
import PriceComparison from "../components/sections/PriceComparison";
import Doctors from "../components/sections/Doctors";
import Treatments from "../components/sections/Treatments";
import BeforeAfter from "../components/sections/BeforeAfter";
import Testimonial from "../components/sections/Testimonial";
import FaqSection from "../components/sections/FaqSection";
import ContactForm from "../Components/sections/ContactForm";
import OfferSection from "../Components/sections/OfferSection";
import PricingSection from "../Components/sections/PricingSection";
import ResultsSection from "../Components/sections/ResultsSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBadges />
      <OfferSection/>
<PricingSection/> 
      {/* <PriceComparison /> */}
      <Doctors />
      {/* <Treatments /> */}
<ResultsSection/>
      <BeforeAfter />
      <Testimonial />
      <ContactForm />
      <FaqSection />
    </>
  );
}

export default Home;
