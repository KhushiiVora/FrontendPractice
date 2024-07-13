import { forwardRef } from "react";

const Note = forwardRef((props, ref) => {
  const { text, initialPosition, ...otherProps } = props;
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: `${initialPosition?.x}px`,
        top: `${initialPosition?.y}px`,
        width: "17rem",
        padding: "1rem",
        border: "1px solid black",
        borderRadius: "0.7rem",
        userSelect: "none",
        cursor: "move",
        backgroundColor: "lightpink",
        textAlign: "justify",
      }}
      {...otherProps}
    >
      {text}
    </div>
  );
});

export { Note };
