import { MessageType } from 'react-native-flash-message';
import { DisplayToast } from 'scr/modules';

export default (
  message: string,
  type: MessageType = 'info',
  description = '',
  duration = 3000,
): void =>
  DisplayToast({
    message,
    description,
    type,
    icon: type,
    duration,
  });
