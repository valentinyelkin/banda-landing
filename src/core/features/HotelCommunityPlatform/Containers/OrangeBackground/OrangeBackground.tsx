import Image from 'next/image';
import classnames from 'classnames';
import styles from './orangeBackground.module.scss';

interface OrangeBackgroundProps {
  classesOrangeBg?: string;
}

const OrangeBackground = ({ classesOrangeBg }: OrangeBackgroundProps) => {
  const stylesBg = classnames(
    styles.bg,
    classesOrangeBg && [styles[classesOrangeBg]],
  );

  return (
    <div className={stylesBg}>
      <Image
        src="/images/projects/Hotel/goal/bg_top.svg"
        alt="bg"
        width="1500"
        height="1500"
      />
    </div>
  );
};

export default OrangeBackground;
