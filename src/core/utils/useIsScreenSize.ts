import { useEffect, useState } from 'react';

const useIsScreenSize = (
  screenSizeMin = 0,
  screenSizeMax = Infinity,
): boolean => {
  const [isScreenSize, setIsScreenSize] = useState(false);
  const handlerIsScreenSize = (): void => {
    const width = window.innerWidth;

    setIsScreenSize(width < screenSizeMax && width >= screenSizeMin);
  };

  useEffect(() => {
    handlerIsScreenSize();

    window.addEventListener('resize', handlerIsScreenSize);

    return (): void => {
      window.removeEventListener('resize', handlerIsScreenSize);
    };
  }, []);

  return isScreenSize;
};

export default useIsScreenSize;
