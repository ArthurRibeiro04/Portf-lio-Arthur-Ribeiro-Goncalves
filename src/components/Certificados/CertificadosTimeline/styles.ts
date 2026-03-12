import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 140px 20px;
`;

export const Titulo = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 100px;
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 1100px;
  margin: auto;

  &::before {
    content: "";
    position: absolute;

    left: 50%;
    top: 0;

    transform: translateX(-50%);

    width: 2px;
    height: 100%;

    background: linear-gradient(
      to bottom,
      transparent,
      #00d9ff,
      #00d9ff,
      transparent
    );
  }
`;