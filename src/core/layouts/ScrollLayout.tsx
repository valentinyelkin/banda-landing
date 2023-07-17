import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/store';
import { getElements } from '../utils/AnimationOnScroll/animationOnScroll.selectors';
import { RemoveElements } from '../utils/AnimationOnScroll/animationOnScroll.actions';
import LeadMagnet from '../shared/LeadMagnet/LeadMagnet';

const ScrollLayout: React.FunctionComponent = ({ children }) => {
  const animatedElements = useSelector((state: AppState) => getElements(state));
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = (): void => {
      animatedElements.forEach(({ y, ref, styles }) => {
        if (y <= window.innerHeight + window.scrollY) {
          ref.setAttribute('style', styles);
        }
      });
    };

    const intersection = (): void => {
      animatedElements.forEach(({ ref, styles, parentRef }) => {
        const options = {
          root: null,
          rootMargin: '10% 100%',
          threshold: parentRef ? 0.5 : 0.1,
        };

        const handleIntersect = (entries, observer): void => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const elem = entry.target;

              if (entry.intersectionRatio > 0.1) {
                (parentRef ? ref : elem).setAttribute('style', styles);
                observer.disconnect();
              }
            }
          });
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(parentRef ?? ref);
      });
    };

    if ('IntersectionObserver' in window) {
      intersection();
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animatedElements]);

  useEffect(() => {
    return (): void => {
      dispatch(new RemoveElements());
    };
  }, [dispatch]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {children}
      <LeadMagnet />
    </div>
  );
};

export default ScrollLayout;
