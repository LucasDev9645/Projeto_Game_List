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
`;

export const CardGame = styled.li`
  background: var(--background-green-900);
  text-align: center;
  width: 240px;
  height: 310px;
  border-radius: 10px;
  padding: 10px;

  img {
    max-width: 220px;
    border-radius: 5px;
  }

  h3 {
    color: var(--color-green-500);
    padding: 10px;
    font-weight: 700;
    font-size: 18px;
  }

  p {
    color: var(--color-green-500);
    padding: 5px;
    font-weight: 700;
    font-size: 14px;
  }
`;
