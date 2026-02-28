export default function SectionTitle({ children }) {
  return (
    <div className="section-title gsap-fade-up">
      <h2>{children}</h2>
      <hr className="separator" />
    </div>
  );
}
