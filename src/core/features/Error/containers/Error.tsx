import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from './components/Article/Article';
import styles from './error.module.scss';
import { AppState } from '../../../store/store';
import { getLatestArticles } from '../error.selectors';
import * as acts from '../error.actions';

const Error: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const articles = useSelector((state: AppState) => getLatestArticles(state));

  useEffect(() => {
    dispatch(new acts.GetLatestArticles(2));
  }, []);

  return (
    <section className={styles.wrapper404} ref={refGridWrapper}>
      <div className={styles.animation404}>
        <div className={styles.error404}>
          <p>Error!</p>
          <p>Page not found</p>
        </div>
        <img src="/images/404.gif" alt="animation 404" />
        <img
          src="/images/404-grid.png"
          alt="error grid"
          className={styles.errorGrid}
        />
      </div>
      {articles?.length ? (
        <div className={styles.blogWrapper404}>
          {articles.map(
            ({
              preview_image: previewImage,
              head,
              created_at: createAt,
              excerpt,
              url,
            }) => (
              <Article
                title={head}
                image={previewImage}
                date={createAt}
                description={excerpt}
                url={url}
                key={head}
              />
            ),
          )}
        </div>
      ) : null}
    </section>
  );
};

export default Error;
