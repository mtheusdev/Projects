import PropTypes from 'prop-types';
import { Container } from './styles';

const TextButton = ({ text }) => {
  return (
    <Container>
      <span>{text}</span>
    </Container>
  );
};

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextButton;
