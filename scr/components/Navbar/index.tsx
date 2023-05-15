import React from 'react';
import { Icons, NavText, Wrapper } from './styles';
import { NavigationActions } from 'scr/navigation';

type Props = {
  title: string;
};

const Navbar: React.FC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <Icons
        touchable
        name="arrow-left"
        color="white"
        size={25}
        onPress={(): void => NavigationActions.goBack()}
      />
      <NavText>{title}</NavText>
      <Icons
        touchable
        name="power-standby"
        color="white"
        size={25}
        onPress={(): void => NavigationActions.logout()}
      />
    </Wrapper>
  );
};

export default Navbar;
