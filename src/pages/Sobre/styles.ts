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

export const TecnologiasSection = styled.section`
  margin-top: 120px;
  text-align: center;

  h2{
    font-size: 32px;
    margin-bottom: 40px;
  }
`

export const Carrossel = styled.div`
  display: flex;
  gap: 25px;
  overflow-x: auto;
  padding: 20px;

  scrollbar-width: none;

  &::-webkit-scrollbar{
    display: none;
  }
`

export const TechCard = styled.div`
  min-width: 110px;
  height: 110px;

  background: #111;
  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;

  img{
    width: 55px;
  }

  &:hover{
    transform: translateY(-6px);
    background: #1c1c1c;
  }
`