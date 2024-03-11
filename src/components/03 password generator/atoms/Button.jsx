export default function MyButton({ text, onClick, type, customClass }) {
  return (
    <button
      type={type}
      className={customClass ? customClass : ""}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
