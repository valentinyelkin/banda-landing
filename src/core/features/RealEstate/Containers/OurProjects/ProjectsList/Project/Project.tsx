import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './project.module.scss';

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

const Project: FC<ProjectProps> = ({ title, description, url, image }) => {
  return (
    <div className={styles.container}>
      <Link href={`${url}`}>
        <a className={styles.link}>
          <p className={styles.title}>{title}</p>
          <span className={styles.description}>{description}</span>
        </a>
      </Link>
      <div className={styles.img}>
        <Link href={url}>
          <a>
            <Image
              layout="responsive"
              src={image}
              alt={title}
              width="733"
              height="380"
              quality={100}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Project;
