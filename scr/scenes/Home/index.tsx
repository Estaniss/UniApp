import React from 'react';
import Home from './Home';
import Routes from 'scr/navigation/routes';
import { NavigationActions } from 'scr/navigation';
import PushNotification from 'react-native-push-notification';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import SendSMS from 'react-native-sms';
import Geolocation from 'react-native-geolocation-service';

const HomeContainer: React.FC = () => {
  const goToButton = (route: string) => {
    switch (route) {
      case 'calc':
        NavigationActions.navigate(Routes.CALC);
        break;
      case 'user':
        NavigationActions.navigate(Routes.CALC);
        break;
      default:
    }
  };

  const getLocationAndNotify = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const notificationMessage = `Latitude: ${latitude}, Longitude: ${longitude}`;

        PushNotification.localNotification({
          title: 'Localização do Usuário',
          message: notificationMessage,
        });
      },
      error => {
        Alert.alert('Erro ao obter a localização', error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  const handleButtonPress = () => {
    setTimeout(() => {
      showNotification('Notificação', 'Passou 10 segundos');
    }, 10000);
  };

  const showNotification = (title, message) => {
    const channelId = 'default-channel-id';

    if (Platform.OS === 'android') {
      PushNotification.createChannel(
        {
          channelId,
          channelName: 'Default Channel',
          channelDescription: 'A default channel for notifications',
          soundName: 'default',
          importance: 4,
          vibrate: true,
        },
        created => console.log(`Channel created: ${created}`),
      );
    }

    PushNotification.localNotification({
      channelId,
      title,
      message,
    });
  };

  const sendSMSAfterDelay = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 15000));
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        SendSMS.send(
          {
            body: 'Olá! Seja bem seja bem vindo ao app',
            recipients: ['+5516997137932'],
            allowAndroidSendWithoutReadPermission: true,
          },
          (completed, cancelled, error) => {
            console.log(
              'SMS Callback: completed: ' +
                completed +
                ' cancelled: ' +
                cancelled +
                'error: ' +
                error,
            );
          },
        );
      }
    } catch (error) {
      console.log('Erro ao enviar SMS:', error);
    }
  };

  return (
    <Home
      goToButton={goToButton}
      getLocationAndNotify={getLocationAndNotify}
      handleButtonPress={handleButtonPress}
      sendSMSAfterDelay={sendSMSAfterDelay}
    />
  );
};

export default HomeContainer;
