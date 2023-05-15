import React from 'react';
import { MaterialIcon, Navbar } from 'scr/components';
import { IconButtom, IconText, MenuWrapper, Wrapper } from './styles';

type Props = {
  goToButton(route: string): void;
  getLocationAndNotify(): void;
  handleButtonPress(): void;
  sendSMSAfterDelay(): void;
};

const Home: React.FC<Props> = ({
  goToButton,
  getLocationAndNotify,
  handleButtonPress,
  sendSMSAfterDelay,
}) => {
  return (
    <Wrapper>
      <Navbar title="HOME" />
      <MenuWrapper>
        <IconButtom onPress={(): void => goToButton('calc')}>
          <MaterialIcon
            touchable
            name="calculator"
            color="blue"
            size={25}
            onPress={(): void => goToButton('calc')}
          />
          <IconText>Calculadora</IconText>
        </IconButtom>
        <IconButtom onPress={(): void => goToButton('user')}>
          <MaterialIcon
            touchable
            name="account"
            color="blue"
            size={25}
            onPress={(): void => goToButton('user')}
          />
          <IconText>Meus dados</IconText>
        </IconButtom>
      </MenuWrapper>
      <MenuWrapper>
        <IconButtom onPress={getLocationAndNotify}>
          <MaterialIcon touchable name="earth" color="blue" size={25} />
          <IconText>Geolocalização</IconText>
        </IconButtom>
        <IconButtom onPress={handleButtonPress}>
          <MaterialIcon touchable name="bell-outline" color="blue" size={25} />
          <IconText>Notificação</IconText>
        </IconButtom>
      </MenuWrapper>
      <MenuWrapper>
        <IconButtom onPress={sendSMSAfterDelay}>
          <MaterialIcon
            touchable
            name="message-processing"
            color="blue"
            size={25}
          />
          <IconText>SMS</IconText>
        </IconButtom>
        <IconButtom onPress={handleButtonPress}>
          <MaterialIcon touchable name="bell-outline" color="blue" size={25} />
          <IconText>Notificação</IconText>
        </IconButtom>
      </MenuWrapper>
    </Wrapper>
  );
};

export default Home;
