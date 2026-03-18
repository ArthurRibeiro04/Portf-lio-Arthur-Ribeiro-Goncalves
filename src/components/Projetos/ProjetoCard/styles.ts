import styled from "styled-components";





export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;

  transition: transform 0.5s ease;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transform: translateY(10px); 

  transition: all 0.3s ease;
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover img {
    transform: scale(1.08);
  }

  &:hover ${Overlay} {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`;

export const Title = styled.h3`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Techs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;

  margin-bottom: 15px;

  span {
    background: #1f1f1f;
    color: #00d4ff;

    padding: 4px 8px;
    border-radius: 6px;

    font-size: 12px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;

  a,
  button {
    background: #00d4ff;
    color: black;

    border: none;
    padding: 8px 12px;

    border-radius: 6px;

    font-weight: bold;
    cursor: pointer;

    text-decoration: none;

    transition: all 0.2s ease;
  }

  a:hover,
  button:hover {
    background: #00b6db;
    transform: scale(1.08);
  }

  a:active,
  button:active {
    transform: scale(0.95);
  }
`;