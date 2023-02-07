import styled from 'styled-components';
import bg from '../../assets/sign-up-background.png';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  img {
    width: 231px;
    height: 134px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h2 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
        transition: color 0.2s;
      }
    }
  }

  > a {
    color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2;

      display: flex;
      align-items: center;

      svg {
        margin-right: 16px
      }

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
        transition: color 0.2;
      }
  }
`;
export const Background = styled.div`
  flex:1;
  background: url(${bg}) no-repeat center;
  background-size: cover;
`;
