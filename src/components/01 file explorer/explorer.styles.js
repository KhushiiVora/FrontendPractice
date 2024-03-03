import styled from "styled-components";

const StyledDiv = styled.div`
  .structure_container {
    display: flex;
    width: 50%;
    justify-content: space-between;
    cursor: pointer;
  }

  .structure_container__folder {
    margin-left: 1em;
    cursor: pointer;
  }
  .input {
    margin-left: 1em;
  }
  .selected {
    background-color: #ababab;
  }
`;
export { StyledDiv };
