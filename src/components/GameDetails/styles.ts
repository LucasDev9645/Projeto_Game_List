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
`;

export const GameDetailsButton = styled.p`
  text-align: right;
  color: var(--color-green-500);
  font-weight: 700;
  font-size: 32px;
  padding: 15px;
  text-decoration: underline;
  cursor: pointer;
`;
