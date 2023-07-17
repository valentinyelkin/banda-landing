import React from 'react';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './userFlow.module.scss';

const responsive = {
  mobile: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};

const UserFlow: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  const commentContent = [
    {
      id: 0,
      content:
        '"I participated in the market testing for this product and had a chance to see what it does and how it will work. I think the product is going to be really great and will help me a lot when it comes out as I don\'t expect my case to resolve any time soon."',
      name: 'Rhonda B.',
    },
    {
      id: 1,
      content:
        '"I spoke with the team that is building the product. Finally, someone who gets what this is all about, and has the ability to offer a tool that can really help parents through the process an the distress."',
      name: 'Donna R., LMFT',
    },
    {
      id: 2,
      content:
        '"I shared my concern about data security with the developers. Having a team of world-class cyber security experts build the software from the ground up helped me feel better that my clients’ data will be safe in CaseKeepers."',
      name: 'Thomas R., LCSW',
    },
    {
      id: 3,
      content:
        '"I need to get a restraining order against my ex. Using CaseKeepers I will be able to show my lawyer and the court what he is doing. Just my saying what he is doing is not enough because he denies it."',
      name: 'Justine A.',
    },
  ];

  const commentsBlock = (): Array<JSX.Element> => {
    return commentContent.map((comment) => (
      <div className={styles.userComment} key={comment.id}>
        <div>
          <img
            src="/images/projects/caseKeepers/userflow-quotes.png"
            alt="quote"
            className={styles.userCommentQuotes}
          />
          <p className={styles.userCommentText}>{comment.content}</p>
        </div>
        <p className={styles.userCommentName}>{comment.name}</p>
      </div>
    ));
  };

  return (
    <section className={styles.keepersUserFlow}>
      <div className={styles.keepersUserFlowWrapper}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="span"
        >
          <h2>What Users Say</h2>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.5}
        />
      </div>
      {isMobile ? (
        <Carousel
          responsive={responsive}
          itemClass={styles.userCommentsBlock}
          ssr
          deviceType="mobile"
        >
          {commentsBlock()}
        </Carousel>
      ) : (
        <div className={styles.userCommentsBlock}>{commentsBlock()}</div>
      )}
      {!isMobile && (
        <img
          src="/images/projects/caseKeepers/userflow-decor-right.png"
          alt="CaseKeepers decor"
          className={styles.keepersUserFlowDecor2}
        />
      )}
    </section>
  );
};

export default UserFlow;
