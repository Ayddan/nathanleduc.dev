export default function ScrollIndicator() {
  return (
    <div className="scroll-indicator" style={{ opacity: 0 }}>
      <div className="scroll-indicator-line" />
      <span className="scroll-indicator-text">scroll</span>
    </div>
  );
}
