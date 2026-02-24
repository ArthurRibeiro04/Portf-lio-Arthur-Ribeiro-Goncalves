import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Logo>Portfólio Arthur Ribeiro</S.Logo>
      
      <S.Nav>
        <ul>
          <li><a href="#sobre">Sobre Mim</a></li>
          <li><a href="#certificados">Certificados</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </S.Nav>
    </S.Container>
  );
};

export default Header;