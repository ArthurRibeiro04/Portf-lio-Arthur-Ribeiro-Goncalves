import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from {
    transform: rotate(-8deg) translateX(0);
  }
  to {
    transform: rotate(-8deg) translateX(-50%);
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  background: #0d0d0d;

  /* gradientes laterais */
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 200px;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #0d0d0d, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #0d0d0d, transparent);
  }
`;

export const TopStripe = styled.div`
  position: absolute;
  top: -120px;
  left: -10%;

  width: max-content;
  height: 280px;

  display: flex;
  gap: 40px;

  transform: rotate(-8deg);

  opacity: 0.08;
  pointer-events: none;

  z-index: 0;

  animation: ${slide} 20s linear infinite;
`;

export const StripeImage = styled.img`
  height: 100%;
  width: auto;

  object-fit: cover;

  filter: blur(1px);
`;


export const Content = styled.div`
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background: rgba(20, 20, 20, 0.7);
  padding: 40px;
  border-radius: 16px;

  backdrop-filter: blur(10px);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 15px;
  border-radius: 10px;

  text-decoration: none;
  color: white;

  background: #111;

  transition: all 0.3s ease;

  &:hover {
    background: #1a1a1a;
  }
`;

export const Icon = styled.div`
  font-size: 1.4rem;
  color: #00d4ff;
`;

export const Info = styled.span`
  font-size: 1rem;
`;

const slideReverse = keyframes`
  from {
    transform: rotate(8deg) translateX(0);
  }
  to {
    transform: rotate(8deg) translateX(50%);
  }
`;

export const BottomStripe = styled.div`
  position: absolute;
  bottom: -120px;
  right: -10%;

  width: max-content;
  height: 280px;

  display: flex;
  gap: 40px;

  transform: rotate(8deg);

  opacity: 0.05;
  pointer-events: none;

  z-index: 0;

  animation: ${slideReverse} 20s linear infinite; /* 👈 AQUI */
`;

