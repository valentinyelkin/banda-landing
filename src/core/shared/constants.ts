const CONSTANTS = {
  schema: process.env.NODE_ENV === 'development' ? 'http://' : 'https://',
  host: process.env.NEXT_PUBLIC_APP_HOSTNAME || 'staging.bandapixels.com',
  backendHost:
    process.env.NEXT_PUBLIC_APP_BACKEND_HOSTNAME ||
    'api-staging.bandapixels.com/api',
  helpers: {
    form: '/contact',
    blog: '/posts',
    post: '/posts/content/',
    realEstate: '/real-estates',
    realEstateContent: '/real-estates/content/',
    latestPosts: '/latestPosts',
    careers: '/hurma/vacancies',
    categories: '/categories',
    image: '/files/image/',
  },
  queries: {
    pageName: '?pageName=',
  },
  projects: [
    {
      title: 'Insidely - Task management',
      description: `
        <p>Insidely is a feature-rich solution for managing internal operations of a hotel and streamlining staff collaboration.</p>
      `,
      footerTitle: 'Results',
      footerDescription:
        'We have created a staff collaboration and task management application with an intuitive user interface and powerful functionality. The system helps hotel teams collaborate in real time and enables quality performance, supervision and comprehensive insights into hotel operations 24/7.',
      url: '/insidely',
      orientation: 'landscape',
      position: 'left',
      image: '/images/projectsMain/insidely.jpg',
      realEstate: true,
    },
    {
      title: 'Hotel community platform',
      description: `
          <p>Hotel web app is an online platform that helps users reserve the hotel room of their choice online from any part of the world. The hotel faced a lot of problems with the manual cycle of booking while using “booking.com”. The owner of the hotel required a custom-made web service with a database to keep all info safe and in one place and able to carry out operations in a smooth and effective manner.</p>
        `,
      footerTitle: 'Results',
      footerDescription: `
           We have created an intuitive, user-friendly interface for an interactive web application following the latest trends in web development. The hotel web platform with a flawless performance facilitates the work of reception staff, hotel management, employees and guests. The hotel can easily promote staycations, holiday packages and manage the internal routine of the work. The system has been considerably simplified for use by booking agents and reception.
        `,
      url: '/hotel',
      orientation: 'landscape',
      position: 'left',
      image: '/images/projectsMain/hotelCommunityPlatform.jpg',
      realEstate: true,
    },
    // ---- Deleted until requested ---
    // {
    //   title: 'Sestra - Cloud-based Beverage Dispensing Platform',
    //   description: `
    //     <p>We have developed an innovative cloud-based beverage dispensing platform suitable for different kinds of venues.</p>
    //   `,
    //   footerTitle: 'Results',
    //   footerDescription: `
    //   We have developed a feature-rich beverage dispensing platform that seamlessly integrates into any cloud. It is perfect for hands-free beverage dispensing and portion control. The solution minimizes waste via foam control and overpour prevention, maintains the optimal beverage temperature, enables a convenient self-serve feature, and provides detailed reports. Alerts system and predictive inventory analytics prevent any service interruptions.
    //   `,
    //   url: '/sestra',
    //   orientation: 'landscape',
    //   position: 'left',
    //   image: '/images/projectsMain/sestra.jpg',
    //   realEstate: true,
    // },
    {
      title: 'SpaceBooking - space utilization management system',
      description: `
        <p>We have developed an application for workspace management through booking workspaces with the company staff. The project implies creation of a service with two roles (admin and the user) that allows employees to reserve a place for meetings or coworking purposes and manage their bookings in real time. There is also an option of booking a custom parking space that takes into account the type and make of the vehicle.</p>
      `,
      footerTitle: 'Results',
      footerDescription: `
         We have developed a two-role application that enables convenient booking of workspaces and managing the process according to the present-day business demands.
      `,
      url: '/spacebooking',
      orientation: 'landscape',
      position: 'right',
      image: '/images/projectsMain/spaceBooking.jpg',
      realEstate: true,
    },
    {
      title: 'Bree - Book Rent Enjoy Earn',
      description: `
        <p>We have developed an application for workspace management through booking workspaces with the company staff. The project implies creation of a service with two roles (admin and the user) that allows employees to reserve a place for meetings or coworking purposes and manage their bookings in real time. There is also an option of booking a custom parking space that takes into account the type and make of the vehicle.</p>
      `,
      footerTitle: 'Results',
      footerDescription: `
         We have developed a two-role application that enables convenient booking of workspaces and managing the process according to the present-day business demands.
      `,
      url: '/bree',
      orientation: 'landscape',
      position: 'left',
      image: '/images/projectsMain/bree.jpg',
      realEstate: true,
    },
    {
      mainTitle: 'Our Projects',
      title: 'Gastehaus - Real Estate Web Service',
      description: `
        <p>Gästehaus is a B2B\\B2C rental platform for simultaneous renting of different types, ranging from tools and transportation to accommodation.</p>
        <p> It is intended to have a set of functionalities and features aimed at facilitating a process of closing a deal: a built-in tracking system, a complex filtering tool, real-time search results, searching through maps, etc.</p>
        <p>In addition, the web solution gives the opportunity to streamline the agent-client interaction with “collaboration rooms” that allow brokers to gather and store information about clients’ needs and demands in one place.</p>
      `,
      footerTitle: 'Results',
      footerDescription: `
         Our team has developed a full-fledged web application with an intuitive user interface and rich functionality. Aimed at  agents, brokers, home sellers and home buyers, the real estate web platform has all the features to address their professional needs.
      `,
      url: '/gastehaus',
      orientation: 'landscape',
      position: 'right',
      image: '/images/projectsMain/gastehaus.jpg',
      realEstate: true,
    },
    {
      title: 'AppNavi - Web App and Browser Extension',
      description: `
        <p>AppNavi was created as a new approach to employee training and increasing work efficiency; thus it gained popularity among the clients. However,  confusing user flows and outdated design became a real obstacle in attracting new clients.</p>
        <p>Our task was to develop such convenient and intuitive UX that no questions on usage would arise. The UI part, on the other hand, was expected to ensure easy comprehension when integrated into absolutely any software.</p>
      `,
      footerTitle: 'Results',
      footerDescription: `
        AppNavi has been given optimized user scenarios, modernized branding and marketing materials and it resulted in the increased the number of clients and conversion rate.
      `,
      video: '/videos/AppNavi_animate.mp4',
      url: '/appnavi',
      orientation: 'landscape',
      position: 'left',
      image: '/images/projectsMain/appnavi.jpg',
    },
    {
      title: 'Arxonas - Holistic Tax Management Solution',
      description: `
        <p>The original intention of the company was to create software for both business and personal needs, loading it with plenty of functions, such as video hosting, document storage, forum, event calendar, personal goals setting. Thus, the software had to operate fast, securely and flawlessly 24/7.</p>
      `,
      footerTitle: 'Results',
      footerDescription: `
      A cohesive solution that allows users to watch seminars on tax management, safely store documents, set and manage personal goals, chat with other users in a forum, view nationwide calendar of related events and many other things.
      `,
      url: '/arxonas',
      orientation: 'landscape',
      position: 'right',
      image: '/images/projectsMain/arxonas.jpg',
    },
    {
      title: 'SunUP - Solar Panel Interactive Web Application',
      description: `
        <p>The client came up with the task to redesign completely the front part of an existing application. The main design challenge was customizing the previous design version and making it transparent for the users, who are barely familiar with solar panel specifics so they can get through the complex functionality of the application.</p>
        <p>On the development side, it was crucial to implement the new design at the earliest possible date /as soon as possible, as the app had been already used by the number of customers waiting for improvements </p>
      `,
      footerTitle: 'Results',
      footerDescription: `
        The user survey clearly showed that the new user experience-oriented design is more convenient and comprehensible, as well as average user’s time for panels layout creation has been decreased by 45%
      `,
      url: '/sunup',
      orientation: 'landscape',
      position: 'left',
      image: '/images/projectsMain/sunup.jpg',
    },
    {
      title: 'CaseKeepers - Service for Lawyers & Their Clients',
      description: `
        <p>"The goal was to create a convenient way for professionals and their clients to communicate within the system.
        Technically, we needed to provide a convenient data structure leveraged by Firebase capabilities in order to allow creating, storing, viewing messages within the application."</p>
        `,
      footerTitle: 'Results',
      footerDescription: `
        Eventually, more and more professionals, like attorneys and therapists, started using the app because of its improved, clear and convenient design for desktop and mobile interfaces.
      `,
      url: '/casekeepers',
      orientation: 'landscape',
      position: 'right',
      image: '/images/projectsMain/casekeepers.jpg',
    },
    {
      title: 'DCR - Business Digitalization Platform ',
      description: `
        <p>Despite the popularity of the platform and high-level demand for its services, the company began to receive complaints regarding service convenience. Due to the inconvenient and difficult UX design, as well as outdated and chaotic UI design, the popularity of the service was declining significantly.</p>
        <p>The goal was to make the platform modern and intuitive without significant changes for the sake of existing customers' convenience.</p>
      `,
      footerTitle: 'Results',
      footerDescription: `
      1 - Modernized interaction on the platform; 2 - Convenient user journey;
      3 - Updated company image; 4 - Increased number of company clients; 5 - Company budget grows
      `,
      video: '/videos/dcr.mp4',
      url: '/dcr',
      orientation: 'landscape',
      position: 'left',
      image: '/images/projectsMain/dcr.jpg',
    },
    {
      title: 'Shed - a Service Where you Can Rent Everything You Need',
      description: `
        <p>Shed was intended as a complex service with 3 user types, the possibility of remote quality control and transparent product verification scenario. The main task for us was to create a service with a quick product search, high-accuracy sorting and data ranking.</p>
        <p>The second task was to minimize the number of steps to the end point. In a nutshell, we needed to put all the functionality into an easy-to-use infrastructure.</p>
      `,
      footerTitle: 'Results',
      footerDescription: `
        We have obtained full-fledged product with a convenient infrastructure. The color scheme and logo provided by the client harmoniously fit into the product design and were approved as the brand colors of the company.
      `,
      video: '/videos/shed.mp4',
      url: '/shed',
      orientation: 'landscape',
      position: 'right',
      image: '/images/projectsMain/shed.jpg',
    },
  ],
};

export default CONSTANTS;
