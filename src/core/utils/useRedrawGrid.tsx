import { useEffect, RefObject, useState } from 'react';
import { createGrid, removeGrid } from './grid';

const useRedrawGrid = (
  ref: RefObject<HTMLElement | undefined>,
  child?: boolean,
): void => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const wrapper = ref.current;

    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);

    const updateGridOnResize = (): void => {
      if (wrapper) {
        removeGrid(wrapper);
        createGrid(wrapper, 75, child);
      }
    };

    window.addEventListener('resize', updateGridOnResize);

    return (): void => {
      window.removeEventListener('resize', updateGridOnResize);
    };
  }, [windowHeight, windowWidth]);
};

export default useRedrawGrid;
