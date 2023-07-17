import Image from 'next/image';
import classnames from 'classnames';
import styles from './blueBackground.module.scss';

interface BlueBackgroundProps {
  classesBlueBg?: string;
}

const BlueBackground = ({ classesBlueBg }: BlueBackgroundProps) => {
  const stylesBg = classnames(
    styles.bgBlue,
    classesBlueBg && [styles[classesBlueBg]],
  );

  return (
    <div className={stylesBg}>
      <Image
        src="/images/projects/Hotel/timeline/bg.svg"
        alt="bg"
        width="1300"
        height="1300"
      />
    </div>
  );
};

export default BlueBackground;
