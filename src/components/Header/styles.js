import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  background: #232f3e;
  display: flex;
  align-items: center;
  h1 {
    color: #fff;
  }
`;
export const HeaderContainer = styled.div`
  width: 1020px;
  margin: 0 auto;
  padding: 10px;
`;
export const Logo = styled.div`
  float: left;
`;
export const HeaderNav = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  h1 {
    color: #fff;
  }
  a {
    text-decoration: none;
  }
`;

export const Nav = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 20px;
    strong {
      display: block;
      color: #fff;
    }
    span {
      font-size: 12px;
      color: #fff;
    }
  }
`;
