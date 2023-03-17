import React, { useState } from 'react';
import { Provider } from 'mobx-react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { colors, radius, spacings, typography } from './theme';
import { StatusBar } from 'react-native';
import { If } from 'react-if';
import { ToastMessage } from './modules';
import { LoadingScene } from './scenes';
import { Navigation } from './navigation';

const theme: DefaultTheme = {
  ...colors,
  ...spacings,
  ...radius,
  ...typography,
};
const App: React.FC = () => {
  const [loading] = useState<boolean>(false);

  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <If condition={loading}>
          <LoadingScene />
        </If>
        <If condition={!loading}>
          <Navigation />
        </If>
        <ToastMessage position="top" />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
