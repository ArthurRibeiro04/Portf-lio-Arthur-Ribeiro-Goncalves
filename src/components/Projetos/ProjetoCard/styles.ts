import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;

  transition: transform 0.4s ease;
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

  transition: opacity 0.3s ease;
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

    transition: 0.2s;
  }

  a:hover,
  button:hover {
    background: #00b6db;
  }
`;