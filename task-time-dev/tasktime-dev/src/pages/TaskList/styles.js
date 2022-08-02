import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 110px 40px 110px;
`;
export const HeaderTaskList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  span {
    font-size: 26px;
  }
`;
export const GridTaskList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
`;
export const AnchorButton = styled.button``;
