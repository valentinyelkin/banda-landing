import { RefObject, useCallback, useEffect } from 'react';

const useOutsideClick = (
  ref: RefObject<HTMLElement> | undefined,
  callback: () => void,
): void => {
  const handleClick = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any): void => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    },
    [callback, ref],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return (): void => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
};

export default useOutsideClick;
