import styled from "styled-components"
import { motion } from "framer-motion"

export const Section = styled.section`
  width: 100%;
  padding: 140px 0;
`

export const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 100px;
`

export const Timeline = styled.div`
  position: relative;
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;

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
`

export const Item = styled(motion.div)<{ side: "left" | "right" }>`
  width: 50%;
  padding: 20px 40px;
  position: relative;

  ${({ side }) =>
    side === "left"
      ? `
    left: 0;
    text-align: right;
  `
      : `
    left: 50%;
    text-align: left;
  `}
`

export const Card = styled.div`
  background: #111;
  border: 1px solid #2a2a2a;
  padding: 24px;
  border-radius: 10px;

  transition: all 0.3s;

  &:hover {
    transform: translateY(-6px);
    border-color: #00d9ff;
    box-shadow: 0 10px 30px rgba(0, 217, 255, 0.15);
  }
`

export const Dot = styled.div<{ side: "left" | "right" }>`
  position: absolute;
  top: 35px;
  width: 18px;
  height: 18px;
  background: #00d9ff;
  border-radius: 50%;

  ${({ side }) =>
    side === "left"
      ? `
    right: -9px;
  `
      : `
    left: -9px;
  `}

  box-shadow: 0 0 10px #00d9ff, 0 0 20px rgba(0,217,255,0.5);
`

export const Empresa = styled.h3`
  font-size: 1.4rem;
`

export const Cargo = styled.p`
  color: #00d9ff;
  font-weight: bold;
`

export const Periodo = styled.span`
  font-size: 0.85rem;
  opacity: 0.7;
`

export const Descricao = styled.p`
  margin-top: 10px;
  line-height: 1.6;
`