import PropTypes from 'prop-types';
import { FiMoreVertical } from 'react-icons/fi';
import TextButton from '../TextButton';
import {
  Container,
  HeaderTaskCard,
  Avatar,
  Icon,
  DescritionTask,
  TaskImage,
  BoxIcon,
} from './styles';

const TaskCard = ({ icon, type, title, avatar, img }) => {
  return (
    <Container>
      <HeaderTaskCard>
        <Avatar src={avatar} />
        <BoxIcon>
          <Icon src={icon} />
        </BoxIcon>
        <DescritionTask>
          <span>{title}</span>
          <span>{type}</span>
        </DescritionTask>
        <FiMoreVertical />
      </HeaderTaskCard>
      <TaskImage src={img} />
      <TextButton text="Perform a task" />
    </Container>
  );
};

TaskCard.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
  img: PropTypes.string,
};

TaskCard.defaultProps = {
  icon: '',
  type: '',
  title: '',
  avatar: '',
  img: '',
};

export default TaskCard;
