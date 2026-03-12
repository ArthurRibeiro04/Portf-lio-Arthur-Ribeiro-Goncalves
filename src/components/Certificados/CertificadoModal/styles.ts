import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
`;

export const Modal = styled.div`
  position: relative;
  max-width: 900px;
  width: 90%;
  max-height: 90vh;

  background: #111;
  border-radius: 10px;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

export const PDF = styled.iframe`
  width: 100%;
  height: 80vh;
  border: none;
`;

export const Imagem = styled.img`
  width: 100%;
  height: auto;
`;