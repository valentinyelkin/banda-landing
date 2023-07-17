import React, {
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGrid from '../../../../utils/useGrid';
import AnimatedLine from '../../../../shared/AnimatedLine/AnimatedLine';
import {
  GetMorePostsByCategory,
  GetTotalPostsByCategoriesCount,
} from '../../blogPage.actions';
import {
  getPostsByCategory,
  getPostsCountByCategories,
} from '../../blogPage.selectors';
import useRedrawGrid from '../../../../utils/useRedrawGrid';
import { AppState } from '../../../../store/store';
import styles from './posts.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PostsTabs } from '../../PostsTabs/PostsTabs';
import { PostTab } from '../../PostsTabs/PostTab/PostTab';
import useIsMobile from '../../../../utils/useIsMobile';
import {
  AllPosts,
  BlogPostsCategories,
} from '../../../../lists/postsTabsTitles';
import PostsSlider from '../../PostsSlider/PostsSlider';

const parsePostCategoriesToTabs = () => {
  return [
    ...Object.values(AllPosts),
    ...Object.values(BlogPostsCategories),
  ].map((item, index) => {
    return { id: item, title: item, active: index === 0 };
  });
};

const POSTS_NUMBER_TO_SHOW = 6;
const POSTS_NUMBER_TO_LOAD = 8;
const TAB_HEIGHT_ON_TABLET = 60;

const Posts: React.FunctionComponent = () => {
  const [postsCount, setPostsCount] = useState(POSTS_NUMBER_TO_SHOW);
  const [currentTabs, setCurrentTabs] = useState(parsePostCategoriesToTabs());
  const [postsFilter, setPostsFilter] = useState<
    BlogPostsCategories | AllPosts
  >(AllPosts.ALL_POSTS);

  const dispatch = useDispatch();
  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const tabsRef: MutableRefObject<HTMLUListElement | null> = useRef(null);
  const carouselRef = useRef<Carousel>(null);

  const totalPostsCountByCategories = useSelector((state: AppState) =>
    getPostsCountByCategories(state),
  );

  const totalPostsCount = useMemo(() => {
    return Object.values(totalPostsCountByCategories).reduce(
      (prevVal, currentVal) => prevVal + currentVal,
      0,
    );
  }, [totalPostsCountByCategories]);

  const postsByCategory = useSelector((state: AppState) =>
    getPostsByCategory(state),
  );

  const isMobile = useIsMobile();

  const tabClickHandler = (category: BlogPostsCategories | AllPosts) => {
    setCurrentTabs((prevState) => {
      return prevState.map((item) =>
        item.id === category
          ? { ...item, active: true }
          : { ...item, active: false },
      );
    });
    setPostsFilter(category);

    if (carouselRef?.current) carouselRef.current.goToSlide(0);
    if (isMobile) setPostsCount(POSTS_NUMBER_TO_SHOW);

    if (
      category !== AllPosts.ALL_POSTS &&
      postsByCategory[category].length < postsCount &&
      postsByCategory[category].length < totalPostsCountByCategories[category]
    ) {
      dispatch(
        new GetMorePostsByCategory({
          postsNumber: POSTS_NUMBER_TO_LOAD - postsByCategory[category].length,
          category,
        }),
      );
    }
  };

  const changePostsCount = () => {
    setPostsCount((prevCount) =>
      prevCount < totalPostsCount
        ? prevCount + POSTS_NUMBER_TO_SHOW
        : prevCount,
    );
  };

  useEffect(() => {
    dispatch(new GetTotalPostsByCategoriesCount());

    const handlerIsTablet = (): void => {
      const width = window.innerWidth;
      if (
        width < 1025 &&
        width >= 669 &&
        Number(tabsRef?.current?.clientHeight) <= TAB_HEIGHT_ON_TABLET
      ) {
        setPostsCount(POSTS_NUMBER_TO_LOAD);
      } else {
        setPostsCount(POSTS_NUMBER_TO_SHOW);
      }

      if (carouselRef?.current && carouselRef?.current.state.currentSlide !== 0)
        carouselRef.current.goToSlide(0);
    };

    handlerIsTablet();
    window.addEventListener('resize', handlerIsTablet);

    return (): void => {
      window.removeEventListener('resize', handlerIsTablet);
    };
  }, []);

  useGrid(refGridWrapper, 'rgba(23,23,24,0.1)', '#fff', true);
  useRedrawGrid(refGridWrapper, true);

  return (
    <section
      className={styles.blogWrapper}
      ref={refGridWrapper}
      data-header="full-yellow"
    >
      <PostsTabs tabsRef={tabsRef}>
        {currentTabs.map((item) => {
          return (
            <PostTab
              key={item.id}
              id={item.id}
              title={item.title}
              postsCount={
                item.title === AllPosts.ALL_POSTS
                  ? totalPostsCount
                  : totalPostsCountByCategories[item.title]
              }
              active={item.active}
              clickHandler={tabClickHandler}
            />
          );
        })}
      </PostsTabs>
      <PostsSlider
        postsCount={postsCount}
        totalPostsCount={{
          [AllPosts.ALL_POSTS]: totalPostsCount,
          ...totalPostsCountByCategories,
        }}
        carouselRef={carouselRef}
        changePostsCount={changePostsCount}
        postsFilterValue={postsFilter}
        postsNumberToLoad={POSTS_NUMBER_TO_LOAD}
      />

      <AnimatedLine backgroundColor="#333" filledColor="#fff" />
    </section>
  );
};

export default Posts;
