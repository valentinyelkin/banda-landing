import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import request from '../../src/core/api/request';
import StoreLayout from '../../src/core/layouts/StoreLayout';
import api from '../../src/core/shared/constants';
import ContactsBlock from '../../src/core/shared/ContactsBlock/ContactsBlock';
import useIsMobile from '../../src/core/utils/useIsMobile';
import styles from './blog.module.scss';

declare interface Post {
  id: number;
  created_at: string; // '2022-04-08T09:04:38.000Z',
  updated_at: string; // '2022-04-08T09:12:18.000Z',
  head: string;
  views: number;
  public: boolean;
  subtitle: string;
  excerpt: string;
  minutes_to_read: number;
  body: string;
  publishedAt: string; // '2022-04-08T12:11:14.000Z'
  published: boolean;
  slug: string;
  tags: []; // ???
  imageId: number;
  previewImageId: number;
  tagsIds: []; // ???
  url: string;
  images: {
    previewImage: string;
    image: string;
  };
}

declare interface BlogItemApiResponseBody {
  API_URL: string;
  CLIENT_URL: string;
  slug: string;
  post: Post;
  previousPost?: Post;
  nextPost?: Post;
}

const BlogItem: NextPage<BlogItemApiResponseBody> = ({
  post,
  slug,
  CLIENT_URL,
  previousPost,
  nextPost,
}) => {
  const isMobile = useIsMobile();

  return (
    <StoreLayout>
      <Head>
        <title>{post.head}</title>
        {post?.tags && (
          <meta
            name="keywords"
            content={post?.tags?.map(({ name }) => name).join(', ')}
          />
        )}
        {post?.subtitle && <meta name="description" content={post?.subtitle} />}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.head} />
        <meta property="og:image" content={post.images.previewImage} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={post.url} />
      </Head>
      {post && (
        <main className={styles['main-section']}>
          <section className={styles['blog-main']}>
            <img
              src={isMobile ? post.images.previewImage : post.images.image}
              alt="blog page"
              className={styles['blog-main_img']}
            />
            <div className={styles['blog-main_info']}>
              <h1>{post.head}</h1>
              <h3>{post.subtitle}</h3>
              <h4>{post.excerpt}</h4>
              <p className={styles['blog-timeToRead']}>
                read in {post.minutes_to_read} mins
              </p>
            </div>
          </section>
          <section
            className={`${styles['blog-content']} ${styles['ql-editor']}`}
            dangerouslySetInnerHTML={{ __html: post.body }}
          ></section>
          <section className={styles['blog-footer']}>
            <div className={styles['blog-socials']}>
              <p>Share</p>
              <div className={styles['blog-social-list']}>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${CLIENT_URL}/blog/${slug}`}
                  className={styles['icon-wrapper']}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 0H3C1.3455 0 0 1.3455 0 3V21C0 22.6545 1.3455 24 3 24H12V15.75H9V12H12V9C12 6.5145 14.0145 4.5 16.5 4.5H19.5V8.25H18C17.172 8.25 16.5 8.172 16.5 9V12H20.25L18.75 15.75H16.5V24H21C22.6545 24 24 22.6545 24 21V3C24 1.3455 22.6545 0 21 0Z"
                      fill="#171718"
                    />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${CLIENT_URL}/blog/${slug}`}
                  className={styles['icon-wrapper']}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M5.367 7.50049H0V24.0005H5.367V7.50049Z"
                        fill="#171718"
                      />
                      <path
                        d="M19.986 7.69399C19.929 7.67599 19.875 7.65649 19.815 7.63999C19.743 7.62349 19.671 7.60999 19.5975 7.59799C19.3125 7.54099 19.0005 7.50049 18.6345 7.50049C15.5055 7.50049 13.521 9.77599 12.867 10.655V7.50049H7.5V24.0005H12.867V15.0005C12.867 15.0005 16.923 9.35149 18.6345 13.5005C18.6345 17.204 18.6345 24.0005 18.6345 24.0005H24V12.866C24 10.373 22.2915 8.29549 19.986 7.69399Z"
                        fill="#171718"
                      />
                      <path
                        d="M2.625 5.25C4.07475 5.25 5.25 4.07475 5.25 2.625C5.25 1.17525 4.07475 0 2.625 0C1.17525 0 0 1.17525 0 2.625C0 4.07475 1.17525 5.25 2.625 5.25Z"
                        fill="#171718"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
            <div className={styles['blog-arrows-wrapper']}>
              {previousPost && (
                <a href={previousPost.url}>
                  <div className={styles['blog-preview']}>
                    <img
                      className={styles['blog-preview-img']}
                      src={previousPost.images.previewImage}
                      alt="preview"
                    />
                    <div className={styles['blog-preview-content']}>
                      <h2 className={styles['blog-preview-title']}>
                        {previousPost.head}
                      </h2>
                      <p className={styles['blog-preview-description']}>
                        {previousPost.excerpt}
                      </p>
                      <span className={styles['blog-preview-link']}>
                        Read more
                      </span>
                    </div>
                  </div>
                </a>
              )}
              {nextPost && (
                <a href={nextPost.url}>
                  <div className={styles['blog-preview']}>
                    <img
                      className={styles['blog-preview-img']}
                      src={nextPost.images.previewImage}
                      alt="preview"
                    />
                    <div className={styles['blog-preview-content']}>
                      <h2 className={styles['blog-preview-title']}>
                        {nextPost.head}
                      </h2>
                      <span className={styles['blog-preview-description']}>
                        {nextPost.excerpt}
                      </span>
                      <span className={styles['blog-preview-link']}>
                        Read more
                      </span>
                    </div>
                  </div>
                </a>
              )}
            </div>
          </section>
        </main>
      )}
      <ContactsBlock />
    </StoreLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await request.get(
      `${api.schema}${api.backendHost}${api.helpers.post}${context.params?.id}`,
    );

    return { props: res.data };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default BlogItem;
