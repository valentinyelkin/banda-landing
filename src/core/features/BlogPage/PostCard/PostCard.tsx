import Link from 'next/link';
import React, { FC, MutableRefObject, useRef } from 'react';
import { BlogPostState } from '../blogPage.state';
import Image from 'next/image';
import styles from './post-card.module.scss';
import useMaxLinesCounter from '../../../utils/useMaxLinesCounter';

type PostCardProps = {
  post: BlogPostState;
};

export const PostCard: FC<PostCardProps> = ({ post }) => {
  const refPostInfoTop: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const descLinesNumber = useMaxLinesCounter(refPostInfoTop, 21, 10);

  const formatDate = (date: string): string => {
    const publishDate = new Date(date);
    const shortDate = new Intl.DateTimeFormat('ua', {
      dateStyle: 'short',
    });
    return shortDate.format(publishDate);
  };

  return (
    <Link
      href={{
        pathname: '/blog/[slug]',
        query: { slug: post.slug },
      }}
    >
      <a className={styles.blogItem}>
        <div className={styles.blogImage}>
          <Image
            src={post.preview_image}
            alt={post.head}
            objectFit="cover"
            width={275}
            height={244}
          />
        </div>
        <div className={styles.postInfo}>
          <div className={styles.postInfoTop} ref={refPostInfoTop}>
            <h2 className={styles.postTitle}>{post.head}</h2>
            <p className={styles.postTime}>{formatDate(post.created_at)}</p>
          </div>
          <div
            className={styles.postAnnotation}
            style={
              descLinesNumber > 0
                ? {
                    WebkitLineClamp: descLinesNumber.toString(),
                  }
                : { display: 'none' }
            }
            title={post.excerpt}
          >
            {post.excerpt}
          </div>
        </div>
      </a>
    </Link>
  );
};
