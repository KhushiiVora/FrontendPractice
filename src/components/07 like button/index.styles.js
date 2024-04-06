import { styled } from "styled-components";

// const defaultColor = "#888";

const StyledDiv = styled.div`
  --default-color: #888;
  --active-color: #f00;

  .likeBtn {
    padding: 0.3rem 0.5rem;
    display: flex;
    gap: 0.2rem;
    border: 2px solid var(--default-color);
    border-radius: 1rem;
    font-weight: bold;
    background-color: #fff;
    color: var(--default-color);
    cursor: pointer;
    margin: 1rem;
  }

  .likeBtn:hover {
    border: 2px solid var(--active-color);
    color: var(--active-color);
  }

  .liked,
  .liked:hover {
    color: #fff;
    background-color: var(--active-color);
    border: 2px solid var(--active-color);
  }
`;

export { StyledDiv };
