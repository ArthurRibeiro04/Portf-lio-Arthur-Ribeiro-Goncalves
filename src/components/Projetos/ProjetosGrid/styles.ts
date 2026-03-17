import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 10%;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 30px;
`;