import React from 'react';
import { LoadingAnimation } from 'scr/assets/animations';
import { Animation } from 'scr/modules';

interface Props {
  large?: boolean;
}

const smallSize = { width: 90, height: 90 };
const largeSize = { width: 140, height: 140 };

const Loading: React.FC<Props> = ({ large = false }) => (
  <Animation
    style={large ? largeSize : smallSize}
    source={LoadingAnimation}
    autoPlay
    loop
  />
);

export default Loading;
