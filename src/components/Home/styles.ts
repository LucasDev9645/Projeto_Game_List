import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  padding: 0 1.25rem;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const HomeH1 = styled.h1`
  font-size: 3.125rem;
  color: var(--color-green-500);
  font-weight: 700;
  margin-top: 6.25rem;
  margin-bottom: 3.125rem;

  @media (max-width: 1200px) {
    margin-top: 10rem;
    font-size: 2.75rem;
  }

  @media (max-width: 992px) {
    font-size: 2.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 568px) {
    margin-top: 1.25rem;
    font-size: 1.75rem;
    margin-bottom: 2.5rem;
  }
`;

export const HomeP = styled.p`
  color: var(--color-gray-300);
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 5rem;

  @media (max-width: 1200px) {
    font-size: 1.25rem;
  }

  @media (max-width: 992px) {
    font-size: 1.125rem;
    margin-bottom: 3.75rem;
  }

  @media (max-width: 568px) {
    font-size: 1rem;
    margin-bottom: 3.125rem;
  }
`;

export const HomeButton = styled.button`
  width: 28.125rem;
  height: 4.375rem;
  background: var(--color-green-500);
  color: var(--background-green-900);
  font-size: 1.375rem;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: var(--background-green-400);
  }

  @media (max-width: 1200px) {
    width: 23.75rem;
    height: 3.75rem;
    font-size: 1.25rem;
  }

  @media (max-width: 992px) {
    width: 100%;
    font-size: 1.125rem;
  }

  @media (max-width: 568px) {
    height: 3.125rem;
    font-size: 1rem;
  }
`;

export const HomeImg = styled.img`
  margin-top: 7.5rem;
  max-width: 600px;

  @media (max-width: 1200px) {
    margin-top: 12.5rem;
    max-width: 500px;
  }

  @media (max-width: 992px) {
    margin-top: 3.75rem;
    max-width: 450px;
  }

  @media (max-width: 568px) {
    max-width: 300px;
  }
`;
