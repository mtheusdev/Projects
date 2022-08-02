import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  border-radius: 15px;
  border: 2px solid ${(props) => props.theme.colors.blue};
  padding: 15px;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.mainText};
  transition: all 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.blue};
  }
`;
