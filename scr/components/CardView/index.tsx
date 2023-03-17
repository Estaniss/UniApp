import React, { FC } from 'react';
import { Wrapper } from './styles';
type Props = {
  children: any;
};
const CardView: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CardView;
