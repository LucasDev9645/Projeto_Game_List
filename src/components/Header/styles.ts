import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: flex;
  padding: 1.25rem 2.5rem;
  background: var(--background-black-950);

  h1 {
    margin-left: 1.25rem;
    color: var(--color-green-500);
  }

  @media (max-width: 568px) {
    font-size: 0.75rem;
    padding: 1.25rem;

    h1 {
      margin-left: 0.62rem;
    }

    img {
      width: 22px;
    }
  }
`;
