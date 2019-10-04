import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.div`
  margin: 20px auto;
  padding: 20px;
  max-width: 1024px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    width: 300px;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 15px;
    img {
      align-self: center;
      padding: 20px;
      height: 250px;
    }
    > strong {
      font-size: 16px;
      margin: 10px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    > span {
      font-size: 12px;
      text-align: center;
      color: #444;
      margin: 5px 0 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const ButtonDetails = styled(Link)`
  background: #2ecc71;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  transition: background 0.5s;
  &:hover {
    background: ${darken(0.2, '#27ae60')};
    text-decoration: none;
    color: #fff;
  }
  div {
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);
    svg {
      margin-right: 5px;
    }
  }
  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
`;

export const ButtonEdit = styled(Link)`
  background: #3498db;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  transition: background 0.5s;
  &:hover {
    background: ${darken(0.2, '#2980b9')};
    text-decoration: none;
    color: #fff;
  }
  a {
    text-decoration: none !important;
  }
  div {
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);
    svg {
      margin-right: 5px;
    }
  }
  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
  }
`;
