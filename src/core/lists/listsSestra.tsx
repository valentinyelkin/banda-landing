import Behance from '../features/Sestra/Containers/Footer/FooterSocials/SocialIcons/Behance';
import Dribbble from '../features/Sestra/Containers/Footer/FooterSocials/SocialIcons/Dribbble';
import Facebook from '../features/Sestra/Containers/Footer/FooterSocials/SocialIcons/Facebook';
import LinkedIn from '../features/Sestra/Containers/Footer/FooterSocials/SocialIcons/LinkedIn';
import WhatsApp from '../features/Sestra/Containers/Footer/FooterSocials/SocialIcons/WhatsApp';

export const techStackItems = [
  {
    icon: '/images/projects/Sestra/angular.svg',
    title: 'Angular 10',
  },
  {
    icon: '/images/projects/Sestra/html5.svg',
    title: 'HTML5',
  },
  {
    icon: '/images/projects/Sestra/typescript.svg',
    title: 'Typescript',
  },
  {
    icon: '/images/projects/Sestra/nodejs.svg',
    title: 'Node JS',
  },
  {
    icon: '/images/projects/Sestra/google-maps.svg',
    title: 'Google maps',
  },
  {
    icon: '/images/projects/Sestra/sass.svg',
    title: 'SCSS',
  },
  {
    icon: '/images/projects/Sestra/mongoose.svg',
    title: 'Mongoose',
  },
  {
    icon: '/images/projects/Sestra/mongodb.svg',
    title: 'MongoDB',
  },
  {
    icon: '/images/projects/Sestra/express.svg',
    title: 'Express',
  },
  {
    icon: '/images/projects/Sestra/amazon-s3.svg',
    title: 'AWS (S3)',
  },
];

export const aboutProjectList = [
  `This feature-rich system enables the <span>end-to-end management</span> of the beverage service.`,
  `It uses IoT technology to <span>keep everything under control</span>: from serving size to temperature and pressure in the line.`,
  `A real-time alert system <span>detects and reports various issues</span> in the beverage line, such as too much foam.`,
  `Analytics module provides <span>actionable insights</span> into pour data.`,
];

export const benefitsList = [
  {
    icon: '/images/projects/Sestra/precision-of-servings.svg',
    title: 'Precision of servings',
    desc: 'The perfect serving is determined electronically for any kind of beverage.',
  },
  {
    icon: '/images/projects/Sestra/real-time-tap-management.svg',
    title: 'Real-time tap management',
    desc: 'The possibility of controlling and configuring each tap via the mobile device.',
  },
  {
    icon: '/images/projects/Sestra/elimination-of-theft.svg',
    title: 'Elimination of theft',
    desc: 'Automatically measured pours exclude theft.',
  },
  {
    icon: '/images/projects/Sestra/increased-speed.svg',
    title: 'Increased speed',
    desc: 'Virtually hands-free pouring allows bartenders to concentrate on the client.',
  },
  {
    icon: '/images/projects/Sestra/waste-decrease.svg',
    title: 'Waste decrease',
    desc: 'With control and precision, the amount of beverage waste through foam and overpouring is substantially reduced.',
  },
  {
    icon: '/images/projects/Sestra/controlled-access.svg',
    title: 'Controlled access to the taps',
    desc: 'No physical presence required to monitor access to the taps. It’s possible to schedule mode changes, set up rules, and create custom authorizations in the application.',
  },
  {
    icon: '/images/projects/Sestra/self-service.svg',
    title: 'Self-service option',
    desc: 'With total automation, it is easy to offer various self-service schemes.',
  },
  {
    icon: '/images/projects/Sestra/actionable-insights.svg',
    title: 'Actionable insights',
    desc: 'Detailed data recording and comprehensive analysis help project owners to streamline operations, prevent loss and increase revenue. It also enables data-based inventory and service decisions.',
  },
];

export const solutionsList = [
  {
    title: 'Payment integration',
    desc: 'Integration with payment platforms has been established, enabling a self-service experience for customers.',
  },
  {
    title: 'Precision of servings ',
    desc: 'A Pour Control System has been installed. It automatically dispenses every serving and guarantees precision down to a fraction of an ounce. Such a system excludes overpouring.',
  },

  {
    title: 'Automatic lock and unlock of a beverage service',
    desc: 'A Remote Station Manager allows the user to make automatic schedules to open and close the service.',
  },
  {
    title: 'Data tracking, analysis and reports generation',
    desc: 'We have created an “Actionable Insights” system that gathers and processes data, as well as organizes it in custom reports according to different criteria.',
  },

  {
    title: 'Facet management in real time',
    desc: 'A Remote Station Manager has been created. It allows remote real-time access to and configuration of each tap. The changes made (for example, change of beverage or a pour size) take effect immediately.',
  },
  {
    title: 'Self-service option',
    desc: 'We have created different types of access to self-serve stations for customers, such as:',
    list: [
      'an email with their beverage amount and a link to claim;',
      'a pin code;',
      'RFID implies access through a unique card, wristband, or token for each guest;',
      'a QR-code in the application. ',
    ],
  },
];

export const functionalityList = [
  `<span>Precision Pouring</span> — ensures a precise pour for every type of beverage through digital control.`,
  `<span>Connected Control</span> — provides end-to-end management of all the taps in the system with seamless integration into any cloud.`,
  `<span>Actionable Insights</span> — provides real-time data through Sestra’s portal. This functionality enables custom data comparison and reports creation according to different criteria.`,
  `<span>Self-service option</span> — enables setting up various self-service schemes with automation and digital control.`,
];

export const featuresList = {
  top: [
    `<span>Pour Control system</span> — precisely measures each portion.`,
    `<span>Service modes</span> — there are 3 modes available in the system: open pouring, self-service and maintenance.`,
    `<span>Smart FOB</span> — controls pressure and the amount of air in the beverage system, reducing foam creation.`,
    `<span>Status & Alerts</span> — allows the user to set up text alerts in case of service interruptions/issues.`,
    `<span>Remote locking</span> — enables locking taps from the mobile device.`,
    `<span>Rules engine</span> — the system gives the possibility to configure various rules for taps functioning according to different criteria, like membership, schedule, volume, beverage, or location.`,
  ],
  bottom: [
    `<span>Tailored authorizations</span> — allows the system to serve only customers/guests with a certain type of authorization, for example, RFID, pin number, or email.`,
    `<span>Pour data recording</span> — the system records data on pouring, mode changes, and maintenance.`,
    `<span>Custom data tracking and integrations</span> — enables tracking point-of-sale records, event schedules, weather data, etc. for a better understanding of the context of your beverage system performance.`,
    `<span>Custom data comparison</span> — makes comparisons across beverages, time periods, locations, and more.`,
    `<span>Custom reports</span> — the system can create various types of reports to establish how much was bought, sold, and lost across different time periods and locations.`,
    `<span>Payment integration</span> — enables accepting online payments.`,
  ],
};

export const testimonials = [
  {
    photo: '/images/projects/Sestra/image1.jpg',
    name: 'Darlene T.',
    roleInCompany: 'Director, Product & Solution Marketing',
    text: 'I definitely recommend BandaPixels for IT partnership. It is a team of professionals who are passionate about their work and invested in their customer’s success. All team members did a great job. They were nice to work with, too.',
  },
  {
    photo: '/images/projects/Sestra/image2.jpg',
    name: 'Thomas W.',
    roleInCompany: 'Tech Consultant, CTO',
    text: 'We received exactly what we wished for. The platform meets all our needs and desires. We are extremely happy with our bug-free application and plan on working with BandaPixels in the future.',
  },
  {
    photo: '/images/projects/Sestra/image3.jpg',
    name: 'Diane T.',
    roleInCompany: 'Co Founder',
    text: 'I want to thank each team member for their hard work and devotion. They not only listened to but also heard our needs and fulfilled them in the application. The project was completed in a timely manner with a quality result.',
    flippedPhoto: true,
  },
];

export const resultsList = [
  'It is perfect for hands-free beverage dispensing and portion control.',
  'The solution minimizes waste via foam control and overpour prevention, maintains the optimal beverage temperature, enables a convenient self-serve feature, and provides detailed reports.',
  'Alerts system and predictive inventory analytics prevent any service interruptions.',
];

export const resultsCardList = [
  {
    icon: '/images/projects/Sestra/theatres.svg',
    text: 'Theaters & Cultural Centers',
  },
  {
    icon: '/images/projects/Sestra/bars.svg',
    text: 'Bars & Restaurants',
  },
  {
    icon: '/images/projects/Sestra/stadiums.svg',
    text: 'Stadiums & Arenas',
  },
  {
    icon: '/images/projects/Sestra/hotels.svg',
    text: 'Hotels & Resorts',
  },
  {
    icon: '/images/projects/Sestra/airport.svg',
    text: 'Airport Lounges',
  },

  {
    icon: '/images/projects/Sestra/parks.svg',
    text: 'Theme Parks',
  },

  {
    icon: '/images/projects/Sestra/cruise.svg',
    text: 'Cruise Lines',
  },

  {
    icon: '/images/projects/Sestra/markets.svg',
    text: 'Markets',
  },
];

export const socialsList = [
  {
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/organization-guest/company/bandapixels',
    title: 'LinkedIn',
  },
  {
    icon: <Facebook />,
    link: 'https://www.facebook.com/BandaPixels/',
    title: 'Facebook',
  },
  {
    icon: <WhatsApp />,
    link: 'https://wa.me/380634373616',
    title: 'WhatsApp',
  },
  {
    icon: <Behance />,
    link: 'https://www.behance.net/bandapixels',
    title: 'Behance',
  },
  {
    icon: <Dribbble />,
    link: 'https://dribbble.com/bandapixels',
    title: 'Dribbble',
  },
];
