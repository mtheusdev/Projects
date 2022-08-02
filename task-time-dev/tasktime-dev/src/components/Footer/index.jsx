import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { GrTwitter, GrInstagram } from 'react-icons/gr';
import { FaTelegramPlane } from 'react-icons/fa';
import { Container, Icons, CopyRight, Details } from './styles';

const Footer = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Icons>
        <GrTwitter size={20} color={colors.secondaryText} />
        <GrInstagram size={20} color={colors.secondaryText} />
        <FaTelegramPlane size={20} color={colors.secondaryText} />
      </Icons>
      <CopyRight>&copy;2021 - All Rigths Lecensed</CopyRight>
      <Details>For commercial inquiries</Details>
    </Container>
  );
};

export default Footer;
