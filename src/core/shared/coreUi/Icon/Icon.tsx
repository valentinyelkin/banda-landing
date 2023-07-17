import Image from 'next/image';
import { FC } from 'react';

type IconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  classname?: string;
};

export const Icon: FC<IconProps> = ({ src, alt, width, height, classname }) => {
  return (
    <Image
      className={classname}
      alt={alt}
      src={src}
      width={width}
      height={height}
    />
  );
};
