import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center; /* antes era space-between */
  align-items: center;

  gap: 120px; /* controla distância entre esquerda e direita */

  padding: 0 80px;
  color: #fff;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Image = styled.img`
  width: 340px;
  height: 340px;

  border-radius: 50%;
  object-fit: cover;

  border: 3px solid #fff;

  box-shadow: 0 0 60px rgba(255, 255, 255, 0.2);

  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const IntroText = styled.h2`
  font-size: 24px;
  text-align: center;
  line-height: 1.4;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const NavLinkStyled = styled.div`
  font-size: 52px;
  font-weight: 600;
  cursor: pointer;
  position: relative;

  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;

    width: 0%;
    height: 2px;

    background: linear-gradient(90deg, #fff, transparent);

    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    opacity: 0.85;
  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;

  position: absolute;
  top: 40px;
  left: 0;

  font-size: 52px;
  font-weight: 700;
  letter-spacing: 2px;

  color: #ffffff;

  text-shadow: 
    0 0 10px rgba(255, 255, 255, 0.4),
    0 0 20px rgba(255, 255, 255, 0.2);

  animation: glow 3s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      text-shadow: 
        0 0 10px rgba(255, 255, 255, 0.3),
        0 0 20px rgba(255, 255, 255, 0.15);
    }
    to {
      text-shadow: 
        0 0 20px rgba(255, 255, 255, 0.6),
        0 0 40px rgba(255, 255, 255, 0.3);
    }
  }
`;