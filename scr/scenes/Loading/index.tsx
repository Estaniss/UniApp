import React from 'react';
import { LoadingIndicator } from 'scr/components';

import { Wrapper } from './styles';

const Loading = (): JSX.Element => (
  <Wrapper>
    <LoadingIndicator large />
  </Wrapper>
);

export default Loading;
