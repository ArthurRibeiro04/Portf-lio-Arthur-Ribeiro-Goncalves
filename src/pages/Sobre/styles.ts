import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  padding: 6rem 0;
  overflow-y: auto;
`;

export const Hero = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
`;

export const HistorySection = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 500px;
  height: 600px;
  object-fit: cover;
  border-radius: 200px;
  box-shadow: 0 0 60px rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    width: 260px;
    height: 260px;
  }
`;