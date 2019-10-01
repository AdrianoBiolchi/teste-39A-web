import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container, Dashboard, HeaderNav } from './styles';

export default function Header() {
  return (
    <Container>
      <HeaderNav>
        <Link to="/">
          <h1>Loticáryo</h1>
        </Link>
        <Dashboard to="/new">
          <div>
            <strong>Incluir Item</strong>
          </div>
          <MdAddCircleOutline size={16} color="#FFF" />
        </Dashboard>
      </HeaderNav>
    </Container>
  );
}
