import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background: ${props => props.theme.colors.surface}cc;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const Logo = styled.h1`
  font-family: 'Montserrat', sans-serif; 
  font-size: 1.5rem;
  font-weight: 800; 
  color: ${props => props.theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 1px;

  color: ${props => props.theme.colors.primary};
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 2.5rem;

    li a {
      font-size: 0.95rem;
      font-weight: 500;
      color: ${props => props.theme.colors.textSecondary};
      transition: all 0.3s ease;
      position: relative;

      &:hover {
        color: ${props => props.theme.colors.text};
      }

      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: ${props => props.theme.colors.primary};
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    display: none; // Depois podemos fazer o menu hamburguer aqui
  }
`;