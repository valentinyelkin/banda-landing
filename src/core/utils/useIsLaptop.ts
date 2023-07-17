import { useState, useEffect } from 'react';

const useIsLaptop = (): boolean => {
  const [isLaptop, setIsLaptop] = useState(false);
  const handlerIsLaptop = (): void => {
    const width = window.innerWidth;
    setIsLaptop(width <= 1920 && width >= 1025);
  };

  useEffect(() => {
    handlerIsLaptop();

    window.addEventListener('resize', handlerIsLaptop);

    return (): void => {
      window.removeEventListener('resize', handlerIsLaptop);
    };
  }, []);

  return isLaptop;
};

export default useIsLaptop;
