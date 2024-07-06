import { useCallback, useState } from "react";

const Grid = (props) => {
  const { rows = 10, cols = 10 } = props;

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedCells, setSelectedCells] = useState([]);

  const handleMouseDown = (cell) => {
    setIsMouseDown(true);

    setSelectedCells([cell]);
  };

  const handleMouseEnter = useCallback(
    (cell) => {
      if (isMouseDown) {
        const startCell = selectedCells[0];
        const endCell = cell;

        const startRow = Math.floor(startCell / cols);
        const startCol = startCell % cols;

        const endRow = Math.floor(endCell / rows);
        const endCol = endCell % rows;

        const minRow = Math.min(startRow, endRow);
        const minCol = Math.min(startCol, endCol);
        const maxRow = Math.max(startRow, endRow);
        const maxCol = Math.max(startCol, endCol);

        const selected = [];
        for (let i = minRow; i <= maxRow; i++) {
          for (let j = minCol; j <= maxCol; j++) {
            selected.push(i * cols + j);
          }
        }
        setSelectedCells(selected);
      }
    },
    [isMouseDown]
  );

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div
      className="grid"
      style={{ "--rows": rows, "--cols": cols }}
      onMouseUp={handleMouseUp}
    >
      {console.log(selectedCells)}
      {[...Array(rows * cols)].map((_, i) => {
        return (
          <div
            key={i}
            className={`grid--box ${
              selectedCells.includes(i) ? "selected" : ""
            }`}
            onMouseDown={() => handleMouseDown(i)}
            onMouseEnter={() => handleMouseEnter(i)}
          >
            {i + 1}
          </div>
        );
      })}
    </div>
  );
};

export { Grid };
