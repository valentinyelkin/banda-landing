import { useEffect, useState } from 'react';

export enum ScreenSize {
  TABLET = 1024,
  MOBILE = 669,
}

const useIsMobile = (screenSize: number = ScreenSize.MOBILE): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  const handlerIsMobile = (): void => {
    setIsMobile(window.innerWidth < screenSize);
  };

  useEffect(() => {
    handlerIsMobile();

    window.addEventListener('resize', handlerIsMobile);

    return (): void => {
      window.removeEventListener('resize', handlerIsMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
