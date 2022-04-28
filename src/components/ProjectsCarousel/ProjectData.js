import Athleta from '../../images/athleta.png';
import GitCurriculumSmall from '../../images/GitCurriculumSmall.png';
import GitCurriculum from '../../images/GitCurriculum.png';
import Gliffy from '../../images/GliffyBefore.jpeg';
import Wwcode from '../../images/wwcode.jpeg';


// {
//   iframe: {
//     url: "https://mentorweekly.com/",
//     title: "Mentor Weekly Landing Page"
//   },
//   title: "Mentor Weekly",
//   icons: [
//     "icon-react2",
//     "icon-triangle-up2",
//     "icon-mongodb",
//     "icon-nodejs_small",
//     "icon-auth0",
//     "icon-jest",
//     "icon-mocha-logo"
//   ],
//   text: [
//     "Mentor Weekly is a free platform that connects tech mentors to up-and-coming engineers.",
//     "Mentor Weekly was personally designed and built with React, NodeJS, Next.js, and Express. The project also uses images designed in Adobe Illustrator, emails using SendGrid, authentication with Auth0, and tested with Enzyme, Jest, and Mocha/Chai libraries."
//   ],
//   links: [
//     {
//       url: "https://mentorweekly.com/",
//       text: "demo"
//     },
//     {
//       url: "https://github.com/heyellieday/mentor-weekly",
//       text: "code"
//     }
//   ],
// },
// {
//   iframe: {
//     url: "https://www.colark.com/",
//     title: "Colark Marketing Site"
//   },
//   title: "Colark Marketing Site",
//   icons: [
//     "icon-react2",
//     "icon-gatsby",
//     "icon-apollo-seeklogocom",
//     "icon-GraphQL_Logo",
//     "icon-mocha-logo"
//   ],
//   text: [
//     "Colark builds tools that allow companies to quickly architect and ship their web apps, and grow sustainably thereafter.",
//     "I lead Engineering Team Sprint Planning, and mentor Junior Developers in Agile, Jira, Git, React, HTML, and BEM CSS at Colark.  As a Front End Engineer, I build React components for the Marketing Site with GatsbyJS, GraphQL, Chai and Enzyme."
//   ],
//   links: [
//     {
//       url: "https://www.colark.com/",
//       text: "live site"
//     },
//     {
//       url: "https://github.com/colark/platform",
//       text: "code"
//     }
//   ],
// },
// {
//   iframe: {
//     url: "https://alodahl.github.io/RecipeBuilderApp/",
//     title: "Recipe Builder Site"
//   },
//   title: "Recipe Builder",
//   icons: [
//     "icon-html-5",
//     "icon-css3",
//     "icon-js_badge",
//     "icon-jquery_logo",
//     "icon-github_badge"
//   ],
//   text: [
//     "This recipe search is a personal project that uses the Edamam Recipe API to search for recipes based on ingredients. Add or remove as many ingredients as you like to search for recipes with that combination.",
//     "Recipe Builder was built using HTML, CSS styling, JavaScript, custom modal pop-ups, jQuery and AJAX to retrieve and display API data."
//   ],
//   links: [
//     {
//       url: "https://alodahl.github.io/RecipeBuilderApp/",
//       text: "live site"
//     },
//     {
//       url: "https://github.com/alodahl/RecipeBuilderApp",
//       text: "code"
//     }
//   ],
// },
// {
//   iframe: {
//     url: "https://project-timer-app.herokuapp.com/",
//     title: "Project Timer Landing Page"
//   },
//   title: "Project Timer",
//   icons: [
//     "icon-nodejs_small",
//     "icon-mongodb",
//     "icon-jquery_logo",
//     "icon-mocha-logo",
//     "icon-illustrator",
//     "icon-heroku",
//     "icon-travis"
//   ],
//   text: [
//     "Project Timer is a personal project that allows users to create and save as many customized timers as they need to time their personal projects.",
//     "Project Timer employs HTML, CSS, and JavaScript, with jQuery, NodeJS server files, an online Mongo database, Mocha integration tests, Heroku deployment via Travis, and user authentication with JavaScript Web Tokens."
//   ],
//   links: [
//     {
//       url: "https://project-timer-app.herokuapp.com/",
//       text: "live site"
//     },
//     {
//       url: "https://project-timer-app.herokuapp.com/#tryitout",
//       text: "demo"
//     },
//     {
//       url: "https://github.com/alodahl/project-timer",
//       text: "code"
//     }
//   ],
// }

const projectData = [
  {
    iframe: {
      url: Wwcode,
      title: "women who code sf page"
    },
    title: "Women Who Code SF Director",
    icons: [],
    text: ["Directors mentor local developers, recruit for city leadership roles, and coordinate SF events, study groups, and workshops.",
    ],
    links: [
      {
        url: "https://www.womenwhocode.com/sf/about",
        text: "about wwcode"
      }
    ],
  },
  {
    iframe: {
      url: Athleta,
      title: "Gap.com site"
    },
    title: "Gap Inc. Web Development",
    icons: [
      "icon-typescript",
      "icon-react2",
      "icon-css3",
      "icon-js_badge"
    ],
    text: [
      "Maintain and expand React/Typescript component library employed in all Gap Inc. brand web pages: Gap, Athleta, Banana Republic, Old Navy.",
    ],
    links: [
      {
        url: "https://www.gap.com/",
        text: "gap"
      },
      {
        url: "https://athleta.gap.com/",
        text: "athleta"
      },
      {
        url: "https://bananarepublic.gap.com/",
        text: "banana republic"
      },
      {
        url: "https://oldnavy.gap.com/",
        text: "old navy"
      }
    ],
  },
    {
      iframe: {
        url: "https://www.gliffy.com/sites/gliffy/files/video-thumbnails/2020-07/AWSBuildGif-comp.mp4",
        title: "Gliffy Diagram Editor Online"
      },
      title: "Gliffy Diagram Editor Redesign",
      icons: [
        "icon-sass",
        "icon-css3",
        "icon-js_badge",
        "icon-jquery_logo"
      ],
      text: [
        "Enterprise-grade diagramming software allows any team to visually share ideas. Available via Jira, Confluence, and web app.",
        "Our small team of frontend developers implemented the complete 2018 reskin of the Gliffy Editor with a conversion to Scss and a new SVG icon library."
      ],
      links: [
        {
          url: "https://go.gliffy.com/go/html5/launch",
          text: "try gliffy diagram"
        },
        {
          url: Gliffy,
          text: "view legacy editor"
        },
        {
          url: "https://www.gliffy.com/",
          text: "gliffy.com"
        }
      ],
    },
    {
      iframe: {
        url: "https://diwala.io/",
        title: "Diwala Marketing Site"
      },
      title: "Diwala",
      icons: [
        "icon-react2",
        "icon-photoshop",
        "icon-sass",
        "icon-firebase",
        "icon-typescript"
      ],
      text: [
        "Partnering with the UN Refugee Agency, this platform provides career growth opportunities and digital certification of skills to people in displacement.",
        "Personal open-source work for Diwala has included React/Typescript custom components and images for Diwala.io using Sass, BEM CSS, Redux, Yarn, Google Firebase, Adobe Photoshop, and iMovie technologies."
      ],
      links: [
        {
          url: "https://diwala.io/",
          text: "live site"
        },
        {
          url: "https://github.com/Diwala/diwala-frontpage-firebase",
          text: "code"
        }
      ],
    },
    {
      iframe: {
        url: GitCurriculumSmall,
        url2: GitCurriculum,
        title: "Techtonica Curriculum Screenshot",
        class: "project-link curriculum-image"
      },
      title: "Techtonica Curriculum",
      icons: [
        "icon-github_badge",
        "icon-markdown",
        "icon-js_badge"
      ],
      text: [
        "As Techtonica's Curriculum Developer, I authored and oversaw new curriculum for the Web Developer Training Program. In addition to managing the GitHub open-source repo for lesson markdowns & learning apps, I lead hackathon events and reviewed pull requests."
        ],
      links: [
        {
          url: "https://github.com/Techtonica/curriculum#table-of-contents",
          text: "github repo"
        },
        {
          url: "https://github.com/Techtonica/curriculum/blob/main/react-js/react-part-2-props.md",
          text: "view example lesson"
        },
        {
          url: "https://docs.google.com/presentation/d/1GlkIPUSy5qBKKvKesR5eogoN1p-ltoPmKi3eEBKd1xc/edit?usp=sharing",
          text: "view example slides"
        }
      ],
    }
];

export default projectData;
