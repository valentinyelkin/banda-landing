import angular from '../../../public/images/projects/Hotel/techStack/angular.svg';
import aws from '../../../public/images/projects/Hotel/techStack/aws.svg';
import express from '../../../public/images/projects/Hotel/techStack/express.svg';
import figma from '../../../public/images/projects/Hotel/techStack/figma.svg';
import html from '../../../public/images/projects/Hotel/techStack/html.svg';
import maps from '../../../public/images/projects/Hotel/techStack/maps.svg';
import mongo from '../../../public/images/projects/Hotel/techStack/mongo.svg';
import mongoose from '../../../public/images/projects/Hotel/techStack/mongoose.svg';
import node from '../../../public/images/projects/Hotel/techStack/node.svg';
import scss from '../../../public/images/projects/Hotel/techStack/scss.svg';
import ts from '../../../public/images/projects/Hotel/techStack/ts.svg';
import ana from '../../../public/images/projects/Hotel/results/ana.svg';
import sam from '../../../public/images/projects/Hotel/results/sam.svg';
import charles from '../../../public/images/projects/Hotel/results/charles.svg';

export const strings = {
  title: 'Hotel community platform',
  titleGoal: 'Goal',
  descriptionGoal1:
    'The hotel faced a lot of problems with the manual cycle of booking while using regular booking systems.',
  descriptionGoal2: 'The owner of the hotel required a ',
  boldGoal: 'custom-made web service with a database ',
  descriptionGoal3:
    'to keep all info safe and in one place and able to carry out operations in a smooth and effective manner.',
  titleProjectBenefits: 'Project benefits',
  descriptionBenefits1:
    'The web solution helps to be closer to the guests and:',
  descriptionBenefits2:
    'Booking directly, clients always get only relevant room info at no extra cost (commission or any other sort of fees) that allows them to',
  boldBenefits: ' save time and money.',
  titleTimeline: 'Timeline',
  eight: '8',
  months: 'months',
  half: '0.5',
  directionTesting: 'Testing, fixing',
  release: 'Release',
  titleChallenges: 'Challenges and solutions',
  subTitleChallenges: 'faced during project development',
  titleFunctionality: 'Functionality',
  desFunctionality1: 'This digital solution allows the guests to ',
  boldFunctionality1: 'view the hotel and hotel rooms ',
  desFunctionality2:
    'based on the various categories and sorting preferences they select. It also lets the users ',
  boldFunctionality2: 'register to the web service ',
  desFunctionality3:
    'so that their profiles can be saved for later access and modification (if required). New users are given a sign-up option. ',
  desFunctionality4: 'The user account contains ',
  boldFunctionality3: 'personal details ',
  desFunctionality5: 'as well as ',
  boldFunctionality4: 'billing and room preference of the customer. ',
  desFunctionality6:
    'Also, the reservation he/she has made can be viewed in the profile module. It’s possible for the user to cancel the reservation until a cancellation deadline.',
  titleFeatures: 'Features',
  titleTechStack: 'Tech stack',
  titleResults: 'Results',
  desResults:
    'We have created an intuitive, user-friendly interface for an interactive web application following the latest trends in web development. ',
  titleOptionalFeatures: 'Optional features',
  subTitleOptional: 'that can be added to similar project types',
  titleFooter: 'Let’s make your service the best choice for the users',
  contactFooter: 'Contact us',
  marketing: 'info@bandapixels.com',
};

export const mainList = [
  {
    title: 'UAE',
    subTitle: 'headquarter',
    titleClass: '',
    delay: 0.4,
    id: 1,
  },
  {
    title: '10',
    subTitle: 'technologies',
    titleClass: 'titleNum10',
    delay: 0.7,
    id: 2,
  },
  {
    title: '6',
    subTitle: 'professionals',
    titleClass: 'titleNum6and8',
    delay: 1,
    id: 3,
  },
  {
    title: '8',
    subTitle: 'months',
    titleClass: 'titleNum6and8',
    delay: 1.3,
    id: 4,
  },
];

export const projectBenefits = [
  {
    boldDescription1: 'reduce manpower;',
    description1: '',
    id: 1,
  },
  {
    boldDescription1: 'cut expenses;',
    id: 2,
    description1: '',
  },
  {
    boldDescription1: 'simplify the booking process ',
    description1: 'for rooms and holiday packages;',
    id: 3,
  },
  {
    boldDescription1: 'increase traffic and brand recognition globally.',
    description1: '',
    id: 4,
  },
];

export const timelineList = [
  {
    direction: 'Design',
    months: '1.5',
    delay: 0.4,
    containerClasses: 'containerDesign',
    id: 1,
  },
  {
    direction: 'Back-end development',
    months: '6.5',
    delay: 0.8,
    containerClasses: 'containerBack',
    id: 2,
  },
  {
    direction: 'Front-end development',
    months: '2.5',
    delay: 1.2,
    containerClasses: 'containerFront',
    id: 3,
  },
];

export const cardsChallengesFirst = [
  {
    title:
      'The current manual reservation system based on paper forms and direct communication with clients causes delays in exchanging information in the hotel',
    description: 'Automation with pre-programmed logic.',
    id: 1,
    containerClasses: 'containerCurrent',
    delay: 0.3,
  },
  {
    title: 'The web service optimisation and making it SEO-friendly',
    description: 'Server-side rendering. Employing best SEO practices.',
    id: 2,
    containerClasses: 'containerWeb',
    delay: 0.6,
  },
  {
    title: 'Discount system ',
    description: 'Automatic discount system based on the frequency of visits.',
    id: 3,
    containerClasses: 'containerDiscount',
    delay: 0.9,
  },
];

export const cardsChallengesSecond = [
  {
    title: 'Notification',
    description:
      'Notification system that informs people on a waitlist about vacant rooms. Regulated booking functionality that allows 2 hours between a checkout and a subsequent check-in (for cleaning service).',
    id: 1,
    containerClasses: 'containerNotification',
    delay: 1.5,
  },
  {
    title:
      'Prevention of booking of the same room by different people at the same time',
    description:
      'WebSocket, inactive button. If several people are trying to book one room at the same time, it will be allocated to the first person, others will get an inactive button and will not be able to proceed.',
    id: 2,
    containerClasses: 'containerPrevention',
    delay: 1.8,
  },
];

export const cardsChallengesMobile = [
  {
    title:
      'The current manual reservation system based on paper forms and direct communication with clients causes delays in exchanging information in the hotel',
    description: 'Automation with pre-programmed logic.',
    id: 1,
  },
  {
    title: 'Notification',
    description:
      'Notification system that informs people on a waitlist about vacant rooms. Regulated booking functionality that allows 2 hours between a checkout and a subsequent check-in (for cleaning service).',
    id: 2,
  },
  {
    title: 'The web service optimisation and making it SEO-friendly',
    description: 'Server-side rendering. Employing best SEO practices.',
    id: 3,
  },
  {
    title:
      'Prevention of booking of the same room by different people at the same time',
    description:
      'WebSocket, inactive button. If several people are trying to book one room at the same time, it will be allocated to the first person, others will get an inactive button and will not be able to proceed.',
    id: 4,
  },
  {
    title: 'Discount system ',
    description: 'Automatic discount system based on the frequency of visits.',
    id: 5,
  },
];

export const featuresFirst = [
  {
    description: 'Guest role.',
    id: 1,
  },
  {
    description: 'Owner role.',
    id: 2,
  },
  {
    description: 'Google maps.',
    id: 3,
  },
  {
    description: 'Room tour.',
    id: 4,
  },
  {
    description: 'Accounting.',
    id: 5,
  },
  {
    description: 'Payment system.',
    id: 6,
  },
  {
    description: 'Reports.',
    id: 7,
  },
  {
    description: 'Invoices.',
    id: 8,
  },
  {
    description: 'Economic dashboard.',
    id: 9,
  },
];

export const featuresSecond = [
  {
    description: 'E-commerce.',
    id: 1,
  },
  {
    description: 'Accommodation booking.',
    id: 2,
  },
  {
    description: 'Parking booking.',
    id: 3,
  },
  {
    description: 'Additional services.',
    id: 4,
  },
  {
    description: 'Security IOT.',
    id: 5,
  },
  {
    description: 'Utility control systems.',
    id: 6,
  },
  {
    description: 'Reviews integration.',
    id: 7,
  },
  {
    description: 'Referral discount system.',
    id: 8,
  },
];

export const techStackSecondCards = [
  {
    card: scss,
    alt: 'scss',
    delay: 1.4,
  },
  {
    card: mongoose,
    alt: 'mongoose',
    delay: 1.6,
  },
  {
    card: express,
    alt: 'express',
    delay: 1.8,
  },
  {
    card: aws,
    alt: 'aws',
    delay: 2,
  },
  {
    card: figma,
    alt: 'figma',
    delay: 2.2,
  },
];

export const techStackFirstCards = [
  {
    card: angular,
    alt: 'angular',
    delay: 0.2,
  },
  {
    card: html,
    alt: 'html',
    delay: 0.4,
  },
  {
    card: ts,
    alt: 'ts',
    delay: 0.6,
  },
  {
    card: node,
    alt: 'node',
    delay: 0.8,
  },
  {
    card: maps,
    alt: 'google maps',
    delay: 1,
  },
  {
    card: mongo,
    alt: 'mongo',
    delay: 1.2,
  },
];

export const listResults = [
  {
    description: 'the hotel web platform with a ',
    boldDescription2: 'flawless performance facilitates ',
    description1:
      'the work of reception staff, hotel management, employees and guests;',
    id: 1,
  },
  {
    description:
      'the hotel can easily promote staycations, holiday packages and ',
    boldDescription2: 'manage the internal routine ',
    description1: 'of work;',
    id: 2,
  },
  {
    description: 'the system has been considerably simplified for use by ',
    boldDescription2: 'booking agents and reception.',
    description1: '',
    id: 3,
  },
];

export const cardsResults = [
  {
    feedback:
      "The look is simple, but it can do everything. Drag and drop reservations from room to room. Edit pricing in seconds. Need client info for a checkout? It's in front of your eyes in seconds. There's no waiting for anything to load. It's there, processes happen seamlessly.",
    name: 'Ana H.',
    photo: ana,
    position: 'Director of Marketing',
    id: 1,
  },
  {
    feedback:
      'We are very happy with the outcome of the project. The service has all the features we need to make our interaction with clients more efficient. The developers met our need for a user-friendly interface combined with a powerful functionality and speed. It was a pleasure to work with BandaPixels and we hope to continue our cooperation in the future.',
    name: 'Sam M.',
    photo: sam,
    position: 'Chief Operations Officer',
    id: 2,
  },
  {
    feedback:
      'Thank you for quality work and a robust service developed. It was a challenging project and it was well-done in a timely manner. Now we have all the tools to manage our bookings. The team was nice to work with. These guys accommodated all our business needs and were quite flexible with the changes in the course of the project.',
    name: 'Charles G.',
    photo: charles,
    position: 'Chief CSR Officer',
    id: 3,
  },
];

export const optionalFeatures = [
  {
    boldDescription1: 'Analytics — ',
    description:
      'is a web analytics service that tracks and reports the traffic.',
    id: 1,
  },
  {
    boldDescription1: 'Social network — ',
    description: 'allows adding social posts to the web service.',
    id: 2,
  },
  {
    boldDescription1: 'ERP system — ',
    description:
      'ERP handles all of the key functions of the company, such as documents circulation, accounting, services delivery, inventory and HR.',
    id: 3,
  },
  {
    boldDescription1: 'CRM system — ',
    description:
      'A CRM (Customer Relationship Management) system is used to organize, automate and synchronize sales of the company, its marketing and customer service.',
    id: 4,
  },
  {
    boldDescription1: 'Video streaming — ',
    description:
      'a continuous transmission of video files from a server to a client.',
    id: 5,
  },
  {
    boldDescription1: 'Insurance — ',
    description: 'multiple packages to choose from.',
    id: 6,
  },
];
