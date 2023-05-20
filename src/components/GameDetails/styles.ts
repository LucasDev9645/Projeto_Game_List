import styled from "styled-components";

export const GameDetailsContainer = styled.div`
  margin: 30px auto;
  display: flex;
  max-width: 480px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid var(--background-green-900);
  border-radius: 10px;
  padding: 10px;

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
    font-size: 28px;
    margin-bottom: 10px;
  }

  p span {
    font-size: 20px;
    color: var(--color-green-500);
    font-weight: 700;
  }

  p {
    margin-bottom: 10px;
    color: var(--color-gray-300);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 24px;
    }
  }

  @media (max-width: 568px) {
    max-width: 300px;
    margin: 20px auto;
    h1 {
      padding-top: 5px;
      font-size: 22px;
    }

    h2 {
      font-size: 20px;
      padding-top: 5px;
    }

    p span {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const GameDetailsButton = styled.p`
  text-align: right;
  color: var(--color-green-500);
  font-weight: 700;
  font-size: 32px;
  padding: 15px;
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 992) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
