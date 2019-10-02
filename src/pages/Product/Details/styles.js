import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  height: 100%;
  background: #fff;
  border: 1px solid #333;
  max-width: 1024px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    justify-content: space-beetwen;
  }
`;

export const BoxImg = styled.img`
  height: 100%;
  width: 450px;
  padding: 30px;
`;

export const BoxInfo = styled.div`
  height: 100%;
  width: 350px;
  padding: 20px;
  color: #333;
  h1 {
    font-size: 30px;
    font-weight: bold;

    padding-bottom: 10px;
  }
  h6 {
    font-size: 10px;
    width: 300px;
    padding: 5px;
    margin-bottom: 10px;
    text-align: center;
    color: #fff;
    background: #000;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;

    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }

  p {
    padding: 5px 10px;
    font-size: 14px;
    border-left: 5px solid #eee;
  }
`;
