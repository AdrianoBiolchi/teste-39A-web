import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  padding: 20px;
  max-width: 1024px;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    justify-content: space-beetwen;
  }
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0;
  }
`;

export const BoxImg = styled.img`
  height: 400px;
`;

export const BoxInfo = styled.div`
  width: 400px;
  padding: 30px;
  color: #fff;
  background: #232f3e;
  text-align: center;

  blockquote {
    padding: 5px 10px;
    font-size: 12px;
    border-left: 5px solid #eee;
  }

  span {
    font-size: 24px;
  }
  p {
    margin: 20px 0;
  }
`;
