import styled from 'styled-components';

export const Container = styled.div`
  height: 360px;
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 15px;
  padding: 10px;

  button {
    margin: 10px;
    padding: 14px 70px;
    white-space: nowrap;
  }
`;
export const HeaderTaskCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  position: relative;
  padding: 10px;
`;
export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;
export const Icon = styled.img`
  height: 10px;
  width: 10px;
`;
export const DescritionTask = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;

  span:nth-child(1) {
    color: ${(props) => props.theme.colors.mainText};
  }

  span:nth-child(2) {
    color: ${(props) => props.theme.colors.secondaryText};
  }
`;
export const TaskImage = styled.img`
  height: 180px;
  width: 250px;
  object-fit: cover;
  border-radius: 15px;
`;
export const BoxIcon = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 45px;
  bottom: 10px;
`;
