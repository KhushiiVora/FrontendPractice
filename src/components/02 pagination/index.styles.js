import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 1rem;

  .products_container {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .products_container__product {
    padding-top: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
  }
  img {
    height: 12rem;
    width: 100%;
    object-fit: contain;
  }
  .pagination {
    margin: 1rem;
    display: flex;
    /* height: 1.5rem; */
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .pagination--page_number {
    font-size: 1.2rem;
    padding: 1rem;
    border: 1px solid black;
  }
  .pagination--left,
  .pagination--right {
    padding: 1rem;
    border: 1px solid black;
  }
  .selected {
    background-color: #777;
  }
  .disabled {
    opacity: 0;
  }
`;

export { StyledDiv };
