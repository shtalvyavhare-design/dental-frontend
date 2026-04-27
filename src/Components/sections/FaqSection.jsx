import SectionContainer from "../common/SectionContainer";

const faqItems = [
  {
    question: "How much can I save?",
    answer: "Up to 70% compared to USA/UK", 
  },
];

function FaqSection() {
  return (
    <SectionContainer id="faqs">
      <h2>FAQs</h2>

      {faqItems.map((faq, i) => (
        <details key={i} className="border p-3 rounded mt-2">
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </SectionContainer>
  );
}

export default FaqSection;
