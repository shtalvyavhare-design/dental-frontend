import SectionContainer from "../common/SectionContainer";
import beforeAfterCases from "../../data/beforeAfter";

function BeforeAfter() {
  return (
    <SectionContainer id="before-after">
      <h2>Before & After Results</h2>

      <div className="grid md:grid-cols-2 gap-4 mt-5">
        {beforeAfterCases.map((item) => (
          <div key={item.id} className="border p-3 rounded">
            <p>{item.title}</p>

            <div className="flex">
              <img src={item.before} className="w-1/2" />
              <img src={item.after} className="w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default BeforeAfter;