import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  grid-area: FT;

  border-top: 2px solid ${(props) => props.theme.colors.tertiary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7rem;
`;
export const Icons = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CopyRight = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colors.secondaryText};
`;
export const Details = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colors.secondaryText};
`;
