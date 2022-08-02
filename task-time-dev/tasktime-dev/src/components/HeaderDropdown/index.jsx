import { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FiChevronUp, FiChevronDown, FiLogOut } from 'react-icons/fi';
import { BsPersonFill } from 'react-icons/bs';
import { IoGrid } from 'react-icons/io5';
import { HiSun } from 'react-icons/hi';
import { GlobalCtx } from '../../providers/Global';
import { Container, DropdownItems, ThemeBox } from './styles';
import LinkIcon from '../LinkIcon';

const HeaderDropdown = () => {
  const { colors, title } = useContext(ThemeContext);
  const [openModal, setOpenModal] = useState(false);

  const { toggleTheme } = GlobalCtx();

  const handleToggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <Container>
      <button type="button" onClick={handleToggleModal}>
        {openModal ? (
          <>
            <FiChevronUp cursor="pointer" size={24} color={colors.blue} />
            <DropdownItems>
              <LinkIcon
                path="/profile"
                color={colors.mainText}
                text="My profile"
              >
                <BsPersonFill size={24} color={colors.mainText} />
              </LinkIcon>
              <LinkIcon path="/" color={colors.mainText} text="Task list">
                <IoGrid size={23} color={colors.mainText} />
              </LinkIcon>
              <hr />
              <ThemeBox>
                <HiSun size={26} color={colors.mainText} />
                <span>Dark mode</span>
                <Switch
                  onChange={toggleTheme}
                  checked={title === 'dark'}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={24}
                  width={44}
                  onColor={colors.tertiary}
                  offColor={colors.tertiary}
                  onHandleColor={colors.blue}
                  offHandleColor={colors.text}
                  handleDiameter={18}
                />
              </ThemeBox>
              <hr />
              <LinkIcon path="/" color={colors.red} text="Log out">
                <FiLogOut size={23} color={colors.red} />
              </LinkIcon>
            </DropdownItems>
          </>
        ) : (
          <FiChevronDown
            cursor="pointer"
            size={24}
            color={colors.secondaryText}
          />
        )}
      </button>
    </Container>
  );
};

export default HeaderDropdown;
