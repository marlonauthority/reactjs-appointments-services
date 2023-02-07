import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';
interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #232129;
  
  border-radius: 10px;
  border:2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}

  ${props => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
  `}
  
  ${props => props.isFilled && css`
    color: #ff9000;
  `}

  input:-webkit-autofill,
      input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  
  input {
    border: none;
    flex: 1;
    background: transparent;
    color: #f4ede8;

      &:focus {
        border:0;
        outline:none;
      }

      &::placeholder {
        color: #666360;
      }
    }
    svg {
      margin-right: 16px;
    }
`;


export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;