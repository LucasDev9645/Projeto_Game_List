import styled from "styled-components";

export const NavBarContainer = styled.nav`
  width: 20.62rem;
  height: calc(100vh - 5rem);
  padding: 1.25rem;
  background-color: var(--background-green-900);
`;

export const NavBarH2 = styled.h2`
  color: var(--color-green-500);
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.875rem;
`;

export const NavBarP = styled.p`
  margin-top: 1.875rem;
  color: var(--color-green-500);
  font-size: 1.25rem;
`;

export const NavBarContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 4rem;
  }
`;
