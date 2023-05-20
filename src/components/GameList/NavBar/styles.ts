import styled from "styled-components";

export const NavBarContainer = styled.nav`
  padding: 1.25rem;

  ul {
    display: flex;
    justify-content: center;
  }

  li {
    margin: 0 30px;
  }

  @media (max-width: 992px) {
    padding: 1rem;

    li {
      margin: 0 25px;
    }
  }

  @media (max-width: 768px) {
    li {
      margin: 0 20px;
    }
  }

  @media (max-width: 568px) {
    ul {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const NavBarH1 = styled.h1`
  color: var(--color-green-500);
  font-weight: 700;
  font-size: 3.125rem;
  margin-bottom: 1.875rem;

  @media (max-width: 992px) {
    font-size: 3rem;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 568px) {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const NavBarP = styled.p`
  margin-top: 1.875rem;
  color: var(--color-green-500);
  font-size: 1.25rem;

  @media (max-width: 992px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-top: 1rem;
  }

  @media (max-width: 568px) {
    font-size: 1rem;
    margin-top: 0.8rem;
  }
`;
