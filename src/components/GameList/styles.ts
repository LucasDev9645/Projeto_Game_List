import styled from "styled-components";

export const CardsGameContainer = styled.div`
  padding: 30px;
  display: grid;
  justify-content: center;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
  }

  @media (max-width: 992px) {
    padding: 25px;
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
  }

  @media (max-width: 568px) {
    padding: 10px;
    ul {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
`;
