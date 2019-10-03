import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  background: #fff;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  form {
    position: relative;
    z-index: 1;
    background: #ffffff;
    max-width: 480px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

    .checkbox {
      display: flex;
      align-items: center;
      input[type='checkbox'] {
        background: #2ecc71;
        font-style: normal;
      }

      input[type='checkbox']:checked {
        background: #2ecc71;
        font-style: normal;
      }
    }

    label {
      width: 100%;

      h3 {
        text-align: left;
        font-size: 18px;
        padding: 5px 0;
      }

      input,
      select {
        font-family: 'Roboto', sans-serif;
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
      }
      input[type='file'] {
        font-family: 'Roboto', sans-serif;
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
      }

      textarea {
        font-family: 'Roboto', sans-serif;
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        height: 200px;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
      }
      button {
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        outline: 0;
        background: #000;
        width: 100%;
        border: 0;
        padding: 15px;
        color: #ffffff;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
      }
    }
    button {
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      outline: 0;
      background: #000;
      width: 100%;
      border: 0;
      padding: 15px;
      color: #ffffff;
      font-size: 14px;
      -webkit-transition: all 0.3 ease;
      transition: all 0.3 ease;
      cursor: pointer;
    }
  }
`;
