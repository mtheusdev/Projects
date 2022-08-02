import PropTypes from 'prop-types';
import { Container } from './styles';

const ButtonIcon = ({ children, text }) => {
  return (
    <Container>
      {children}
      <span className="text-button-icon">{text}</span>
    </Container>
  );
};

ButtonIcon.propTypes = {
  text: PropTypes.string,
};

ButtonIcon.defaultProps = {
  text: '',
};

export default ButtonIcon;
