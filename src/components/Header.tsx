import styled from '@emotion/styled';

import { ReactComponent as LogoSvg } from '@assets/logo.svg';
import { ReactComponent as SearchSvg } from '@assets/search.svg';

export default function Header() {
  return (
    <Nav>
      <Col>
        <Logo />
        <Items>
          <Item>Home</Item>
          <Item>Tv Shows</Item>
        </Items>
      </Col>
      <Col>
        <Search />
      </Col>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: black;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(LogoSvg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${props => props.theme.colors.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.black.darker};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${props => props.theme.colors.white.lighter};
  }
`;

const Search = styled(SearchSvg)`
  color: white;
  height: 25px;
`;
