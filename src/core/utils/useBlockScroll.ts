import { useEffect } from 'react';

const useBlockScroll = (dependencies: boolean[] = []): void => {
  useEffect(() => {
    const body = document.body as HTMLBodyElement;

    if (dependencies.some((item) => item)) {
      body.style.overflow = 'hidden';
    } else {
      body.style.removeProperty('overflow');
    }
  }, [dependencies]);
};

export default useBlockScroll;
