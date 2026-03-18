import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

export const Container = styled.button`
  position: absolute;
  top: 24px;
  left: 24px;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 12px 22px;

  font-size: 16px;
  font-weight: 500;

  color: #fff;
  background: rgba(255, 255, 255, 0.05);

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;

  backdrop-filter: blur(10px);

  cursor: pointer;

  transition: all 0.3s ease;
  animation: ${slideIn} 0.5s ease;

  /* glow suave */
  box-shadow: 0 0 0 rgba(255, 255, 255, 0);

  span {
    font-size: 18px;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);

    transform: translateX(-6px) scale(1.05);

    box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
  }

  &:hover span {
    transform: translateX(-6px);
  }

  &:active {
    transform: scale(0.95);
  }
`;