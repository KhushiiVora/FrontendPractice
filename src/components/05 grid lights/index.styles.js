import { styled } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    border: 1px solid #000;
    width: 50%;
    padding: 1rem;
    display: grid;
    gap: 1rem;
  }
  .grid--cell {
    border: 1px solid #000;
    padding: 4rem;
  }
  .activated {
    background-color: lightgreen;
  }
`;

export { StyledDiv };
