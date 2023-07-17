import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './technical.module.scss';

const Technical: React.FunctionComponent = () => {
  return (
    <section className={styles.keepersTechnical}>
      <div className={styles.keepersTechnicalWrapper}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="span"
        >
          <h2>Technical Expertise</h2>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.5}
          as="span"
        >
          <p>
            React, Next.js, Redux, Websocket, SocketIO, Express, Node.js,
            Typescript, PostgreSQL, Eslint
          </p>
        </AnimationOnScroll>
        <div className={styles.technicalSkills}>
          <img
            src="/images/projects/caseKeepers/skills-react.svg"
            alt="Technical skill react"
          />
          <img
            src="/images/projects/caseKeepers/skills-next.svg"
            alt="Technical skill next"
          />
          <img
            src="/images/projects/caseKeepers/skills-redux.svg"
            alt="Technical skill redux"
          />
          <img
            src="/images/projects/caseKeepers/skills-websockets.svg"
            alt="Technical skill websockets"
          />
          <img
            src="/images/projects/caseKeepers/skills-socketio.svg"
            alt="Technical skill socketio"
          />
          <img
            src="/images/projects/caseKeepers/skills-postgresql.svg"
            alt="Technical skill postgresql"
          />
          <img
            src="/images/projects/caseKeepers/skills-eslint.svg"
            alt="Technical skill eslint"
          />
          <img
            src="/images/projects/caseKeepers/skills-nodejs.svg"
            alt="Technical skill nodejs"
          />
          <img
            src="/images/projects/caseKeepers/skills-express.svg"
            alt="Technical skill express"
          />
          <img
            src="/images/projects/caseKeepers/skills-typescript.png"
            alt="Technical skill typescript"
          />
        </div>
      </div>
    </section>
  );
};

export default Technical;
