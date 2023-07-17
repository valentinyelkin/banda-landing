import { useEffect, RefObject } from 'react';
import { createGrid, addAnimationToGrid } from './grid';

const useGrid = (
  ref: RefObject<HTMLElement | undefined>,
  mainColor: string,
  secondColor: string,
  child?: boolean,
): void => {
  useEffect(() => {
    const wrapper = ref.current;
    const addGradient = (e: MouseEvent): void => {
      addAnimationToGrid(e, mainColor, secondColor, wrapper);
    };

    if (
      wrapper?.querySelectorAll('.gradient-vertical').length === 0 &&
      wrapper?.querySelectorAll('.gradient-horizontal').length === 0 &&
      window.innerWidth > 668
    ) {
      createGrid(wrapper, 75, child);

      if (window.outerWidth >= 1280) {
        document.addEventListener('mousemove', (e) => {
          addAnimationToGrid(e, mainColor, secondColor, wrapper);
        });
      }
    }

    return (): void => {
      document.removeEventListener('mousemove', addGradient);
    };
  });
};

export default useGrid;
