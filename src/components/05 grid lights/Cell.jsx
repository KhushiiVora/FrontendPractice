function Cell({ onClick, filled, isDisabled, label }) {
  return (
    <div
      aria-label={label}
      className={`grid--cell ${filled ? "activated" : ""}`}
      onClick={isDisabled ? () => {} : onClick}
    ></div>
  );
}

export { Cell };
