import { useState } from "react";
import { Cell } from "./Cell";
import { StyledDiv } from "./index.styles";
function Index() {
  const [order, setOrder] = useState([]);
  const [deactivating, setDeactivating] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const activateCell = (index) => {
    if (!order.includes(index)) {
      const newOrder = [...order, index];
      setOrder(newOrder);
      if (newOrder.length === config.flat(1).filter(Boolean).length)
        deactivateCells();
    }
  };

  const deactivateCells = () => {
    setDeactivating(true);
    let id = setInterval(() => {
      setOrder((prevOrder) => {
        const poppingArray = prevOrder.slice();
        poppingArray.pop();
        if (poppingArray.length === 0) {
          clearInterval(id);
          setDeactivating(false);
        }
        return poppingArray;
      });
    }, 300);
  };
  return (
    <StyledDiv>
      <div
        className="container"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={`${value}-${index}`}
              onClick={() => activateCell(index)}
              label={`Cell ${index + 1}`}
              filled={order.includes(index)}
              isDisabled={order.includes(index) || deactivating}
            />
          ) : (
            <span key={`${value}-${index}`}></span>
          );
        })}
      </div>
    </StyledDiv>
  );
}

export default Index;
