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
`;

export const NavBarH1 = styled.h1`
  color: var(--color-green-500);
  font-weight: 700;
  font-size: 3.125rem;
  margin-bottom: 1.875rem;
`;

export const NavBarP = styled.p`
  margin-top: 1.875rem;
  margin-bottom: 4px;
  color: var(--color-green-500);
  font-size: 1.25rem;
`;
