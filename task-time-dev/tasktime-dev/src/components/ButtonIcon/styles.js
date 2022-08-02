import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 15px;
  border: none;
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;

  span.text-button-icon {
    color: ${(props) => props.theme.colors.mainText};
    font-size: 16px;
  }
`;
