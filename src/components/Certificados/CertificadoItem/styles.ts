import styled from "styled-components";

export const Container = styled.div<{ side: "left" | "right" }>`
  width: 50%;
  padding: 30px;
  position: relative;
  cursor: pointer;

  ${({ side }) =>
    side === "left"
      ? `
    left: 0;
    text-align: right;
  `
      : `
    left: 50%;
  `}
`;

export const Dot = styled.div<{ side: "left" | "right" }>`
  position: absolute;
  top: 40px;
  width: 16px;
  height: 16px;
  background: #00d9ff;
  border-radius: 50%;

  ${({ side }) =>
    side === "left"
      ? `
    right: -8px;
  `
      : `
    left: -8px;
  `}

  box-shadow: 0 0 12px #00d9ff;
`;

export const Card = styled.div`
  background: #111;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #2a2a2a;

  transition: all 0.3s;

  &:hover {
    transform: translateY(-6px);
    border-color: #00d9ff;
    box-shadow: 0 10px 30px rgba(0, 217, 255, 0.15);
  }
`;

export const PreviewPDF = styled.iframe`
  width: 100%;
  height: 200px;
  border: none;
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 20px;
`;

export const Titulo = styled.h3`
  font-size: 1.2rem;
`;

export const Meta = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
`;

export const Carga = styled.p`
  font-weight: bold;
  color: #00d9ff;
  margin-top: 6px;
`;

export const Descricao = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  line-height: 1.5;
`;