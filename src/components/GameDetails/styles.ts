import styled from "styled-components";

export const GameDetailsContainer = styled.div`
  margin: 1.875rem auto;
  display: flex;
  max-width: 30rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid var(--background-green-900);
  border-radius: 10px;
  padding: 0.625rem;

  img {
    max-width: 450px;
    border-radius: 5px;
  }

  h1,
  h2 {
    color: var(--color-green-500);
    font-weight: 700;
  }

  h2 {
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 10px;
  }

  p span {
    font-size: 1.5rem;
    color: var(--color-green-500);
    font-weight: 700;
  }

  p {
    margin-bottom: 10px;
    color: var(--color-gray-300);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 568px) {
    max-width: 18.75rem;
    margin: 1.25rem auto;
    h1 {
      padding-top: 5px;
      font-size: 1.375rem;
    }

    h2 {
      font-size: 1.25rem;
      padding-top: 5px;
    }

    p span {
      font-size: 1.125rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const GameDetailsButton = styled.p`
  text-align: right;
  color: var(--color-green-500);
  font-weight: 700;
  font-size: 2rem;
  padding: 0.9rem;
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 992px) {
    font-size: 1.75rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
