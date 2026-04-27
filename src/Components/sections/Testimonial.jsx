import SectionContainer from "../common/SectionContainer";

const testimonials = [
  {
    name: "John (USA)",
    text: "Saved a lot and got great treatment",
  },

  
];

function Testimonials() {
  return (
    <SectionContainer id="testimonials">
      <h2>Patient Testimonials</h2>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {testimonials.map((t, i) => (
          <div key={i} className="border p-4 rounded">
            <p>"{t.text}"</p>
            <p className="font-bold mt-2">{t.name}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Testimonials;    