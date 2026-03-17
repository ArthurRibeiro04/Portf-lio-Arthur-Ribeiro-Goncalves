import styled from "styled-components";

export const Backdrop = styled.div<{ $closing?: boolean }>`
  position: fixed;
  inset: 0;

  background: rgba(0,0,0,0.85);

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${({ $closing }) =>
    $closing ? "fadeOut 0.25s ease forwards" : "fadeIn 0.25s ease"};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const ModalContainer = styled.div`
  position: relative;

  background: #111;

  width: 900px;
  max-width: 90%;

  padding: 40px;
  border-radius: 12px;

  animation: slideIn 0.25s ease;

  @keyframes slideIn {
    from {
      transform: translateY(20px) scale(0.96);
      opacity: 0;
    }
    to {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;

  top: 15px;
  right: 15px;

  background: transparent;
  border: none;

  font-size: 22px;
  color: white;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
    color: #00d4ff;
  }
`;

export const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  height: 420px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  margin-bottom: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;

  object-fit: contain;

  border-radius: 8px;

  animation: imageFade 0.35s ease;

  @keyframes imageFade {
    from {
      opacity: 0;
      transform: scale(0.96);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  background: #00d4ff;
  border: none;

  padding: 10px;
  border-radius: 6px;

  cursor: pointer;

  z-index: 10;
`;

export const Techs = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  margin-bottom: 20px;

  span {
    background: #1f1f1f;
    color: #00d4ff;

    padding: 5px 10px;
    border-radius: 6px;
    font-size: 12px;
  }
`;

export const Description = styled.p`
  color: #ccc;
  margin-bottom: 20px;
`;

export const GithubButton = styled.a`
  display: inline-block;

  background: #00d4ff;
  color: black;

  padding: 10px 16px;

  border-radius: 6px;

  font-weight: bold;

  text-decoration: none;

  transition: 0.2s;

  &:hover {
    background: #00b6db;
  }
`;

export const PrevButton = styled(NavButton)`
  left: 10px;
`;

export const NextButton = styled(NavButton)`
  right: 10px;
`;