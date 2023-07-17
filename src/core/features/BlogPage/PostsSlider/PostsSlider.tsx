import React, { FC, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { AllPosts, BlogPostsCategories } from '../../../lists/postsTabsTitles';
import { AppState } from '../../../store/store';
import { parseListForColumns } from '../../../utils/parseListForColumns';
import { sortByDate } from '../../../utils/sortPostsByDate';
import useIsMobile from '../../../utils/useIsMobile';
import {
  GetLastPosts,
  GetMorePosts,
  GetMorePostsByCategory,
} from '../blogPage.actions';
import { getAllPosts, getPostsByCategory } from '../blogPage.selectors';
import CustomButtonGroup from '../CustomCarousel/CustomButtonGroup/CustomButtonGroup';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import { PostCard } from '../PostCard/PostCard';
import styles from './posts-slider.module.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

type PostsSliderProps = {
  postsCount: number;
  carouselRef?: React.RefObject<Carousel>;
  postsFilterValue: BlogPostsCategories | AllPosts;
  changePostsCount: () => void;
  totalPostsCount:
    | Record<BlogPostsCategories, number>
    | Record<AllPosts, number>;
  postsNumberToLoad: number;
};

const PostsSlider: FC<PostsSliderProps> = ({
  postsCount,
  carouselRef,
  postsFilterValue,
  changePostsCount,
  totalPostsCount,
  postsNumberToLoad,
}) => {
  const postsData = useSelector((state: AppState) => getAllPosts(state));
  const postsByCategory = useSelector((state: AppState) =>
    getPostsByCategory(state),
  );

  const isMobile = useIsMobile();

  const dispatch = useDispatch();

  const filteredPosts =
    postsFilterValue === AllPosts.ALL_POSTS
      ? postsData
      : postsByCategory[postsFilterValue];

  const loadMorePosts = () => {
    if (postsFilterValue === AllPosts.ALL_POSTS) {
      if (postsData.length >= totalPostsCount[AllPosts.ALL_POSTS]) return;
      dispatch(new GetMorePosts(postsNumberToLoad));
    } else {
      if (filteredPosts.length >= totalPostsCount[postsFilterValue]) return;
      dispatch(
        new GetMorePostsByCategory({
          postsNumber: postsNumberToLoad,
          category: postsFilterValue,
        }),
      );
    }
  };

  const showMorePosts = () => {
    loadMorePosts();

    changePostsCount();
  };

  useEffect(() => {
    dispatch(new GetLastPosts(postsNumberToLoad));
  }, []);

  return (
    <div className={styles.sliderWrapper}>
      {!isMobile && (
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          swipeable
          showDots={false}
          ssr={true}
          containerClass={styles.carouselContainer}
          dotListClass={styles.customDotList}
          arrows={false}
          customButtonGroup={
            <CustomButtonGroup
              loadMorePosts={loadMorePosts}
              nextIsActive={
                postsFilterValue === AllPosts.ALL_POSTS
                  ? postsData.length < totalPostsCount[AllPosts.ALL_POSTS]
                  : filteredPosts.length < totalPostsCount[postsFilterValue]
              }
            />
          }
        >
          {parseListForColumns(sortByDate(filteredPosts), postsCount).map(
            (postsBlock) => (
              <div
                className={styles.blogContainer}
                key={postsBlock.columnItems[0].head}
              >
                {postsBlock.columnItems.map((post) => (
                  <PostCard post={post} key={post.head} />
                ))}
              </div>
            ),
          )}
        </Carousel>
      )}

      {isMobile && (
        <>
          <div className={styles.blogContainer}>
            {sortByDate(filteredPosts).map((post, index) => {
              return (
                index < postsCount && <PostCard post={post} key={post.head} />
              );
            })}
          </div>
          <LoadMoreButton clickHandler={showMorePosts}>
            load more posts
          </LoadMoreButton>
        </>
      )}
    </div>
  );
};

export default PostsSlider;
