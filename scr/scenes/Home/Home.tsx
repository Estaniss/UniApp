import React from 'react';
import { MaterialIcon } from 'scr/components';
import { NavigationActions } from 'scr/navigation';
import { Wrapper } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <MaterialIcon
        touchable
        name="logout-variant"
        color="red"
        size={30}
        onPress={(): void => NavigationActions.logout()}
      />
    </Wrapper>
  );
};

export default Home;
