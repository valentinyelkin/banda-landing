import React, { useEffect, useState } from 'react';
import styles from '../../error.module.scss';

interface ArticleProps {
  title: string;
  image: string;
  date: string;
  description: string;
  url: string;
}

const Article: React.FunctionComponent<ArticleProps> = ({
  title,
  image,
  date,
  description,
  url,
}) => {
  const [croppedDescription, setCroppedDescription] = useState('');

  const cropText = (): void => {
    let newText: string = description;
    const textArr = description?.split('').filter((word) => word.length > 0);

    if (window.innerWidth > 1680) {
      if (textArr.length > 380) {
        newText = `${textArr.slice(0, 300).join('')}...`;
      }
    } else if (textArr.length > 200) {
      newText = `${textArr.slice(0, 80).join('')}...`;
    }

    setCroppedDescription(newText);
  };

  const formatDate = (notFormattedDate: string): string => {
    const publishDate = new Date(notFormattedDate);

    return `${publishDate.getDate()}.${publishDate.getMonth()}.${publishDate.getFullYear()}`;
  };

  useEffect(() => {
    cropText();
  }, []);

  return (
    <div className={styles.article404}>
      <div className={styles.articleImage404}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.articleInfo404}>
        <h3>{title}</h3>
        <p className={styles.articleDate404}>{formatDate(date)}</p>
        <p className={styles.articleDescription404}>{croppedDescription}</p>
        <a href={url}>Read more</a>
      </div>
    </div>
  );
};

export default Article;
