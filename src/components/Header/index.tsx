import * as S from "./styles";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <S.Container>

      <NavLink to="/">
        <S.Logo>Portfólio Arthur Ribeiro</S.Logo>
      </NavLink>

      <S.Nav>
        <ul>
          <li>
            <NavLink to="/sobre">Sobre Mim</NavLink>
          </li>

          <li>
            <NavLink to="/certificados">Certificados</NavLink>
          </li>

          <li>
            <NavLink to="/projetos">Projetos</NavLink>
          </li>

          <li>
            <NavLink to="/contato">Contato</NavLink>
          </li>
        </ul>
      </S.Nav>
    </S.Container>
  );
};

export default Header;