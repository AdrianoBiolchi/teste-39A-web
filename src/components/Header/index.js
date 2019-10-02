import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdHome } from 'react-icons/md';

import { Container, HeaderContainer, Nav, HeaderNav, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Logo to="/">
          <h1>Loticáryo</h1>
        </Logo>
        <HeaderNav>
          <Nav to="/">
            <div>
              <strong>Dashboard <MdHome size={16} color="#FFF" /></strong>
            </div>
          </Nav>
          <Nav to="/new">
            <div>
              <strong>
                Incluir Item <MdAddCircleOutline size={16} color="#FFF" />
              </strong>
            </div>
          </Nav>
        </HeaderNav>
      </HeaderContainer>
    </Container>
  );
}
