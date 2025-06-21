import React, { FC } from 'react';
import { SharedStateProvider } from './SharedContext';
import UserBottomTab from './UserBotttomTab';

const AnimatedTabs: FC = () => {
  return (
    <SharedStateProvider>
      <UserBottomTab />
    </SharedStateProvider>
  );
};

export default AnimatedTabs;
