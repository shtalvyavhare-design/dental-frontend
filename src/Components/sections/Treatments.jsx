import SectionContainer from "../common/SectionContainer";

const treatments = [
  {
    title: "Dental Implants",
    description: "Permanent solution for missing teeth",
    price: "Starting $800",
  },
  {
    title: "All-on-4 / All-on-6",
    description: "Full mouth restoration",
    price: "Starting $8000",
  },
];

function Treatments() {
  return (
    <SectionContainer id="treatments">
      <h2>Treatments We Offer</h2>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {treatments.map((item) => (
          <div key={item.title} className="border p-4 rounded">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Treatments;
