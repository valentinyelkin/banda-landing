import React, { FC } from 'react';
import Image from 'next/image';

const Stack: FC<{
  classNameStack?: any;
  image: string;
  text?: string;
  alt?: string;
  color?: string;
  background?: string;
}> = ({ image, text, alt, classNameStack }): JSX.Element => {
  return (
    <div className={classNameStack}>
      <Image src={image} alt={alt} width="104px" height="120px" />
      <p>{text}</p>
    </div>
  );
};

export default Stack;
