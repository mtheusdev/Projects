import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;

  margin: 0 40px;
  white-space: nowrap;

  span {
    font-size: 18px;
    color: ${(props) => props.color};
    padding-left: 10px;
    text-decoration: none;
  }
`;
