function SectionContainer({ children, id }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-12">
      {children}
    </section>
  );
}

export default SectionContainer;