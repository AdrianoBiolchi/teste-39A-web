import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  background: #232f3e;
`;

export const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1020px;
  padding: 20px;
  margin: 0 auto;

  h1 {
    color: #fff;
  }

  a {
    text-decoration: none;
  }
`;

export const Dashboard = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;
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
