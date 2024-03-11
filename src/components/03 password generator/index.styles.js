import styled from "styled-components";

const StyledDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 1rem;
  color: white;
  background-color: #444;

  div {
    margin: 0.3rem;
  }

  button {
    border: none;
    padding: 0.5rem;
    background-color: #2a8b8b;
    text-transform: uppercase;
    border-radius: 0.2rem;
    font-weight: 500;
    cursor: pointer;
  }

  .password--button {
    width: 100%;
    margin: 0.5rem 0;
  }

  .password--header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .password--slider {
    display: flex;
    flex-direction: column;
  }
  .password--slider div {
    display: flex;
    justify-content: space-between;
  }

  .password__checkbox_container {
    display: grid;
    grid-template-columns: auto auto;
  }

  .password--error {
    font-style: bold;
    color: red;
  }
  .password--strength {
    display: flex;
    justify-content: space-between;
  }
`;

export { StyledDiv };
