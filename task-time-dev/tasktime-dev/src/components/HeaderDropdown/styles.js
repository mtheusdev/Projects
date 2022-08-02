import styled from 'styled-components';

export const Container = styled.div`
  button {
    position: relative;
    border: none;
    background: none;

    ul {
      margin: 0;
      border: 2px solid ${(props) => props.theme.colors.tertiary};
      border-radius: 15px;
      padding: 0;
      background: ${(props) => props.theme.colors.secondary};
      width: 254px;
      height: 248px;
      position: absolute;
      transform: translateX(-90%) translateY(9%);
    }
  }
`;

export const DropdownItems = styled.ul`
  z-index: 1;
  a {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  hr {
    height: 1px;
    border: none;
    color: ${(props) => props.theme.colors.tertiary};
    background-color: ${(props) => props.theme.colors.tertiary};
    margin: 0 20px;
  }
`;
export const ThemeBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  span {
    color: ${(props) => props.theme.colors.mainText};
    font-size: 18px;
    padding: 0 40px 0 10px;
    white-space: nowrap;
  }
`;
