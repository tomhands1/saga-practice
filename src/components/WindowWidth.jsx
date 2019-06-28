import React from 'react';
import { useWindowWidth } from '../hooks';

const WindowWidth = () => {

  const windowWidth = useWindowWidth();

  return (
    <div className="window-width">
      Window Width is {windowWidth}
    </div>
  );
};

export default WindowWidth;