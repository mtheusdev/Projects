import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { IoGrid, IoHelpCircle } from 'react-icons/io5';
import { RiEarthFill } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiCoinStack } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import LinkIcon from '../LinkIcon';
import HeaderDropdown from '../HeaderDropdown/index';
import avatar from '../../assets/images/avatar.png';
import logo from '../../assets/images/logo.png';
import {
  Container,
  Logo,
  MenuNavigation,
  SectionProfile,
  IconBackground,
  CoinContainer,
  Avatar,
} from './styles';

const Header = () => {
  const { colors } = useContext(ThemeContext);
  const [actualLocation, setActualLocation] = useState(false);
  const location = useLocation();

  const getColorLink = (path) => {
    return path === actualLocation ? colors.mainText : colors.secondaryText;
  };

  useEffect(() => {
    setActualLocation(location.pathname);
  }, [location]);

  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
        <span>TaskTime.com</span>
      </Logo>
      <MenuNavigation>
        <LinkIcon path="/" text="Task list" color={getColorLink('/')}>
          <IoGrid size={22} color={getColorLink('/')} />
        </LinkIcon>
        <LinkIcon path="/news" text="News" color={getColorLink('/news')}>
          <RiEarthFill size={25} color={getColorLink('/news')} />
        </LinkIcon>
        <LinkIcon path="/help" text="Help" color={getColorLink('/help')}>
          <IoHelpCircle size={28} color={getColorLink('/help')} />
        </LinkIcon>
      </MenuNavigation>
      <SectionProfile>
        <CoinContainer>
          <IconBackground>
            <AiOutlinePlus size={16} color={colors.mainText} />
          </IconBackground>
          <BiCoinStack size={18} />
          <span>2023</span>
        </CoinContainer>
        <Avatar>
          <img src={avatar} alt="avatar" />
        </Avatar>
        <HeaderDropdown />
      </SectionProfile>
    </Container>
  );
};

export default Header;
