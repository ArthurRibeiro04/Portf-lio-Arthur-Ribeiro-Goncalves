import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const TopSection = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }
`;

export const LeftText = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #ffffff;
  text-align: right;
  line-height: 1.2;
  max-width: 420px;
  justify-self: end;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    justify-self: center;
  }
`;

export const RightText = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #ffffff;
  text-align: left;
  line-height: 1.2;
  max-width: 420px;
  justify-self: start;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    justify-self: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 340px;
  height: 340px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 60px rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.2rem;
    margin-top: 3rem;
  }
`;

export const NavButton = styled(motion.button)`
  padding: 1.2rem 2.8rem;
  font-size: 1.1rem;
  font-weight: 600;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 40px;

  background: transparent;
  color: #ffffff;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
    width: 45%;
  }
`;