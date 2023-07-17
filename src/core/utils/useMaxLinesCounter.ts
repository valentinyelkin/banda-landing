import { MutableRefObject, useEffect, useState } from 'react';

const useMaxLinesCounter = (
  topBlockRef: MutableRefObject<HTMLDivElement | null>,
  lineHeight: number,
  margin: number,
): number => {
  const [linesNumber, setLinesNumber] = useState(1);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      if (event[0].target.parentElement?.clientHeight) {
        setLinesNumber(
          Math.floor(
            (event[0].target.parentElement.clientHeight -
              event[0].contentBoxSize[0].blockSize -
              margin) /
              lineHeight,
          ),
        );
      }
    });

    if (topBlockRef.current !== null) {
      resizeObserver.observe(topBlockRef.current);
    }
  }, [topBlockRef]);

  return linesNumber;
};

export default useMaxLinesCounter;
