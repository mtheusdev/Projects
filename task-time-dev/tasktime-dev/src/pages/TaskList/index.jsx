import { HiPlusSm } from 'react-icons/hi';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import TaskCard from '../../components/TaskCard';
import ButtonIcon from '../../components/ButtonIcon';
import {
  Container,
  HeaderTaskList,
  GridTaskList,
  // AnchorButton,
} from './styles';

const TaskList = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <HeaderTaskList>
        <span>Task list</span>
        <ButtonIcon text="Create task">
          <HiPlusSm size={16} color={colors.mainText} />
        </ButtonIcon>
      </HeaderTaskList>
      <GridTaskList>
        <TaskCard
          icon="https://image.flaticon.com/icons/png/512/833/833472.png"
          type="Like"
          title="Helena Clara"
          avatar="https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg"
          img="https://image.freepik.com/vetores-gratis/bem-vindo-a-pagina-de-destino-geometrica-3d-futura_23-2148288682.jpg"
        />
        <TaskCard
          icon="https://image.flaticon.com/icons/png/512/833/833472.png"
          type="Like"
          title="Helena Clara"
          avatar="https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg"
          img="https://image.freepik.com/vetores-gratis/bem-vindo-a-pagina-de-destino-geometrica-3d-futura_23-2148288682.jpg"
        />
        <TaskCard
          icon="https://image.flaticon.com/icons/png/512/833/833472.png"
          type="Like"
          title="Helena Clara"
          avatar="https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg"
          img="https://image.freepik.com/vetores-gratis/bem-vindo-a-pagina-de-destino-geometrica-3d-futura_23-2148288682.jpg"
        />
        <TaskCard
          icon="https://image.flaticon.com/icons/png/512/833/833472.png"
          type="Like"
          title="Helena Clara"
          avatar="https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg"
          img="https://image.freepik.com/vetores-gratis/bem-vindo-a-pagina-de-destino-geometrica-3d-futura_23-2148288682.jpg"
        />
        <TaskCard
          icon="https://image.flaticon.com/icons/png/512/833/833472.png"
          type="Like"
          title="Helena Clara"
          avatar="https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg"
          img="https://image.freepik.com/vetores-gratis/bem-vindo-a-pagina-de-destino-geometrica-3d-futura_23-2148288682.jpg"
        />
        <TaskCard
          icon="https://image.flaticon.com/icons/png/512/833/833472.png"
          type="Like"
          title="Helena Clara"
          avatar="https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg"
          img="https://image.freepik.com/vetores-gratis/bem-vindo-a-pagina-de-destino-geometrica-3d-futura_23-2148288682.jpg"
        />
        <TaskCard
          icon="https://image.flaticon.com/icons/png/512/833/833472.png"
          type="Like"
          title="Helena Clara"
          avatar="https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg"
          img="https://image.freepik.com/vetores-gratis/bem-vindo-a-pagina-de-destino-geometrica-3d-futura_23-2148288682.jpg"
        />
      </GridTaskList>
      {/* <AnchorButton /> */}
    </Container>
  );
};

export default TaskList;
