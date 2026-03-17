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

    width: 3px;
    height: 100%;

    background: linear-gradient(
      to bottom,
      transparent,
      #00d9ff,
      #00d9ff,
      transparent
    );

    box-shadow: 0 0 20px #00d9ff;

    animation: glowLine 3s infinite alternate;
  }

  @keyframes glowLine {
    from {
      box-shadow: 0 0 10px #00d9ff;
    }
    to {
      box-shadow: 0 0 25px #00d9ff;
    }
  }
`;