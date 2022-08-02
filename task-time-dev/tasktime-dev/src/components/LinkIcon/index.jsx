import PropTypes from 'prop-types';
import { Container } from './styles';

const LinkIcon = ({ path, color, text, children }) => {
  return (
    <Container to={path} color={color} type="button">
      {children}
      <span>{text}</span>
    </Container>
  );
};

LinkIcon.propTypes = {
  path: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
};

LinkIcon.defaultProps = {
  text: 'text_default',
};

export default LinkIcon;
