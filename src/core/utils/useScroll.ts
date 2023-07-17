import { useEffect, useState } from 'react';

export const useScroll = (): boolean => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const delay = async (ms: number): Promise<void> => {
      await new Promise<void>((resolve) => {
        timeoutId = setTimeout(() => {
          resolve();
        }, ms);
      });
    };

    const checkPageYOffset = async (): Promise<void> => {
      await delay(100);
      setIsBottom(
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10,
      );
    };
    window.addEventListener('scroll', checkPageYOffset);

    return () => {
      window.removeEventListener('scroll', checkPageYOffset);
      clearTimeout(timeoutId);
    };
  }, []);

  return isBottom;
};
