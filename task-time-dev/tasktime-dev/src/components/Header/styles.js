import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  grid-area: HE;

  border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
    margin-right: 12px;
  }

  span {
    font-size: 18px;
  }
`;
export const MenuNavigation = styled.div`
  display: flex;
`;

export const SectionProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 14px;
  height: 40px;
  padding: 5px;

  span {
    font-size: 16px;
    padding: 0 22px 0 6px;
  }
`;
export const IconBackground = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.blue};

  margin-right: 16px;
`;
export const Avatar = styled.div`
  margin: 0 10px;
  img {
    height: 40px;
    width: 40px;
  }
`;
