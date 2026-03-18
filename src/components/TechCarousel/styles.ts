import styled, { keyframes } from "styled-components"

const infiniteScroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;

  margin-top: 80px;
`

export const Track = styled.div`
  display: flex;
  gap: 60px;

  width: max-content;

  animation: ${infiniteScroll} 35s linear infinite;
`

export const Card = styled.div`
  width: 260px;
  height: 260px;

  background: #0f0f0f;

  border-radius: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  img {
    width: 120px;
  }
`

