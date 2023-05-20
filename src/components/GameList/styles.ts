import styled from "styled-components";

export const CardsGameContainer = styled.div`
  padding: 1.875rem;
  display: grid;
  justify-content: center;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3.75rem;
  }

  @media (max-width: 992px) {
    padding: 1.5rem;
    ul {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.875rem;
    }
  }

  @media (max-width: 568px) {
    padding: 0.625rem;
    ul {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
  }
`;
